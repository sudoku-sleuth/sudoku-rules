---
format: open-rules
title: The Engine
setter: sujoyku
source: https://sudokupad.app/esxp4y2tlp
case: https://sudoku-sleuth.com/cases/the-engine
library: https://rules.sudoku-sleuth.com/
status: read
exported: 48928cfc6208811cdfba24ad02227082
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6-r1c7-r1c8-r1c9 total 18 connected true
cage-2: cage r5c1-r6c1-r7c1-r8c1-r9c1 total 18 connected true
cage-3: cage r1c3-r2c1-r2c2-r2c3-r3c1 total 18 connected true
cage-4: cage r2c6-r2c7-r2c8-r3c8-r4c8 total 18 connected true
cage-5: cage r2c4-r2c5-r3c3-r3c4-r4c3 total 18 connected true
cage-6: cage r6c8-r6c9-r7c8-r8c7-r8c8 total 18 connected true
cage-7: cage r6c3-r6c4-r6c5-r7c3 total 18 connected true
cage-8: cage r7c4-r7c5-r8c5-r8c6-r9c5 total 18 connected true
cage-9: cage r4c4-r4c5-r5c3-r5c4 total 18 connected true
cage-10: cage r4c6-r4c7-r5c6-r5c7 total 18 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 18.
