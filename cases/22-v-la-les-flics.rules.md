---
format: open-rules
title: 22, v'là les flics !
setter: sujoyku
source: https://sudokupad.app/lq6ujk0wia
case: https://sudoku-sleuth.com/cases/22-v-la-les-flics
library: https://rules.sudoku-sleuth.com/
status: read
exported: 184c6a67ab7d0727ee38643c86827724
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1-r3c2-r3c3-r4c3 total 22 connected true
cage-2: cage r1c2-r1c3-r2c3 total 22 connected true
cage-3: cage r1c8-r1c9-r2c9 total 22 connected true
cage-4: cage r1c6-r1c7-r2c7-r3c7-r3c8-r3c9 total 22 connected true
cage-5: cage r1c4-r2c4-r2c5-r3c5-r3c6 total 22 connected true
cage-6: cage r8c4-r9c3-r9c4 total 22 connected true
cage-7: cage r8c7-r9c6-r9c7 total 22 connected true
cage-8: cage r6c1-r7c1-r7c2-r8c1-r9c1 total 22 connected true
cage-9: cage r4c2-r5c2-r5c3-r6c2 total 22 connected true
cage-10: cage r4c8-r4c9-r5c8 total 22 connected true
cage-11: cage r5c5-r5c6-r6c4-r6c5 total 22 connected true
cage-12: cage r7c5-r7c6-r7c7-r7c8-r7c9 total 22 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 22.
