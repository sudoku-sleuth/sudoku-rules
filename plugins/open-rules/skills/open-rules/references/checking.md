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

YAML lint checks front matter, page names, slugs, and canonical URLs. Specification lint now checks library formulas against the typed shared prelude: grammar, explicit parameter/term signatures, names, types, logical class and exact constant arithmetic. Every parameter needs a front matter `type`, for example `path<cell>`. Read the checkout's `spec/grammar.ebnf`, `spec/types.md` and `rules/predicates.md` when writing executable formulas. The checker also checks case headers and references to known rule kinds. Case validation checks board data, givens, declared parameter names and types, required cells, bounds, and explicit board-dependent parameters on non-standard boards. It checks custom definition fields, section fragments, and references. Only external URLs without an embedded definition are deferred. URL loading, custom formula execution and example verdicts are reported as pending. State which checks actually ran. If a tool or checkout is unavailable, obtain it before marking the task checked.

Fix reported problems at their source; do not change the setter's meaning to silence a finding. Ask the setter when a fix requires a choice of meanings. Rerun after the final edit, not only before it.

## Compare with the source

Use the inventory in [reading-input.md](reading-input.md) to check completeness before delivery:

- Reconcile every supplied structured field, including the fog mask and all reveal links, with its output. Preserve absent versus empty `links`; a supplied `null` is rejected.
- Trace every drawing edge, including closure, against the expanded path and cell set.
- Check dot fill, stroke and text separately against the raw drawing record and setter meaning.
- Rebuild each negative relation's scope and exceptions from its own marks and explicit exceptions.
- For stated normal Sudoku, check every row, column and region has a house constraint. Board metadata alone is insufficient.
- Apply F1–F2: connected same-colour lines are continuous; cells not drawn in that colour are excluded. Flag text/drawing conflicts and ask only about unsettled meanings.
- Preserve clear clauses beside malformed wording; withhold only the missing relation.
- Check that flags identify only the cells or groups in doubt and that independent conditions remain declared (P1).
- Check both readings and their recorded tests against the same stored solve. A recommendation without a recorded passing test and a failing alternative warrants a review warning; missing or non-distinguishing tests mean no recommendation (P2). This is a manual check, not an automated diagnostic.
- Keep final-answer riddles in prose without grid constraints (P3).

`W_CASE_HOUSES` flags a nonempty region list without a positive, unconditional `sudoku 9x9` or `unique` declaration. Like other diagnostics, it prevents a clean lint result. Review the source: add all required houses when normal Sudoku applies, or retain the intended non-house region metadata and report the warning. The presence of one `unique` declaration only clears this absence check; verify the complete set yourself. Custom formulas and source wording need manual review.

The checker receives the case file, not its original drawing or input JSON. It validates supplied fog fields, cell bounds, types and flags, but cannot establish that a source mask was copied, a drawing was fully traversed, a dot was classified correctly, or an exception belongs to its stated relation. Perform those comparisons against the source; a passing lint result does not replace them.

## Published checker command — maintainer hook

<!-- PUBLISHED CHECKER COMMAND: replace this section with the released package command and its file argument when the package is published. -->

The package is named `@sudoku-sleuth/open-rules`; its binary is `openrules lint <file-or-directory>`. It is not published by this change. Until publication, use the repository commands above, or `bun run build:package` followed by `node dist/cli.js lint /path/to/rule.md`. The published install command goes here when the package is released.
