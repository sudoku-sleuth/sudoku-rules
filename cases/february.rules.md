---
format: open-rules
title: February
setter: sujoyku
source: https://sudokupad.app/x17676cr13
case: https://sudoku-sleuth.com/cases/february
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c1-r7c1-r7c2-r7c3-r8c3-r9c3-r9c4 total 28 connected true
cage-2: cage r8c9-r9c7-r9c8-r9c9 total 28 connected true
cage-3: cage r1c6-r1c7-r2c7-r3c7-r3c8-r3c9-r4c9 total 28 connected true
cage-4: cage r1c1-r1c2-r1c3-r2c1 total 28 connected true
cage-5: cage r1c5-r2c4-r2c5-r2c6-r3c5 total 28 connected true
cage-6: cage r4c5-r5c5-r5c6-r5c7 total 28 connected true
cage-7: cage r3c1-r3c2-r4c1-r5c1-r5c2 total 28 connected true
cage-8: cage r6c5-r6c6-r6c7-r7c5 total 28 connected true
cage-9: cage r3c4-r4c4-r5c4-r6c4-r7c4-r8c4 total 28 connected true
cage-10: cage r7c6-r7c7-r8c5-r8c6-r9c6 total 28 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 28.
