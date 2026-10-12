---
format: open-rules
title: Blockade
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/87oq33p70s
case: https://sudoku-sleuth.com/cases/blockade
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3-r4c4 total 9 connected true
cage-2: cage r6c3-r6c4-r7c3 total 8 connected true
cage-3: cage r6c6-r7c5-r7c6 total 12 connected true
cage-4: cage r5c7-r6c7-r6c8 total 8 connected true
cage-5: cage r3c7-r3c8-r4c7 total 15 connected true
cage-6: cage r8c3-r8c4-r9c3 total 20 connected true
cage-7: cage r3c1-r3c2-r4c2 total 10 connected true
cage-8: cage r1c5-r2c4-r2c5 total 13 connected true
region-sum-1: region-sum r5c1-r4c2-r3c3-r4c4-r5c5-r6c4-r7c3-r8c2-r9c1 segments [["r5c1","r4c2"],["r3c3"],["r4c4","r5c5","r6c4"],["r7c3","r8c2","r9c1"]]
region-sum-2: region-sum r7c1-r6c2-r5c3 segments [["r7c1"],["r6c2","r5c3"]]
region-sum-3: region-sum r9c7-r8c6-r7c5-r6c6-r5c7-r6c8 segments [["r9c7"],["r8c6","r7c5"],["r6c6"],["r5c7","r6c8"]]
region-sum-4: region-sum r2c9-r3c8-r4c7-r3c6-r2c5-r1c6 segments [["r2c9","r3c8"],["r4c7"],["r3c6","r2c5","r1c6"]]
region-sum-5: region-sum r8c7-r7c8-r6c9 segments [["r8c7","r7c8"],["r6c9"]]
region-sum-6: region-sum r2c6-r1c7 segments [["r2c6"],["r1c7"]]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Line: The sum of the digits on a blue line within a particular region must be the same for all of the regions the line passes through.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.
