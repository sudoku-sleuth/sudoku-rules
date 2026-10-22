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
| status | `equivalent` for equal complete forms on the same board with equal, covered play semantics; `unresolved` for structural differences or any uncovered meaning; `invalid` for a rejected input. |
| covered | `equal`, `structural-difference` or `invalid`, independently of whole-file status. |
| differences | Unmatched primitives with cells, side, complete term, source spans and a message. Board differences name changed fields. |
| uncovered | Unsupported declarations from each side, each with its own specific reason and source. |
| issues | Located input errors. |

Unequal forms establish a structural difference. They do not prove different sets of full-board solutions. This API does not search for witnesses or evaluate arbitrary answers. No `different` verdict is emitted without that later proof step. Equal partial forms stay unresolved, including two identical unsupported declarations. Metadata such as title, setter, source, status, prose and drawings belongs to a separate envelope comparison. It is excluded from mathematical identity. Fog setup has a separate canonical play identity. Whole-file agreement requires both solution and play identities to agree.

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
| SumEqual(channel, left, right) | Exact equality of sums over two occurrence lists, including repeated visits. Canonical equations cancel common occurrences, divide coefficients by their common factor and choose a fixed sign. |
| CountAtLeast(D, cells, digit, count) | The number of matching digit occurrences is at least count. Cells are a sorted list retaining occurrence multiplicity. |
| All(children) | Conjunction; empty All is true. |
| Any(children) | Disjunction; empty Any is false. |
| Not(child) | Boolean complement of the complete child formula. |

`D` is the face digit. `V` is the effective value and equals D when no modifier or unresolved definition can change that channel. The normaliser rewrites effective-value thermos, whispers, palindromes, renban and region sums, as well as parity-cell, pair and Kropki restrictions from V to D only after establishing this identity. It does not construct effective-value tables for an unknown domain. General arithmetic, quantified witnesses, opaque custom terms and collections with computed selection have no lowering in this version; their declarations remain uncovered. Digits, counts and moduli in this finite fragment are safe integers. Whisper gaps accept finite numeric bounds; integral differences are compared to their exact ceiling or floor. The formula compiler's separate exact rational arithmetic remains unchanged.

## Coverage by declaration kind

`declarationRegistry` inventories all published kinds, including aliases. Its entries declare a lowering path or a specific unsupported reason. Tests compare the inventory with every rule page; adding, removing or renaming a kind requires updating the registry. Actual instance coverage also accounts for composition, parameters and expansion limits.

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
| pair | Exact table for difference, at-least, ratio, sum, less, multiple and shift over the actual alphabet. Keywords retain cell direction; swapping axes transposes the table. Arithmetic uses exact integers. |
| kropki | White is difference 1; black is ratio 2, including the allowed zero/zero pair. Named colour parameters are also accepted. |
| quadruple | At-least counts of each listed digit over the cell set. Duplicate listed digits increase the required count. |
| outside | At-least counts over cell occurrences. Order is immaterial; repeated positions still count. |
| negative | Each listed relation is forbidden on orthogonal face-digit pairs in its direction and within scope, excluding exactly its declared exception pairs. |
| cage, killer | Untotalled cages lower to distinctness unless repeats is true. Killer is the cage alias. Any supplied total (`total` or `sum`) leaves the whole declaration uncovered. |
| thermo, slow-thermo | Directed adjacent strict increase on V, or nondecrease on D, respectively. |
| whispers, whisper | Absolute adjacent V difference at least the required gap; German uses 5, Dutch uses 4. Optional loop closure. |
| close-whispers | Absolute adjacent D difference at most the required gap. |
| parity | Opposite numeric digit parity at each edge, including declared closure. |
| modular | Distinct normalised remainders in every three-position window; positive integral modulus defaults to 3. Open two-position paths require different remainders. |
| entropic | Distinct classes in every three-position window, using equal thirds of the ordered alphabet. Open two-position paths require different classes. |
| palindrome | Equality of V at mirrored path positions. |
| renban | Distinct V values covering a consecutive integer interval of the path length. Repeated cells are rejected. |
| bremban | The distinct D values cover a consecutive integer interval; repeated values and visits are permitted. |
| nabner | Every pair of path positions has nonconsecutive D values; optional `distinct` forbids equal values. Repeated cells are rejected. |
| primality | Every D exceeds one; adjacent positions alternate prime and composite classes. Optional closure. |
| summit | Unequal adjacent D values; successive differences reverse sign at internal 1 or 9 and retain sign elsewhere. Includes cyclic triples on loops. |
| shifter-line | Exclude 5. Within a primary region, adjacent D values share parity and polarity above/below 5; across regions exactly one relationship changes. |
| region-sum | Equal V sums over explicit maximal region runs, checked against primary board regions. With combine true, visits to the same region share one total. Occurrence multiplicity is retained. |

