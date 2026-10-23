---
name: Sudoku
url: https://rules.sudoku-sleuth.com/sudoku.md
parameters:
  board:
    type: record{rows:position,cols:position}
    description: The board dimensions and standard boxes; write 9x9.
    default: Required.
    syntax:
      form: dimensions
kind: sudoku
layer: rule
---

# Sudoku

Every row, column and standard 3×3 box contains the digits 1–9 exactly once.

For 4×4 or 6×6 Sudoku, declare the board dimensions, allowed symbols and region geometry in the case header, then use [Extra Regions](https://rules.sudoku-sleuth.com/extra-regions.md) for every row, column and region. This kind specifically declares standard 9×9 Sudoku.

## Parameters

- Board: write `sudoku 9x9`. It declares the 9×9 board, digits 1–9 and standard boxes together.
- Givens: list cells such as `r4c8=1`, or use a grid string with one character per cell and a dot for an empty cell.

## Maths

Class: **with aggregates**.

[Shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define D and distinct. H ranges over the rows, columns and standard boxes.

```text
rows=9 ∧ cols=9 ∧ board.rows=rows ∧ board.cols=cols ∧ (∀c∈C:D(c)∈[1,10)) ∧ (∀house∈standardHouses(): |house|=9 ∧ repeatPolicy(house,"D",false)) ∧ (∀c∈C: given(c) → D(c)=givenValue(c))
```

Every house contains nine different digits from 1 to 9. A given cell holds its given digit.

## Example

````markdown
---
format: open-rules
title: Sudoku example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
```
````

Satisfies a row: 1, 2, 3, 4, 5, 6, 7, 8, 9 contains every digit once.
Breaks a row: 1, 2, 3, 4, 5, 6, 7, 8, 8 repeats 8 and omits 9.
