# Changelog

Each release lists what changed. A change that breaks a published export, front-matter key or diagnostic code is marked Breaking.

## 1.1.0

### Added

- The normal form lowers Cage Expressions declarations whose expressions are single letters or numbers: cages sharing a letter have equal totals, numbered cages have that total, and distinct letters have different totals. Arithmetic expressions and alphabets with a negative digit stay uncovered.
- The normal form lowers Cage Totals declarations, and Perfect Square Cages and Perfect Cube Cages with them, to a disjunction of cage sums, one for each permitted total, on effective values. They stay uncovered when the effective-value domain is unresolved.
- The normal form lowers Sum Free Cage declarations to Distinct on the cells and a disjunction over the sum-free sets of digits for the stated modulus.
- The normal form lowers Look And Say declarations to an exact count of each listed digit over the marked cells.
- The normal form lowers Digit Profile declarations on printed digits: class counts exact or at least, over the whole list or its windows, with exhaustive, self-count and distinct settings. Digit bounds, balanced pairs, sum-free supports and the value channel stay uncovered.
- The normal form lowers Hidden Modular declarations to an exact disjunction over where the clue-selected span ends, with the triples in the span given different remainders modulo 3.
- The normal form lowers Pressure Gauge declarations to an exact disjunction over the clue digit, with that many neighbours larger (low) or smaller (high).
- The normal form lowers Neighbour Count declarations on printed digits to an exact disjunction over the origin digit, with that many neighbours related to it.
- The normal form lowers Tardis declarations as the Neighbour Extremum alias: the clue cell is above each listed neighbour.
- The normal form lowers Ordered Block declarations to an exact disjunction over the starting positions of the digit run.
- The normal form lowers every Thermo parameter: `strict false`, `orientation` "reverse" and "either", and `channel` "D". Reverse reads the line from its last cell, either is a disjunction of the two directions, and channel D stays covered when the effective-value domain is unresolved.
- The normal form lowers the Renban parameters `channel` "D", `repeats` true and `selection`. Repeats true is the Bremban formula, channel D stays covered when the effective-value domain is unresolved, and a prefix selection is an exact disjunction over the first stopping cell (target, crust or given). Explicit edges stay uncovered.
- The normal form lowers Region Sum with `channel` "D". It reads printed digits, so it stays covered when the effective-value domain is unresolved.
- The normal form lowers Pair with `channel` "D". It reads printed digits, so it stays covered when the effective-value domain is unresolved.
- The normal form lowers counts in a definition written in the case file: the number of listed cells that hold one digit, compared with a number or a set of numbers, becomes digit-count bounds. Counts of other conditions on cell digits stay uncovered.
- The normal form lowers instances of a definition written in the case file. The checked formula is read with the instance's parameters bound; cell digits stay symbolic as weighted sums and each comparison becomes an Allowed, Pair, SumTotal or SumEqual term, with quantifiers, aggregates and shared terms expanded over finite collections. Equal definitions give equal normal forms whatever their names or parameter order, and a definition equal to a library rule's formula gives that rule's normal form. A definition outside the finite fragment stays uncovered with a reason that names what is missing (`customRefusals`).
- The normal form lowers a partial Arrow whose shaft visits a cell more than once. The repeated cells are read as a branch for each alphabet value, each visit counting. A partial arrow that crosses a cap stays uncovered: 100,000 bulb readings, 20,000 readings of the repeated shaft cells, 2,000,000 pairs of a bulb reading and a repeated-shaft reading (refused before enumeration) or 100,000 surviving branches. The caps decide, not the bulb length.
- The normal form lowers Layered Cage declarations to a pair table for every two marked cells: cells in one row share a layer, and an upper cell lies in a row above every lower cell. Digits listed outside the alphabet match nothing, and a cage whose pair tables pass 1,000,000 value combinations stays uncovered.
- The normal form lowers Aggregate Equation, Product Cage and Cage Pair declarations: linear equations over sums and constants, relations between constants and multiples of a sum, and products of distinct cells against a constant. Channel V, decimal and prefix operands, powers above one of a varying aggregate, products of two varying terms, the shift relation and expansion beyond the bounds stay uncovered.
- The normal form lowers Magic Square declarations to a disjunction over the eight magic squares for each place. Places that cannot hold the digits once each add no case, and a rotated or reflected place compares as equal.
- The normal form lowers Aggregate Groups declarations without a line: equal sums, counts, means and products of groups of cells, where a cell listed twice counts twice. The V channel, runs of a line and products of differing larger groups stay uncovered.
- The normal form lowers Profile Relation declarations: equal multisets or sets of digits between two cell lists, and at most a stated number of shared distinct digits between groups. The V channel and expansion beyond the bounds stay uncovered.
- The normal form lowers Relation Scope declarations to a pair table for every selected pair: the union of the listed relations, or one table per relation when `negative` is true. Scope by all pairs, moves or moves incident to anchors, the move, the undirected exceptions and channel V are covered. Scopes past the expansion bound stay uncovered.
- The normal form lowers Limited Digits declarations to a choice of a subset of the stated size of alphabet digits, with every marked cell allowed only that subset. Only the whole part of the limit counts: below one nothing holds, and a limit of one reads as Clone. Limits that need more than 10,000 subsets stay uncovered.
- The normal form lowers Value Modifier declarations that no other declaration reads: the choice of modified cells, as a feasibility check or, with `distinct`, a disjunction over the feasible choices of Distinct on the modified cells. Beside declarations that read or bind values, and for large searches, it stays uncovered.
- The normal form lowers Number Property, Remainder Cage and Unique Primes declarations to an exact disjunction over the sums or decimal readings that pass: a numeric property (prime, composite, power, divisible or decimal places) or a remainder, the reversed reading, an allowed list and different results across operands. Alternating paths, effective-value, product and count operands, stopping prefixes and very large readings stay uncovered.
- Perfect Square Cages and Perfect Cube Cages have their own pages and kinds, `perfect-square-cages` and `perfect-cube-cages`. Each reads as Cage Totals, with the same `cells` and `totals` parameters, so it stays uncovered for the same reason and compares as Cage Totals does.
- Disjoint Sets and Irregular Regions have their own pages and kinds, `disjoint-sets` and `irregular-regions`. Each reads as Regions, with the same `cells` parameter, so it lowers to the same normal form as Regions over the same cells.
- Pill Arrow has its own page and kind, `pill-arrow`. It reads as Arrow, with the same `bulb`, `line` and `partial` parameters, so it lowers to the same normal form or stays uncovered for the same reason.
- Dutch Whispers and German Whispers have their own pages and kinds, `dutch-whispers` and `german-whispers`. They bind Difference Line with a gap of 4 and 5, so each lowers to the same normal form as Whispers 4 and Whispers 5.
- Branched Thermo has its own page and kind, `branched-thermo`, for thermometers with branches or with arms that rejoin. Its `edges` are directed pairs [lower, higher] of orthogonally adjacent cells, each rising strictly (or not, with `strict false`) on the `channel` (effective values by default). The network is nonempty, connected and has no directed cycle, which the new `acyclic` predicate states. It lowers to one pair table per edge, so a single path compares equal to the matching thermo.
- The normal form lowers Difference Line to an exact formula over the line's edges and triples on the stated channel: `at-least` and `at-most` bound each edge difference, `same` and `signed-step` are disjunctions over the one common difference or signed step (with diamond cells holding the difference), `different` excludes two different edges sharing a difference, and `turning` requires a direction change exactly at the turn digits. Summit lowers through the same code with turn digits 1 and 9, so it compares equal to the matching turning line. A network of explicit `edges` stays uncovered.
- The normal form lowers Mirrored Pairs, Rotational Sums and Ziffer Lines. Opposite line positions, or opposite cells of the half-turned board, are equal (`equal`), share one sum (`equal-sum`), add up to a listed sum (`allowed-sum`) or differ by the centre value (`equal-difference`), as explicit pair tables and exact sum equations on the stated channel, with the `centre` setting applied to the sum modes. Rotational Sums and Ziffer Lines lower through the block with their settings bound, so they compare equal to it, and Palindrome and Zipper compare equal to its `equal` and `equal-sum` modes. A board with an active cell whose half-turned partner is inactive stays uncovered.
- The normal form lowers Split Pea on printed digits to the two end restrictions (each a decimal digit from 0 to 9) and a disjunction of two exact sum equations: the interior adds up to ten times one end plus the other. Reversing the line, or reordering its interior, compares equally. A line of fewer than two cells is false.
- The normal form lowers High-Low Lines on printed digits to a disjunction of two ranges: every cell of the line holds a digit from 1 to 5, or every cell holds a digit from 5 to 9, with five in both. The ranges are the fixed numbers whatever the alphabet, and the order and repeated listing of cells do not matter.
- The normal form lowers Local Sequence to exact formulas on the stated channel: `transitions` and `divisors` are one explicit pair table for each adjacent pair (and the closing pair when `loop` is true on three or more cells), and `recurrence` is one sum equation for each three consecutive cells with whole-number coefficients up to 1000 written as repeated occurrences. A closed line of fewer than three cells, and a transitions entry that is not a pair, make the rule false. A coefficient that is not a small whole number stays uncovered.
- The normal form lowers Local Sequence to exact formulas on the stated channel: `transitions` and `divisors` are one explicit pair table for each adjacent pair (and the closing pair when `loop` is true on three or more cells), and `recurrence` is one sum equation for each three consecutive cells with whole-number coefficients up to 1000 written as repeated occurrences. A closed line of fewer than three cells, and a transitions entry that is not a pair, make the rule false, and a closed recurrence is rejected. A coefficient that is not a small whole number stays uncovered.
- The normal form lowers Run Sum on printed digits to an exact disjunction over which adjacent pairs of the line differ by one: each branch has a pair table for every adjacent pair and an exact total over the positions that count (those with a neighbour differing by one), each counted once. A cell listed twice, an unsafe sum and lines past the expansion limit stay uncovered. The selected-stretch block it binds is lowered only for this rule.
- The normal form lowers Doll Sum on printed digits: for each listed total, a disjunction over the pairs of positions whose endpoint digits add up to it and whose interior digits add up to it too. The rule is the conjunction over the distinct totals. A cell listed twice and an unsafe total stay uncovered. The selected-stretch block it binds is lowered only for this selection.
- The normal form lowers Vault declarations to one inequality for every cell and neighbour pair, with a total over the cells on printed digits when a sum is stated. Order and repeated listings of cells and neighbours do not matter. Cells that overlap the neighbours, sums that are not safe integers and very large cross-pair expansions stay uncovered.
- The normal form lowers Same Class declarations to a choice of one class of the stated system, with every marked cell allowed only that class's digits. Classes come from the board's own alphabet, as for Window Classes. Entropy over an alphabet whose size is not a multiple of three, and inactive cells, stay uncovered.
- `normalise` and `canonicalise` accept `metadataHeaders`, header names the caller declares carry no meaning for solutions. Declared headers are covered and leave the value domain resolved, so value rules beside them lower, and canonicalise proofs carry them. Naming a header the spec gives a meaning is an error.
- The normal form keeps its header classification in one list (`src/semantics/headers.ts`): the case text headers (`title`, `setter`, `source`, `case`, `status`, `flags`) are covered and never affect the value domain; any other header keeps its uncovered result.
- The normal form lowers Double Arrow declarations to an exact sum equation between the line and the two ends, with Distinct over the ends and the line when `repeats` is false. Channel V converts to D when the effective-value domain is resolved. Ends that are not two cells and repeated cells under `repeats` false stay uncovered.
- The normal form lowers Absent Digits declarations to an Allowed restriction at every marked cell, excluding the listed digits. Digits outside the alphabet exclude nothing, and the order and repetition of the list do not matter.
- The normal form lowers X Sum declarations to an exact disjunction over the prefix length: the first digit (or a stated `count`) gives how many cells from the clue end to add, and those cells total the sum. Repeated cells and sums that are not safe integers stay uncovered.
- The normal form lowers Between Line, Between and Lockout declarations to an exact disjunction on which end holds the smaller digit, built from ordered pair relations. Lines that repeat a cell or touch an end, ends that are not two different cells, and gaps that are not safe integers stay uncovered.
- The normal form lowers cages with a total (`total` or `sum`, with or without `repeats`) to an exact SumTotal building block over the cage cells, without expanding the cage into tables. It reads the effective value channel like the other value rules and is uncovered when that domain is unresolved.
- The normal form lowers complete Arrow declarations to exact sum equations: a one-cell bulb compares effective values, and a bulb of several cells is its decimal number of printed digits in the supplied order, with every bulb digit limited to 0..9. Each shaft over a shared bulb stays its own equation. Partial arrows are lowered on alphabets of nonnegative integers when the shaft repeats no cell, as an exact disjunction over the finite bulb readings; other partial arrows and bulbs whose decimal weights pass 1,000,000 occurrences stay uncovered.
- The normal form lowers an explicit `edges` list on Whispers, Close Whispers, Parity, Primality and Shifter lines to the rule's pair test on exactly those edges. Window and whole-set line rules keep `edges` uncovered.
- The normal form lowers Zipper lines to exact sum equations on printed digits: all mirrored pairs share one sum, and on an odd line each pair sums to the centre digit unless `centre` is `ignore`. `required` on an even line is unsatisfiable. A cell visited twice counts at each visit.
- The normal form lowers Sandwich to an exact disjunction over the positions of the first crust occurrences, on printed digits. Default crusts (lowest and highest symbols) sum the cells between their first occurrences when both occur, and require nothing when either is missing; `endpointOccurrences` adds the exactly-one and at-most-one policies. Stated `crusts` sum between the first two crust cells. A cell listed twice, a sum that is not a safe integer and clues past 1,000,000 value combinations stay uncovered.
- Rule pages can list the forms they replace in `replaces`, and `canonicalise(page, board)` rewrites a case to each set's canonical rule when the normal forms prove the rewrite. The first templates drop a printed-digit channel setting, merge per-pair `not` lines into one Negative and join touching pieces of one whispers or parity line. `lint:library` refuses two pages that claim the same replaced form.
- `canonicalise` reads a declaration's cell list from its positional cells or its `line` setting. Touching pieces written with the setting join and keep that form, and pieces mixing the two forms are kept with a reason.
- The normal form lowers Diagonal Sum and Little Killer to exact sum totals over the listed cells, counting a cell once per occurrence. Channel V converts to D when the effective-value domain is resolved; `repeats` false adds distinct values on the ray. A ray listing a cell twice is an exact disjunction over that cell's values; rays past 20,000 such readings stay uncovered.
- A formula that fails to lower keeps the whole board as scope only when it ranges over the board; a comprehension or existential over the cells that requires its binder to belong to a given collection is scoped to that collection. `allowedWithWork` returns the steps spent beside the candidate support; `allowed` is unchanged.
- Minesweeper Circles, Cave Layout, Shade Run Sums, Parity Bridge, Helping Cages and Signed Shading Cage add reusable shading, counting and cage relationships. Signed Shading Cage explicitly selects whether a wholly shaded cage is allowed.
- The normal form lowers Extremum and Neighbour Extremum to ordered pair tables on printed digits: each marked cell is strictly below (min) or above (max) every cell of its neighbour set, which is the explicit `neighbours` or the cells one `neighbourhood` move away, outside the marked set when `boundary` is true. With `exhaustive` true each unmarked cell also needs a strictly lower (min) or higher (max) cell one move away. Channel V converts to D when the effective-value domain is resolved. Expansion past 1,000,000 value combinations stays uncovered.
- The normal form lowers Equality Cage on printed digits: the cage digits differ, avoid the middle value of the alphabet, and balance low odd against high even counts and low even against high odd counts. The result is Distinct plus an exact disjunction over class assignments; odd-sized cages are false, and cages past 1,000,000 value combinations stay uncovered.
- The normal form lowers Skyscraper to an exact disjunction over which positions are record highs: each visible position is strictly above the previous one and every other position is at most the last visible one before it. A count outside 1..length is false, a cell listed twice is read at each occurrence, channel V converts to D when the effective-value domain is resolved, and rays past 1,000,000 value combinations stay uncovered.
- The normal form lowers Numbered Room to an exact disjunction over the alphabet symbols k from 1 to the list length: the first cell holds k and the cell at position k holds the stated digit. A first digit outside that range, or a stated digit outside the alphabet, can never be met. It reads printed digits and is covered whatever the effective-value domain is.
- The normal form lowers Counting Circles on printed digits: each alphabet digit d appears in no circle or in exactly d circles, and a digit that is not a whole number from 1 to the number of circles appears in none. Circles that list a cell twice stay uncovered.
- The normal form lowers Index to a conjunction of numbered rooms, one per marked cell: with `axis` "column" a marked cell in column k holding d means the cell at position d of its row holds k, and with `axis` "row" the same holds along columns. A row or column with an inactive cell stays uncovered.
- The normal form lowers Blocked Sight with listed blockers on printed digits: each ray is read up to its first blocker (kept only with `includeBlocker`), the origin joins once with `includeOrigin`, and the count or sum of the selected cells plus `offset` is compared with `total`, the sum of `targetCells` or the origin digit. Blocking by digit, parity, shading or region, record highs, occurrence counts, channel V and offsets against target-cell sums stay uncovered.
- The normal form lowers Index Line to a conjunction of numbered rooms over the whole line, one per position: a digit X in position N means the digit in position X is N. A digit outside 1 to the line length, or a position number outside the alphabet, is not met. A cell listed twice is read at each position.
- The normal form lowers N Mate on printed digits: Distinct over the cage and an exact disjunction over the clue digit n and the digit v at position n of the ray, with the cage totalling n + v. A clue digit outside 1 to the ray length is not met, and a cage cell written twice counts once.
- The normal form lowers Super Indexing on printed digits: every active cell at row r, column c holding d needs r at row c, column d and c at row d, column r. The result is a conjunction over the active cells of a disjunction over the digits d from 1 to the board size. Inactive partner cells, row or column numbers outside the alphabet and boards with unequal rows and columns are never met.
- The normal form lowers Coordinate Arrows on printed digits: each arrow is a disjunction over the base digit a (a row) and the tip digit b (a column) whose named cell holds a + b, and every pair of arrows must differ in its base digit or its tip digit. A coordinate off the board or inactive, a sum outside the alphabet, and an arrow that does not list a base and a tip are never met.
- The normal form lowers Coordinate Arrows on printed digits: each arrow is a disjunction over the base digit a (a row) and the tip digit b (a column) whose named cell holds a + b, and every pair of arrows must differ in its base digit or its tip digit. A coordinate that can name an inactive cell stays uncovered; a coordinate off the board, a sum outside the alphabet, and an arrow that does not list a base and a tip are never met.
- The normal form lowers Pointing Arrow on printed digits to an exact disjunction over the clue digit k: the cell at position k of the ray is greater than the clue digit, less than it, equal to the `source` cell, or the first 5 on the ray. A clue digit outside 1 to the ray length is not met, and `source` with no source cell is never met.
- The normal form lowers Pointing Thermo on printed digits: strict increase along the line, and the tip digit k is a position on the ray whose cell holds the bulb digit. A tip digit outside 1 to the ray length is not met, a cell written twice in a row can never increase, and a one-cell line is its own bulb and tip.
- The normal form lowers Lookup on printed digits in single and count modes: each source cell's digit plus `offset` is a position on the list whose cell stands in `relation` to the target (a fixed number, a target cell or the source itself), with `firstMatch`, `reverseRelation`, an `increasing` path and `total` equal to none or all of the sources. Queries mode, partial totals, the effective-value channel and `firstMatch` with a reversed `less` stay uncovered.
- The normal form lowers Flat Mates on printed digits to one disjunction per active cell: the cell holds another digit, the active cell directly above holds `above`, or the active cell directly below holds `below`. Neighbours that are off the board or inactive offer no alternative, and a marked digit outside the alphabet is never held.
- The normal form lowers Window Classes to class coverage in every two-by-two window: for each window and each class of the stated system (parity, remainders modulo 3, or entropy thirds of the alphabet in its listed order), some cell of the window holds a printed digit of that class. Entropy over an alphabet whose size is not a multiple of three, and windows that include an inactive cell, stay uncovered.

