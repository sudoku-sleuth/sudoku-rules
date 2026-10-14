---
format: open-rules
title: A dozen possibilities
setter: sujoyku
source: https://tinyurl.com/29ff593d
case: https://sudoku-sleuth.com/cases/a-dozen-possibilities
library: https://rules.sudoku-sleuth.com/
status: read
exported: ea391fe740e327a4c5d5d92216139155
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c1-r3c2-r4c1 total 12 connected true
cage-2: cage r1c3-r1c4-r1c5-r2c3 total 12 connected true
cage-3: cage r1c1-r2c1 total 12 connected true
cage-4: cage r4c7-r4c8-r4c9 total 8 connected true
cage-5: cage r1c6-r2c6-r3c6 total 10 connected true
cage-6: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 28 connected true
cage-7: cage r6c1-r6c2-r6c3 total 11 connected true
cage-8: cage r7c4-r8c4-r9c4 total 13 connected true
cage-9: cage r8c7-r8c8-r9c6-r9c7 total 15 connected true
cage-10: cage r9c8-r9c9 total 15 connected true
cage-11: cage r5c9-r6c9-r7c8-r7c9 total 15 connected true
cage-12: cage r8c1-r9c1-r9c2 total 20 connected true
cage-13: cage r6c7-r7c7 total 15 connected true
cage-14: cage r2c7-r2c8-r3c7 total 14 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
