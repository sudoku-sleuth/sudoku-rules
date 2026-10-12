---
format: open-rules
title: Assassin (Attentäter)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/assassin-attentater
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c8-r8c9 total 3 connected true
cage-2: cage r8c1-r9c1 total 7 connected true
cage-3: cage r9c8-r9c9 total 17 connected true
cage-4: cage r1c1-r1c2 total 9 connected true
cage-5: cage r2c1-r2c2 total 7 connected true
cage-6: cage r1c8-r2c8 total 10 connected true
cage-7: cage r1c9-r2c9 total 5 connected true
cage-8: cage r7c1-r7c2 total 6 connected true
cage-9: cage r7c8-r7c9 total 7 connected true
cage-10: cage r3c8-r3c9 total 12 connected true
cage-11: cage r8c2-r9c2 total 15 connected true
cage-12: cage r3c1-r3c2 total 11 connected true
cage-13: cage r2c3-r2c4 total 8 connected true
cage-14: cage r4c8-r5c8 total 6 connected true
cage-15: cage r8c6-r8c7 total 9 connected true
cage-16: cage r5c2-r6c2 total 9 connected true
cage-17: cage r6c5-r7c5 total 15 connected true
cage-18: cage r5c3-r5c4 total 14 connected true
cage-19: cage r5c6-r5c7 total 12 connected true
cage-20: cage r3c5-r4c5 total 5 connected true
cage-21: cage r3c7-r4c7 total 4 connected true
cage-22: cage r3c3-r4c3 total 12 connected true
cage-23: cage r3c4-r4c4 total 9 connected true
cage-24: cage r9c5-r9c6 total 8 connected true
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages.
