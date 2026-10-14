---
format: open-rules
title: Renban Accumulation
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wbab97e7uv
case: https://sudoku-sleuth.com/cases/renban-accumulation
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=7
exported: af8fe377881e49f557b924b11f0607b1
---

```rules
sudoku 9x9
renban-1: renban r1c1-r2c1-r2c2-r2c3-r3c3
renban-2: renban r1c9-r2c9-r2c8-r2c7-r3c7
renban-3: renban r9c1-r8c1-r8c2-r8c3-r7c3
renban-4: renban r7c7-r8c7-r8c8-r8c9-r9c9
renban-5: renban r4c1-r5c2-r4c3
renban-6: renban r4c7-r5c8-r4c9
renban-7: renban r6c4-r5c5-r6c6
renban-8: renban r9c3-r8c4
renban-9: renban r2c6-r1c7
x-sum-1: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 25
x-sum-2: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 25
x-sum-3: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 15
x-sum-4: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 15
x-sum-5: x-sum r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 sum 18
x-sum-6: x-sum r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 15
x-sum-7: x-sum r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 21
x-sum-8: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 25
x-sum-9: x-sum r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 30
```

**Sudoku, X-Sums, Renban**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Clues outside the grid give the total of the first X digits in the row or column (starting from the cell closest to the clue) where X is the first digit along that row or column.
- Renban lines: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
