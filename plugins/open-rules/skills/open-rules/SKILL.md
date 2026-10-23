---
name: open-rules
description: Write Open Rules case files from a Sudoku setter's rules text and SudokuPad or f-puzzles link or drawing description. Preserve the setter's wording, use exact library meanings, embed custom definitions when needed, or draft a new rule page and pull request description. Use when a setter asks to describe, translate, check, or propose Sudoku rules in Open Rules format.
---

# Open Rules

Help a setter give their puzzle a precise, shareable rules file, or propose a new rule for the public library.

## Read what the task needs

- For a case file, read [reading-input.md](references/reading-input.md) and [syntax.md](references/syntax.md). Open [examples.md](references/examples.md) when you need a complete case or a custom-rule example.
- For formulas, read [terms.md](references/terms.md), then fetch the shared definitions linked there.
- For a new library rule, read [new-rule.md](references/new-rule.md).
- Before finishing either task, read [checking.md](references/checking.md) and run the checker.

## Reading conventions

- **F1:** Connected lines of the same colour are one continuous line.
- **F2:** A cell not drawn in a line's colour is not on that line; do not ask about membership the drawing settles.
- **F3:** When the setter says a rule or clue is wrong, false or never correct, every named instance must individually fail that rule. Negate each instance's complete rule with `not`; use `negate: all` only when every declared rule is covered. Do not replace it with an opposite rule or merely negate the combined statement. See [reading-input.md](references/reading-input.md) for an example.
- **P1:** Ask, do not assume. Flag ambiguous intent with competing readings. Direct questions to the setter on import (including daily imports), or to the catalogue maintainer for catalogue cases.
- **P2:** Test each competing reading against the stored solve. Recommend a reading only when that solve satisfies it and breaks the alternative. With no stored solve or no distinguishing result, recommend nothing. See [reading-input.md](references/reading-input.md) for `storedSolve` and the question record.
- **F4:** When the setter explicitly says markings are decorative or should be ignored, declare them with `decoration` and identify the marks in a note. Never guess decoration from appearance or a solve. See [syntax.md](references/syntax.md).
- **P3:** Keep final-answer riddles as prose; they declare no grid constraint.

Keep puzzle-specific answers in the puzzle's file. Different-colour joins, outside diagonal clues, inherited series values and decorative paths are candidate readings to test under P2, never additional conventions.

## Keep the meaning exact

Read the setter's text and the puzzle together. Inspect a supplied SudokuPad or f-puzzles link with available tools; use the setter's drawing description when that is the supplied source. Inventory every supplied structured field before interpreting the drawing or writing questions. Record the board, givens, fog (initially lit cells and linked reveals), paths, endpoints, cells, regions, and clue values. Check every claim that evidence is absent against that inventory. If you cannot inspect part of the puzzle, ask the setter for those details.

