# Changelog

Each release lists what changed. A change that breaks a published export, front-matter key or diagnostic code is marked Breaking.

## Unreleased (0.3.0)

### Added

- Case-local custom rule ids (`#id`) independent of headings, with optional publication URLs and file-scoped references.
- Embedded custom formulas use the library parser, names, types, guards and logical-class checks, with diagnostics in the case file.
- A whole-grid custom white-dot pair example in the setter skill.

### Breaking

- Custom parameters now require explicit types and custom formulas must pass the formula checker. Previously accepted malformed or unguarded formulas are rejected. Custom definitions may declare `class`, defaulting to first-order.


- Semantic line coverage for strict and slow thermometers, German/Dutch and close whispers, parity, modular and entropic windows, palindromes, Renban, Bremban, Nabner, primality, summit, shifter and region sums. Paths retain direction, closure, cyclic windows and repeated occurrences; region sums validate their supplied region runs and preserve exact sum coefficients.
- A declaration lexer, located AST, page-derived grammar and canonical writer. Case checks and semantic lowering share one parsed declaration pipeline. The portable grammar contracts are generated from rule pages. See `spec/declarations.md` and `spec/declarations.ebnf`.

- `W_CASE_HOUSES` for regions without house constraints, with a rejecting six-symbol fixture and a complete 18-house repair.

- Setter-skill guidance and worked examples for structured input inventories, fog setup, complete line geometry, dot appearance, relation-specific negative exceptions and localised uncertainty.
- A rejecting fog-header fixture and passing repair for `links: null`.

- Case-local custom definitions referenced by section fragments, with complete definitions under their named headings. Setter-chosen external HTTPS Markdown URLs remain supported.
- Case checks for required parameters, unknown and repeated keys, nested value types, cell bounds, board fields, alphabet and givens. Board-dependent omission values must be explicit on non-standard dimensions or alphabets.
- Diagnostics `E_CASE_BOARD`, `E_CASE_PARAMETERS` and `E_CUSTOM_DEFINITION`, with rejecting case fixtures and passing repairs.

- Portable semantic normalisation and comparison: explicit board context, finite logical primitives, located differences, rewrite provenance and exhaustive declaration coverage. Slice A covers houses, unique, clone, diagonals, chess and scoped moves, allowed digits, parity cells and untotalled cages. Unsupported declarations retain specific coverage reasons. The existing exact-rational `compare` signature is preserved.

- Semantic coverage for pair keywords, Kropki, quadruple and outside multiplicities, scoped negative relations with explicit exceptions, and fog play state. Exact pair tables use the supplied alphabet. Fog comparison preserves missing versus empty links; `visibleCells` computes current reveals from entries and answer availability.

### Changed

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
