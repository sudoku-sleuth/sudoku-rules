---
format: open-rules
title: 21 Guns
setter: sujoyku
source: https://sudokupad.app/7yvtg81m4v
case: https://sudoku-sleuth.com/cases/21-guns
library: https://rules.sudoku-sleuth.com/
status: read
exported: 37e3ba296008ceecb114080c91c34d8b
---

```rules
sudoku 9x9
cage-1: cage r8c3-r9c3-r9c4 total 21 connected true
cage-2: cage r6c1-r7c1-r7c2-r8c2-r9c1-r9c2 total 21 connected true
cage-3: cage r1c2-r1c3-r2c2-r3c1-r3c2-r4c1 total 21 connected true
cage-4: cage r6c9-r7c8-r7c9-r8c8-r9c8-r9c9 total 21 connected true
cage-5: cage r8c6-r8c7-r9c7 total 21 connected true
cage-6: cage r7c4-r7c5-r8c5 total 21 connected true
cage-7: cage r4c4-r5c2-r5c3-r5c4-r6c2 total 21 connected true
cage-8: cage r1c9-r2c9-r3c9-r4c9-r5c9 total 21 connected true
cage-9: cage r5c8-r6c7-r6c8-r7c7 total 21 connected true
cage-10: cage r1c5-r1c6-r1c7 total 21 connected true
cage-11: cage r2c3-r2c4-r3c3 total 21 connected true
cage-12: cage r5c6-r6c5-r6c6-r7c6 total 21 connected true
cage-13: cage r2c6-r2c7-r2c8-r3c6-r4c6 total 21 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 21.
