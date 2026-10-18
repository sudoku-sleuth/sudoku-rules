# Semantic normal form

The portable API compares rule meanings on a supplied board. It reads complete Markdown rule files, preserves source spans and reports coverage for each declaration. It performs no I/O. All fixtures use independently written synthetic rules.

```ts
import { normalise, compare, type BoardContext } from "@sudoku-sleuth/open-rules";

const board: BoardContext = {
  rows: 4,
  cols: 4,
  alphabet: [0, 1, 2, 3],
  activeCells: Array.from({ length: 16 }, (_, i) =>
    `r${Math.floor(i / 4) + 1}c${i % 4 + 1}` as const),
  houses: [{ cells: ["r1c1", "r1c2", "r1c3", "r1c4"] }],
};
// Each input is {file: string, text: string}, including its Open Rules header
// and fenced rules block. File names locate diagnostics; they do not affect meaning.
const a = normalise(leftFile, board);
const b = normalise(rightFile, board);
const result = compare(a, b);
```

`normalise(file, board)` returns `status: complete | partial | invalid`, `issues`, and a `normalForm` for complete or partial inputs. Invalid inputs have no usable form. A form contains `version: 1`, canonical board context, `solution`, `play`, per-instance `coverage`, `sources` and `rewrites`. Source identities and rewrite records are separate from canonical mathematical identity. Call the normaliser again on the same inputs to reproduce the form; its tree rewrites are idempotent.

`compare(a, b)` takes two normalisation results. It returns:

| Field | Meaning |
| --- | --- |
| status | `equivalent` for equal complete forms on the same board with all-visible play; `unresolved` for structural differences or any uncovered meaning; `invalid` for a rejected input. |
| covered | `equal`, `structural-difference` or `invalid`, independently of whole-file status. |
| differences | Unmatched primitives with cells, side, complete term, source spans and a message. Board differences name changed fields. |
| uncovered | Unsupported declarations from each side, each with its own specific reason and source. |
| issues | Located input errors. |

Unequal forms establish a structural difference. They do not prove different sets of full-board solutions. This API does not search for witnesses or evaluate arbitrary answers. No `different` verdict is emitted without that later proof step. Equal partial forms stay unresolved, including two identical unsupported declarations. Metadata such as title, setter, source, status, prose and drawings belongs to a separate envelope comparison. It is excluded from mathematical identity. Visibility setup remains uncovered; there is no whole-file equivalence claim under fog.

The package's existing `compare(Rational, Rational)` overload continues to return -1, 0 or 1.

## Board context

Coordinates are one-based `r1c1` strings. The ordered alphabet contains distinct whole-number face digits, including zero or negative digits. Values are numeric digits, never candidate indices. Active cells are supplied explicitly; canvas dimensions introduce no cells or houses. An inactive cell cannot occur in a declaration, given, region or house.

`regions` is an optional primary partition of the active cells. It describes geometry. Only `houses` asserts unconditional pairwise digit inequality. Each house can carry `source: Span` and `id`; those survive as provenance. Short houses assert distinctness without adding missing-digit coverage. `givens` supplies `{cell, digit}` records. Ordered alphabets, coordinates, active cells, primary regions, houses and givens all enter board identity. House IDs, source locations, region order, cell-set order and given-record field order do not.

Supply one board and one alphabet. Multiple-board input or unknown BoardContext fields is rejected. A header containing unhandled board fields is reported as uncovered. Several overlapping boards with local alphabets are outside this representation.

Recognised header board fields (`rows`, `cols`, `symbols`, `activeCells`, `regions`, `houses`, `givens`) must agree with BoardContext. Header givens accept cell/digit records, a digit grid using dots for empty cells, or `r1c1=1` entries. Top-level extra `regions` must appear among the supplied houses. A `board.regions` partition alone asserts no uniqueness. The supplied context is resolved data; this API does not guess missing alphabets or region layouts.

The published `sudoku 9x9` declaration supplies the standard 27 houses, standard box geometry and digits 1–9. It requires the matching complete board and ordered alphabet; any supplied primary regions must match the nine standard boxes. Its houses become unconditional assumptions only for a positive declaration. `not sudoku 9x9` negates the whole house composition once; geometry and givens remain board data. For 4×4, 6×6, 0–8, irregular or inactive-cell boards, supply explicit context and declare the required houses there or with `unique`.

## Primitives and exact meaning

Version 1 implements the following finite fragment of the logical tree. All nodes denote Booleans on complete assignments. There is no partial-assignment evaluator in this API.

| Node | Meaning |
| --- | --- |
| Distinct(channel, collection, cells) | Values at every two different positions are unequal. A `set` removes duplicate cells; a `list` retains occurrences. Empty and singleton collections are true. Canonical output expands this macro to inequality pairs. |
| Pair(channel, cells, table) | The ordered values at the two cells belong to the explicit allowed-pair table. Its axes use the board's actual numeric alphabet. Swapping cells transposes the table. A pair with the same cell on both axes uses only diagonal table entries. |
| Allowed(channel, cell, values) | The cell's value belongs to this explicit numeric set. An empty set is false. |
| All(children) | Conjunction; empty All is true. |
| Any(children) | Disjunction; empty Any is false. |
| Not(child) | Boolean complement of the complete child formula. |

`D` is the face digit. `V` is the effective value and equals D when no modifier or unresolved definition can change that channel. Slice A rewrites parity restrictions from V to D only after establishing this identity. It does not construct effective-value tables for an unknown domain. Arithmetic, quantified witnesses, opaque custom terms, collections with computed selection and visibility predicates have no lowering in this version; their declarations remain uncovered. Numeric constants in this finite fragment are safe integers. The formula compiler's separate exact rational arithmetic remains unchanged.