- Unique Primes, Stingy Cages and Ziffer Lines bind Number Property, Profile Relation and Mirrored Pairs. Optional operand collections, allowed results, result distinctness, shared-support bounds and centre-clued differences extend those blocks while preserving existing defaults.

- Portable case compilation and rule evaluation with source-linked conflicts, three-valued partial assignments, shading conditions, shared answer channels and complete-answer checking.
- Exact candidate support over bounded rule scopes, with explicit size and formula-resource refusals.
- `shadingScope(rule)` names the cells whose shading a rule reads, so hosts know which declarations need a shading answer.
- Executable public examples, alias examples, candidate properties and per-rule timing reports. Document the API and finite evaluation domains in `docs/evaluator.md`.

### Fixed

- A custom rule parameter that declares `default: []` in YAML keeps that empty list for list, set and path types (including named aliases), so a case that omits the parameter receives an empty list instead of undefined.

## 1.0.0

### Added

- Marked Pairs shares XV and Kropki meanings, with `allGiven` selecting all Xs, Vs, white dots or black dots and deriving exceptions from each kind’s own marks. Case migration recognises exact marking negatives, including unreferenced generated pair/negative IDs, and flags combined exceptions involving a relation without its own marks. Migrated declarations use XV or Kropki for one family and Marked Pairs for mixed families, compact cell-pair lists and nondefault parameters. Authored and referenced labels retain their quoting; unreferenced generated labels are removed.

