# Contributing

Propose changes through a pull request. Published rule meanings are fixed. Clarify wording without changing the accepted assignments; introduce a new kind when the meaning changes.

## Rule pages

Add `rules/<kind>.md` using lowercase letters and digits, with single hyphens between segments. The slugs `cases` and `style` are reserved; `index` is a rule route, while the catalogue lives at `/`. Start with YAML front matter:

```yaml
---
name: Rule name
url: https://rules.sudoku-sleuth.com/<kind>.md
kind: <kind>
parameters:
  line:
    type: path<cell>
    description: The cells in order.
    default: Required.
---
```

Use the approved page order:

1. Heading and a short statement of the meaning.
2. `## Parameters`, with a table of parameter, meaning, and default.
3. `## Maths`, including `Class: **first-order**.` (or the appropriate specification class), notation, and a fenced `text` formula block.
4. `## Example`, including a fenced case fragment, a satisfying assignment, and a breaking assignment.

Use setter terms for parameters. Link mathematical notation to `https://rules.sudoku-sleuth.com/predicates.md`. Keep public links public and retain Unicode maths symbols. An optional `shape` string selects the site's index group.

Shared definition pages have `name`, `url` and `document: prelude`, `document: syntax` or `document: home`, with no `kind`. A setup feature such as fog uses `document: feature`. With `domain: play-state` it names the case-file header key it reads (`header`), the play predicate it defines (`defines`), typed `parameters`, optional `requires` formulas with their messages, an `openrules` block for its own `play` types and terms, and one `text` block that defines the predicate: `∀c∈C: visible(c) ↔ …`, with the predicate absent from the right side. A case may use one feature that defines a given predicate. [spec/play-state.md](spec/play-state.md) defines the domain; the site adds the `Domain:` line from the front matter. Alias pages declare their own `kind` and `alias_of` (or `aliasOf`), pointing directly to a definition; they declare no parameters or formula. Their filenames determine their raw and HTML routes.

Run `bun run generate:declarations` after changing rule parameters or syntax.
The generated portable contracts use the same page declarations as the checker;
`bun run lint:declarations` checks them. See [declarations.md](spec/declarations.md).

## Case files

The library holds no case files. A rule page carries its own worked example. Case files written for tools to read have front matter that includes `format: open-rules`, `title`, `setter`, `source`, `case`, `library`, and `status`. Keep attribution and source links. Use fenced `rules` blocks for declarations. Custom rules carry their definition in the case file. A test input goes under `tests/`, never in a `cases/` folder.

## Release notes

Record each change in `CHANGELOG.md` under the next version, and mark a change that breaks an export, a front-matter key or a diagnostic code as Breaking. The release tag must match `package.json`.

## Check the change

```sh
bun install --frozen-lockfile
bun run lint
bun test
bun run typecheck
bun run build:package
bun run build
```

In the PR, explain the meaning and parameters, link supporting cases, and identify any changes to shared definitions. For generator changes, cover byte preservation, routes, and index entries in `tests/`. Keep `tests/fixtures/` separate from publishable content.

`lint:spec` checks formula syntax, explicit parameter/term signatures, names, types, logical class and exact constant arithmetic. Use [the grammar](spec/grammar.ebnf) and [typed prelude](rules/predicates.md). Guard indexed and optional operations before reading them. Add a raw rejecting fixture and a passing repair for every new language check; record its exact ordered diagnostic, setter-facing message and full span in `tests/invalid/expected.json`. Case headers and known rule references are checked now. Case parameter types, board data, givens, embedded custom references and custom formulas are checked; see [case-files.md](spec/case-files.md). URL loading and example verdicts are reported as pending. Preserve the package script and workflow entry point as these phases arrive.
