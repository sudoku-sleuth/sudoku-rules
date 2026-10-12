---
format: open-rules
title: Give and Take
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nwyulzh4e3
case: https://sudoku-sleuth.com/cases/give-and-take
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c7-r6c8 total 7 connected true
cage-2: cage r6c2-r6c3 total 7 connected true
cage-3: cage r3c3-r4c3 total 14 connected true
cage-4: cage r3c7-r4c7 total 15 connected true
cage-5: cage r2c3-r2c4-r3c4 total 9 connected true
cage-6: cage r2c6-r2c7-r3c6 total 17 connected true
cage-7: cage r7c2-r8c2 total 11 connected true
cage-8: cage r7c8-r8c8 total 11 connected true
cage-9: cage r9c3-r9c4 total 8 connected true
cage-10: cage r9c6-r9c7 total 12 connected true
cage-11: cage r3c5-r4c5 total 12 connected true
cage-12: cage r5c5-r6c5 total 3 connected true
region-sum-1: region-sum r5c1-r4c1-r4c2-r3c3 segments [["r5c1","r4c1","r4c2"],["r3c3"]]
region-sum-2: region-sum r3c7-r4c8-r4c9-r5c9 segments [["r3c7"],["r4c8","r4c9","r5c9"]]
region-sum-3: region-sum r1c3-r2c3-r3c4-r3c5-r3c6-r2c7-r1c7 segments [["r1c3","r2c3"],["r3c4","r3c5","r3c6"],["r2c7","r1c7"]]
region-sum-4: region-sum r6c2-r7c2-r7c3-r8c4-r9c4 segments [["r6c2"],["r7c2","r7c3"],["r8c4","r9c4"]]
region-sum-5: region-sum r6c8-r7c8-r7c7-r8c6-r9c6 segments [["r6c8"],["r7c8","r7c7"],["r8c6","r9c6"]]
region-sum-6: region-sum r5c7-r6c7-r6c6-r6c5 segments [["r5c7","r6c7"],["r6c6","r6c5"]]
region-sum-7: region-sum r4c3-r5c3-r5c4-r5c5-r4c5 segments [["r4c3","r5c3"],["r5c4","r5c5","r4c5"]]
```

**Sudoku, Region Sum Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. Different lines may have different section sums.
- Cages: Digits within a cage may not repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
