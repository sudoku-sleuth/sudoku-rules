---
format: open-rules
title: Four of Diamonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/06d78m52ci
case: https://sudoku-sleuth.com/cases/four-of-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2 total 13 connected true
cage-2: cage r2c3-r2c4 total 11 connected true
cage-3: cage r2c6-r2c7 total 9 connected true
cage-4: cage r3c8-r4c8 total 9 connected true
cage-5: cage r6c8-r7c8 total 9 connected true
cage-6: cage r8c6-r8c7 total 9 connected true
cage-7: cage r6c2-r7c2 total 5 connected true
cage-8: cage r8c3-r8c4 total 6 connected true
cage-9: cage r8c9-r9c8-r9c9 total 9 connected true
cage-10: cage r1c8-r1c9-r2c9 total 9 connected true
cage-11: cage r8c1-r9c1-r9c2 total 11 connected true
cage-12: cage r1c1-r1c2-r2c1 total 17 connected true
region-sum-1: region-sum r4c3-r4c2-r3c2-r2c3-r2c4-r3c4-r4c4 segments [["r4c3","r4c2"],["r3c2","r2c3"],["r2c4","r3c4"],["r4c4"]]
region-sum-2: region-sum r4c6-r3c6-r2c6-r2c7-r3c8-r4c8-r4c7 segments [["r4c6"],["r3c6","r2c6"],["r2c7","r3c8"],["r4c8","r4c7"]]
region-sum-3: region-sum r6c4-r7c4-r8c4-r8c3-r7c2-r6c2-r6c3 segments [["r6c4"],["r7c4","r8c4"],["r8c3","r7c2"],["r6c2","r6c3"]]
region-sum-4: region-sum r6c6-r6c7-r6c8-r7c8-r8c7-r8c6-r7c6 segments [["r6c6"],["r6c7","r6c8"],["r7c8","r8c7"],["r8c6","r7c6"]]
```

**Standard Sudoku, Cages, Region Sum Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Region Sum Line: The sum of the digits on a region sum line within a particular region must be the same for all of the regions the line passes through.
