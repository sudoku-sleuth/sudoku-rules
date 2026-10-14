---
format: open-rules
title: Double Down
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ipq9ipq3th
case: https://sudoku-sleuth.com/cases/double-down
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9a63f24005a5604ba5a6764cea08cadd
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4 total 14 connected true
cage-2: cage r4c3-r5c3-r6c3 total 15 connected true
cage-3: cage r6c4-r6c5-r6c6 total 16 connected true
cage-4: cage r9c3-r9c4-r9c5-r9c6 total 18 connected true
cage-5: cage r4c4-r5c4 total 12 connected true
cage-6: cage r3c9-r4c9-r5c9 total 16 connected true
cage-7: cage r8c5-r8c6 total 9 connected true
cage-8: cage r3c8-r4c8-r5c8 total 15 connected true
x-sum-1: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 14
x-sum-2: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 15
x-sum-3: x-sum r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 16
x-sum-4: x-sum r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 18
x-sum-5: x-sum r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 12
x-sum-6: x-sum r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 16
x-sum-7: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 9
x-sum-8: x-sum r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 15
x-sum-9: x-sum r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 19
x-sum-10: x-sum r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 20
```

**Sudoku, X-Sums, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Digits outside the grid give the total of the first X digits in the row or column (starting next to the number outside the grid) where X is the first digit along that row or column.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net
