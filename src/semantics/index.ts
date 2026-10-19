import { declarationParameters } from "../declarations.js";
import { valueLines } from "./lines.js";
import { fogPlay } from "./fog.js";
export { visibleCells } from "./fog.js";
import { location } from "../language/diagnostics.js";
import { boardHouseSources, canonicalBoard, groups, key, standardHouses } from "./board.js";
import { addSources, canonicalise, sourceLinks, type CanonicalState } from "./canonical.js";
import { all, condition, lower, validateCells, UnsupportedSemantics } from "./lower.js";
import { checkBoardHeaders } from "./headers.js";
import { readSemanticFile } from "./reader.js";
import { declarationRegistry, type DeclarationCapability } from "./registry.js";
import type { BoardContext, Cell, Comparison, Coverage, Formula, Normalisation, NormalForm, SemanticDifference, SemanticFile, SemanticIssue, SemanticSource } from "./types.js";
export * from "./types.js";
export { declarationRegistry } from "./registry.js";

/** Portable structural normalisation. No URL loading, execution, or board solving. */
export function normalise(file: SemanticFile, context: BoardContext): Normalisation {
  const issues: SemanticIssue[] = [];
  const here = location(file, 0, 0);
  let board;
  try { board = canonicalBoard(context); }
  catch (error) { issues.push({ code: "E_SEMANTIC_BOARD", message: (error as Error).message, span: here }); return { status: "invalid", issues }; }
  const read = readSemanticFile(file, {rows: board.rows, cols: board.cols, symbols: board.alphabet,
    standard: board.rows === 9 && board.cols === 9 && board.alphabet.join(',') === '1,2,3,4,5,6,7,8,9'});
  issues.push(...read.issues);
  read.issues = issues;
  const boardSources = read.extras.filter(e => ["header:board", "header:givens", "header:regions"].includes(e.kind)).map(e => e.source);
  checkBoardHeaders(read, board);
  if (issues.length) return { status: "invalid", issues };
  const state: CanonicalState = { board, links: new Map(), rewrites: [], houses: new Map() };
  addSources(state, "board", boardSources);
  const supplied = boardHouseSources(context);
  for (const source of boardSources) {
    if (read.extras.some(e => e.source === source)) continue;
    const header = read.metadata.board as {houses?: Cell[][]} | undefined;
    const houses = source.kind === "header:regions" ? read.metadata.regions : source.kind === "header:board" ? header?.houses : undefined;
    if (Array.isArray(houses)) for (const house of groups(houses)) supplied.set(key(house), [...(supplied.get(key(house)) ?? []), source]);
  }
  board.houses.forEach(cells => state.houses.set(key(cells), { cells, sources: supplied.get(key(cells)) ?? [] }));
  let coverageFog: Coverage | undefined;
  let play: NormalForm["play"] = "all-visible";
  const fog = read.extras.find(e => e.kind === "header:fog");
  if (fog) {
    try {
      play = fogPlay(read.metadata.fog, board);
      addSources(state, `play:${key(play)}`, [fog.source]);
      state.rewrites.push({ rule: "fog-sets", version: 1, before: key(read.metadata.fog), after: key(play), sources: [fog.source] });
      coverageFog = { kind: fog.kind, source: fog.source, status: "lowered" };
      read.extras = read.extras.filter(e => e !== fog);
    } catch (error) { issues.push({ code: "E_SEMANTIC_FOG", message: (error as Error).message, span: fog.source.span }); }
  }
  const coverage: Coverage[] = read.extras.map(e => ({ kind: e.kind, source: e.source, status: "unsupported", reason: e.reason }));
  if (coverageFog) coverage.push(coverageFog);
  const decorations: NonNullable<NormalForm["decorations"]> = [];
  const bundles: { formula: Formula; sources: SemanticSource[] }[] = [];
  const capabilities: Record<string, DeclarationCapability> = declarationRegistry;
  const valuesUnknown = read.instances.some(i => i.kind === "value-modifier" || !Object.hasOwn(capabilities, i.kind)) || read.extras.some(e => !["header:board", "header:givens", "header:fog"].includes(e.kind));
  let expansion = 0;
  const charged = new Set<string>();
  const cost = (f: Formula): number => f.op === "Pair" ? f.table.length : f.op === "Distinct" ? f.cells.length * (f.cells.length - 1) / 2 * board.alphabet.length ** 2 : f.op === "Not" ? cost(f.child) : f.op === "All" || f.op === "Any" ? f.children.reduce((n,c) => n + cost(c), 0) : f.op === "Allowed" ? f.values.length : f.op === "SumEqual" ? f.left.length + f.right.length : 0;
  const identity = (i: typeof read.instances[number]) => key([i.kind, i.negated, i.cells, i.ast.parameters.find(p => p.name.value === "element")?.value.value, Object.entries(i.parameters).sort(([x],[y]) => x < y ? -1 : x > y ? 1 : 0), i.condition]);
  const grouped = new Map<string, { instance: typeof read.instances[number]; sources: SemanticSource[] }>();
  for (const instance of read.instances) {
    const id = identity(instance), previous = grouped.get(id);
    if (previous) previous.sources.push(instance.source);
    else grouped.set(id, { instance, sources: [instance.source] });
  }
  const ordered = [...grouped.entries()].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([, group]) => group);
  // Context regions are already resolved, including irregular partitions. Resolve
  // declaration-supplied geometry too, before any formula can read regions.
  for (const { instance, sources } of ordered) {
    if (instance.kind !== "sudoku") continue;
    try { validateCells(instance.ast, board); }
    catch (error) { issues.push(...sources.map(source => ({ code: "E_SEMANTIC_CELL", message: (error as Error).message, span: source.span }))); continue; }
    try {
      lower(instance.ast, board);
      // Negation changes the constraint, not the board's geometry.
      if (!board.regions.length) board.regions = groups(standardHouses().slice(18));
    } catch (error) {
      issues.push(...sources.map(source => ({ code: "E_SEMANTIC_PARAMETER", message: (error as Error).message, span: source.span })));
    }
  }
  if (issues.length) return { status: "invalid", issues };
  for (const { instance, sources } of ordered) {
    const { kind } = instance;
    const cover = (status: Coverage["status"], reason?: string) => coverage.push(...sources.map(source => ({ kind, source, status, ...(reason ? { reason } : {}) })));
    const capability = Object.hasOwn(capabilities, kind) ? capabilities[kind] : undefined;
    try { validateCells(instance.ast, board); }
    catch (error) { issues.push(...sources.map(source => ({ code: "E_SEMANTIC_CELL", message: (error as Error).message, span: source.span }))); continue; }
    if (!capability || capability.status === "unsupported") {
      cover("unsupported", capability?.status === "unsupported" ? capability.reason : "The referenced definition and its dependencies have not been resolved.");
      continue;
    }
    if (kind === "decoration") {
      const data = declarationParameters(instance.ast, "cells");
      for (const source of sources) decorations.push({cells: [...new Set(data.cells as Cell[])].sort(),
        ...(typeof data.note === "string" ? {note: data.note} : {}),
        ...(typeof data.element === "string" ? {element: data.element} : {}), source});
      cover("lowered");
      continue;
    }
    try {
      let formula = lower(instance.ast, board);
      const reason = instance.condition?.predicate === "uniform" ? "Uniform conditions require a shared shading interpretation." : ([...valueLines, "parity-cells", "pair", "kropki"].includes(kind)) && valuesUnknown ? "Effective-value domain is unresolved because value bindings or definitions are uncovered." : undefined;
      if (reason) { cover("unsupported", reason); continue; }
      if (([...valueLines, "parity-cells", "pair", "kropki"].includes(kind))) {
        const before = key(formula);
        const convert = (f: Formula): Formula => f.op === "Allowed" || f.op === "Pair" || f.op === "SumEqual" ? { ...f, channel: "D" } : f.op === "All" || f.op === "Any" ? { ...f, children: f.children.map(convert) } : f.op === "Not" ? { ...f, child: convert(f.child) } : f;
        formula = convert(formula);
        state.rewrites.push({ rule: "value-channel", version: 1, before, after: key(formula), sources });
      }
      formula = condition(instance.ast, formula, board, instance.negated);
      if (kind === "sudoku") {
        // Only positive houses imply pair facts.
        if (!instance.negated && !instance.condition) for (const cells of groups(standardHouses())) {
          const previous = state.houses.get(key(cells));
          state.houses.set(key(cells), { cells, sources: [...(previous?.sources ?? []), ...sources] });
        }
      }
      // Fold identities and deduplicate mathematical clauses before charging finite work.
      formula = canonicalise(formula, state, sources);
      const identity = key(formula);
      if (!charged.has(identity)) {
        const work = cost(formula);
        if (expansion + work > 2_000_000) throw new UnsupportedSemantics("File expansion exceeds 2,000,000 finite value combinations.");
        expansion += work;
        charged.add(identity);
      }
      bundles.push({ formula, sources }); cover("lowered");
    } catch (error) {
      if (error instanceof UnsupportedSemantics) cover("unsupported", error.message);
      else issues.push(...sources.map(source => ({ code: "E_SEMANTIC_PARAMETER", message: (error as Error).message, span: source.span })));
    }
  }
  if (issues.length) return { status: "invalid", issues };
  board.houses = groups([...state.houses.values()].map(h => h.cells));
  for (const house of state.houses.values()) addSources(state, `house:${key(house.cells)}`, house.sources);
  const children = bundles.map(({ formula, sources }) => canonicalise(formula, state, sources));
  const solution = canonicalise(all(children), state, []);
  if (read.extras.some(e => e.kind !== "header:board" && e.kind !== "header:givens")) play = "unresolved";
  return {
    status: coverage.some(c => c.status === "unsupported") ? "partial" : "complete", issues: [],
    normalForm: { version: 1, board, solution, play, ...(decorations.length ? {decorations} : {}), coverage, sources: sourceLinks(state), rewrites: state.rewrites },
  };
}
function support(term: Formula): Cell[] {
  switch (term.op) {
    case "Pair": case "Distinct": case "CountAtLeast": return term.cells;
    case "Allowed": return [term.cell];
    case "SumEqual": return [...new Set([...term.left, ...term.right])].sort();
    case "Not": return support(term.child);
    default: return [...new Set(term.children.flatMap(support))].sort();
  }
}
/** Equal complete forms prove equivalence. Structural mismatches remain unresolved. */
export function compare(left: Normalisation, right: Normalisation): Comparison {
  const issues = [...left.issues, ...right.issues];
  if (left.status === "invalid" || right.status === "invalid" || !left.normalForm || !right.normalForm) return { status: "invalid", covered: "invalid", differences: [], uncovered: [], issues };
  const a = left.normalForm, b = right.normalForm;
  const uncovered: Comparison["uncovered"] = [a, b].flatMap((form, index) => form.coverage.filter(c => c.status === "unsupported").map(declaration => ({ side: index ? "right" as const : "left" as const, declaration })));
  const differences: SemanticDifference[] = [];
  if (key(a.board) !== key(b.board)) for (const [form, side] of [[a, "left"], [b, "right"]] as const) {
    const other = side === "left" ? b : a;
    const fields = Object.keys(form.board).filter(field => key(form.board[field as keyof typeof form.board]) !== key(other.board[field as keyof typeof other.board]));
    const changed = new Set<Cell>();
    for (const field of fields) {
      if (field === "givens") form.board.givens.filter(g => !other.board.givens.some(o => key(o) === key(g))).forEach(g => changed.add(g.cell));
      else if (field === "houses" || field === "regions") form.board[field].filter(g => !other.board[field].some(o => key(o) === key(g))).flat().forEach(c => changed.add(c));
      else if (field === "activeCells") form.board.activeCells.filter(c => !other.board.activeCells.includes(c)).forEach(c => changed.add(c));
      else form.board.activeCells.forEach(c => changed.add(c));
    }
    differences.push({ primitive: "Board", cells: [...changed].sort(), side, term: form.board,
      sources: form.sources.filter(s => s.primitive === "board" || s.primitive.startsWith("house:")).flatMap(s => s.sources), message: `Board differs in ${fields.join(", ")}.` });
  }
  const terms = (f: Formula): Formula[] => f.op === "All" ? f.children : [f];
  for (const [form, other, side] of [[a, b, "left"], [b, a, "right"]] as const) {
    const existing = new Set(terms(other.solution).map(key));
    for (const term of terms(form.solution)) if (!existing.has(key(term))) {
      const cells = support(term);
      differences.push({ primitive: term.op, cells, side, term, sources: form.sources.find(s => s.primitive === key(term))?.sources ?? [], message: `${term.op} on ${cells.join("–") || "the empty support"} exists only on the ${side}; structural difference.` });
    }
  }
  if (key(a.play) !== key(b.play)) for (const [form, side] of [[a, "left"], [b, "right"]] as const) {
    const cells = typeof form.play === "object" ? [...new Set([...form.play.initiallyLit, ...(form.play.links ?? []).flatMap(l => [...l.trigger, ...l.lights])])].sort() : [];
    differences.push({ primitive: "Play", cells, side, term: form.play, sources: form.sources.filter(s => s.primitive.startsWith("play:")).flatMap(s => s.sources), message: `Visibility setup on the ${side} differs.` });
  }
  return { status: !differences.length && !uncovered.length && a.play !== "unresolved" && b.play !== "unresolved" ? "equivalent" : "unresolved", covered: differences.length ? "structural-difference" : "equal", differences, uncovered, issues };
}
