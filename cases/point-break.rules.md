---
format: open-rules
title: Point Break
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/point-break
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5 total 6 connected true
cage-2: cage r3c7-r4c7-r5c7 total 7 connected true
cage-3: cage r7c5-r7c6-r7c7 total 6 connected true
cage-4: cage r5c3-r6c3-r7c3 total 7 connected true
cage-5: cage r2c2-r2c3-r2c4 total 21 connected true
cage-6: cage r2c8-r3c8-r4c8 total 21 connected true
cage-7: cage r8c6-r8c7-r8c8 total 21 connected true
cage-8: cage r6c2-r7c2-r8c2 total 21 connected true
cage-9: cage r1c1-r1c2-r2c1 total 12 connected true
cage-10: cage r8c9-r9c8-r9c9 total 12 connected true
cage-11: cage r2c9-r3c9-r4c9 total 13 connected true
cage-12: cage r6c1-r7c1-r8c1 total 14 connected true
cage-13: cage r4c1-r4c2 total 9 connected true
cage-14: cage r6c4-r6c5-r6c6 total 9 connected true
cage-15: cage r5c9-r6c9 total 13 connected true
cage-16: cage r9c4-r9c5 total 9 connected true
```

Normal sudoku rules apply. Each row, column, and box must contain a complete set of the digits 1-9.

Normal killer cages: digits inside a dashed cage cannot repeat and must sum to the number shown in the upper left corner of the cage.
