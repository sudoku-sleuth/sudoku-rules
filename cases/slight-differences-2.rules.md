---
format: open-rules
title: Slight differences
setter: sujoyku
source: https://tinyurl.com/yrmfppj4
case: https://sudoku-sleuth.com/cases/slight-differences-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: df1d54f9200be1e837dae5398ed7853d
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2-r3c1 total 26 connected true
cage-2: cage r3c2-r3c3 total 10 connected true
cage-3: cage r1c3-r2c3-r2c4 total 11 connected true
cage-4: cage r3c4-r3c5 total 11 connected true
cage-5: cage r1c4-r1c5-r1c6-r2c5 total 24 connected true
cage-6: cage r2c6-r3c6-r3c7 total 12 connected true
cage-7: cage r1c7-r1c8 total 12 connected true
cage-8: cage r1c9-r2c7-r2c8-r2c9 total 14 connected true
cage-9: cage r3c8-r3c9-r4c8 total 21 connected true
cage-10: cage r4c7-r5c7 total 12 connected true
cage-11: cage r6c7-r6c8 total 7 connected true
cage-12: cage r4c9-r5c8-r5c9 total 18 connected true
cage-13: cage r6c9-r7c9 total 10 connected true
cage-14: cage r4c1-r4c2 total 13 connected true
cage-15: cage r4c3-r5c2-r5c3-r6c3 total 20 connected true
cage-16: cage r6c1-r6c2-r7c2 total 15 connected true
cage-17: cage r7c1-r8c1-r8c2-r9c1 total 22 connected true
cage-18: cage r7c3-r7c4-r8c3 total 15 connected true
cage-19: cage r9c2-r9c3 total 11 connected true
cage-20: cage r5c5-r6c4-r6c5 total 20 connected true
cage-21: cage r8c7-r9c6-r9c7 total 9 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
