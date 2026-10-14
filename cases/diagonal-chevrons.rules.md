---
format: open-rules
title: Diagonal Chevrons
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ji3s7qz2n2
case: https://sudoku-sleuth.com/cases/diagonal-chevrons
library: https://rules.sudoku-sleuth.com/
status: read
exported: 96536b5c395bf877901a6c5c7f6f1daf
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 7 connected true
cage-2: cage r3c4-r4c3-r4c4 total 7 connected true
cage-3: cage r4c5-r5c4-r5c5 total 6 connected true
cage-4: cage r1c2-r2c1-r2c2 total 14 connected true
cage-5: cage r5c6-r6c5-r6c6 total 24 connected true
cage-6: cage r6c7-r7c6-r7c7 total 24 connected true
cage-7: cage r7c8-r8c7-r8c8 total 23 connected true
cage-8: cage r8c9-r9c8-r9c9 total 12 connected true
cage-9: cage r6c3-r6c4-r7c4 total 9 connected true
cage-10: cage r7c2-r7c3-r8c3 total 14 connected true
cage-11: cage r8c1-r8c2-r9c2 total 10 connected true
cage-12: cage r3c6-r4c6-r4c7 total 14 connected true
cage-13: cage r2c7-r3c7-r3c8 total 13 connected true
cage-14: cage r1c8-r2c8-r2c9 total 13 connected true
cage-15: cage r8c4-r8c5-r9c4 total 18 connected true
cage-16: cage r3c1-r4c1-r4c2 total 22 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
