---
format: open-rules
title: Transfer Portal
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4r5j55h75n
case: https://sudoku-sleuth.com/cases/transfer-portal
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c4=2 r6c6=1
exported: 3a67319bd9241f45661d558c07d69726
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1 total 11 connected true
cage-2: cage r5c9-r6c9 total 10 connected true
cage-3: cage r8c4-r9c4 total 14 connected true
cage-4: cage r1c6-r2c6 total 12 connected true
cage-5: cage r5c3-r6c3 total 8 connected true
cage-6: cage r7c4-r7c5 total 10 connected true
cage-7: cage r4c8-r4c9 total 11 connected true
cage-8: cage r4c2-r4c3 total 8 connected true
cage-9: cage r1c4-r2c4 total 10 connected true
cage-10: cage r8c6-r9c6 total 11 connected true
region-sum-1: region-sum r4c1-r3c1-r2c2-r1c3-r1c4 segments [["r4c1"],["r3c1","r2c2","r1c3"],["r1c4"]]
region-sum-2: region-sum r1c6-r1c7-r2c8-r3c9-r4c9-r5c9 segments [["r1c6"],["r1c7","r2c8","r3c9"],["r4c9","r5c9"]]
region-sum-3: region-sum r6c9-r7c9-r8c8-r9c7-r9c6 segments [["r6c9"],["r7c9","r8c8","r9c7"],["r9c6"]]
region-sum-4: region-sum r9c4-r9c3-r8c2-r7c1-r6c1-r5c1 segments [["r9c4"],["r9c3","r8c2","r7c1"],["r6c1","r5c1"]]
region-sum-5: region-sum r6c2-r7c3-r8c4 segments [["r6c2"],["r7c3"],["r8c4"]]
region-sum-6: region-sum r2c6-r3c7-r4c8 segments [["r2c6"],["r3c7"],["r4c8"]]
region-sum-7: region-sum r4c2-r3c3-r2c4 segments [["r4c2"],["r3c3"],["r2c4"]]
region-sum-8: region-sum r8c6-r7c7-r6c8 segments [["r8c6"],["r7c7"],["r6c8"]]
region-sum-9: region-sum r5c3-r4c3-r3c4-r3c5 segments [["r5c3","r4c3"],["r3c4","r3c5"]]
region-sum-10: region-sum r7c5-r7c6-r6c7-r5c7 segments [["r7c5","r7c6"],["r6c7","r5c7"]]
region-sum-11: region-sum r6c3-r7c4 segments [["r6c3"],["r7c4"]]
```

**Standard Sudoku, Sum Lines, Cages**

- Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
- Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value.
- Cages: Digits in cages must sum to the number in the top left corner of the cage.
