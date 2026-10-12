---
format: open-rules
title: ¡Venga Veinte!
setter: sujoyku
source: https://sudokupad.app/a59cp4ytjt
case: https://sudoku-sleuth.com/cases/venga-veinte
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 20 connected true
cage-2: cage r1c3-r1c4-r2c3 total 20 connected true
cage-3: cage r3c1-r3c2-r4c1 total 20 connected true
cage-4: cage r1c9-r2c9-r3c7-r3c8-r3c9 total 20 connected true
cage-5: cage r7c3-r8c3-r9c1-r9c2-r9c3 total 20 connected true
cage-6: cage r7c7-r7c8-r8c7 total 20 connected true
cage-7: cage r6c1-r7c1-r7c2-r8c1 total 20 connected true
cage-8: cage r1c6-r1c7-r1c8-r2c7 total 20 connected true
cage-9: cage r4c4-r4c5-r5c4 total 20 connected true
cage-10: cage r4c8-r4c9-r5c9-r6c9-r7c9 total 20 connected true
cage-11: cage r6c4-r7c4-r7c5 total 20 connected true
cage-12: cage r5c6-r5c7-r6c7 total 20 connected true
cage-13: cage r6c6-r7c6-r8c6-r9c5-r9c6 total 20 connected true
cage-14: cage r4c2-r5c2-r5c3-r6c2 total 20 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 20.
