// Present the source notation without changing its names, grouping or meaning.
const escape = (text: string) => text.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
export function renderMath(source: string, display: "block" | "inline" = "block") {
  const operators: Record<string, string> = { ">=": "≥", "<=": "≤", "!=": "≠", "->": "→", "*": "·", "-": "−" };
  // Break long display formulas at logical operators, retaining the exact source
  // in the annotation. Grouping symbols stay in their original order.
  const lines = source.split("\n").flatMap(line => {
    if (line.length <= 64) return [line];
    const pieces = line.split(/(?=[→∧∨↔])/u);
    const wrapped: string[] = [];
    let row = "";
    for (const piece of pieces) {
      if (row.length > 32 && row.length + piece.length > 64) { wrapped.push(row); row = ""; }
      row += piece;
    }
    if (row) wrapped.push(row);
    return wrapped;
  });
  const rows = lines.map(line => {
    const tokens = line.match(/"(?:[^"\\]|\\.)*"|\d+(?:\.\d+)?|>=|<=|!=|->|[\p{L}𝔄ℤ][\p{L}\p{N}_]*|[^\s]/gu) ?? [];
    return `<mrow>${tokens.map(token => {
      if (/^\d/.test(token)) return `<mn>${escape(token)}</mn>`;
      if (token.startsWith('"')) return `<mtext>${escape(token)}</mtext>`;
      if (/^[\p{L}𝔄ℤ]/u.test(token)) return `<mi${token.length > 1 ? ' mathvariant="normal"' : ""}>${escape(token)}</mi>`;
      return `<mo>${escape(operators[token] ?? token)}</mo>`;
    }).join("")}</mrow>`;
  });
  const expression = rows.length === 1 ? rows[0] : `<mtable columnalign="left">${rows.map(row => `<mtr><mtd>${row}</mtd></mtr>`).join("")}</mtable>`;
  return `<math xmlns="http://www.w3.org/1998/Math/MathML" display="${display}" aria-label="${escape(source)}"><semantics>${expression}<annotation encoding="text/plain">${escape(source)}</annotation></semantics></math>`;
}
