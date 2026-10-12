# Open Rules

Open Rules is a shared library of Sudoku rule definitions. Each kind has a stable Markdown URL, a mathematical definition, parameters, and a worked example. Case files refer to those kinds through a library root. Published meanings stay fixed; a different meaning gets a new kind.

The public site is [rules.sudoku-sleuth.com](https://rules.sudoku-sleuth.com/). Readers use the HTML pages; tools use the unchanged Markdown files.

## Content

- `rules/<kind>.md`: rule pages with YAML front matter.
- `rules/predicates.md`: shared mathematical definitions, with no `kind` field.
- `cases/*.rules.md`: case files, including their attribution and source links.
- `scripts/`: static generator and lint entry points.
- `src/`: portable formula compiler and the `openrules` file-reading CLI.
- `spec/`: executable shared signatures, formula grammar and type contract.
- `site/style.css`: local light and dark styles.
- `plugins/open-rules/skills/open-rules/`: the shared setter skill and references loaded as needed.
- `tests/fixtures/`: three sample rule pages, shared predicates, and one case. Fixtures are test inputs only.

Library content is imported separately. The generator reads `rules/` and `cases/` in this repository. Fixtures are not imported automatically. The homepage index is generated from the rule pages.

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

`bun run lint` runs YAML lint, spec lint, and skill lint in order. `lint:yaml` parses front matter, rejects duplicate keys, and checks page slugs, required metadata, and canonical rule URLs; pass a file path to check one file. `lint:spec` now parses rule formulas, resolves declarations and checks types against `spec/prelude.md`. `lint:skill` checks skill metadata/references and runs the lint entry points on its case examples. The formula phase explicitly reports case syntax, URL resolution and example evaluation as pending; it does not count case files as checked.

## Formula package

The package is `@sudoku-sleuth/open-rules`, with the CLI `openrules lint`. Build it locally before running the packaged command:

```sh
bun run build:package
node dist/cli.js lint rules
bun run openrules lint rules --json
bun run openrules lint /path/to/rule.md --prelude spec/prelude.md
```

Exit codes: `0` for accepted formula pages, `1` for located diagnostics, `2` for usage or file errors. Diagnostics carry a stable code and start/end source positions. Every parameter needs an explicit front matter `type`, such as `path<cell>`. Expressions use the [grammar](spec/grammar.ebnf), [types](spec/types.md) and [shared declarations](spec/prelude.md). Case checking and fetching definitions arrive in later slices; this package build is not a publication.

The portable entry exports `parseFormula`, `parsePrelude`, `checkFormula`, `compilePrelude`, `compilePage`, `compileLibrary` and exact rational arithmetic. It performs no I/O and imports no Node APIs. Callers supply `{file, text}` pages; future URL loading will take an injected fetch. The CLI owns file access.

Rejecting Markdown fixtures and their repairs live in `tests/invalid/` and `tests/valid/`. Tests assert every full diagnostic in `tests/invalid/expected.json`; update expectations only after reviewing a deliberate diagnostic change. The [source audit](docs/reports/slice-1-source-audit.md) lists migration failures in the supplied library without editing it.

Build output goes to `_site/`. Each rule produces `/<kind>.md` and `/<kind>/index.html`; shared definitions use the same layout. Cases are copied to `/cases/`. The generator also writes the index, local stylesheet, `.nojekyll`, and `CNAME`.

For a fixture preview:

```sh
bun run build --source tests/fixtures
```

This replaces `_site/` with the fixture preview. Run `bun run build` again to build repository content.

Index rows show the page's opening meaning and its `Class:` value. Shape groups use an optional `shape` front matter field; otherwise they follow the parameters: line, ray, cage, cell/group, or board. Source Markdown and canonical URLs stay unchanged.

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