- Liar Cells assigns independent real values, counts liars in supplied groups and controls written-digit and real-value distinctness separately.
- Lying Clues counts complete false clues in an explicit scope, using exactly, at-least or at-most. Nested clues retain their contracts, defaults and shared answer channels.
- German Whisper Lies and Region Sum Lies provide sourced examples of shared real-value assignments.
- Separate catalogues for familiar rules, reusable blocks and mathematical predicates, with icons for every named rule.
- Source and decoded declaration migration, including IDs, negation, conditions, drawing elements and embedded formulas.

### Changed

- Rename Extra Regions to Regions (`regions`), Parity to Parity Line (`parity-line`), Parity Cells to Odd Even Cells (`odd-even-cells`) and Between to Between Line (`between-line`). Retain the old kinds, published routes and icons; migrate declarations with the same parameters and meanings. Add searchable aliases for boxes, irregular regions, disjoint groups and odd/even cells.

- Little Killer is now Diagonal Sum. Little Killer remains an alias, including old declarations, searches and its published page route. This completes the remaining naming item in #26.
- Add Whispers 5 (German Whispers) and Whispers 4 (Dutch Whispers), binding the same Difference Line block with fixed gaps. General Whispers declarations retain their supplied gap.
- Add Pill, Pill Arrow and Arrow Pill as Arrow aliases for decimal bulbs; white dot, black dot and Kropki dots as Kropki aliases; and X and V and XV clues as XV aliases.
- Migrate Pair per declaration to XV for sums of 10 or 5 and Kropki for difference 1 or ratio 2 when the target settings match exactly. Preserve other relations, channels, negative scopes and source annotations. Teach these names in the writing skill.

