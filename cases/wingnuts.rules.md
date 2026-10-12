---
format: open-rules
title: Wingnuts
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/lyfqmz98sf
case: https://sudoku-sleuth.com/cases/wingnuts
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=3
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4 total 10 connected true
cage-2: cage r3c8-r4c8 total 10 connected true
cage-3: cage r8c6-r8c7 total 10 connected true
cage-4: cage r6c2-r7c2 total 10 connected true
cage-5: cage r4c3-r4c4 total 10 connected true
cage-6: cage r3c6-r4c6 total 10 connected true
cage-7: cage r6c6-r6c7 total 10 connected true
cage-8: cage r6c4-r7c4 total 10 connected true
cage-9: cage r3c2-r3c3 total 10 connected true
cage-10: cage r2c7-r3c7 total 12 connected true
cage-11: cage r7c3-r8c3 total 14 connected true
cage-12: cage r7c7-r7c8 total 16 connected true
region-sum-1: region-sum r4c2-r4c3-r3c3-r2c3-r2c4-r3c4-r4c4-r4c5 segments [["r4c2","r4c3"],["r3c3","r2c3"],["r2c4","r3c4"],["r4c4","r4c5"]]
region-sum-2: region-sum r2c6-r3c6-r3c7-r3c8-r4c8-r4c7-r4c6-r5c6 segments [["r2c6","r3c6"],["r3c7","r3c8"],["r4c8","r4c7"],["r4c6","r5c6"]]
region-sum-3: region-sum r6c5-r6c6-r7c6-r8c6-r8c7-r7c7-r6c7-r6c8 segments [["r6c5","r6c6"],["r7c6","r8c6"],["r8c7","r7c7"],["r6c7","r6c8"]]
region-sum-4: region-sum r5c4-r6c4-r6c3-r6c2-r7c2-r7c3-r7c4-r8c4 segments [["r5c4","r6c4"],["r6c3","r6c2"],["r7c2","r7c3"],["r7c4","r8c4"]]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Line: The sum of the digits on a blue line within a particular region must be the same for all of the regions the line passes through.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
