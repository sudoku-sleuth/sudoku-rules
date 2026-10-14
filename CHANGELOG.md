# Changelog

Each release lists what changed. A change that breaks a published export, front-matter key or diagnostic code is marked Breaking.

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
