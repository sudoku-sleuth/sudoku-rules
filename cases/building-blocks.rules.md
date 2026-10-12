---
format: open-rules
title: Building blocks
setter: sujoyku
source: https://tinyurl.com/y2sdpyd9
case: https://sudoku-sleuth.com/cases/building-blocks
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 13 connected true
cage-2: cage r2c2-r3c2 total 13 connected true
cage-3: cage r3c3-r4c3 total 13 connected true
cage-4: cage r1c3-r1c4 total 11 connected true
cage-5: cage r1c6-r1c7 total 5 connected true
cage-6: cage r9c6-r9c7 total 7 connected true
cage-7: cage r9c3-r9c4 total 11 connected true
cage-8: cage r8c1-r9c1 total 12 connected true
cage-9: cage r7c2-r8c2 total 12 connected true
cage-10: cage r6c3-r7c3 total 12 connected true
cage-11: cage r5c1-r5c2 total 10 connected true
cage-12: cage r5c6-r6c6-r7c6-r7c7 total 13 connected true
cage-13: cage r3c7-r3c8-r3c9-r4c7 total 12 connected true
cage-14: cage r5c8-r6c8-r6c9-r7c9 total 26 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