Every other kind is unsupported with the reason exported by `declarationRegistry`: absent-digits, arrow, between, cage-expressions, cage-pair, cage-shapes, constructed-regions, coordinate-arrows, counting-circles, diagonal-lines, doll-sum, double-arrow, equal-sums, equality-cage, extremum, flat-mates, greek-carpet, hidden-modular, index, index-line, layered-cage, limited-digits, line-choice, little-killer, lockout, look-and-say, magic-square, mean-lines, molecules, n-mate, numbered-room, ordered-block, pointing-arrow, pointing-thermo, pressure-gauge, product-cage, remainder-cage, rotational-sums, run-sum, same-class, sandwich, skyscraper, sum-free-cage, tardis, value-modifier, vault, window-classes, x-sum and yin-yang.

Foreign definitions and their dependencies are unresolved. URL spelling never grants a foreign definition the meaning of a built-in kind. Known aliases retain their original source kind. Unsupported header setup, custom definitions and uniform shading conditions remain uncovered. No opaque identity establishes executable coverage. Embedded custom references carry `source.custom: true`. Local custom references retain their source file in `source.scope`; matching local names in different files never identify a shared rule. Adding a publication URL does not change their custom coverage.

## Composition and rewrites

Supported declarations validate parameters and active cells before composition. Parameter types and enum values are checked without coercion. Invalid parameters remain errors under negation or false conditions. Distinct declarations of the same kind require distinct instance IDs. Identical repeated lines preserve their meaning and source spans; an ID reused for a different declaration is rejected. An explicit `not` complements the complete base formula. Two prefixes cancel. `negate: all` adds one complement per base declaration before applying conditions.

`R if P` lowers to Any(Not(P), R); `R unless P` to Any(P, R), after base negation. `distinct` uses the primary collection's declared semantics, including repeated path positions. `connected` evaluates fixed orthogonal geometry. Conditions require a nonempty primary cell list. `uniform` awaits shared shading coverage.

Rewrites are terminating and versioned. Each record has its name, version, before/after primitive keys and originating sources:

| Rewrite | Justification |
| --- | --- |
| distinct-pairs | Pairwise inequality exactly defines distinctness. |
| pair-order | Cell sorting transposes the explicit table; table entries are sets. |
| boolean-canonical | Flatten associative All/Any; sort and deduplicate children; fold identities, constants, full/empty tables and membership sets; self-pairs read table diagonals; complement complete pair tables under Not; fold impossible multiplicity counts, divide repeated-cell weights by their common factor with the threshold rounded up, saturate weights at the threshold, and reduce singleton counts to membership. |
| double-not | Complementing twice preserves a complete Boolean meaning. |
| house-implied | Remove positive inequality already asserted by an unconditional house; retain the house and its proof link. |
| value-channel | V equals D in the absence of uncovered value bindings or definitions. |
| sum-equation | Cancel common sum occurrences, divide integral coefficients by their common factor, and orient the first nonzero coefficient positively. |
| fog-sets | Canonicalise initially lit cells and trigger sets, union lights for identical trigger sets, and remove links with inactive triggers without changing the presence of links. |

House removal works pair by pair: no single house needs to contain the entire marked group. Each comparison side derives its own baseline; differing houses stay visible as board differences. Conditional and negated declarations never become baseline houses. Removed pairs retain their rule source on the house link and rewrite record. Original primitive keys and their sources remain in the source map even after flattening or removal. Declaration order never enters mathematical identity.

Source maps use canonical primitive JSON as keys, and `house:<cell-set JSON>` for retained house witnesses. `board` links recognised board headers. Several declarations can map to one primitive. Reference checking and semantic reading share Markdown fence boundaries, so prose and nested examples remain outside declarations. Spans use the reader's UTF-16 offsets, one-based lines and Unicode code-point columns, with exclusive ends.

## Pair relations, multiplicities and negative scopes

`pair` uses its published keyword forms, such as `pair r1c1-r1c2 sum 10` or `pair r1c1-r1c2 less`. Numeric relation arguments must be safe whole numbers. Difference and at-least compare absolute differences. Ratio means either value multiplied by the argument equals the other, including zero. Multiple means the numeric maximum is an integer multiple of the numeric minimum when the minimum is nonzero; two zeros also satisfy it. Shift excludes 5 and requires exactly one of equal parity and equal membership in values greater than 5. No relation assumes digits 1–9.

Quadruple cell collections remove duplicate positions. Outside cell collections preserve occurrences, including repeated visits, while sorting their order. Both retain digit-list multiplicity; extra copies and unlisted digits are permitted. Canonical counts combine repeated occurrences into cell weights, divide weights by their greatest common divisor while rounding the count up, then cap each weight at the required count and repeat until stable. A count over one distinct cell becomes digit membership. Thus `outside r1c1-r1c1 digits [1,1]`, `outside r1c1 digits [1]` and `allowed-digits r1c1 digits [1]` share a canonical form. Negation complements the complete bundle of required counts.

