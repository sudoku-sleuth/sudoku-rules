---
format: open-rules
title: Flight of the Bumblebee
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/flight-of-the-bumblebee
library: https://rules.sudoku-sleuth.com/
status: read
exported: ae57793a14c4c015158cdd456d0f91fe
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1 total 6 connected true
cage-2: cage r7c2-r8c2 total 7 connected true
cage-3: cage r6c3-r7c3 total 8 connected true
cage-4: cage r5c4-r6c4 total 9 connected true
cage-5: cage r4c5-r5c5 total 10 connected true
cage-6: cage r5c6-r6c6 total 11 connected true
cage-7: cage r6c7-r7c7 total 12 connected true
cage-8: cage r7c8-r8c8 total 13 connected true
cage-9: cage r8c9-r9c9 total 14 connected true
cage-10: cage r6c5-r7c5-r8c5-r9c5 total 11 connected true
cage-11: cage r9c2-r9c3 total 11 connected true
cage-12: cage r8c4-r9c4 total 13 connected true
cage-13: cage r4c3-r4c4 total 4 connected true
cage-14: cage r4c6-r4c7 total 16 connected true
cage-15: cage r3c2-r3c3 total 6 connected true
cage-16: cage r2c1-r2c2 total 10 connected true
cage-17: cage r3c7-r3c8 total 14 connected true
cage-18: cage r2c8-r2c9 total 12 connected true
cage-19: cage r1c3-r2c3 total 10 connected true
cage-20: cage r1c7-r2c7 total 5 connected true
cage-21: cage r1c8-r1c9 total 5 connected true
cage-22: cage r2c4-r3c4 total 6 connected true
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage.