Fetch the [library index](https://rules.sudoku-sleuth.com/) and each relevant `https://rules.sudoku-sleuth.com/<kind>.md` page, or read those pages in a local library checkout. Read the parameters and defaults as well as the meaning. Use only published library kinds for named rules. A familiar visual name or colour does not establish a meaning.

Choose names by meaning: Regions (`regions`, formerly Extra Regions) for boxes, irregular regions and disjoint groups; Parity Line (`parity-line`, formerly Parity) for alternating odd/even lines; Odd Even Cells (`odd-even-cells`, formerly Parity Cells) for marked odd/even values; Between Line (`between-line`, formerly Between) for interior digits bounded by endpoints. Old kinds and published routes remain aliases. Choose Diagonal Sum (formerly Little Killer); Whispers 5 for German Whispers and Whispers 4 for Dutch Whispers; Arrow for Pill, Pill Arrow or Arrow Pill with decimal bulbs. For effective-value pairs, choose XV for sum 10 (X) or sum 5 (V), Kropki for difference 1 (white) or ratio 2 (black), and Pair for other relations. Check channels and negative settings; use a separate Negative declaration for “all given”. See [syntax.md](references/syntax.md).

Read the whole source sentence and drawing before asking; apply F1 and F2 and flag any conflict with the text. Ask the setter when the text or drawing still leaves a choice of meanings: digit or modified value, strict or non-strict increase, bulb or tip, open path or loop, repeated positions, distinctness, negative constraints, or which cells a clue covers. Localise the choice to the exact cells, edges or groups in doubt. Resolve it before writing the affected declaration; still declare every independently established condition. Never promote a speculative union of strokes into a confirmed rule. A malformed sentence about one relation leaves other clear clauses intact. Use specific flags for unresolved parts instead of withholding a whole colour, rule family or fog setup. Never invent coordinates, clue values, givens, attribution, or source links.

If no published kind expresses the rule exactly, embed a custom definition and its formula over the shared terms. Never substitute the nearest kind. Follow [syntax.md](references/syntax.md): use a case-local id unless the setter has an address, or retain a setter-chosen external URL, with a complete `custom-rules` definition in the case. Keep that definition when also proposing the rule for the library.

For cells with independent real values and counts of false clues, read [lying.md](references/lying.md).

## Write a case file

1. Collect the title, setter credit, source link, and rules wording. Use empty `source` and `case` strings when no URLs were supplied. `case` is the case's public page URL, when one exists.
2. Start `<case-name>.rules.md` with YAML front matter: `format: open-rules`, `title`, `setter`, `source`, `case`, `library: https://rules.sudoku-sleuth.com/`, and `status: read`. Use `confirmed` only when the setter explicitly confirms this reading. Use `flagged` with reasons when preserving a known unresolved issue.
3. Expand every drawn straight segment through intermediate cell centres, including the closing edge of a loop. Compare the final cell set with every drawing edge. Classify dot fill, stroke and text separately: a white fill with a black outline is a white dot; then apply the setter's stated meaning. Compile each negative rule's scope and exceptions from its own relation and marks. Another clue type on an edge does not exempt it. Put one declaration per line inside a fenced `rules` block. Declare a standard board once with `sudoku 9x9`; describe a different board explicitly. Board dimensions and region membership do not impose house rules. When normal Sudoku is stated, include an explicit supported `sudoku` declaration or a complete set of `regions` declarations for every row, column and region; the published `sudoku` kind supports only `9x9`. On a board other than 9×9 with the ordered symbols 1–9, state every board-dependent parameter: `loop` for summit, whispers, parity-line, modular, entropic, primality and line-choice; `modulus` for modular; `distinct` for nabner; `repeats` for cage; `crusts` for sandwich; and `strips` for index. Use rXcY coordinates and list every path position in order. Give repeated kinds numbered IDs such as `thermo-1`, following the ID and quoting rules in [syntax.md](references/syntax.md); a singleton uses its kind as its implicit ID.
4. Declare every fully understood custom rule, using an in-file definition when no external URL was supplied. A missing external URL is not an unresolved meaning and is not a reason to flag or omit the rule. Include complete `custom-rules` definitions with unique local ids; group them under `## Definitions` for readability. Build formulas from the shared terms and define supplied parameters. Check the formula against one satisfying and one breaking assignment.
5. Keep the setter's own wording, in its original order, beside the structured blocks under `## Setter wording`. Preserve attribution, causal meaning, and exceptions. Put your questions or explanations outside the setter's quoted wording.
6. Check that every established grid condition has a declaration or a custom definition that follows the setter's meaning. Preserve final-answer riddles as prose (P3); flag unsettled drawing meanings under P1–P2.
7. Run the checks in [checking.md](references/checking.md), fix the reported problems, and rerun. Deliver the case file and a brief account of the checks actually run.

## Propose a new rule

1. Compare the proposed meaning with existing library pages, including their optional parameters. If an existing kind fits exactly, use it in the case.
2. For a new meaning, draft `rules/<kind>.md` in the format in [new-rule.md](references/new-rule.md). Published meanings stay fixed; choose a new kind for a changed meaning.
3. Use setter terms for parameters, with types, defaults, and order where it matters. Write a first-order formula over the shared terms, define local notation, give its one-line reading, and select the appropriate class.
4. Include a worked case fragment and concrete satisfying and breaking assignments. Explain which part of the formula the breaking assignment violates. These fragments demonstrate the rule; they need not be complete Sudoku solutions.
5. Draft a PR description explaining the meaning, parameters, comparison with existing kinds, and worked examples. Drafting does not submit the PR.
6. Run the checks in [checking.md](references/checking.md) on the rule page and any case file, fix what they report, and rerun. Deliver the page, examples, and PR description.
