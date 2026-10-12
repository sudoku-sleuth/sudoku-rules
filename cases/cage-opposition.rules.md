---
format: open-rules
title: Cage Opposition
setter: sujoyku
source: https://tinyurl.com/2p999fde
case: https://sudoku-sleuth.com/cases/cage-opposition
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 10 connected true
cage-2: cage r1c4-r2c4 total 9 connected true
cage-3: cage r1c5-r2c5 total 11 connected true
cage-4: cage r1c6-r2c6 total 7 connected true
cage-5: cage r3c8-r3c9 total 6 connected true
cage-6: cage r7c8-r7c9 total 7 connected true
cage-7: cage r7c1-r7c2 total 7 connected true
cage-8: cage r3c1-r3c2 total 10 connected true
cage-9: cage r4c1-r4c2 total 7 connected true
cage-10: cage r4c8-r4c9 total 7 connected true
cage-11: cage r5c8-r5c9 total 8 connected true
cage-12: cage r6c8-r6c9 total 9 connected true
cage-13: cage r5c1-r5c2 total 8 connected true
cage-14: cage r6c1-r6c2 total 6 connected true
cage-15: cage r6c3-r7c3-r7c4 total 23 connected true
cage-16: cage r6c7-r7c6-r7c7 total 24 connected true
cage-17: cage r3c6-r3c7-r4c7 total 21 connected true
cage-18: cage r3c3-r3c4-r4c3 total 22 connected true
cage-19: cage r8c4-r9c4 total 8 connected true
cage-20: cage r8c5-r9c5 total 11 connected true
cage-21: cage r8c6-r9c6 total 8 connected true
cage-22: cage r9c7-r9c8 total 14 connected true
cage-23: cage r1c9-r2c9 total 14 connected true
cage-24: cage r8c1-r9c1 total 12 connected true
```

Normal Sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
