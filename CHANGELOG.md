# Changelog

Each release lists what changed. A change that breaks a published export, front-matter key or diagnostic code is marked Breaking.

## 1.0.0

### Added

- Liar Cells assigns independent real values, counts liars in supplied groups and controls written-digit and real-value distinctness separately.
- Lying Clues counts complete false clues in an explicit scope, using exactly, at-least or at-most. Nested clues retain their contracts, defaults and shared answer channels.
- German Whisper Lies and Region Sum Lies provide sourced examples of shared real-value assignments.
- Separate catalogues for familiar rules, reusable blocks and mathematical predicates, with icons for every named rule.
- Source and decoded declaration migration, including IDs, negation, conditions, drawing elements and embedded formulas.

### Changed

- Rename Killer Cage to Cage. Killer Cage and Killer remain aliases; killer and killer-cage declarations load and migrate to Cage; the published killer URL remains available. Little Killer, Negative, Anti King and Anti Knight retain their names.
- Use moveRelation for orthogonal steps, diagonal steps, king steps, knight moves and bishop lines. Numeric properties, value support and class counts use parameterised predicates in place of duplicated helpers.
- Share aggregate equations, relation scopes, class patterns, digit profiles, lookups, value sets, aggregate groups, mirrored pairs, selected stretches, endpoint ranges and neighbour extrema through formula-owning blocks.
- Make Quadruple's existing distinct-cell selection explicit in its binding; Outside retains supplied occurrences.
- Report rules binding the same block under “same block, different settings”, including their differing bindings. Identical instantiated formulas remain duplicate errors.
- Retain Whispers and Extra Regions as the public names for legacy Whisper and Unique declarations. Preserve the published killer, whisper, unique, index-count and aggregate-relation routes as thin alias or migration pages.

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
