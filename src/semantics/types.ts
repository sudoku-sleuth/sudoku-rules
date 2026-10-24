import type { PageSource } from "../library.js";
import type { Span } from "../language/diagnostics.js";

export type Cell = `r${number}c${number}`;
export type Channel = "D" | "V";
export interface SemanticHouse { cells: Cell[]; source?: Span; id?: string }
/** Coordinates are one-based. Only houses assert distinctness; regions describe geometry. */
export interface BoardContext {
  rows: number;
  cols: number;
  alphabet: number[];
  activeCells: Cell[];
  regions?: Cell[][];
  houses?: SemanticHouse[];
  givens?: { cell: Cell; digit: number }[];
}
export interface CanonicalBoard {
  rows: number; cols: number; alphabet: number[]; activeCells: Cell[];
  regions: Cell[][]; houses: Cell[][]; givens: { cell: Cell; digit: number }[];
}
/** Finite semantic primitives. Pair tables list allowed ordered face-value pairs explicitly. */
export type Formula =
  | { op: "All" | "Any"; children: Formula[] }
  | { op: "Not"; child: Formula }
  | { op: "Distinct"; channel: Channel; collection: "set" | "list"; cells: Cell[] }
  | { op: "Pair"; channel: Channel; cells: [Cell, Cell]; table: [number, number][] }
  | { op: "SumEqual"; channel: Channel; left: Cell[]; right: Cell[] }
  | { op: "CountAtLeast"; channel: "D"; cells: Cell[]; digit: number; count: number }
  | { op: "Allowed"; channel: Channel; cell: Cell; values: number[] };
export interface SemanticSource { span: Span; kind: string; instance?: string; position?: number; scope?: string; custom?: boolean }
export interface Coverage {
  kind: string; source: SemanticSource;
  status: "lowered" | "unsupported";
  reason?: string;
}
export interface SemanticIssue { code: string; message: string; span: Span }
export interface Rewrite {
  rule: "distinct-pairs" | "pair-order" | "boolean-canonical" | "double-not" | "house-implied" | "value-channel" | "fog-sets" | "sum-equation";
  version: 1; before: string; after: string; sources: SemanticSource[];
  /** A retained unconditional house that justifies removing the pair. */
  witness?: Cell[];
}
export interface SourceLink { primitive: string; sources: SemanticSource[] }
export interface FogPlay {
  op: "Fog"; initiallyLit: Cell[];
  /** Absent uses neighbourhood reveal; an empty list uses links only. */
  links?: { trigger: Cell[]; lights: Cell[] }[];
}
export interface NormalForm {
  version: 1; board: CanonicalBoard; solution: Formula; play: "all-visible" | "unresolved" | FogPlay;
  decorations?: { cells: Cell[]; note?: string; element?: string; source: SemanticSource }[];
  coverage: Coverage[]; sources: SourceLink[]; rewrites: Rewrite[];
}
export interface Normalisation {
  status: "complete" | "partial" | "invalid";
  normalForm?: NormalForm;
  issues: SemanticIssue[];
}
export interface SemanticDifference {
  primitive: Formula["op"] | "Board" | "Play";
  cells: Cell[];
  side: "left" | "right";
  term: Formula | CanonicalBoard | FogPlay | string;
  sources: SemanticSource[];
  /** A structural difference does not establish different solution sets. */
  message: string;
}
export interface Comparison {
  status: "equivalent" | "unresolved" | "invalid";
  covered: "equal" | "structural-difference" | "invalid";
  differences: SemanticDifference[];
  uncovered: { side: "left" | "right"; declaration: Coverage }[];
  issues: SemanticIssue[];
}
export type SemanticFile = PageSource;
