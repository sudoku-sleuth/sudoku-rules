---
format: open-rules
title: Off By Ten
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wslrmlly26
case: https://sudoku-sleuth.com/cases/off-by-ten
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c1=7 r4c2=4 r9c9=9
exported: bdd419ccad6b514de24659529358c052
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c2-r2c1 sum 7
little-killer-2: little-killer r1c8-r2c9 sum 8
little-killer-3: little-killer r9c2-r8c1 sum 9
little-killer-4: little-killer r9c8-r8c9 sum 6
little-killer-5: little-killer r9c9-r8c8-r7c7-r6c6-r5c5-r4c4-r3c3-r2c2-r1c1 sum 27
little-killer-6: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 56
x-sum-1: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 17
x-sum-2: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 18
x-sum-3: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 19
x-sum-4: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 16
x-sum-5: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 29
x-sum-6: x-sum r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 26
x-sum-7: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 38
x-sum-8: x-sum r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 17
```

**Sudoku, X-Sums, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Clues in circles outside the grid give the total of the first X digits in the row or column (starting next to the clue) where X is the first digit along that row or column.
- Diagonal Sums: Clues with arrows outside the grid give the sum of the digits along the indicated diagonal.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
