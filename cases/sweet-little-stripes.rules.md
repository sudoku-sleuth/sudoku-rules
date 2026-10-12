---
format: open-rules
title: Sweet little stripes
setter: sujoyku
source: https://tinyurl.com/mtv272jy
case: https://sudoku-sleuth.com/cases/sweet-little-stripes
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4 total 9 connected true
cage-2: cage r3c3-r3c4-r3c5 total 10 connected true
cage-3: cage r7c1-r8c1-r9c1 total 8 connected true
cage-4: cage r6c2-r7c2-r8c2 total 9 connected true
cage-5: cage r5c3-r6c3-r7c3 total 10 connected true
cage-6: cage r4c1-r4c2-r5c1-r6c1 total 26 connected true
cage-7: cage r1c9-r2c9-r3c9 total 8 connected true
cage-8: cage r2c8-r3c8-r4c8 total 12 connected true
cage-9: cage r3c7-r4c7-r5c7 total 8 connected true
cage-10: cage r9c7-r9c8-r9c9 total 9 connected true
cage-11: cage r8c6-r8c7-r8c8 total 9 connected true
cage-12: cage r7c5-r7c6-r7c7 total 9 connected true
cage-13: cage r7c4-r8c4-r9c4-r9c5 total 23 connected true
cage-14: cage r1c5-r1c6-r2c6-r3c6 total 24 connected true
cage-15: cage r4c9-r5c9-r6c8-r6c9 total 23 connected true
cage-16: cage r4c5-r4c6 total 11 connected true
cage-17: cage r6c4-r6c5 total 11 connected true
cage-18: cage r1c1-r1c2-r1c3 total 8 connected true
```

Normal Sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