- Rename Killer Cage to Cage. Killer Cage and Killer remain aliases; killer and killer-cage declarations load and migrate to Cage; the published killer URL remains available. Negative, Anti King and Anti Knight retain their names.
- Use moveRelation for orthogonal steps, diagonal steps, king steps, knight moves and bishop lines. Numeric properties, value support and class counts use parameterised predicates in place of duplicated helpers.
- Share aggregate equations, relation scopes, class patterns, digit profiles, lookups, value sets, aggregate groups, mirrored pairs, selected stretches, endpoint ranges and neighbour extrema through formula-owning blocks.
- Make Quadruple's existing distinct-cell selection explicit in its binding; Outside retains supplied occurrences.
- Report rules binding the same block under “same block, different settings”, including their differing bindings. Identical instantiated formulas remain duplicate errors.
- Retain Whispers and Regions as the public names for legacy Whisper and Unique declarations. Preserve the published killer, whisper, unique, index-count and aggregate-relation routes as thin alias or migration pages.

### Breaking

- Replace convenience formula helpers with aggregate, repeatPolicy, allDifferent, connected, marked, lookupRelated, queryHit and the parameterised predicate families described in the migration guide.
- Remove unused Index strips and Value Modifier name parameters; migration drops both.
- Required collection inputs may use `allow_empty: true` with a documented empty meaning, while omission remains rejected.
- Lookup no longer defaults `cell` to r1c1; single mode requires its presence, while count and query modes omit it. Digit Profile classes/counts, Constructed Regions borders/joins, Cage Shapes free and Negative except are required inputs. Empty collections must be supplied explicitly.

