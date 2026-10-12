---
format: open-rules
title: Pigeonhole
setter: sujoyku
source: https://tinyurl.com/5ctc9xs2
case: https://sudoku-sleuth.com/cases/pigeonhole
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3-r8c2-r8c3 total 23 connected true
cage-2: cage r5c1-r6c1 total 7 connected true
cage-3: cage r2c1-r3c1 total 7 connected true
cage-4: cage r2c7-r2c8-r3c7-r3c8 total 12 connected true
cage-5: cage r1c3-r1c4 total 13 connected true
cage-6: cage r9c4-r9c5 total 7 connected true
cage-7: cage r9c7-r9c8 total 7 connected true
cage-8: cage r6c9-r7c9 total 11 connected true
cage-9: cage r4c7-r4c8-r4c9 total 21 connected true
cage-10: cage r1c6-r2c6-r3c6 total 18 connected true
cage-11: cage r3c4-r4c4-r5c4 total 20 connected true
cage-12: cage r6c5-r6c6-r6c7 total 22 connected true
cage-13: cage r3c2-r3c3 total 11 connected true
cage-14: cage r7c7-r8c7 total 11 connected true
cage-15: cage r4c2-r5c2 total 10 connected true
cage-16: cage r8c5-r8c6 total 10 connected true
```

Normal sudoku rules apply. Digits in a cage sum to the clue in the top left.
