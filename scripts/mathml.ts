import { parseFormula } from "../src/language/parser";
import type { Expr } from "../src/language/ast";

const escape = (text: string) => text.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const operators: Record<string, string> = { ">=": "≥", "<=": "≤", "!=": "≠", "->": "→", "*": "×", "-": "−" };
const keywords: Record<string, string> = { forall: "∀", exists: "∃", and: "∧", or: "∨", not: "¬", implies: "→", iff: "↔", in: "∈", notin: "∉", subset: "⊆", union: "∪", intersect: "∩", empty: "∅", lambda: "λ" };

// Use the public parser's source spans to identify variables and called terms.
// Render the authored tokens rather than regenerating an expression: parentheses,
// chained comparisons, intervals and binder annotations keep their original form.
function identifierVariants(ast: Expr) {
  const variants = new Map<number, "normal" | "italic">();
  function visit(node: Expr, called = false) {
    if (node.kind === "name") variants.set(node.span.start.offset, called && node.value!.length > 1 ? "normal" : "italic");
    for (const binder of node.binders ?? []) variants.set(binder.span.start.offset, "italic");
    node.children.forEach((child, index) => visit(child, node.kind === "call" && index === 0));
  }
  visit(ast);
  return variants;
}

// Dispatch's allow-listed tokenizer, extended with the public formula language's
// strings, set/aggregate notation and ASCII operators. No catch-all token or HTML.
function mathRows(source: string): string[] | undefined {
  if (!source.trim() || source.length > 100_000) return;
  const parsed = parseFormula(source);
  const variants = parsed.value ? identifierVariants(parsed.value) : new Map<number, "normal" | "italic">();
  const tokenPattern = /#[^\r\n]*|"(?:[^"\\\r\n]|\\["\\/bfnrt]|\\u[0-9a-fA-F]{4})*"|\d+(?:\.\d+)?|->|<=|>=|!=|[∀∃∈∉→⇒↔∧∨¬≥≤≠⊆∩∪ΣΠ∅λ⌊⌋⟨⟩=<>+−\-×·÷/|:,;().\[\]{}*^]|[\p{L}_𝔄ℤ][\p{L}\p{N}_]*/gu;
  let offset = 0;
  const rows: string[] = [];
  const stack: string[] = [];
  const closing: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  for (const line of source.split("\n")) {
    const tokens = [...line.matchAll(tokenPattern)];
    let end = 0;
    for (const token of tokens) {
      if (line.slice(end, token.index).trim()) return;
      end = token.index + token[0].length;
      if (!parsed.value) {
        const value = token[0];
        if (["(", "[", "{"].includes(value)) stack.push(value);
        else if (Object.hasOwn(closing, value) && stack.pop() !== closing[value]) return;
      }
    }
    if (line.slice(end).trim()) return;
    const content = tokens.filter(token => !token[0].startsWith("#")).map((token, index) => {
      const value = token[0];
      if (/^\d/.test(value)) return `<mn>${escape(value)}</mn>`;
      if (value.startsWith('"')) return `<mtext>${escape(value)}</mtext>`;
      if (["Σ", "Π", "λ", "_"].includes(value)) return `<mo>${value}</mo>`;
      if (Object.hasOwn(keywords, value)) return `<mo>${keywords[value]}</mo>`;
      if (/^[\p{L}_𝔄ℤ]/u.test(value)) {
        const variant = variants.get(offset + token.index) ?? (value.length > 1 && tokens[index + 1]?.[0] === "(" ? "normal" : "italic");
        return `<mi mathvariant="${variant}">${escape(value)}</mi>`;
      }
      return `<mo>${escape(operators[value] ?? value)}</mo>`;
    }).join("");
    if (content) rows.push(`<mrow>${content}</mrow>`);
    offset += line.length + 1;
  }
  return rows.length && !stack.length ? rows : undefined;
}

export function renderMath(source: string, display: "block" | "inline" = "block") {
  const rows = mathRows(source);
  const plain = source.trim();
  const code = `<pre class="math-plain"><code>${escape(plain)}</code></pre>`;
  if (!rows) return code;
  const expression = `<mtable columnalign="left">${rows.map(row => `<mtr><mtd>${row}</mtd></mtr>`).join("")}</mtable>`;
  return `<math xmlns="http://www.w3.org/1998/Math/MathML" display="${display}" aria-label="${escape(plain.replace(/\s+/g, " "))}"><semantics>${expression}<annotation encoding="text/plain">${escape(plain)}</annotation></semantics></math><details class="math-source"><summary>Plain-text formula</summary>${code}</details>`;
}