## Unreleased (0.3.0)

### Added

- Shared-name reference checks require one constructor per shared typed name, including custom readers and reified truth labels. Route clues and groups read constructor closure; all shared constructors and readers use the existential class. Invalid recurrence loops, loop endpoints, reversed non-decimal operands, fractional coordinate transforms and empty partition scopes are lint errors.
- Route crossings cover proper interior intersections of straight steps of any length. Region Clue uses `rays` for boundary-count lists; Digit Profile uses `exhaustive` for class coverage. Counting Circles, Constructed Regions and Aggregate Relation bind parameters of their general rules.

- Shared case-wide selections, truth labels, integer assignments, numeric channels and symbol-entry channels. Selection, Marking Relation, Battenburg, Shade Components and Japanese Sums compose marking, maximal connectivity and ordered run clues.
- Mapped Values supplies affine, explicit-map and bounded free values on shared masks and scoped channels. Paired Roles constrains one-to-one role pairings on shared undirected networks. Existing Value Modifier and Yin Yang meanings are unchanged.
- Choice Count and Assignment compose rule reification, cardinality, bijections and explicit conditional meanings. Cell Entries and Symbol House express multiple entries, missing symbols and repeated house symbols without changing the standard Sudoku board contract.
- JSON-quoted string defaults in generated consumer contracts. Mapped Values declarations preserve their channel constraints during semantic normalisation.

