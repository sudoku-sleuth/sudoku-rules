import { cellPattern, parseCase, parseCellRef, type RuleLine } from "./case.js";
import type { KindEntry, PageReading, ReadingLibrary, Variant } from "./library.js";
import {
  Unrenderable, deepEqual, isCellList, isNestedCells, matchWhen, partCells, render, sentenceCase, words,
  type Condition, type Scope, type WhenCase,
} from "./template.js";
import { valueFits } from "./values.js";
import { READING_FORMAT, type CaseReading, type ItemList, type Part, type ReadingRow } from "./types.js";

const isObject = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v);

interface Instance {
  line: RuleLine;
  entry: KindEntry;
  params: Record<string, unknown>;
  stated: boolean;
  vi?: number;
}

interface Board { rows?: number; cols?: number; regions?: string[][]; standardBoxes: boolean; symbols?: number[] }

interface Group { key: string; entry: KindEntry; vi: number; variant: Variant; instances: Instance[]; stated: boolean }

const keyOf = (cells: string[]): string => [...cells].sort().join(",");

function cellOfIndex(n: number, cols: number): string { return `r${Math.floor(n / cols) + 1}c${(n % cols) + 1}`; }

/** Header cells arrive as `r1c1` or as 0-based row-major numbers. */
function normaliseCells(list: unknown, cols: number | undefined): string[] | undefined {
  if (!Array.isArray(list)) return undefined;
  const out: string[] = [];
  for (const item of list) {
    if (typeof item === "string" && cellPattern.test(item)) out.push(item);
    else if (typeof item === "number" && Number.isInteger(item) && item >= 0 && cols) out.push(cellOfIndex(item, cols));
    else return undefined;
  }
  return out;
}

function parseGivens(value: unknown, board: Board): { cell: string; digit: number }[] | undefined {
  if (Array.isArray(value)) {
    const list = value.map(each => (isObject(each) && typeof each.cell === "string" && cellPattern.test(each.cell) && typeof each.digit === "number" ? { cell: each.cell, digit: each.digit } : undefined));
    return list.every(Boolean) ? (list as { cell: string; digit: number }[]) : undefined;
  }
  if (typeof value !== "string") return undefined;
  const pairs = [...value.matchAll(/\b(r[1-9]\d*c[1-9]\d*)=(\d+)\b/g)].map(m => ({ cell: m[1], digit: Number(m[2]) }));
  if (pairs.length) return pairs;
  const grid = value.trim();
  if (board.rows && board.cols && grid.length === board.rows * board.cols && /^[.\d]+$/.test(grid))
    return [...grid].flatMap((ch, i) => (ch === "." ? [] : [{ cell: cellOfIndex(i, board.cols!), digit: Number(ch) }]));
  return undefined;
}

function standardRegions(rows: number, cols: number): string[][] | undefined {
  if (rows !== 9 || cols !== 9) return undefined;
  const regions: string[][] = [];
  for (let br = 0; br < 3; br++) for (let bc = 0; bc < 3; bc++) {
    const cells: string[] = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) cells.push(`r${br * 3 + r + 1}c${bc * 3 + c + 1}`);
    regions.push(cells);
  }
  return regions;
}

function allRows(rows: number, cols: number): string[][] {
  return Array.from({ length: rows }, (_, r) => Array.from({ length: cols }, (_, c) => `r${r + 1}c${c + 1}`));
}
function allCols(rows: number, cols: number): string[][] {
  return Array.from({ length: cols }, (_, c) => Array.from({ length: rows }, (_, r) => `r${r + 1}c${c + 1}`));
}

function defaultGroupBy(entry: KindEntry): string[] {
  return entry.order.filter(name => !isCellList(entry.types[name]) && !isNestedCells(entry.types[name]));
}

/** Reads a case file into grouped readings. Never throws: anything it cannot read shows as written. */
export function readCase(text: string, library: ReadingLibrary): CaseReading {
  try {
    return read(text, library);
  } catch (error) {
    return { format: READING_FORMAT, rows: [], kinds: [], lineCount: 0, complete: false, problems: [`The case could not be read: ${error instanceof Error ? error.message : String(error)}`] };
  }
}

