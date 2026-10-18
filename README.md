# Open Rules

Open Rules is a shared library of Sudoku rule definitions. Each kind has a stable Markdown URL, a mathematical definition, parameters, and a worked example. A case file refers to those kinds through a library root. Published meanings stay fixed; a different meaning gets a new kind.

The public site is [rules.sudoku-sleuth.com](https://rules.sudoku-sleuth.com/). Readers use the HTML pages; tools use the unchanged Markdown files.

## Content

- `rules/<kind>.md`: rule pages with YAML front matter.
- `rules/predicates.md`: shared mathematical definitions, with `document: prelude` and no `kind` field.
- `rules/fog.md`: the fog setup feature (`document: feature`, `domain: play-state`): its case-file header, parameters and the maths that define which cells are visible. `tests/fog/` holds its conformance fixtures, run against that formula.
- `scripts/`: static generator and lint entry points.
- `src/`: portable formula compiler and the `openrules` file-reading CLI.
- `spec/`: formula grammar, type contract, logical classes, diagnostics and the [play-state](spec/play-state.md) domain. The executable shared definitions live in `rules/predicates.md`.
- `site/style.css`: local light and dark styles.
- `plugins/open-rules/skills/open-rules/`: the shared setter skill and references loaded as needed.
- `tests/fixtures/`: three sample rule pages, shared predicates, and one sample case file. Fixtures are test inputs only.

This repository holds the library definitions and the format of a case file. It holds no case files: those are kept by Sudoku Sleuth. The generator reads `rules/` in this repository. Fixtures are not imported automatically. The homepage index is generated from the rule pages.

## Write a case

Use cell coordinates and the relationship keywords declared on each rule page:

```rules
sudoku 9x9
pair-1: pair r1c1-r1c2 ratio 3
pair-2: pair r4c4-r4c5 difference 2
pair-3: pair r2c2-r3c2 sum 10
kropki r5c1-r5c2 white
```

Pair also supports `at-least n`, `less`, `multiple` and `shift`; [pair.md](rules/pair.md) defines them. Kropki is shorthand for pair: white means `difference 1`, black means `ratio 2`. A dot's painted colour is drawing metadata. State every other relationship with pair keywords, including ratio 3 or grey/brown dots. See [syntax.md](rules/syntax.md) and the skill's [worked cases](plugins/open-rules/skills/open-rules/references/examples.md) for full files.

## Local commands

Use Bun **1.2.23** (recorded in `.bun-version`).

```sh
bun install --frozen-lockfile
bun run lint:yaml
bun run lint:spec
bun run lint:skill
bun test
bun run typecheck
bun run build:package
bun run build
```

`bun run lint` runs YAML lint, spec lint, and skill lint in order. `lint:yaml` parses front matter, rejects duplicate keys, and checks page slugs, required metadata, and canonical rule URLs; pass a file path to check one file. `lint:spec` now parses rule formulas, resolves declarations and checks types against `rules/predicates.md`. `lint:skill` checks skill metadata/references and runs the lint entry points on its case examples. Case headers and references to known kinds are checked too. Declared pair and Kropki keyword parameters are checked. Case parameters are checked against the published signatures, including required inputs, nested types and cell bounds. Board data, givens and embedded custom definition references are checked. See [the case-file contract](spec/case-files.md). External URLs without embedded definitions are deferred; fetching, custom formula execution and example verdicts remain pending.

## Formula package

The package is `@sudoku-sleuth/open-rules`, with the CLI `openrules lint`. Build it locally before running the packaged command:

```sh
bun run build:package
node dist/cli.js lint rules
bun run openrules lint rules --json
bun run openrules lint /path/to/rule.md --prelude rules/predicates.md
```

Exit codes: `0` for accepted formula pages, `1` for located diagnostics, `2` for usage or file errors. Diagnostics carry a stable code, a setter-facing message and start/end source positions; technical details are separate. Every parameter needs an explicit front matter `type`, such as `path<cell>`. Expressions use the [grammar](spec/grammar.ebnf), [types](spec/types.md) and [shared declarations](rules/predicates.md). Case headers and known references are checked now; rule parameters, boards and embedded custom definitions are checked using the [case-file contract](spec/case-files.md). Fetching, custom formula execution and example verdicts are separate phases.

The portable entry exports `parseFormula`, `parsePrelude`, `checkFormula`, `compilePrelude`, `compilePage`, `compileLibrary` and exact rational arithmetic. It performs no I/O and imports no Node APIs. Callers supply `{file, text}` pages; future URL loading will take an injected fetch. The CLI owns file access.

Rejecting Markdown fixtures and their repairs live in `tests/invalid/` and `tests/valid/`. Tests assert every full diagnostic in `tests/invalid/expected.json`; update expectations only after reviewing a deliberate diagnostic change. The [integration report](docs/reports/library-integration.md) records the library migration, rejection corpus and checks.

Alias pages declare their own `kind` and `alias_of: <target-kind>` (or `aliasOf`), with no parameters or formula. Targets must be ordinary rule definitions. Both alias routes are served, and their pages link to the target. The catalogue is `/`; its Markdown index is `/README.md`, declared with `document: home`. The `index` kind has `/index.md` and `/index/`. Only `cases` and `style` remain reserved.

Build output goes to `_site/`. Each rule produces `/<kind>.md` and `/<kind>/index.html`; shared definitions use the same layout. The generator also writes the index, local stylesheet, shape icons, font, search script, `.nojekyll`, and `CNAME`.

For a fixture preview:

```sh
bun run build --source tests/fixtures
```

This replaces `_site/` with the fixture preview. Run `bun run build` again to build repository content.

The homepage browses Lines, Edges, Cells, Cages, Outside, Regions and Global. Rows use each page’s opening meaning; Kropki uses the plain white/black reading. An optional recognised `shape` selects the group; otherwise `ruleShape` in `scripts/content.ts` classifies the kind and parameters. Aliases share the canonical row and keep their own pages. Search includes meanings, aliases, German/Dutch whispers and XV keywords, and searches across shapes. Without JavaScript, every group remains visible and the shape links jump to its heading.

Rule formulas render as native MathML with the original notation retained in a text annotation. The Bureau mark, icons and display font are local assets; light and dark use the same layout with brand colour tokens. Source Markdown and canonical URLs stay unchanged. `/writing/` provides the checker and AI skill instructions; `/contributing/` renders the contribution guide.

## Propose a rule

Open a pull request adding `rules/<kind>.md` and a worked case. Describe the rule's meaning, its parameters, and why an existing kind does not express it. Include one satisfying assignment and one that breaks it. Follow [CONTRIBUTING.md](CONTRIBUTING.md).

## Use the AI skill

The [Open Rules skill](plugins/open-rules/skills/open-rules/SKILL.md) helps setters turn puzzle text and drawings into a case file, or draft a new rule page and PR description. Both plugins load the same skill folder.

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

For any agent that reads Agent Skills, copy the entire `plugins/open-rules/skills/open-rules` folder, including its references, into that agent's skills folder. Common locations:

| Location | Use |
| --- | --- |
| `~/.claude/skills/open-rules` | Claude Code personal skill |
| `~/.codex/skills/open-rules` | Codex installations using the Codex skills folder |
| `~/.agents/skills/open-rules` | Current Codex personal skill location |
| `.agents/skills/open-rules` | Project skill for agents that read this location |

For a project install, run from this checkout:

```sh
mkdir -p .agents/skills
cp -R plugins/open-rules/skills/open-rules .agents/skills/
```

Use `/open-rules` for a copied Claude Code skill, or `$open-rules` in Codex. [Claude Code skill locations](https://code.claude.com/docs/en/skills) and [Codex skill locations](https://developers.openai.com/codex/skills/) describe discovery.

## Automation

CI runs YAML lint, spec lint, skill lint, `bun test`, type checking, package build and site build serially in one job on pull requests and merge groups, with a three-minute timeout. Pages builds and uploads `_site/` in a read-only job on pushes to `main`. A separate deploy job holds Pages and identity-token write permissions and uses the `github-pages` environment. Action revisions and dependency versions are pinned.

Configure the repository's Pages source as **GitHub Actions** and its custom domain as `rules.sudoku-sleuth.com`.
