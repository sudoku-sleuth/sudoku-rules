---
format: open-rules
title: Edge Case Analysis
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bjisxnm9ch
case: https://sudoku-sleuth.com/cases/edge-case-analysis
library: https://rules.sudoku-sleuth.com/
status: read
exported: 100ba4e5e1b39f805312e4093df7e8da
---

```rules
sudoku 9x9
cage-1: cage r7c5-r8c5-r9c5 total 11 connected true
cage-2: cage r8c1-r8c2-r8c3-r8c4 total 22 connected true
cage-3: cage r8c7-r8c8-r8c9 total 13 connected true
cage-4: cage r1c4-r2c4 total 11 connected true
cage-5: cage r1c6-r2c6-r3c6-r4c6 total 14 connected true
cage-6: cage r2c8-r2c9 total 11 connected true
cage-7: cage r5c1-r5c2 total 9 connected true
cage-8: cage r1c1-r2c1-r3c1 total 14 connected true
cage-9: cage r5c8-r5c9 total 9 connected true
x-sum-1: x-sum r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 34
x-sum-2: x-sum r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 14
x-sum-3: x-sum r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 20
x-sum-4: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 26
x-sum-5: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 11
x-sum-6: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 20
x-sum-7: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 16
x-sum-8: x-sum r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 25
x-sum-9: x-sum r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 15
x-sum-10: x-sum r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 19
x-sum-11: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 38
```

**Sudoku, X-Sums, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Digits outside the grid give the total of the first X digits in the row or column (starting next to the number outside the grid) where X is the first digit along that row or column.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net
