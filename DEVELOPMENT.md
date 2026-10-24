# Developer guide

Use the [README](README.md) for an introduction, [Rules](RULES.md) for writing case files, and [Contributing](CONTRIBUTING.md) for changes to the library.

## Repository layout

- `rules/<kind>.md`: named rules and building blocks, distinguished by `layer` in YAML front matter.
- `rules/predicates.md`: shared mathematical definitions, with `document: prelude` and no `kind` field.
- `rules/fog.md`: the fog setup feature (`document: feature`, `domain: play-state`): its case-file header, parameters and the maths that define which cells are visible. `tests/fog/` holds its conformance fixtures, run against that formula.
- `scripts/`: static generator and lint entry points.
- `src/`: portable formula compiler and the `openrules` file-reading CLI.
- `spec/`: formula grammar, type contract, logical classes, diagnostics and the [play-state](spec/play-state.md) domain. The executable shared definitions live in `rules/predicates.md`.
- `site/style.css`: local light and dark styles.
- `plugins/open-rules/skills/open-rules/`: the shared setter skill and references loaded as needed.
- `tests/fixtures/`: three sample rule pages, shared predicates, and one sample case file. Fixtures are test inputs only.

This repository holds library definitions and the case-file format. Puzzle collections live separately. The generator reads `rules/` in this repository. Fixtures are not imported automatically. The homepage index is generated from the rule pages.

## Local commands

Use Bun **1.2.23** (recorded in `.bun-version`).

```sh
bun install --frozen-lockfile
bun run lint:yaml
bun run lint:spec
bun run lint:skill
bun run lint:declarations
bun run lint:library
bun test
bun run typecheck
bun run build:package
bun run build
```

`bun run lint` checks YAML, formulas, skills, generated declaration contracts and library tables. Regenerate tables with `bun scripts/library-report.ts` after changing public page metadata. `lint:yaml` parses front matter, rejects duplicate keys, and checks page slugs, required metadata, and canonical rule URLs; pass a file path to check one file. `lint:spec` parses rule formulas, resolves declarations and checks types against `rules/predicates.md`. `lint:skill` checks skill metadata/references and runs the lint entry points on its case examples. Case headers and references to known kinds are checked too. Declared pair and Kropki keyword parameters are checked. Case parameters are checked against the published signatures, including required inputs, nested types and cell bounds. Board data, givens, embedded custom references and custom formulas are checked, including parameter signatures, names, types, guards and logical class. See [the case-file contract](spec/case-files.md). External URLs without embedded definitions are deferred; fetching and example verdicts remain pending.

## Package and CLI

Install with your package manager:

```sh
bun add @sudoku-sleuth/open-rules
```

The package is `@sudoku-sleuth/open-rules`, with the CLI `openrules lint`. Build it locally before running the packaged command:

```sh
bun run build:package
node dist/cli.js lint rules
bun run openrules lint rules --json
bun run openrules lint /path/to/rule.md --prelude rules/predicates.md
```

Exit codes: `0` for accepted formula pages, `1` for located diagnostics, `2` for usage or file errors. Diagnostics carry a stable code, a setter-facing message and start/end source positions; technical details are separate. Every parameter needs an explicit front matter `type`, such as `path<cell>`. Expressions use the [grammar](spec/grammar.ebnf), [types](spec/types.md) and [shared declarations](rules/predicates.md). Case headers and known references are checked; rule parameters, boards and embedded custom definitions are checked using the [case-file contract](spec/case-files.md). Fetching and example verdicts are separate phases.

The [migration guide](docs/migration.md) documents `migrateCase`, `migrateDeclaration` and `migrationTable` for upgrading older files and decoded declarations.

Semantic comparison exports `normalise(file, board)` and `compare(a, b)`. They lower supported declarations to a versioned logical tree with board context, source links and per-declaration coverage. See the [normal-form specification](spec/normal-form.md) for the API, primitive meanings and coverage by kind.

The portable entry exports `parseFormula`, `parsePrelude`, `checkFormula`, `compilePrelude`, `compilePage`, `compileLibrary` and exact rational arithmetic. It performs no I/O and imports no Node APIs. Callers supply `{file, text}` pages. The CLI owns file access.

Rejecting Markdown fixtures and their repairs live in `tests/invalid/` and `tests/valid/`. Tests assert every full diagnostic in `tests/invalid/expected.json`; update expectations only after reviewing a deliberate diagnostic change. See the [diagnostic contract](spec/diagnostics.md) for codes and source locations.

## Evaluate a case

The portable entry also exports `compileCase`, `evaluate`, `allowed` and `checkAnswer`. Compile a `{file, text}` case with `compileCase`, check a declaration against a partial assignment with `evaluate`, find supported candidates with `allowed`, and check a complete board and its auxiliary answers with `checkAnswer`. Compilation resolves library rules, bound settings and embedded custom definitions. The host supplies source text and assignments; the evaluator performs no file access or URL loading. See the [evaluator guide](docs/evaluator.md) for assignment channels, verdicts and examples.

