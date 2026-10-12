---
format: open-rules
title: Elasticity
setter: sujoyku
source: https://tinyurl.com/4yux43kw
case: https://sudoku-sleuth.com/cases/elasticity
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c1-r6c1 total 13 connected true
cage-2: cage r2c1-r3c1 total 13 connected true
cage-3: cage r9c4-r9c5 total 13 connected true
cage-4: cage r9c7-r9c8 total 13 connected true
cage-5: cage r7c2-r7c3-r8c3 total 16 connected true
cage-6: cage r8c1-r8c2-r9c2 total 9 connected true
cage-7: cage r1c2-r1c3 total 12 connected true
cage-8: cage r1c5-r1c6 total 12 connected true
cage-9: cage r4c9-r5c9 total 12 connected true
cage-10: cage r7c9-r8c9 total 12 connected true
cage-11: cage r2c7-r3c7-r3c8 total 14 connected true
cage-12: cage r1c8-r2c8-r2c9 total 10 connected true
cage-13: cage r2c3-r2c4-r3c2-r3c3-r4c2 total 15 connected true
cage-14: cage r3c5-r3c6 total 14 connected true
cage-15: cage r5c3-r6c3 total 11 connected true
cage-16: cage r6c8-r7c7-r7c8-r8c6-r8c7 total 20 connected true
cage-17: cage r4c6-r5c5-r5c6-r6c4-r6c5-r7c4 total 36 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
