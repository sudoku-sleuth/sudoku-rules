---
format: open-rules
title: O, Dear
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0vaenlqevp
case: https://sudoku-sleuth.com/cases/o-dear
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c5-r2c6 total 5 connected true
cage-2: cage r8c4-r8c5 total 6 connected true
cage-3: cage r9c7-r9c8 total 13 connected true
cage-4: cage r4c1-r4c2 total 3 connected true
cage-5: cage r4c4-r4c5 total 12 connected true
cage-6: cage r4c3-r5c3 total 12 connected true
cage-7: cage r5c4-r5c5-r5c6 total 14 connected true
cage-8: cage r6c5-r6c6 total 12 connected true
cage-9: cage r4c7-r5c7 total 14 connected true
cage-10: cage r4c8-r4c9 total 11 connected true
cage-11: cage r1c2-r2c2 total 11 connected true
cage-12: cage r8c2-r9c2 total 7 connected true
cage-13: cage r6c8-r6c9 total 13 connected true
cage-14: cage r1c8-r1c9 total 9 connected true
region-sum-1: region-sum r3c2-r2c3-r1c4-r1c5-r1c6-r2c7-r3c8-r4c8-r5c8-r6c8-r7c8-r8c7-r9c6-r9c5-r9c4-r8c3-r7c2-r6c2-r5c2-r4c2 segments [["r3c2","r2c3"],["r1c4","r1c5","r1c6"],["r2c7","r3c8"],["r4c8","r5c8","r6c8"],["r7c8","r8c7"],["r9c6","r9c5","r9c4"],["r8c3","r7c2"],["r6c2","r5c2","r4c2"]]
region-sum-2: region-sum r2c4-r3c4-r4c5-r5c5-r6c5-r7c6-r8c6 segments [["r2c4","r3c4"],["r4c5","r5c5","r6c5"],["r7c6","r8c6"]]
region-sum-3: region-sum r4c4-r5c4-r6c4-r7c4-r7c5 segments [["r4c4","r5c4","r6c4"],["r7c4","r7c5"]]
region-sum-4: region-sum r3c5-r3c6-r4c6-r5c6-r6c6 segments [["r3c5","r3c6"],["r4c6","r5c6","r6c6"]]
```

**Sudoku, Region Sum Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 
- Cages: Digits in cages sum to the value in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
