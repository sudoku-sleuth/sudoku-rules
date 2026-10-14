---
format: open-rules
title: Not Too X-acting
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2spdo0md16
case: https://sudoku-sleuth.com/cases/not-too-x-acting
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=7 r2c8=2 r5c5=2 r8c2=6 r8c8=7
exported: baafe9ea1313141bb289fc75e2e3a32a
---

```rules
sudoku 9x9
x-sum-1: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 12
x-sum-2: x-sum r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 8
x-sum-3: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 34
x-sum-4: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 13
x-sum-5: x-sum r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 12
x-sum-6: x-sum r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 35
x-sum-7: x-sum r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 13
x-sum-8: x-sum r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 18
x-sum-9: x-sum r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 38
x-sum-10: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 7
x-sum-11: x-sum r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 10
x-sum-12: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 15
```

Standard sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

X-sums: Clues outside the grid give the sum of the first X digits in that row or column from the direction of the clue, where X is the digit in the cell closest to the clue.