function read(text: string, library: ReadingLibrary): CaseReading {
  const parsed = parseCase(text, kind => library.declarationOf(kind));
  const problems: string[] = [];
  if (parsed.problem) problems.push(parsed.problem);
  const header = parsed.header;

  // Board facts come from an explicit board header, else from a `sudoku 9x9` line.
  const board: Board = { standardBoxes: false };
  const headerBoard = isObject(header.board) ? header.board : undefined;
  if (headerBoard) {
    if (typeof headerBoard.rows === "number") board.rows = headerBoard.rows;
    if (typeof headerBoard.cols === "number") board.cols = headerBoard.cols;
    if (Array.isArray(headerBoard.regions)) board.regions = headerBoard.regions.filter(Array.isArray) as string[][];
    if (Array.isArray(headerBoard.symbols)) board.symbols = headerBoard.symbols as number[];
  }
  const sudokuLine = parsed.lines.find(l => l.board);
  if (!board.rows && sudokuLine?.board) {
    board.rows = sudokuLine.board.rows; board.cols = sudokuLine.board.cols;
    board.regions = standardRegions(board.rows, board.cols);
    board.standardBoxes = Boolean(board.regions);
  }

  const kinds = new Set<string>();
  const written = new Map<string, { entry?: KindEntry; kind: string; lines: number[]; reason: string }>();
  const markWritten = (line: RuleLine, entry: KindEntry | undefined, reason: string) => {
    const key = entry?.canonical ?? line.kind;
    const hit = written.get(key) ?? { ...(entry ? { entry } : {}), kind: key, lines: [], reason };
    hit.lines.push(line.index);
    written.set(key, hit);
  };

  // 1. Turn each line into an instance of a kind that has a reading, or set it aside.
  const hasFog = header.fog !== undefined && header.fog !== null;
  // The cells clear at the start. A given lights nothing, so only these are in view before the first entry.
  const clearAtStart = isObject(header.fog) ? ((c) => (c ? new Set(c) : undefined))(normaliseCells(header.fog.initiallyLit ?? [], board.cols)) : undefined;
  const instances: Instance[] = [];
  const lineCount = parsed.lines.length;
  for (const line of parsed.lines) {
    if (line.comment) continue;
    const entry = library.entry(line.kind);
    if (entry) kinds.add(entry.canonical);
    if (line.problem) { markWritten(line, entry, `the line cannot be read (${line.problem})`); continue; }
    if (!entry?.reading?.variants?.length) { markWritten(line, entry, entry ? "no reading yet" : "unknown kind"); continue; }
    if (line.negated || line.condition) { markWritten(line, entry, "a not, if or unless modifier"); continue; }
    const params: Record<string, unknown> = {};
    for (const [name, value] of Object.entries(line.params)) if (name in entry.types) params[name] = value;
    if (line.cells) {
      const free = entry.cellParams.find(name => !(name in params));
      if (!free) { markWritten(line, entry, "the cells have no parameter to hold them"); continue; }
      params[free] = line.cells;
    }
    if (line.board) {
      const free = entry.order.find(name => /^record\{rows:/.test(entry.types[name]));
      if (free) params[free] = { rows: line.board.rows, cols: line.board.cols };
    }
    const bad = Object.keys(params).find(name => !valueFits(entry.types[name], params[name]));
    if (bad) { markWritten(line, entry, `${bad} is not a value of type ${entry.types[bad]}`); continue; }
    instances.push({ line, entry, params, stated: hasFog && line.stated });
  }

  // 2. Case-level facts that templates may ask for by name.
  const housesOf = (cells: string[]): "row" | "column" | "region" | undefined => {
    const key = keyOf(cells);
    if (board.rows && board.cols) {
      if (allRows(board.rows, board.cols).some(r => keyOf(r) === key)) return "row";
      if (allCols(board.rows, board.cols).some(r => keyOf(r) === key)) return "column";
    }
    if (board.regions?.some(r => keyOf(r) === key)) return "region";
    return undefined;
  };
  const variantOf = (inst: Instance): number => {
    if (inst.vi !== undefined) return inst.vi;
    inst.vi = -1; // guards against a condition that asks about itself
    const variants = inst.entry.reading!.variants!;
    const scope = instanceScope(inst);
    try { inst.vi = variants.findIndex(v => matchWhen(v.when, scope)); } catch { inst.vi = -1; }
    return inst.vi;
  };
  const relationOf = (inst: Instance): Record<string, unknown> | undefined => {
    const name = Object.keys(inst.params).find(n => inst.entry.types[n] === "PairRelation");
    const direct = name ? inst.params[name] : undefined;
    if (isObject(direct)) return direct;
    const vi = variantOf(inst);
    return vi >= 0 ? inst.entry.reading!.variants![vi].relation : undefined;
  };
  const cellsOf = (inst: Instance): string[] => {
    const name = inst.entry.cellParams[0];
    return name ? (inst.params[name] as string[]) ?? [] : [];
  };
  const exceptsAreMarked = (inst: Instance): boolean => {
    const relations = inst.params.relations, except = inst.params.except;
    if (!Array.isArray(relations) || !Array.isArray(except)) return false;
    const marked = new Set<string>();
    for (const other of instances) {
      if (other === inst) continue;
      const rel = relationOf(other);
      if (rel && relations.some(r => deepEqual(r, rel))) marked.add(keyOf(cellsOf(other)));
    }
    const listed = new Set(except.map(pair => keyOf(pair as string[])));
    return marked.size > 0 && [...listed].every(k => marked.has(k)) && [...marked].every(k => listed.has(k));
  };

  const hasSudokuLine = parsed.lines.some(l => !l.comment && library.entry(l.kind)?.canonical === "sudoku");
  /** The houses in a group are every row, column and region of a board, and no `sudoku` line also says so. */
  const housesStandAlone = (kinds: (string | undefined)[]): boolean => {
    if (hasSudokuLine || !board.rows || !board.cols || !kinds.every(Boolean)) return false;
    const n = (k: string) => kinds.filter(x => x === k).length;
    return n("row") === board.rows && n("column") === board.cols && n("region") === (board.regions?.length ?? 0);
  };
  const instanceCondition = (inst: Instance): Condition => name => {
    if (name === "isHouse") return { ok: housesOf(cellsOf(inst)) !== undefined };
    if (name === "exceptsAreMarked") return { ok: exceptsAreMarked(inst) };
    return undefined;
  };
  function instanceScope(inst: Instance): Scope {
    return {
      params: inst.params, types: inst.entry.types, instances: [inst.params], count: 1, cellParams: inst.entry.cellParams,
      condition: instanceCondition(inst), typeReadings: library.typeReadings,
    };
  }

  // 3. Pick each instance's variant, then group.
  const groups = new Map<string, Group>();
  for (const inst of instances) {
    const vi = variantOf(inst);
    if (vi < 0) { markWritten(inst.line, inst.entry, "no variant fits these values"); continue; }
    const variant = inst.entry.reading!.variants![vi];
    const by = inst.entry.reading!.group_by ?? defaultGroupBy(inst.entry);
    const values = by.map(name => {
      const v = inst.params[name];
      return v === undefined ? (inst.entry.types[name] === "boolean" ? false : null) : v;
    });
    const key = JSON.stringify([inst.entry.canonical, vi, inst.stated, values]);
    const group = groups.get(key) ?? { key, entry: inst.entry, vi, variant, instances: [], stated: inst.stated };
    group.instances.push(inst);
    groups.set(key, group);
  }

  // 4. Render each group; a group that cannot be rendered shows as written.
  interface Rendered { group: Group; members: Instance[]; fogged: boolean; first: number; sentence: Part[]; short?: Part[]; lines: () => Part[][]; heading: string; join?: Variant["join"]; notes: Part[][]; spoilerNotes: Part[][]; silent: boolean }
  const rendered: Rendered[] = [];
  /** Every cell a line names, wherever it sits among its parameters. */
  const cellsNamed = (v: unknown, out: string[] = []): string[] => {
    if (typeof v === "string") { if (cellPattern.test(v)) out.push(v); }
    else if (Array.isArray(v)) for (const x of v) cellsNamed(x, out);
    else if (isObject(v)) for (const x of Object.values(v)) cellsNamed(x, out);
    return out;
  };
  /** Behind fog: a drawn clue with a cell that is not clear at the start. Stated rules and the houses (`unique` lines that are a row, column or box) are not clues; a path that happens to cover a box is. */
  const behindFog = (m: Instance): boolean =>
    hasFog && !m.stated && !(m.entry.canonical === "unique" && housesOf(cellsOf(m))) && cellsNamed(m.params).some(c => !clearAtStart?.has(c));

  for (const group of groups.values()) {
    const { entry, variant } = group;
    const hidden = variant.join ? [] : group.instances.filter(behindFog);
    const shown = group.instances.filter(m => !hidden.includes(m));
    for (const [members, fogged] of [[shown, false], [hidden, true]] as const) {
      if (!members.length) continue;
      const params = members[0].params;
      const covered = new Set(members.flatMap(m => entry.cellParams.flatMap(name => (m.params[name] as string[]) ?? []))).size;
      const houseKinds = members.map(m => housesOf(cellsOf(m)));
      const scope: Scope = {
        params, types: entry.types, instances: members.map(m => m.params), count: members.length, covered,
        cellParams: entry.cellParams, parts: entry.reading!.parts,
        condition: name => (name === "housesStandAlone" ? { ok: housesStandAlone(houseKinds) } : instanceCondition(members[0])(name)),
        typeReadings: library.typeReadings,
      };
      if (houseKinds.every(Boolean)) scope.houses = describeHouses(houseKinds as string[], board);
      try {
        const itemScope = (m: Instance, extra: Record<string, unknown> = {}): Scope => ({ ...instanceScope(m), params: { ...m.params, ...extra }, parts: entry.reading!.parts });
        const itemLines = (): Part[][] => {
          const lines: Part[][] = [];
          for (const m of members) {
            if (variant.item_over) {
              for (const each of (m.params[variant.item_over] as unknown[]) ?? []) {
                const cells = each as string[];
                lines.push(renderItem(variant.item, { ...itemScope(m, { cells }), types: { ...entry.types, cells: "list<cell>" } }));
              }
            } else lines.push(renderItem(variant.item, itemScope(m)));
          }
          return lines;
        };
        const eager = itemLines();
        scope.items = () => eager;
        const named = variant.heading ? flat(render(variant.heading, scope)) : entry.name;
        const first = Math.min(...members.map(m => m.line.index));
        if (fogged) {
          // What stays in view is the rule without counts or cells; every position sits in the spoiler list.
          if (!variant.rule) throw new Unrenderable("this variant has no sentence without cells for a clue under fog");
          rendered.push({
            group, members, fogged, first, sentence: sentenceCase(render(variant.rule, scope)), lines: () => eager,
            heading: shown.length ? `${named} under fog` : named, notes: [], spoilerNotes: [], silent: false,
          });
          continue;
        }
        const template = members.length === 1 || !variant.many ? variant.one : variant.many;
        const sentence = template ? sentenceCase(render(template, scope)) : [];
        const short = variant.short ? render(variant.short, scope) : undefined;
        const notes = (variant.notes ?? []).filter(n => matchWhen(n.when, scope) && n.text).map(n => sentenceCase(render(n.text!, scope)));
        const spoilerNotes = (variant.spoiler_notes ?? []).filter(n => matchWhen(n.when, scope) && n.text).map(n => sentenceCase(render(n.text!, scope)));
        rendered.push({
          group, members, fogged, first, sentence, ...(short ? { short } : {}),
          lines: () => eager, heading: named, ...(variant.join ? { join: variant.join } : {}), notes, spoilerNotes, silent: Boolean(variant.silent),
        });
      } catch (error) {
        // One rule that cannot be read never costs the rest of the case.
        const why = error instanceof Unrenderable ? "unrenderable" : "read failed";
        for (const m of members) markWritten(m.line, entry, `${why}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  // 5. Rows: one per group, except families that share a row; joiners are folded into the rows they describe.
  interface Row extends ReadingRow { order: number; units: Rendered[] }
  const rows: Row[] = [];
  const familyRows = new Map<string, Row>();
  const joiners: Rendered[] = [];
  for (const r of rendered.sort((a, b) => a.first - b.first)) {
    if (r.join) { joiners.push(r); continue; }
    const { entry, variant } = r.group;
    if (r.fogged) {
      const lines = r.lines();
      rows.push({
        kind: entry.canonical, kinds: [entry.canonical], heading: r.heading, link: entry.canonical, sentence: r.sentence,
        lines: r.members.map(m => m.line.index), order: r.first, units: [r], variants: [r.group.vi],
        items: { noun: "clues under fog", count: lines.length, lines, spoiler: "reveals cells under fog" },
        ...(r.group.stated ? { stated: true } : {}),
      });
      continue;
    }
    const lines = r.members.map(m => m.line.index);
    const familyKey = variant.family ? JSON.stringify([entry.canonical, variant.family, r.group.stated]) : undefined;
    const existing = familyKey ? familyRows.get(familyKey) : undefined;
    if (existing) {
      existing.units.push(r);
      existing.lines.push(...lines);
      if (!existing.variants!.includes(r.group.vi)) existing.variants!.push(r.group.vi);
      continue;
    }
    const row: Row = {
      kind: entry.canonical, kinds: [entry.canonical], heading: r.heading, link: entry.canonical, sentence: r.sentence,
      lines, order: r.first, units: [r], variants: [r.group.vi], ...(r.group.stated ? { stated: true } : {}),
    };
    rows.push(row);
    if (familyKey) familyRows.set(familyKey, row);
  }
  for (const row of rows) {
    if (row.units[0].fogged) continue;
    // Variants of a family read in the order the page lists them.
    row.units.sort((a, b) => a.group.vi - b.group.vi);
    if (row.units.length > 1) {
      const family = row.units[0].group.variant.family!;
      row.heading = family;
      const clauses: Part[] = [];
      row.units.forEach((u, i) => {
        // One instance reads as its own sentence; several share the family's short clause.
        const clause = u.members.length > 1 && u.short ? u.short : u.sentence;
        const text = sentenceCase(clause);
        const last = text[text.length - 1];
        if (i > 0) clauses.push(" ");
        clauses.push(...text, typeof last === "string" && /[.!?]$/.test(last) ? "" : ".");
      });
      row.sentence = mergeParts(clauses);
    }
    const tagged = row.units.filter(u => u.group.variant.name).length > 1;
    const first = row.units[0].group.variant;
    const wanted = row.units.every(u => u.group.variant.list !== "never") && row.units.some(u => u.members.length > 1 || u.group.variant.list === "always" || u.group.variant.item_over);
    const lists = wanted ? row.units.flatMap(u => u.lines().map(line => (tagged && u.group.variant.name ? [...line, ` (${u.group.variant.name})`] : line))) : [];
    if (lists.length) {
      const items: ItemList = { noun: first.noun ?? "items", count: lists.length, lines: lists };
      const spoiler = row.units.map(u => u.group.variant.spoiler).find(Boolean);
      if (spoiler) {
        items.spoiler = spoiler;
        const inside = row.units.flatMap(u => u.spoilerNotes);
        if (inside.length) items.notes = inside;
      }
      row.items = items;
    }
    const notes = row.units.flatMap(u => u.notes);
    if (notes.length) row.notes = notes;
  }
  for (const j of joiners) {
    const rels = j.members[0].params.relations;
    const targets = rows.filter(row => row.units.some(u => u.members.some(m => {
      const rel = relationOfInstance(m);
      return rel && Array.isArray(rels) && rels.some(r => deepEqual(r, rel));
    })));
    if (!targets.length) {
      // The condition held for no visible group: fall back to the unjoined reading of the same lines.
      for (const m of j.members) markWritten(m.line, j.group.entry, "no group to join");
      continue;
    }
    const target = targets[0];
    const names = [...new Set(targets.flatMap(t => t.units.map(u => u.group.variant.name)).filter((n): n is string => Boolean(n)))];
    const scope: Scope = {
      params: j.members[0].params, types: j.group.entry.types, instances: j.members.map(m => m.params), count: j.members.length,
      cellParams: j.group.entry.cellParams, condition: instanceCondition(j.members[0]), typeReadings: library.typeReadings, names,
    };
    (target.notes ??= []).push(sentenceCase(render(j.join!.note, scope)));
    target.lines.push(...j.members.map(m => m.line.index));
    if (!target.kinds.includes(j.group.entry.canonical)) target.kinds.push(j.group.entry.canonical);
  }
  function relationOfInstance(m: Instance): Record<string, unknown> | undefined { return relationOf(m); }

  // 6. As-written rows, header rows.
  const out: ReadingRow[] = [];
  const headerRows: ReadingRow[] = [];
  const HEADING = { board: "Board", fog: "Fog", givens: "Givens" } as const;
  /** A header that cannot be read becomes a row shown as written; it has no rule line to show. */
  const unreadable = (kind: keyof typeof HEADING, link: string, why: string) => {
    problems.push(`The ${kind} header ${why}`);
    headerRows.push({ kind, kinds: [kind], heading: HEADING[kind], link, sentence: [], lines: [], header: true, asWritten: true });
  };
  const sudoku = library.entry("sudoku");
  const boardHeader = sudoku?.reading?.header;

  const addHeader = (kind: keyof typeof HEADING, page: PageReading | undefined, link: string, params: Record<string, unknown>, types: Record<string, string>, condition: Condition, listParam?: { name: string; of: Record<string, unknown>[]; itemTypes: Record<string, string> }) => {
    if (!page?.variants?.length) { unreadable(kind, link, "has no reading"); return; }
    const base: Scope = { params, types, instances: [params], count: listParam ? listParam.of.length : 1, cellParams: [], parts: page.parts, condition, typeReadings: library.typeReadings };
    try {
      const vi = page.variants.findIndex(v => matchWhen(v.when, base));
      if (vi < 0) { unreadable(kind, link, "has no wording that fits"); return; }
      const variant = page.variants[vi];
      const lines = (listParam ? listParam.of : []).map(each => renderItem(variant.item, { ...base, params: each, types: listParam!.itemTypes, instances: [each], count: 1 }));
      base.items = () => lines;
      const sentence = variant.one ? sentenceCase(render(variant.one, base)) : [];
      const notes = (variant.notes ?? []).filter(n => matchWhen(n.when, base) && n.text).map(n => sentenceCase(render(n.text!, base)));
      const inside = (variant.spoiler_notes ?? []).filter(n => matchWhen(n.when, base) && n.text).map(n => sentenceCase(render(n.text!, base)));
      if (variant.silent) return;
      const row: ReadingRow = { kind, kinds: [kind], heading: variant.heading ?? kind, link, sentence, lines: [], header: true, variants: [vi] };
      if (variant.list === "always" && lines.length) {
        row.items = { noun: variant.noun ?? "items", count: lines.length, lines };
        if (variant.spoiler) { row.items.spoiler = variant.spoiler; if (inside.length) row.items.notes = inside; }
      }
      if (notes.length) row.notes = notes;
      headerRows.push(row);
    } catch (error) {
      unreadable(kind, link, `cannot be written: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  if (headerBoard) {
    kinds.add("sudoku");
    if (board.rows && board.cols) {
      const params = { rows: board.rows, cols: board.cols, symbols: board.symbols ?? [], ...(board.regions ? { regions: board.regions } : {}) };
      const types = { rows: "position", cols: "position", symbols: "list<digit>", regions: "list<set<cell>>" };
      addHeader("board", boardHeader?.board, "sudoku", params, types, name => (name === "standardBoard" ? { ok: isStandardBoard(board) } : undefined));
    } else unreadable("board", "sudoku", "has no size");
  }
  if (hasFog) {
    kinds.add("fog");
    const fog = header.fog;
    const links = isObject(fog) && Array.isArray(fog.links)
      ? fog.links.map(link => {
          const l = isObject(link) ? link : {};
          const trigger = normaliseCells(l.trigger, board.cols), lights = normaliseCells(l.lights, board.cols);
          // A link with no trigger would fire at once. Decoders drop such links, so the format rejects them.
          return trigger?.length && lights ? { trigger: [...new Set(trigger)], lights: [...new Set(lights)] } : undefined;
        })
      : undefined;
    const lit = isObject(fog) ? normaliseCells(fog.initiallyLit ?? [], board.cols) : undefined;
    if (!isObject(fog)) unreadable("fog", "fog", "is not a block of fields");
    else if (!lit) unreadable("fog", "fog", "has cells that cannot be read");
    else if (fog.links !== undefined && (!links || links.some(l => !l))) unreadable("fog", "fog", "has a link that cannot be read (a link needs a trigger and cells to light)");
    else {
      const givenCells = new Set((parseGivens(givensSource(header, headerBoard), board) ?? []).map(g => g.cell));
      // Off-grid triggers can be found only when the board size is known.
      const onGrid = (cell: string) => { const { row, col } = parseCellRef(cell); return (!board.rows || row <= board.rows) && (!board.cols || col <= board.cols); };
      const typed = (links ?? []) as { trigger: string[]; lights: string[] }[];
      const params: Record<string, unknown> = { initiallyLit: [...new Set(lit)], ...(links ? { links: typed } : {}) };
      const types = { initiallyLit: "set<cell>", links: "list<link>" };
      const condition: Condition = name => {
        if (name === "triggersOnGivens") return { ok: typed.some(l => l.trigger.some(c => givenCells.has(c))) };
        if (name === "neverFire") { const n = typed.filter(l => l.trigger.some(c => !onGrid(c))).length; return { ok: n > 0, value: n }; }
        return undefined;
      };
      addHeader("fog", library.features.get("fog")?.reading, "fog", params, types, condition, { name: "links", of: typed, itemTypes: { trigger: "set<cell>", lights: "set<cell>" } });
    }
  }
  const givens = parseGivens(givensSource(header, headerBoard), board);
  if (givensSource(header, headerBoard) !== undefined) {
    if (!givens) unreadable("givens", "sudoku", "cannot be read");
    else if (givens.length) {
      const list = givens.map(g => ({ cell: g.cell, digit: g.digit }));
      // Under fog a given may sit in a hidden cell, so naming it would uncover part of the board.
      addHeader("givens", boardHeader?.givens, "sudoku", { givens: list }, { givens: "list<given>" }, name => {
        // Fog is declared but the clear cells cannot be read, so any given might be hidden.
        if (name === "underFog") return { ok: hasFog && !clearAtStart };
        if (name === "hiddenGivens") {
          const n = clearAtStart ? list.filter(g => !clearAtStart!.has(g.cell)).length : 0;
          return { ok: n > 0, value: n };
        }
        return undefined;
      }, { name: "givens", of: list, itemTypes: { cell: "cell", digit: "digit" } });
    }
  }

  const order = headerRows.sort((a, b) => ["board", "fog", "givens"].indexOf(a.kind) - ["board", "fog", "givens"].indexOf(b.kind));
  out.push(...order);

  const body: (ReadingRow & { order: number })[] = rows.map(({ units: _u, ...row }) => row);
  for (const w of written.values()) {
    problems.push(`${w.kind}: ${w.reason}`);
    body.push({ kind: w.kind, kinds: [w.kind], heading: w.entry?.name ?? w.kind, ...(w.entry ? { link: w.entry.canonical } : {}), sentence: [], lines: w.lines, asWritten: true, order: Math.min(...w.lines) });
  }
  body.sort((a, b) => a.order - b.order);
  for (const row of body) { const { order: _o, ...clean } = row; row.lines.sort((x, y) => x - y); out.push(clean); }

  return { format: READING_FORMAT, rows: out, kinds: [...kinds].sort(), lineCount, complete: problems.length === 0, ...(problems.length ? { problems } : {}) };
}

function givensSource(header: Record<string, unknown>, board: Record<string, unknown> | undefined): unknown {
  return header.givens ?? board?.givens;
}

function isStandardBoard(board: Board): boolean {
  const symbols = board.symbols ?? [];
  const nine = board.rows === 9 && board.cols === 9 && symbols.length === 9 && symbols.every((s, i) => s === i + 1);
  if (!nine) return false;
  if (!board.regions) return true;
  const std = standardRegions(9, 9)!.map(keyOf).sort();
  return deepEqual(board.regions.map(keyOf).sort(), std);
}

function renderItem(item: Variant["item"], scope: Scope): Part[] {
  if (item === undefined) return render("{cells}", scope);
  if (typeof item === "string") return render(item, scope);
  const hit = (item as WhenCase[]).find(c => matchWhen(c.when, scope));
  if (!hit?.text) throw new Unrenderable("No item wording fits");
  return render(hit.text, scope);
}

function flat(parts: Part[]): string {
  return parts.map(p => (typeof p === "string" ? p : partCells(p).join("-"))).join("");
}

function mergeParts(parts: Part[]): Part[] {
  const out: Part[] = [];
  for (const p of parts) {
    if (typeof p === "string" && typeof out[out.length - 1] === "string") out[out.length - 1] += p;
    else out.push(p);
  }
  return out;
}

function describeHouses(kinds: string[], board: Board): Part[] {
  const count = (k: string) => kinds.filter(x => x === k).length;
  const regionWord = board.standardBoxes || (board.regions ?? []).every(isRectangle) ? "box" : "region";
  const bits = ([[count("row"), "row"], [count("column"), "column"], [count("region"), regionWord]] as [number, string][])
    .filter(([n]) => n > 0).map(([n, w]) => `${words(n)} ${w}${n === 1 ? "" : w.endsWith("x") ? "es" : "s"}`);
  return [bits.length <= 1 ? bits.join("") : `${bits.slice(0, -1).join(", ")} and ${bits[bits.length - 1]}`];
}

function isRectangle(cells: string[]): boolean {
  const refs = cells.map(parseCellRef);
  const r = refs.map(x => x.row), c = refs.map(x => x.col);
  return (Math.max(...r) - Math.min(...r) + 1) * (Math.max(...c) - Math.min(...c) + 1) === cells.length;
}
