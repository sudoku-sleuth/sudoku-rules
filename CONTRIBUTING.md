# Contributing

Propose changes through a pull request. Published rule meanings are fixed. Clarify wording without changing the accepted assignments; introduce a new kind when the meaning changes.

## Rule pages

Add `rules/<kind>.md` using lowercase letters and digits, with single hyphens between segments. The slugs `cases`, `style`, and `index` are reserved. Start with YAML front matter:

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

Shared definition pages have `name` and `url`, with no `kind`. Their filenames determine their raw and HTML routes.

## Cases

Add examples under `cases/<case-name>.rules.md`. Front matter includes `format: open-rules`, `title`, `setter`, `source`, `case`, `library`, and `status`. Keep attribution and source links. Use fenced `rules` blocks for declarations. Custom rules carry their definition in the case file.

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

`lint:spec` checks formula syntax, explicit parameter/term signatures, names, types, logical class and exact constant arithmetic. Use [the grammar](spec/grammar.ebnf) and [typed prelude](spec/prelude.md). Guard indexed and optional operations before reading them. Add a raw rejecting fixture and a passing repair for every new language check; record its exact ordered diagnostic and full span in `tests/invalid/expected.json`. Case syntax, URL resolution and example verdicts are later slices and are explicitly reported as pending. Preserve the package script and workflow entry point as these phases arrive.