Negative declarations require `relations` and `except`. Validated relation records are deduplicated by operator and value before pair expansion and resource accounting. Absent `within` covers all orthogonal edges; `within []` covers none. A nonempty scope covers an edge only when both endpoints belong to a common listed group. Direction restricts those edges to horizontal or vertical. Exception pairs are unordered sets of exactly two positions; lists and groups are validated against active cells. Asymmetric relations use row-major endpoint order before canonical pair transposition.

Exceptions belong to each negative declaration. A pair carrying a white clue does not exempt a black negative, and a V clue does not exempt an X negative. Separate declarations preserve independent exception lists. A declaration listing several relations explicitly shares its own exceptions across those relations. The API never infers exceptions from other declarations or drawings.

## Paths, windows and regions

Paths retain their ordered occurrences. Adjacency rules expand to their exact edges, so splitting or joining declarations compares equally when the resulting edges agree. Branches are supplied as separate paths; touching artwork adds no edge. Thermo direction starts at the bulb. Direction-free rules reverse through their lowered clauses. Palindrome, interval and window rules retain their whole scope; splitting them does not generally preserve meaning.

Loop closure follows the published shared predicates: only paths longer than two add a last-to-first edge. Cyclic three-position windows require at least three positions. A closed two-position modular or entropic path has no windows; its open counterpart has the explicit two-position class restriction. Repeated closing endpoints remain occurrences, rather than being removed. A cyclic window can therefore differ from an open path with its first position repeated at the end. An open path repeating its first two positions captures all cyclic triples.

Entropic classes use the ordered alphabet, whose size must be divisible by three. Modular remainders are normalised even for negative digits. Summit always turns at numeric 1 and 9; shifter always excludes numeric 5. Missing primary regions leave region-sum and shifter coverage unresolved. Neither region geometry nor these lines supplies houses.

Renban and Bremban expand to finite disjunctions of consecutive intervals drawn from the actual alphabet. Renban also requires pairwise distinctness. Region sums validate the ordered maximal runs in `segments`. With `combine true`, all path occurrences in each visited primary region form one sum; otherwise each run is a separate sum. They retain exact integral coefficient equations; comparison does not solve arbitrary systems of aggregate equations. Expansion limits leave the whole declaration uncovered, with its source and reason retained.

## Fog play state

A `fog` header lowers to `{op: "Fog", initiallyLit, links?}` in `play` and a `header:fog` coverage entry. Initial cells, trigger cells and lit cells are sets. Links with the same canonical trigger set have their lights unioned. Cell coordinates and zero-based row-major indices identify spots; initial light and link lights must identify active cells. Missing `initiallyLit` defaults to empty. Missing links select neighbourhood reveal; present empty links select links-only reveal. These remain distinct canonical forms.

Trigger coordinates may be off the board or identify inactive cells. Those spots are never correct, and links containing them are removed from canonical play. Empty trigger sets, malformed links and unknown fields are rejected.

`visibleCells(form, entries, answer?)` returns the cells visible under the current entries. A link fires only when all its triggers have correct entries. Revealed light never fires another link by itself. Without links, a correctly entered non-given reveals its active 3×3 neighbourhood; a given typed over correctly reveals itself alone. Initial light always remains. Erasing or changing an entry retracts the light it supplied. Answer availability and coverage are separate: omitting `answer` means no answer is available, so any placed digit counts subject to the cell’s given value. Supplying an answer, including `{}`, means an answer is available; only covered cells whose entries match it count. Given values must agree in both modes. The function computes play state without evaluating solution constraints.

Play differences appear separately as `Play` differences with header provenance. Equal covered fog forms can establish whole-file equivalence; any uncovered declaration still makes the comparison unresolved.

## Input bounds and verification

The finite fragment accepts 1–64 distinct safe-integer alphabet digits and 1–1024 active cells. A declaration can expand at most 1,000,000 value combinations; a file at most 2,000,000. File accounting folds identities and deduplicates canonical clauses before charging expansion. Crossing an expansion bound reports the declaration as uncovered. It never establishes equivalence by truncation.

The synthetic tests cover every registry entry, line permutations, duplicated clauses, source merging, idempotence, each rewrite's satisfying cases and near-misses, and exhaustive small assignment checks under house premises. They also cover whole-rule negation, condition scope, nonstandard boards, mixed coverage and retained rational comparison.

## Decoration metadata

`decoration` has complete coverage and contributes no solution or play condition.
Normalisation retains each occurrence in optional `NormalForm.decorations` with
sorted unique `cells`, optional `note` and `element`, and its `source`. Comparison
ignores this field. A file containing only decorations has the true solution
(`All` with no children). File-level negation does not negate decorations.
Common `element` metadata is removed before mathematical lowering for all kinds.

Extended geometry, selectors, channels and aggregate meanings retain whole-instance coverage. When a named extension has no finite lowering, the entire declaration is marked unsupported before any constraints are emitted, including under negation. Grammar acceptance and finite executable coverage are separate contracts.
