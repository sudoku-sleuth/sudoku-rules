import { capture, fail, location, type Result, type Source, type Span } from "./diagnostics.js";
import type { Binder, Declaration, Expr, Parameter, Type } from "./ast.js";

const tokenLabel = (text: string) => text === "<eof>" ? "the end of the formula" : `“${text}”`;
interface Token { text: string; span: Span }
const aliases: Record<string, string> = { "∀": "forall", "∃": "exists", "∧": "and", "∨": "or", "¬": "not", "→": "implies", "↔": "iff", "∈": "in", "∉": "notin", "⊆": "subset", "∩": "intersect", "∪": "union", "−": "-", "×": "*", "≤": "<=", "≥": ">=", "≠": "!=", "Σ": "sum", "Π": "product", "∅": "empty", "λ": "lambda" };
function lex(source: Source): Token[] {
  if (source.text.length > 100_000) fail("E_LANGUAGE_LIMIT", location(source, 0, 0), "This formula is too long; split it into blocks of at most 100,000 characters (some symbols count twice).");
  const tokens: Token[] = [];
  let i = 0;
  while (i < source.text.length) {
    const rest = source.text.slice(i);
    const whitespace = /^\s+/.exec(rest);
    if (whitespace) { i += whitespace[0].length; continue; }
    const comment = /^#[^\n]*/.exec(rest);
    if (comment) { i += comment[0].length; continue; }
    const match = /^(?:"(?:[^"\\\r\n]|\\["\\/bfnrt]|\\u[0-9a-fA-F]{4})*"|\d+(?:\.\d+)?|->|<=|>=|!=|[∀∃∧∨¬→↔∈∉⊆∩∪−×≤≥≠ΣΠ∅λ⌊⌋·⟨⟩]|[\p{L}𝔄ℤ][\p{L}\p{N}_]*|[()\[\]{},:;|+*/^=<>._-])/u.exec(rest);
    if (!match) fail("E_FORMULA_SYNTAX", location(source, i, i + [...rest][0].length), `The symbol ${[...rest][0]} is not supported in formulas.`);
    const raw = match[0];
    tokens.push({ text: Object.hasOwn(aliases, raw) ? aliases[raw] : raw, span: location(source, i, i + raw.length) });
    i += raw.length;
  }
  tokens.push({ text: "<eof>", span: location(source, i, i) });
  return tokens;
}
const powers: Record<string, number> = { iff: 1, implies: 2, or: 3, and: 4, "=": 5, "!=": 5, "<": 5, "<=": 5, ">": 5, ">=": 5, in: 5, notin: 5, subset: 5, union: 6, intersect: 6, "+": 7, "-": 7, "*": 8, "/": 8, mod: 8, "^": 9 };
const merge = (a: Span, b: Span): Span => ({ file: a.file, start: a.start, end: b.end });
export class Parser {
  private tokens: Token[];
  private at = 0;
  private depth = 0;
  private typeDepth = 0;
  constructor(source: Source) { this.tokens = lex(source); }
  peek(): Token { return this.tokens[this.at]; }
  take(): Token { const token = this.peek(); if (token.text !== "<eof>") this.at++; return token; }
  accept(text: string): boolean { if (this.peek().text !== text) return false; this.take(); return true; }
  expect(text: string): Token {
    const token = this.take();
    if (token.text !== text) fail("E_FORMULA_SYNTAX", token.span, `Expected ${tokenLabel(text)} here; found ${tokenLabel(token.text)}.`);
    return token;
  }
  identifier(): Token {
    const token = this.take();
    if (!/^[\p{L}𝔄ℤ][\p{L}\p{N}_]*$/u.test(token.text) || ["true", "false", "empty", "not", "if", "then", "else", "let", "where", "forall", "exists", "lambda", "and", "or", "implies", "iff", "mod", "union", "intersect", "notin", "subset"].includes(token.text)) fail("E_FORMULA_SYNTAX", token.span, `${tokenLabel(token.text)} cannot be used as a name; choose a name starting with a letter that is not a formula keyword.`);
    return token;
  }
  type(): Type {
    if (++this.typeDepth > 128) fail("E_LANGUAGE_LIMIT", this.peek().span, "This type nests more than 128 levels; use simpler named types.");
    const value = this.typeBody();
    this.typeDepth--;
    return value;
  }
  private typeBody(): Type {
    const name = this.identifier().text;
    if (name === "enum") {
      this.expect("{"); const members: string[] = [];
      do { members.push(this.peek().text.startsWith('"') ? JSON.parse(this.take().text) : this.identifier().text); } while (this.accept(",")); this.expect("}"); return { name, members };
    }
    if (name === "record") {
      this.expect("{"); const fields: Record<string, Type> = Object.create(null);
      do { const key = this.identifier(); if (Object.hasOwn(fields, key.text)) fail("E_NAME_SHADOW", key.span, `The field ${key.text} appears twice; give each field a distinct name.`); this.expect(":"); fields[key.text] = this.type(); } while (this.accept(","));
      this.expect("}"); return { name, fields };
    }
    if (name === "fn") {
      this.expect("("); const args: Type[] = [];
      if (!this.accept(")")) { do { args.push(this.type()); } while (this.accept(",")); this.expect(")"); }
      this.expect("->"); return { name, args, result: this.type() };
    }
    if (!this.accept("<")) return { name };
    const args: Type[] = [];
    do { args.push(this.type()); } while (this.accept(","));
    this.expect(">"); return { name, args };
  }
  expression(min = 0): Expr {
    if (++this.depth > 128) fail("E_LANGUAGE_LIMIT", this.peek().span, "This formula nests more than 128 levels; split it into named shared terms.");
    let left = this.prefix();
    let previousComparison: Expr | undefined;
    while (true) {
      const token = this.peek();
      if (token.text === "(" && min <= 11) {
        this.take(); const args: Expr[] = [];
        if (!this.accept(")")) { do { args.push(this.expression()); } while (this.accept(",")); this.expect(")"); }
        left = { kind: "call", span: merge(left.span, this.tokens[this.at - 1].span), children: [left, ...args] }; continue;
      }
      if (token.text === "[" && min <= 11) {
        this.take(); const index = this.expression(); const end = this.expect("]");
        left = { kind: "index", span: merge(left.span, end.span), children: [left, index] }; continue;
      }
      if (token.text === "." && min <= 11) {
        this.take(); const member = this.identifier();
        left = { kind: "member", span: merge(left.span, member.span), value: member.text, children: [left] }; continue;
      }
      const power = Object.hasOwn(powers, token.text) ? powers[token.text] : undefined;
      if (power === undefined || power < min) break;
      this.take(); const right = this.expression(power + (["^", "implies"].includes(token.text) ? 0 : 1));
      const node: Expr = { kind: "binary", span: merge(left.span, right.span), value: token.text, children: [left, right] };
      // A < B < C means (A < B) and (B < C), never Boolean < C.
      if (power === 5 && previousComparison) {
        node.children[0] = previousComparison.children[1];
        left = { kind: "binary", value: "and", span: node.span, children: [left, node] };
      } else left = node;
      previousComparison = power === 5 ? node : undefined;
    }
    if (min === 0 && this.accept("where")) {
      const bindings: { binder: Binder; value: Expr }[] = [];
      do {
        const name = this.identifier(); const type = this.accept(":") ? this.type() : undefined;
        this.expect("="); bindings.push({ binder: { name: name.text, span: name.span, type }, value: this.expression(1) });
      } while (this.accept(","));
      const span = merge(left.span, bindings[bindings.length - 1].value.span);
      for (const binding of bindings.reverse()) left = { kind: "let", span, binders: [binding.binder], children: [binding.value, left] };
    }
    this.depth--;
    return left;
  }
  private prefix(): Expr {
    const token = this.take(); const leaf = (kind: Expr["kind"], value?: string): Expr => ({ kind, value, span: token.span, children: [] });
    if (/^\d/.test(token.text)) return leaf("number", token.text);
    if (token.text.startsWith('"')) return leaf("literal", JSON.parse(token.text));
    if (["true", "false"].includes(token.text)) return leaf("boolean", token.text);
    if (["not", "-", "+"].includes(token.text)) {
      const child = this.expression(token.text === "not" ? 5 : 9);
      return { kind: "unary", value: token.text, span: merge(token.span, child.span), children: [child] };
    }
    if (token.text === "|" || token.text === "⌊") {
      const child = this.expression(); const end = this.expect(token.text === "|" ? "|" : "⌋");
      return { kind: "unary", value: token.text === "|" ? "magnitude" : "floor", span: merge(token.span, end.span), children: [child] };
    }
    if (token.text === "(") { const child = this.expression(); this.expect(")"); return child; }
    if (token.text === "[") {
      const lower = this.expression(); this.expect(","); const upper = this.expression(); const end = this.take();
      if (!["}", "]", ")"].includes(end.text) || end.text === "}") fail("E_FORMULA_SYNTAX", end.span, "Close this range with ] to include its last position, or ) to exclude it.");
      return { kind: "interval", inclusive: end.text === "]", span: merge(token.span, end.span), children: [lower, upper] };
    }
    if (token.text === "empty") return { ...leaf("set"), children: [] };
    if (token.text === "⟨") {
      const body = this.expression(); this.expect(":"); const name = this.identifier(); this.expect("in");
      const domain = this.expression(); const filter = this.accept(",") ? this.expression() : undefined; const end = this.expect("⟩");
      return {kind: "image", value: "list", span: merge(token.span,end.span), binders:[{name:name.text,span:name.span}], hasDomain:true, children:filter ? [domain,body,filter] : [domain,body]};
    }
    if (token.text === "{") {
      if (this.accept("}")) return leaf("set");
      if (this.peek().text !== "<eof>" && this.tokens[this.at + 1]?.text === "in") {
        const name = this.identifier(); this.expect("in"); const domain = this.expression(6); this.expect(":");
        const predicate = this.expression(); const end = this.expect("}");
        return { kind: "comprehension", span: merge(token.span, end.span), binders: [{ name: name.text, span: name.span }], children: [domain, predicate] };
      }
      const first = this.expression();
      if (this.accept(":")) {
        const name = this.identifier(); this.expect("in"); const domain = this.expression(); const end = this.expect("}");
        return {kind:"image",value:"set",span:merge(token.span,end.span),binders:[{name:name.text,span:name.span}],hasDomain:true,children:[domain,first]};
      }
      const members = [first]; while (this.accept(",")) members.push(this.expression());
      const end = this.expect("}"); return { kind: "set", span: merge(token.span, end.span), children: members };
    }
    const aggregateStart = ["sum", "product", "count"].includes(token.text) && (this.peek().text === "_" || ["in", ":", ","].includes(this.tokens[this.at + 1]?.text));
    if (["forall", "exists", "lambda"].includes(token.text) || aggregateStart) {
      const aggregate = ["sum", "product", "count"].includes(token.text);
      const braces = aggregate && this.accept("_"); if (braces) this.expect("{");
      const binders: Binder[] = [];
      do {
        const name = this.identifier(); const annotation = this.accept(":") ? this.type() : undefined;
        binders.push({ name: name.text, span: name.span, type: annotation });
      } while (this.accept(","));
      const domain = this.accept("in") ? this.expression(6) : undefined;
      if (braces) this.expect("}"); else this.expect(":");
      const body = this.expression(aggregate && token.text !== "count" ? 6 : 0);
      return { kind: aggregate ? "aggregate" : token.text === "lambda" ? "lambda" : "quantifier", value: token.text,
        span: merge(token.span, body.span), binders, hasDomain: !!domain, children: domain ? [domain, body] : [body] };
    }
    if (token.text === "if") {
      const condition = this.expression(); this.expect("then"); const yes = this.expression(); this.expect("else"); const no = this.expression();
      return { kind: "conditional", span: merge(token.span, no.span), children: [condition, yes, no] };
    }
    if (token.text === "let") {
      const name = this.identifier(); const annotation = this.accept(":") ? this.type() : undefined;
      this.expect("="); const value = this.expression(); this.expect(";"); const body = this.expression();
      return { kind: "let", span: merge(token.span, body.span), binders: [{ name: name.text, span: name.span, type: annotation }], children: [value, body] };
    }
    if (/^[\p{L}𝔄ℤ][\p{L}\p{N}_]*$/u.test(token.text) || token.text === "·") return leaf("name", token.text);
    fail("E_FORMULA_SYNTAX", token.span, `Expected a value or condition here; found ${tokenLabel(token.text)}.`);
  }
  end() { this.expect("<eof>"); }
  declarations(): Declaration[] {
    const declarations: Declaration[] = [];
    while (this.peek().text !== "<eof>") {
      let token = this.take();
      let play = false;
      if (token.text === "play" && ["input", "primitive", "term", "type"].includes(this.peek().text)) {
        if (this.peek().text === "type") fail("E_FORMULA_SYNTAX", this.peek().span, "A type does not belong to a domain; remove play before type.");
        play = true; token = this.take();
      }
      if (!["input", "primitive", "term", "type"].includes(token.text)) fail("E_FORMULA_SYNTAX", token.span, `Start a shared definition with input, primitive, type, term or play; found ${tokenLabel(token.text)}.`);
      const name = this.identifier(); const generics: string[] = [];
      if (["input", "type"].includes(token.text) && this.peek().text === "<") fail("E_FORMULA_SYNTAX", this.peek().span, "Only term and primitive definitions can use <...> type placeholders; remove them from this input or type declaration.");
      if (this.accept("<")) { do { generics.push(this.identifier().text); } while (this.accept(",")); this.expect(">"); }
      const parameters: Parameter[] = [];
      if (!["input", "type"].includes(token.text)) {
        this.expect("(");
        if (!this.accept(")")) {
          do { const parameter = this.identifier(); this.expect(":"); parameters.push({ name: parameter.text, type: this.type(), span: parameter.span }); } while (this.accept(","));
          this.expect(")");
        }
      }
      this.expect(token.text === "type" ? "=" : ":"); const result = this.type();
      let requires: Expr | undefined;
      if (this.accept("requires")) { this.expect("("); requires = this.expression(); this.expect(")"); }
      const body = token.text === "term" ? (this.expect("="), this.expression()) : undefined;
      this.expect(";");
      declarations.push({ kind: token.text as Declaration["kind"], name: name.text, span: name.span, generics, parameters, result, body, requires, ...(play ? { play } : {}) });
    }
    return declarations;
  }
}
export function parseFormula(text: string, options: Omit<Source, "text"> = { file: "<formula>" }): Result<Expr> {
  return capture(() => { const parser = new Parser({ text, ...options }); const value = parser.expression(); parser.end(); treeLimit(value); return value; });
}
export function parsePrelude(text: string, options: Omit<Source, "text"> = { file: "<prelude>" }): Result<Declaration[]> {
  return capture(() => { const values = new Parser({ text, ...options }).declarations(); for (const value of values) { if (value.body) treeLimit(value.body); if (value.requires) treeLimit(value.requires); } return values; });
}
function treeLimit(root: Expr) {
  const queue = [{ node: root, depth: 1 }]; let count = 0;
  while (queue.length) {
    const { node, depth } = queue.pop()!;
    if (depth > 128 || ++count > 20_000) fail("E_LANGUAGE_LIMIT", node.span, "This formula is too complex; use at most 128 nested levels and 20,000 formula parts, or split it into named shared terms.");
    for (const child of node.children) queue.push({ node: child, depth: depth + 1 });
  }
}
export function parseType(text: string, options: Omit<Source, "text"> = { file: "<type>" }): Result<Type> {
  return capture(() => { const parser = new Parser({ text, ...options }); const type = parser.type(); parser.end(); return type; });
}
export function parseIdentifier(text: string, options: Omit<Source, "text"> = { file: "<identifier>" }): Result<string> {
  return capture(() => { const parser = new Parser({ text, ...options }); const name = parser.identifier().text; parser.end(); return name; });
}
