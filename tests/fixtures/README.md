# Review fixtures

Copied unchanged from `open-rules/.build/open-rules/review` on 12 October 2026:

- `rules/thermo.md`
- `rules/modular.md`
- `rules/renban.md`
- `rules/predicates.md`
- `cases/to-the-revolution.rules.md`

These exercise the approved page and case format. They are not library imports. The default build excludes this directory.

`typed-prelude.md` preserves the slice 1 vocabulary for language regression fixtures. Production and package commands use `rules/predicates.md`; there is one public home for shared meanings.

`published-defaults.json` snapshots the 83 kind pages, their formula inputs, the shared prelude and worked assignments from upstream main at `fb4d533cb0ad9753eebbb636fc501588a0deb34b`, immediately before PR #24. Exact aliases use their canonical examples; Decoration includes both published accepting assignments. Sudoku's row example is embedded in a complete standard grid. The regression evaluates both versions with the same fragments and checks the published verdicts. Its single recorded difference is Region Sum's old split within one box, now rejected by the maximal-run formula correction in the 0.3.0 changelog. Tests for the corrected Region Sum example and return visits live in `shared-meanings.test.ts`.
