---
format: open-rules
title: El Trece
setter: sujoyku
source: https://sudokupad.app/k0u827xg6h
case: https://sudoku-sleuth.com/cases/el-trece
library: https://rules.sudoku-sleuth.com/
status: read
exported: ea794c0592404665b5dbfac1c717712d
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r4c1-r4c2 total 13 connected true
cage-2: cage r1c4-r2c3-r2c4 total 13 connected true
cage-3: cage r2c1-r2c2-r3c1 total 13 connected true
cage-4: cage r1c1-r1c2-r1c3 total 13 connected true
cage-5: cage r7c7-r8c6-r8c7-r9c6 total 13 connected true
cage-6: cage r6c8-r6c9-r7c8 total 13 connected true
cage-7: cage r7c9-r8c9-r9c9 total 13 connected true
cage-8: cage r8c8-r9c7-r9c8 total 13 connected true
cage-9: cage r2c6-r2c7-r3c5-r3c6 total 13 connected true
cage-10: cage r7c2-r8c2-r8c3-r9c3 total 13 connected true
cage-11: cage r7c4-r7c5 total 13 connected true
cage-12: cage r8c4-r8c5 total 13 connected true
cage-13: cage r9c4-r9c5 total 13 connected true
cage-14: cage r5c6-r5c7 total 13 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Diagonals: On the main diagonals, digits do not repeat.

- Killer cages: Digits in a cage do not repeat and must sum to 13.
