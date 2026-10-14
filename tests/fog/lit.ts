// Reference implementation of the lit-cells maths on rules/fog.md, used to check the fixtures in this folder.
export interface FogFixture {
  name: string; description: string; rows: number; cols: number;
  initiallyLit: string[]; links?: { trigger: string[]; lights: string[] }[];
  givens?: Record<string, number>; answer?: Record<string, number>;
  /** Set on a fixture the format must reject; the text is what the reader says. */
  rejected?: string;
  steps: { entries: Record<string, number>; lit: string[] }[];
}
const ref = (cell: string) => { const m = /^r(\d+)c(\d+)$/.exec(cell)!; return { r: Number(m[1]), c: Number(m[2]) }; };
export const order = (cells: Iterable<string>) => [...new Set(cells)].sort((a, b) => ref(a).r - ref(b).r || ref(a).c - ref(b).c);

export function lit(f: FogFixture, entries: Record<string, number>): string[] {
  const inBoard = (cell: string) => { const { r, c } = ref(cell); return r >= 1 && r <= f.rows && c >= 1 && c <= f.cols; };
  const given = f.givens ?? {};
  const lamp = (cell: string) => inBoard(cell) && entries[cell] !== undefined
    && (!f.answer || entries[cell] === f.answer[cell])
    && (!(cell in given) || entries[cell] === given[cell]);
  const out = new Set(f.initiallyLit);
  if (!f.links) {
    for (const cell of Object.keys(entries)) {
      if (!lamp(cell)) continue;
      if (cell in given) { out.add(cell); continue; }
      const { r, c } = ref(cell);
      for (let rr = Math.max(1, r - 1); rr <= Math.min(f.rows, r + 1); rr++) for (let cc = Math.max(1, c - 1); cc <= Math.min(f.cols, c + 1); cc++) out.add(`r${rr}c${cc}`);
    }
  } else {
    for (const link of f.links) if (link.trigger.length && link.trigger.every(lamp)) link.lights.forEach(cell => out.add(cell));
  }
  return order(out);
}