## Definition pages

Exact alias pages declare their own `kind` and `alias_of: <target-kind>` (or `aliasOf`), with no parameters or formula. Bound shorthands also declare their input contract and an `alias_bind` expression for every target parameter; they declare no formula. Named rules declare `layer: rule` and either bind a `layer: block` page directly or own a formula. Blocks declare `layer: block`, own a formula, and express a shared meaning or a general composition tool. Bound declarations are rules, never blocks. An exact alias may target a named rule that binds a block. Both alias routes are served, and their pages link to the target. The catalogue is `/`; its Markdown index is `/README.md`, declared with `document: home`. The `index` kind has `/index.md` and `/index/`. Only `cases` and `style` remain reserved.

## Site generation

Build output goes to `_site/`. Each rule produces `/<kind>.md` and `/<kind>/index.html`; shared definitions use the same layout. The generator also writes the index, local stylesheet, shape icons, font, search script, `.nojekyll`, and `CNAME`.

For a fixture preview:

```sh
bun run build --source tests/fixtures
```

This replaces `_site/` with the fixture preview. Run `bun run build` again to build repository content. `bun test` builds the complete site in a temporary folder and checks local links and HTML fragments.

The homepage browses Lines, Edges, Cells, Cages, Outside, Regions and Global. Rows use each page’s opening meaning; Kropki uses the plain white/black reading. An optional recognised `shape` selects the group; otherwise `ruleShape` in `scripts/content.ts` classifies the kind and parameters. Shorthands share the canonical row and keep their own pages and input contracts. Search includes meanings, aliases, German/Dutch whispers and XV keywords, and searches across shapes. Without JavaScript, every group remains visible and the shape links jump to its heading.

Rule formulas render as native MathML with the original notation retained in a text annotation. The Bureau mark, icons and display font are local assets; light and dark use the same layout with brand colour tokens. Rule symbols in `site/icons/rules/` are original Sudoku Sleuth artwork under the repository’s MIT licence. `site/icons/rules.json` maps page slugs to symbols; named rules keep their own symbol. Blocks carry no icon. The symbols inherit theme colours and are hidden from screen readers beside the rule name. Source Markdown and canonical URLs stay unchanged. `/writing/` provides the checker and AI skill instructions; `/contributing/` renders the contribution guide.

## Formula overlap

See [Library overlap](docs/overlap.md) for the shared families and comparison commands.

The duplicate guard normalises and inlines the prelude to depth three. Identical own formulas fail; pairs at or above 0.35 subtree Jaccard similarity need an explicit reason. `src/overlap-allowlist.ts` holds reasoned exceptions. A reachability check keeps the callable prelude free of unused names, including feature and documented custom-formula entry points.

## AI skill

The [Open Rules skill](plugins/open-rules/skills/open-rules/SKILL.md) helps setters turn puzzle text and drawings into a case file, or draft a new rule page and PR description. The Claude Code and Codex plugins load the same skill folder.

Install from a terminal with Claude Code:

```sh
claude plugin marketplace add sudoku-sleuth/sudoku-rules
claude plugin install open-rules@sudoku-rules
```

Or inside a Claude Code session:

```text
/plugin marketplace add sudoku-sleuth/sudoku-rules
/plugin install open-rules@sudoku-rules
```

Invoke it with `/open-rules:open-rules`. See the [Claude Code plugin installation guide](https://code.claude.com/docs/en/plugin-marketplaces).

Install from a terminal with Codex:

```sh
codex plugin marketplace add sudoku-sleuth/sudoku-rules
codex plugin add open-rules@sudoku-rules
```

Select the Open Rules skill in Codex or invoke `$open-rules`.

Refresh the marketplace when updates are published:

```sh
claude plugin marketplace update sudoku-rules
codex plugin marketplace upgrade sudoku-rules
```

For any agent that reads Agent Skills, copy the entire `plugins/open-rules/skills/open-rules` folder, including its references, into that agent's skills folder. For a project install, run from this checkout:

```sh
mkdir -p .agents/skills
cp -R plugins/open-rules/skills/open-rules .agents/skills/
```

Use `/open-rules` for a copied Claude Code skill, or `$open-rules` in Codex.

## Automation

CI runs YAML lint, spec lint, skill lint, `bun test`, type checking, package build and site build serially in one job on pull requests and merge groups, with a three-minute timeout. Pages builds and uploads `_site/` in a read-only job on pushes to `main`. A separate deploy job holds Pages and identity-token write permissions and uses the `github-pages` environment. Action revisions and dependency versions are pinned.

Configure the repository's Pages source as **GitHub Actions** and its custom domain as `rules.sudoku-sleuth.com`.