## Coverage by declaration kind

`declarationRegistry` inventories all 82 published kinds, including aliases. Its entries declare a lowering path or a specific unsupported reason. Tests compare the inventory with every rule page; adding, removing or renaming a kind requires updating the registry. Actual instance coverage also accounts for composition, parameters and expansion limits.

| Kind | Lowering |
| --- | --- |
| sudoku | Standard 9×9 composed houses; explicit board alphabet and givens retained. |
| unique | Set distinctness to all unordered inequality pairs. |
| clone | Equality table on every unordered cell pair. |
| diagonal | Distinctness on active coordinates satisfying row=column (main) or row+column=cols+1 (anti). |
| anti-knight | Inequality for every active (1,2)/(2,1) move edge. |
| anti-king | Inequality for every distinct active pair at Chebyshev distance one. |
| scoped-move | Explicit knight, king, orthogonal or bishop edges; bishop covers every diagonal distance, across inactive gaps. Forbid same or consecutive numeric digits when either endpoint is scoped. |
| allowed-digits | Membership at every path cell. Repeated visits do not multiply membership constraints. |
| parity-cells | Membership in the odd/even part of the actual alphabet when V=D; negative odd digits and zero retain their numeric parity. |
| cage, killer | Untotalled cages lower to distinctness unless repeats is true. Killer is the cage alias. Any supplied total (`total` or `sum`) leaves the whole declaration uncovered. |

Every other kind is unsupported with the reason exported by `declarationRegistry`: absent-digits, arrow, between, bremban, cage-expressions, cage-pair, cage-shapes, close-whispers, constructed-regions, coordinate-arrows, counting-circles, diagonal-lines, doll-sum, double-arrow, entropic, equal-sums, equality-cage, extremum, flat-mates, greek-carpet, hidden-modular, index, index-line, kropki, layered-cage, limited-digits, line-choice, little-killer, lockout, look-and-say, magic-square, mean-lines, modular, molecules, n-mate, nabner, negative, numbered-room, ordered-block, outside, pair, palindrome, parity, pointing-arrow, pointing-thermo, pressure-gauge, primality, product-cage, quadruple, region-sum, remainder-cage, renban, rotational-sums, run-sum, same-class, sandwich, shifter-line, skyscraper, slow-thermo, sum-free-cage, summit, tardis, thermo, value-modifier, vault, whisper, whispers, window-classes, x-sum and yin-yang.

Foreign definitions and their dependencies are unresolved. URL spelling never grants a foreign definition the meaning of a built-in kind. Known aliases retain their original source kind. Unsupported header setup, custom definitions and uniform shading conditions remain uncovered. No opaque identity establishes executable coverage.

## Composition and rewrites

Supported declarations validate parameters and active cells before composition. Parameter types and enum values are checked without coercion. Invalid parameters remain errors under negation or false conditions. Distinct declarations of the same kind require distinct instance IDs. Identical repeated lines preserve their meaning and source spans; an ID reused for a different declaration is rejected. An explicit `not` complements the complete base formula. Two prefixes cancel. `negate: all` adds one complement per base declaration before applying conditions.

`R if P` lowers to Any(Not(P), R); `R unless P` to Any(P, R), after base negation. `distinct` uses the primary collection's declared semantics, including repeated path positions. `connected` evaluates fixed orthogonal geometry. Conditions require a nonempty primary cell list. `uniform` awaits shared shading coverage.

Rewrites are terminating and versioned. Each record has its name, version, before/after primitive keys and originating sources:

| Rewrite | Justification |
| --- | --- |
| distinct-pairs | Pairwise inequality exactly defines distinctness. |
| pair-order | Cell sorting transposes the explicit table; table entries are sets. |
| boolean-canonical | Flatten associative All/Any; sort and deduplicate children; fold identities, constants, full/empty tables and membership sets; self-pairs read table diagonals. |
| double-not | Complementing twice preserves a complete Boolean meaning. |
| house-implied | Remove positive inequality already asserted by an unconditional house; retain the house and its proof link. |
| value-channel | V equals D in the absence of uncovered value bindings or definitions. |

House removal works pair by pair: no single house needs to contain the entire marked group. Each comparison side derives its own baseline; differing houses stay visible as board differences. Conditional and negated declarations never become baseline houses. Removed pairs retain their rule source on the house link and rewrite record. Original primitive keys and their sources remain in the source map even after flattening or removal. Declaration order never enters mathematical identity.

Source maps use canonical primitive JSON as keys, and `house:<cell-set JSON>` for retained house witnesses. `board` links recognised board headers. Several declarations can map to one primitive. Reference checking and semantic reading share Markdown fence boundaries, so prose and nested examples remain outside declarations. Spans use the reader's UTF-16 offsets, one-based lines and Unicode code-point columns, with exclusive ends.

## Input bounds and verification

The finite fragment accepts 1–64 distinct safe-integer alphabet digits and 1–1024 active cells. A declaration can expand at most 1,000,000 value combinations; a file at most 2,000,000. File accounting folds identities and deduplicates canonical clauses before charging expansion. Crossing an expansion bound reports the declaration as uncovered. It never establishes equivalence by truncation.

The synthetic tests cover every registry entry, line permutations, duplicated clauses, source merging, idempotence, each rewrite's satisfying cases and near-misses, and exhaustive small assignment checks under house premises. They also cover whole-rule negation, condition scope, nonstandard boards, mixed coverage and retained rational comparison.
