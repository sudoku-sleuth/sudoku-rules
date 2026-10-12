---
format: open-rules
title: Going Around
setter: EPH
source: https://tinyurl.com/3ddfax5b
case: https://sudoku-sleuth.com/cases/going-around
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4-r2c4-r2c5-r2c6 total 29 connected true
cage-2: cage r8c4-r8c5-r8c6-r9c6-r9c7-r9c8-r9c9 total 31 connected true
cage-3: cage r4c2-r5c2-r6c1-r6c2-r7c1-r8c1-r9c1 total 28 connected true
cage-4: cage r3c7-r3c8 total 8 connected true
cage-5: cage r2c3-r3c3 total 11 connected true
cage-6: cage r7c7-r8c7 total 14 connected true
cage-7: cage r7c2-r7c3 total 15 connected true
cage-8: cage r1c9-r2c9-r3c9-r4c8-r4c9-r5c8-r6c8 total 30 connected true
cage-9: cage r3c5-r4c5-r4c6-r5c6 total 17 connected true
cage-10: cage r5c3-r5c4-r6c4-r6c5 total 15 connected true
diagonal direction "main"
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in a cage must not repeat and must sum to the indicated total.

Digits must not repeat along the marked diagonal.
