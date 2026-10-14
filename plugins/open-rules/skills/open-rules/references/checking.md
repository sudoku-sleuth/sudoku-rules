# Check the result

Finish every case or rule-page task by running the checker on the generated file, fixing its findings, and rerunning it. Compare the text, geometry, formula, and examples with the setter's meaning as well.

## Commands available today

Use a local checkout of the public [sudoku-rules repository](https://github.com/sudoku-sleuth/sudoku-rules), with Bun 1.2.23. Run these commands from that checkout, replacing the example file path with the actual generated file:

```sh
bun install --frozen-lockfile
bun run lint:yaml /path/to/puzzle.rules.md
bun run lint:spec /path/to/puzzle.rules.md
```

For a proposed library page, pass `/path/to/rules/<kind>.md` to both commands. Check any supporting case separately. You can also place files under the checkout's `rules/` or `cases/` and run `bun run lint` to check the collection.

Specification lint also checks every `reading` block on rule pages: fields, placeholders, parameters used and the Example reading in full. YAML lint checks front matter, page names, slugs, and canonical URLs. Specification lint now checks library formulas against the typed shared prelude: grammar, explicit parameter/term signatures, names, types, logical class and exact constant arithmetic. Every parameter needs a front matter `type`, for example `path<cell>`. Read the checkout's `spec/grammar.ebnf`, `spec/types.md` and `rules/predicates.md` when writing executable formulas. The checker also checks case headers and references to known rule kinds. Full rule-line parameters, custom definitions embedded in cases, URL loading and example verdicts are later phases; the command reports them as pending. External references are counted as deferred, rather than as loaded definitions. State which checks actually ran. If a tool or checkout is unavailable, obtain it before marking the task checked.

Fix reported problems at their source; do not change the setter's meaning to silence a finding. Ask the setter when a fix requires a choice of meanings. Rerun after the final edit, not only before it.

## Published checker command — maintainer hook

<!-- PUBLISHED CHECKER COMMAND: replace this section with the released package command and its file argument when the package is published. -->

The package is named `@sudoku-sleuth/open-rules`; its binary is `openrules lint <file-or-directory>`. It is not published by this change. Until publication, use the repository commands above, or `bun run build:package` followed by `node dist/cli.js lint /path/to/rule.md`. The published install command goes here when the package is released.
