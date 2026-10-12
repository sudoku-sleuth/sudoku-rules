---
format: open-rules
title: Cereal Killer
setter: Tingo
source: ""
case: https://sudoku-sleuth.com/cases/cereal-killer
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3-r3c3 total 23 connected true
cage-2: cage r1c5-r1c6 total 17 connected true
cage-3: cage r1c9-r2c9 total 16 connected true
cage-4: cage r3c6-r3c7 total 7 connected true
cage-5: cage r2c1-r2c2 total 12 connected true
cage-6: cage r4c7-r4c8 total 5 connected true
cage-7: cage r5c6-r5c7 total 10 connected true
cage-8: cage r6c8-r6c9 total 17 connected true
cage-9: cage r7c8-r8c8-r9c8 total 6 connected true
cage-10: cage r8c6-r9c6 total 10 connected true
cage-11: cage r9c2-r9c3-r9c4 total 7 connected true
cage-12: cage r6c2-r7c2-r8c2 total 20 connected true
cage-13: cage r6c3-r6c4-r7c3 total 18 connected true
cage-14: cage r5c1-r5c2 total 14 connected true
cage-15: cage r7c1-r8c1 total 7 connected true
```

Normal Sudoku Rules Apply
Digits in cages must sum to the total in the top left corner of the cage. Digits may not repeat in cages.
