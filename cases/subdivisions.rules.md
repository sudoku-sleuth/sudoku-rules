---
format: open-rules
title: Subdivisions
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/labdz50epy
case: https://sudoku-sleuth.com/cases/subdivisions
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7caf91d939fe33306b6c868b7750c05e
---

```rules
sudoku 9x9
cage-1: cage r3c6-r4c6-r4c7 total 9 connected true
cage-2: cage r6c3-r6c4-r7c4 total 10 connected true
cage-3: cage r8c8-r8c9-r9c8 total 18 connected true
cage-4: cage r1c2-r2c1-r2c2 total 21 connected true
cage-5: cage r1c8-r2c8-r2c9 total 17 connected true
cage-6: cage r8c1-r8c2-r9c2 total 19 connected true
cage-7: cage r8c5-r9c5 total 10 connected true
cage-8: cage r1c5-r2c5 total 11 connected true
cage-9: cage r5c1-r5c2 total 8 connected true
cage-10: cage r5c8-r5c9 total 10 connected true
region-sum-1: region-sum r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r2c6-r3c6 segments [["r1c2","r1c3"],["r1c4","r1c5","r1c6","r2c6","r3c6"],["r1c7","r1c8"]]
region-sum-2: region-sum r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r6c2-r6c3 segments [["r2c1","r3c1"],["r4c1","r5c1","r6c1","r6c2","r6c3"],["r7c1","r8c1"]]
region-sum-3: region-sum r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r8c4-r7c4 segments [["r9c2","r9c3"],["r9c4","r9c5","r9c6","r8c4","r7c4"],["r9c7","r9c8"]]
region-sum-4: region-sum r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r4c8-r4c7 segments [["r2c9","r3c9"],["r4c9","r5c9","r6c9","r4c8","r4c7"],["r7c9","r8c9"]]
region-sum-5: region-sum r4c4-r3c3-r2c2 segments [["r4c4"],["r3c3","r2c2"]]
region-sum-6: region-sum r6c6-r7c7-r8c8 segments [["r6c6"],["r7c7","r8c8"]]
region-sum-7: region-sum r4c6-r3c7-r2c8 segments [["r4c6"],["r3c7","r2c8"]]
region-sum-8: region-sum r6c4-r7c3-r8c2 segments [["r6c4"],["r7c3","r8c2"]]
```

**Sudoku, Region Sum Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
