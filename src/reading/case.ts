import { readHeader } from "../documents.js";
import type { LineDeclaration } from "../rule-lines.js";

/** One line of a `rules` fence, split into its parts. A line the reader cannot split keeps `problem`. */
export interface RuleLine {
  /** Position among the non-blank lines of the case's `rules` fences. */
  index: number;
  raw: string;
  id?: string;
  negated: number;
  kind: string;
  /** The first cell list written without a parameter name. */
  cells?: string[];
  /** A bare `9x9` token. */
  board?: { rows: number; cols: number };
  params: Record<string, unknown>;
  condition?: { when: "if" | "unless"; predicate: string };
  stated: boolean;
  comment?: boolean;
  problem?: string;
}

export interface ParsedCase {
  header: Record<string, unknown>;
  lines: RuleLine[];
  problem?: string;
}

export const cellPattern = /^r[1-9]\d*c[1-9]\d*$/;
const cellListPattern = /^r[1-9]\d*c[1-9]\d*(?:[-,]r[1-9]\d*c[1-9]\d*)*$/;

export function splitCells(token: string): string[] { return token.split(/[-,]/); }

export function parseCellRef(cell: string): { row: number; col: number } {
  const m = /^r(\d+)c(\d+)$/.exec(cell)!;
  return { row: Number(m[1]), col: Number(m[2]) };
}

class Scanner {
  pos = 0;
  constructor(readonly text: string) {}
  skip() { while (this.pos < this.text.length && /\s/.test(this.text[this.pos])) this.pos++; }
  done() { this.skip(); return this.pos >= this.text.length; }
  word(): string {
    this.skip();
    const start = this.pos;
    while (this.pos < this.text.length && !/\s/.test(this.text[this.pos])) this.pos++;
    return this.text.slice(start, this.pos);
  }
  peek(): string {
    const at = this.pos; const word = this.word(); this.pos = at; return word;
  }
  /** A JSON value, a bare cell, or a bare word. Throws when a bracket or quote does not close. */
  value(): unknown {
    this.skip();
    const c = this.text[this.pos];
    if (c === '"' || c === "[" || c === "{") {
      const start = this.pos;
      let depth = 0, inString = false, closed = false;
      for (; this.pos < this.text.length; this.pos++) {
        const ch = this.text[this.pos];
        if (inString) {
          if (ch === "\\") this.pos++;
          else if (ch === '"') { inString = false; if (depth === 0) { this.pos++; closed = true; break; } }
          continue;
        }
        if (ch === '"') inString = true;
        else if (ch === "[" || ch === "{") depth++;
        else if (ch === "]" || ch === "}") { depth--; if (depth === 0) { this.pos++; closed = true; break; } }
      }
      if (!closed) throw new Error("A value is not closed");
      return JSON.parse(this.text.slice(start, this.pos));
    }
    const word = this.word();
    if (!word) throw new Error("A value is missing");
    try { return JSON.parse(word); } catch { return word; }
  }
}

/** Splits a rule line. `declarationOf` gives a kind's keyword grammar, when its page declares one. */
export function parseRuleLine(raw: string, index: number, declarationOf: (kind: string) => LineDeclaration | undefined): RuleLine {
  const line: RuleLine = { index, raw, negated: 0, kind: "", params: {}, stated: false };
  const text = raw.trim();
  if (text.startsWith("#")) return { ...line, comment: true };
  try {
    let rest = text;
    const id = /^([\p{L}\p{N}_-]+):\s+/u.exec(rest);
    if (id) { line.id = id[1]; rest = rest.slice(id[0].length); }
    const s = new Scanner(rest);
    let word = s.word();
    while (word === "not") { line.negated++; word = s.word(); }
    line.kind = word;
    const declaration = declarationOf(word);
    // A bare board size or a positional cell list, then the keyword form, then `name value` pairs.
    const first = s.peek();
    if (/^\d+x\d+$/.test(first)) {
      const [rows, cols] = s.word().split("x").map(Number);
      line.board = { rows, cols };
    } else if (cellListPattern.test(first)) line.cells = splitCells(s.word());
    if (declaration && line.cells) {
      const parameter = declaration.parameter;
      if (parameter.named && s.peek() === parameter.name) s.word();
      let keyword = s.word();
      if (parameter.named && keyword.startsWith('"')) keyword = JSON.parse(keyword) as string;
      const operands = parameter.keywords[keyword];
      if (!operands) throw new Error(`${keyword || "A keyword"} is not a ${parameter.name} keyword`);
      const value: Record<string, unknown> = parameter.tag ? { [parameter.tag]: keyword } : {};
      for (const operand of operands) {
        const token = s.word();
        if (!/^-?\d+$/.test(token)) throw new Error(`${keyword} needs a whole number`);
        value[operand.field] = Number(token);
      }
      line.params[parameter.name] = parameter.tag ? value : keyword;
    }
    while (!s.done()) {
      const name = s.word();
      if (name === "if" || name === "unless") { line.condition = { when: name, predicate: s.word() }; continue; }
      if (!/^[A-Za-z_]\w*$/.test(name)) throw new Error(`Unexpected ${name}`);
      const value = s.value();
      if (name === "stated") line.stated = value === true;
      else line.params[name] = value;
    }
  } catch (error) {
    line.problem = error instanceof Error ? error.message : String(error);
  }
  return line;
}

/** The header and rule lines of a case file. Never throws. */
export function parseCase(text: string, declarationOf: (kind: string) => LineDeclaration | undefined, file = "case.rules.md"): ParsedCase {
  const header = readHeader({ file, text });
  if (!header.value) return { header: {}, lines: [], problem: header.diagnostics[0]?.message ?? "The header cannot be read" };
  const rest = text.slice(header.value.offset);
  const lines: RuleLine[] = [];
  const fence = /^ {0,3}```rules\s*\r?\n([\s\S]*?)^ {0,3}```\s*$/gm;
  for (const block of rest.matchAll(fence)) {
    for (const raw of block[1].split(/\r?\n/)) {
      if (!raw.trim()) continue;
      lines.push(parseRuleLine(raw, lines.length, declarationOf));
    }
  }
  return { header: header.value.metadata, lines };
}
