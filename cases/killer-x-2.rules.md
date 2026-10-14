---
format: open-rules
title: Killer X (2)
setter: EPH
source: https://tinyurl.com/yuzwyjn7
case: https://sudoku-sleuth.com/cases/killer-x-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: ba72439b36c8e1e1b4bf40d712f3f099
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6-r4c6-r5c6 total 15 connected true
cage-2: cage r4c7-r5c7-r6c5-r6c6-r6c7 total 16 connected true
cage-3: cage r4c3-r4c4-r4c5-r5c3-r6c3 total 17 connected true
cage-4: cage r5c4-r6c4-r7c4-r7c5-r7c6 total 18 connected true
cage-5: cage r5c1-r5c2 total 10 connected true
cage-6: cage r5c8-r5c9 total 10 connected true
cage-7: cage r1c5-r2c5 total 10 connected true
cage-8: cage r8c5-r9c5 total 11 connected true
cage-9: cage r8c7-r9c7 total 10 connected true
cage-10: cage r3c1-r3c2 total 17 connected true
cage-11: cage r8c1-r9c1-r9c2 total 9 connected true
cage-12: cage r1c8-r2c8-r2c9 total 13 connected true
cage-13: cage r3c9-r4c9 total 11 connected true
cage-14: cage r6c1-r7c1 total 6 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits may not repeat along either of the marked diagonals.

Digits in cages cannot repeat and must sum to the value in the corner of the cage.
