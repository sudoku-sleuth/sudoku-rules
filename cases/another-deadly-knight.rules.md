---
format: open-rules
title: Another Deadly Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dgprcz5nz3
case: https://sudoku-sleuth.com/cases/another-deadly-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: db0c9177c28349060faf95e5a302d806
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2-r4c3 total 6 connected true
cage-2: cage r2c6-r2c7-r3c6 total 7 connected true
cage-3: cage r6c7-r6c8-r7c8 total 6 connected true
cage-4: cage r7c4-r8c3-r8c4 total 8 connected true
cage-5: cage r7c1-r8c1-r8c2 total 24 connected true
cage-6: cage r8c8-r9c7-r9c8 total 23 connected true
cage-7: cage r2c8-r2c9-r3c9 total 23 connected true
cage-8: cage r1c2-r1c3-r2c2 total 18 connected true
cage-9: cage r5c1-r5c2-r6c1 total 17 connected true
cage-10: cage r1c4-r1c5-r2c5 total 11 connected true
cage-11: cage r4c9-r5c8-r5c9 total 20 connected true
cage-12: cage r8c5-r9c5-r9c6 total 9 connected true
cage-13: cage r1c1-r2c1-r3c1 total 12 connected true
cage-14: cage r7c9-r8c9-r9c9 total 9 connected true
anti-knight
```

- Normal sudoku rules apply.
- Cells that are a chess knight's move apart cannot contain the same digit.
- Digits in a cage cannot repeat and must sum to the value shown in the upper left corner of the cage.