- Relation Scope composes inclusive pair alternatives over bounded all-pair, move and incident-edge scopes. Local Sequence supplies directed transitions, integer divisibility and two-term recurrences. Index Count and Coordinate Count count bounded lookup hits with independent channels and coordinate transforms.
- Aggregate Equation composes weighted powers, sums and products of shared aggregate operands. Subset Total requires or excludes bounded subsets. Digit Profile supplies arbitrary overlapping classes, class windows and self frequencies; Profile Relation compares sets or multisets.
- Number Property applies primality, compositeness, integer powers, divisibility and decimal place counts to aggregate or decimal results. Derived Count counts matching or distinct derived results and ranks targets. Neighbour Count counts inclusive relation matches over explicit neighbourhoods.
- Named shared route, network and partition assignments. Route, Route Group and Route Clue compose paths and loops with geometry, crossing, touch, coverage and numeric conditions. Maze and Network Clue compose connected networks, trees, degrees and route membership.
- Region Partition, Region Shape and Region Clue compose connected regions, partial-board islands, tilings and galaxies with size, shape, symmetry, separation, aggregate and boundary-crossing conditions. Existing Constructed Regions keeps its local existential meaning.
- Public declaration examples and generated contracts for the new rules.

- Parameter-bound shorthands with checked `alias_bind` expressions. Quadruple shares Outside's occurrence definition; Kropki, Bremban, Slow Thermo and the anti-move rules bind canonical parameters while retaining their names, URLs and defaults.
- Shared numeric channels, pair relations, monotonicity, aggregate operands, extrema and bounded lookup. Lookup supports independent index/result channels and configurable targets and relations. Existing arithmetic and indexing pages use these shared operations.
- Explicit line networks with junction windows and whole-component Renban/Nabner. Modular window length is independent of modulus. Renban/Nabner expose channels, repeat policies and stopping-prefix selection; Thermo supports either-end orientation.
- Difference Line distinguishes equal absolute differences, different absolute differences and signed steps. Split Pea uses reversible endpoint decimal reading. Prefix Sum and Blocked Sight share stopping selectors, channels and aggregate output. Sum Partition distinguishes overlapping coverage from disjoint partitions, including cyclic cuts.
- Shared graph traversals, reversal, cyclic cuts, maximal region runs, ordered rays and record-high visibility. Line Choice retains its printed-digit Renban branch and vacuous ordered two-cell modular/entropic choices. Explicit networks require distinct classes across components shorter than their window.
- Declaration contracts, worked examples and mathematical notation for these rules. Rule comparison reports which declarations it can compare.

