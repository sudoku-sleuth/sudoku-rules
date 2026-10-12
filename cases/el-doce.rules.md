---
format: open-rules
title: El Doce
setter: sujoyku
source: https://sudokupad.app/mvdb4aycs2
case: https://sudoku-sleuth.com/cases/el-doce
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5-r4c6-r5c4 total 12 connected true
cage-2: cage r6c4-r6c5-r7c4 total 12 connected true
cage-3: cage r2c1-r3c1-r4c1 total 12 connected true
cage-4: cage r1c3-r1c4-r2c3 total 12 connected true
cage-5: cage r1c1-r1c2 total 12 connected true
cage-6: cage r2c2-r3c2-r3c3 total 12 connected true
cage-7: cage r3c5-r3c6-r3c7-r4c7 total 12 connected true
cage-8: cage r7c5-r8c5 total 12 connected true
cage-9: cage r5c6-r5c7-r5c8 total 12 connected true
cage-10: cage r6c2-r6c3 total 12 connected true
cage-11: cage r6c6-r7c6-r7c7 total 12 connected true
cage-12: cage r1c6-r1c7 total 12 connected true
cage-13: cage r8c3-r9c2-r9c3-r9c4 total 12 connected true
cage-14: cage r2c9-r3c9 total 12 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 12.
