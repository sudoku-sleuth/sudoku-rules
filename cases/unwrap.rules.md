---
format: open-rules
title: Unwrap
setter: Kennet's Dad
source: https://tinyurl.com/yc6mx6ad
case: https://sudoku-sleuth.com/cases/unwrap
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 23 connected true
cage-2: cage r3c2-r4c2-r4c3 total 10 connected true
cage-3: cage r2c3-r2c4-r3c4 total 10 connected true
cage-4: cage r1c8-r1c9-r2c9 total 16 connected true
cage-5: cage r3c8-r4c7-r4c8 total 9 connected true
cage-6: cage r2c6-r2c7-r3c6 total 19 connected true
cage-7: cage r5c6-r6c5-r6c6 total 24 connected true
cage-8: cage r6c7-r6c8-r7c8 total 13 connected true
cage-9: cage r8c9-r9c8-r9c9 total 23 connected true
cage-10: cage r7c6-r8c6-r8c7 total 17 connected true
cage-11: cage r7c4-r8c3-r8c4 total 7 connected true
cage-12: cage r6c2-r6c3-r7c2 total 19 connected true
cage-13: cage r8c1-r9c1-r9c2 total 14 connected true
```

Normal sudoku rules apply. Digits in cages may not repeat and sum to the number given.