- Decorative rule symbols beside library names and page headings, with a page-slug mapping, theme colours and MIT licensing.
- Region Sum `combine` selects separate visits or one total per visited primary region. Zipper `centre` selects the existing odd-centre rule, independent pair sums or a required odd centre. Existing defaults are preserved; portable declaration contracts and region-sum semantic lowering include the new choices.

- Clearer Arrow, Allowed Digits, Bremban, Entropic, Greek Carpet and Clone explanations, with cage and cloned-area examples.

- `decoration` declares explicitly decorative marks with a true formula, optional notes and drawing element IDs. Decorations remain metadata in semantic normal forms. `W_DECORATION_OVERLAP` warns about overlapping declarations for the same drawn element. Portable contracts, examples and setter guidance cover the declaration.

- Case-local custom rule ids (`#id`) independent of headings, with optional publication URLs and file-scoped references.
- Embedded custom formulas use the library parser, names, types, guards and logical-class checks, with diagnostics in the case file.
- A whole-grid custom white-dot pair example in the setter skill.

### Breaking

- Tightened Region Sum’s published formula to require the ordered maximal primary-region runs, matching the existing semantic lowering. The previous r1c1-r1c2-r1c3 example split one box into two visits; that split is now rejected. The corrected crossing-boundary and return-visit examples show the requirement.


- Correct the partial Arrow formula to require a non-empty omitted shaft remainder made from allowed digits. Equality is rejected for positive-only alphabets and can hold when zero is allowed. The rule’s logical class is now existential; the declaration syntax is unchanged.

- Custom parameters now require explicit types and custom formulas must pass the formula checker. Previously accepted malformed or unguarded formulas are rejected. Custom definitions may declare `class`, defaulting to first-order.


- Semantic line coverage for strict and slow thermometers, German/Dutch and close whispers, parity, modular and entropic windows, palindromes, Renban, Bremban, Nabner, primality, summit, shifter and region sums. Paths retain direction, closure, cyclic windows and repeated occurrences; region sums validate their supplied region runs and preserve exact sum coefficients.
- A declaration lexer, located AST, page-derived grammar and canonical writer. Case checks and semantic lowering share one parsed declaration pipeline. The portable grammar contracts are generated from rule pages. See `spec/declarations.md` and `spec/declarations.ebnf`.

- `W_CASE_HOUSES` for regions without house constraints, with a rejecting six-symbol fixture and a complete 18-house repair.

- Setter-skill guidance and worked examples for structured input inventories, fog setup, complete line geometry, dot appearance, relation-specific negative exceptions and localised uncertainty.
- A rejecting fog-header fixture and passing repair for `links: null`.

- Case-local custom definitions referenced by section fragments, with complete definitions under their named headings. Setter-chosen external HTTPS Markdown URLs remain supported.
- Case checks for required parameters, unknown and repeated keys, nested value types, cell bounds, board fields, alphabet and givens. Board-dependent omission values must be explicit on non-standard dimensions or alphabets.
- Diagnostics `E_CASE_BOARD`, `E_CASE_PARAMETERS` and `E_CUSTOM_DEFINITION`, with rejecting case fixtures and passing repairs.

- Compare rule declarations on a specified board and locate their differences. Comparison supports houses, unique, clone, diagonals, chess and scoped moves, allowed digits, parity cells and cages without totals. Other declarations report why they cannot be compared. The `compare` API is unchanged.

- Semantic coverage for pair keywords, Kropki, quadruple and outside multiplicities, scoped negative relations with explicit exceptions, and fog play state. Exact pair tables use the supplied alphabet. Fog comparison preserves missing versus empty links; `visibleCells` computes current reveals from entries and answer availability.

### Changed

