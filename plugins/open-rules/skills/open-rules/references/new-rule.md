# Propose a rule page

Use a new meaning and a new kind. Kind names use lowercase letters and digits, separated by single hyphens; `cases` and `style` are reserved. Read comparable published pages and [terms.md](terms.md) first.

Use this page structure, replacing the sample weighted-triple definition with the setter's proposed meaning:

````markdown
---
name: Weighted triple
url: https://rules.sudoku-sleuth.com/weighted-triple.md
kind: weighted-triple
parameters:
  line:
    type: path<cell>
    description: Exactly three cells in order, from the marked start.
    default: Required.
---

# Weighted triple

The third face digit equals the first face digit plus twice the second face digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | Exactly three cells in order, from the marked start. | Required. |

## Maths

Class: **first-order**.

D(c) is the face digit in cell c. The line is the supplied sequence; its positions start at zero. The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the common notation.

```text
|line| = 3 ∧ D(line[2]) = D(line[0]) + 2 × D(line[1])
```

The third digit is the first digit plus twice the second digit, on a line of exactly three cells.

## Example

```rules
weighted-triple r1c1-r1c2-r1c3
```

Satisfies the rule: r1c1=1, r1c2=2, r1c3=5. The third digit is 1+2×2=5.

Breaks the rule: r1c1=1, r1c2=2, r1c3=6. The third digit is 6, while 1+2×2=5.
````

The proposed kind belongs in the draft page's fragment. Until the page is published, use its embedded custom definition and a case-local id when writing an actual case file. A setter-chosen external HTTPS Markdown URL is also allowed.

If the example needs board context, use a complete case inside an outer four-backtick `markdown` fence, as in [examples.md](examples.md). Use a longer outer fence whenever its contents contain a fence of the same length.

For each parameter, specify its type through concrete setter terms: ordered cells, a cell group, a number with bounds, or a boolean. State defaults, required inputs, loops, repeated positions, and endpoint order where they change the accepted assignments. Give one formula, a one-line reading, and the correct class; do not label aggregates or answer-chosen structures first-order by default.

## PR description

Draft a title such as `Add weighted-triple rule`. Explain:

- The proposed meaning and why existing kinds and their parameters do not express it exactly.
- Its shape, scope, parameters, and defaults.
- The shared terms used by its formula and the chosen class.
- The satisfying and breaking fragments, and a supporting case if supplied.
- The checker commands actually run and the problems fixed.

Keep the description as a draft for the setter to review and submit.
