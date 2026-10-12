---
format: open-rules
title: Double Dealing
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8h7sbscdds
case: https://sudoku-sleuth.com/cases/double-dealing
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r2c5 total 13 connected true
cage-2: cage r2c7-r2c8 total 10 connected true
cage-3: cage r4c3-r5c3 total 13 connected true
cage-4: cage r8c3-r8c4 total 10 connected true
cage-5: cage r4c6-r4c7 total 10 connected true
cage-6: cage r3c5-r4c5 total 10 connected true
cage-7: cage r3c6-r3c7 total 13 connected true
x-sum-1: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 10
x-sum-2: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 13
x-sum-3: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 13
x-sum-4: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 13
x-sum-5: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 10
x-sum-6: x-sum r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 10
x-sum-7: x-sum r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 10
x-sum-8: x-sum r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 13
x-sum-9: x-sum r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 10
```

**Sudoku, X-Sums, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Digits outside the grid give the total of the first X digits in the row or column (starting next to the number outside the grid) where X is the first digit along that row or column.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net