- Clarified English definitions against Sudoku U’s standard constraint variants: shared arrow bulbs, optional cage totals, negative dots and XV, repeated quadruple digits, 6-symbol classes, shout and whisper gaps, indexing, fortress cells, clone composition, look-and-say groups and permitted repetitions. These wording edits preserve their meanings; formula corrections are listed separately.
- Corrected the Region Sum worked example to cross a standard box boundary. Documented comparison coverage and remaining rule proposals in `docs/reports/standard-phrasing.md`.

- Instance IDs accept readable hyphenated, dotted, digit-leading and Unicode names. Reserved declaration words, cells, paths, dimensions and numbers require JSON quotes. The parser, canonical writer, specification and setter skill share this contract; parameter and reference syntax are unchanged.

- Declaration reading uses one front end in place of the prefix regular expression, whitespace/JSON tokenizers and semantic per-kind decoding. Existing diagnostic codes are retained. Semantic reading now rejects invalid pair declarations through the same grammar as case checking.

- Open Rules skill convention F3 treats rules or clues declared wrong, false or never correct as failures of each named instance. Guidance uses existing negation forms and includes a colour-based line example without imposing an opposite rule or merely negating a combined statement.

- Open Rules skill conventions F1–F2 and P1–P3 cover line continuity and membership, questions about ambiguous intent, recommendations tested against a stored solve, and final-answer riddles. References document `storedSolve` input and flags carrying both readings and test evidence, with a worked distinguishing test. Removed guidance that split connected same-colour lines to fit a reading.

- Setter-skill guidance now requires explicit normal Sudoku houses on non-standard boards, reads full sentences and domain context before questions, limits ambiguous grouping to the disputed strokes, and preserves clear clauses beside malformed relations. Worked examples cover six-symbol houses, stated renban length and independent slow-thermo/clone clauses.

- Feature headers reject a supplied `null` for an optional value instead of treating it as absent. In fog setup, omit `links` for neighbourhood reveal or supply a list for linked reveals.

- The setter skill declares fully understood custom rules with in-file definitions when no external URL was supplied, and lists the parameters to state explicitly on non-standard boards.
- Embedded external custom definitions are resolved locally and no longer counted as deferred URLs.

### Fixed

- Semantic normalisation resolves Sudoku box geometry before lowering regional lines, so omitted standard regions and explicitly supplied regions produce equivalent complete forms regardless of declaration order.

- Fog correctness follows the published play predicates with and without an answer, including given values and partial answer coverage. Off-board trigger spots are accepted and never fire; links with identical trigger sets share the union of their lights.
- Repeated-cell multiplicities reduce to canonical weights and singleton membership. Duplicate negative relations are removed before finite expansion is charged.

### Breaking

- Case files moved out of the library; they are kept by Sudoku Sleuth. The `cases/` folder, the generated `/cases/` pages and raw case routes, and the `cases` count in the build result are gone. The checker still reads a case file given to it, and a folder passed to `openrules lint` still checks a `cases/` folder beside `rules/` when one exists.

## 0.2.0

### Breaking

- The reading layer is removed. These exports are gone: `readCase`, `readingLibrary`, `align`, `readingText`, `itemLines`, `itemsLabel`, `publicReading`, `partCells`, `partText`, `lintReadings`, `readingChecks`, `READING_FORMAT` and the `Alignment`, `CaseReading`, `ItemList`, `Part`, `ReadingRow` and `ReadingLibrary` types.
- The `reading:` front-matter block (with `terms`, `variants`, `parts`, `header`, `group_by`) is gone from every rule page, and `type_readings:` from `predicates.md`. A page that still carries them is ignored by the checker.
- The diagnostic codes `E_READING_FIELD`, `E_READING_PLACEHOLDER`, `E_READING_PARAMETER` and `E_READING_EXAMPLE` are removed, and `spec/readings.md` with them.
- A `fog:` block in a case header is now checked: an unknown field, a wrong type, a cell off the grid in `lights` or `initiallyLit`, or a link with no trigger is rejected.

### Added

- The play-state domain: the `play` declaration prefix, the player's entries, `answered`, `known`, `correct` and the general `visible` predicate in `predicates.md`. See `spec/play-state.md`.
- Feature pages with `domain: play-state`, `defines`, `header`, `parameters`, `requires` and their own `play` declarations. Fog is defined this way in `rules/fog.md`. The prelude front-matter key `feature_predicates` lists the predicates a feature may define (today `visible`).
- Diagnostics `E_PLAY_DOMAIN`, `E_PLAY_DEFINITION`, `E_FEATURE_REQUIRES` and `E_FEATURE_CONFLICT`.
- `sudoku.md` states that a given cell holds its given digit.
- Fog conformance fixtures run against the page's own formula, with four new fixtures.

## 0.1.1

Release workflow: publish to npm from a version tag.
