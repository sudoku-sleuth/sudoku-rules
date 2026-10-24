# Writing Open Rules

A case file is a Markdown document describing one puzzle. Save it with a `.rules.md` ending. You can write ordinary paragraphs for solvers alongside declarations that tools can read.

## The shape of a case file

````markdown
---
format: open-rules
title: A little warmth
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

## Setter wording

Normal Sudoku rules apply. Digits increase along the thermometer from its bulb.

```rules
sudoku 9x9
warm-1: thermo r1c1-r1c2-r1c3
```
````

The part between `---` lines is YAML front matter: the puzzle's title, setter and source information. Keep `format: open-rules`; `library` supplies the address where rule names are looked up. `source` and `case` may be empty strings. Use `status: read` for a transcription, `confirmed` once checked with the setter, or `flagged` with a `flags` list describing unresolved questions.

The `rules` block contains one declaration per line. Here, `sudoku 9x9` supplies the standard grid, digits, rows, columns and boxes. Setter wording stays in ordinary Markdown. A puzzle with a new rule can also include a `custom-rules` block, shown below.

## Building a declaration

```rules
small-cage: cage r2c1-r2c2 total 7 repeats false
```

Read this from left to right:

- `small-cage:` is an optional label for this occurrence. Give repeated uses of the same rule different labels.
- `cage` names the rule in the library.
- `r2c1-r2c2` supplies its cells: row 2, column 1, then row 2, column 2.
- `total 7` and `repeats false` are settings and their values.

A hyphen joins explicitly listed cells; `r1c1-r1c3` names two cells, skipping column 2. For a line, list every cell in traversal order, as in the thermometer above. A pair has two endpoints: `pair r3c1-r3c2 sum 10` says their digits sum to ten.

Each rule page lists its settings, types and defaults. Numbers such as `7` and Boolean values `true` or `false` are unquoted; text values use double quotes, as in `direction "main"` for a diagonal. Some rules also offer short keywords: `kropki r4c1-r4c2 white` means consecutive digits.

Lists use square brackets and commas. A list of digits looks like `[1,3,5]`; a list of cells can be written `["r1c1","r1c2"]`. A list of pairs can use cell paths:

```rules
xv x [r6c4-r6c5,r7c2-r7c3] v [r8c7-r9c7] allGiven ["x","v"]
```

This places two X clues and one V clue, and says every possible X and V between orthogonally adjacent cells is marked. `allGiven` is a setting of this rule; other rules have their own settings.

## Negation and conditions

`not` requires the whole rule to be false:

```rules
not pair r1c1-r1c2 sum 10
```

These two digits must not sum to ten.

`if` applies a rule when a condition holds on its own cells:

```rules
cage r2c1-r2c2-r2c3 total 15 if distinct
```

If these three digits are all different, they must sum to fifteen.

`unless` applies a rule when the condition does not hold:

```rules
pair r3c1-r3c2 sum 10 unless distinct
```

If these two digits are equal, they must sum to ten.

When the condition does not activate a declaration, that declaration adds no restriction. Conditions are `distinct` (all digits different), `connected` (cells connected orthogonally), and `uniform` (all shaded or all unshaded in the shared Yin-Yang shading). A condition uses the declaration's cell list. Put a label before `not`, for example `clue-1: not pair r1c1-r1c2 sum 10`.

## Reading formulas

Custom rules express their meaning in a `maths` formula. Parameters give names to the inputs, such as `cells` and `target`.

| Write | Read |
| --- | --- |
| `D(c)` | The digit written in cell `c` |
| `cells[0]` | The first cell in an ordered list; positions start at zero |
| `\|cells\|` | The number of cells |
| `sum c in cells: D(c)` | Add the digits in the cells |
| `count c in cells: D(c) > 5` | Count cells whose digit is greater than five |
| `=`, `!=`, `<`, `<=`, `>`, `>=` | Equal, unequal, less, at most, greater, at least |
| `and`, `or`, `not` | Combine or negate statements |
| `forall c in cells: D(c) > 5` | For every listed cell, its digit is greater than five |
| `exists c in cells: D(c) = 9` | At least one listed cell contains nine |

The words `forall` and `exists` introduce a temporary name, here `c`, for the cells being considered. You can also write `∀`, `∃`, `∈` and `∧` for `forall`, `exists`, `in` and `and`. Parentheses group expressions; `+`, `-`, `*` and `/` do arithmetic. Parenthesize a count before comparing its result: `(count c in cells: D(c) > 5) = 2`.

## Three worked examples

### 1. Compare two digits

With `cells` supplied as an ordered two-cell path:

```text
|cells| = 2 and D(cells[0]) < D(cells[1])
```

The first of the two digits must be smaller than the second.

### 2. Combine a total and a count

With `cells` supplied as a collection of cells:

```text
(sum c in cells: D(c)) = 15 and (count c in cells: D(c) > 5) = 2
```

The digits must sum to fifteen, with exactly two greater than five.

### 3. Name a custom rule and supply its parameters

Add these two blocks to a case file:

````markdown
```rules
sudoku 9x9
balance-1: #balanced-triple r4c1-r4c2-r4c3 target 15
```

```custom-rules
- id: balanced-triple
  name: Balanced triple
  parameters:
    cells:
      type: path<cell>
      description: Three cells in order.
      default: Required.
    target:
      type: number
      description: The required sum of the three digits.
      default: Required.
  class: with aggregates
  definition: Three digits sum to the target, with exactly two greater than five.
  maths: '|cells| = 3 and (sum c in cells: D(c)) = target and (count c in cells: D(c) > 5) = 2'
  example: 'Satisfies: 1,6,8 with target 15. Breaks: 4,5,6 with target 15.'
```
````

The three marked digits must sum to fifteen, with exactly two greater than five.

`#balanced-triple` refers to the definition's `id` within this file. `cells` receives the path and `target` receives `15`; another declaration can reuse the definition with different cells or a different target. The `name` is its display name, `definition` gives the setter wording, and `example` illustrates a satisfying and a breaking assignment. `class: with aggregates` identifies a formula using sums or counts.

## Exact references

Use [rule-line syntax](rules/syntax.md) for declaration details and the [formula grammar](spec/grammar.ebnf) for the complete formula language. The [case-file reference](spec/case-files.md) covers headers, boards, givens and custom definitions; [Predicates](PREDICATES.md) introduces the shared formula vocabulary.
