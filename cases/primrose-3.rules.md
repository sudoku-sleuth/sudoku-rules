---
format: open-rules
title: Primrose 3
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/primrose-3
library: https://rules.sudoku-sleuth.com/
status: read
exported: fc7dd74437aa6da27d79318fbe5a251c
---

```rules
sudoku 9x9
cage-1: cage r6c4-r7c4 total 5 connected true
cage-2: cage r4c3-r4c4 total 5 connected true
cage-3: cage r3c6-r4c6 total 5 connected true
cage-4: cage r6c6-r6c7 total 5 connected true
cage-5: cage r7c6-r7c7 total 15 connected true
cage-6: cage r6c3-r7c3 total 15 connected true
cage-7: cage r3c3-r3c4 total 15 connected true
cage-8: cage r3c7-r4c7 total 15 connected true
cage-9: cage r5c2-r6c2 total 8 connected true
cage-10: cage r2c4-r2c5 total 8 connected true
cage-11: cage r4c8-r5c8 total 8 connected true
cage-12: cage r8c9-r9c9 total 15 connected true
cage-13: cage r1c8-r1c9 total 15 connected true
cage-14: cage r2c2-r3c2 total 7 connected true
cage-15: cage r2c7-r2c8 total 7 connected true
cage-16: cage r7c8-r8c8 total 7 connected true
cage-17: cage r1c1-r2c1 total 15 connected true
cage-18: cage r9c1-r9c2 total 15 connected true
cage-19: cage r8c2-r8c3 total 7 connected true
cage-20: cage r3c9-r4c9-r5c9 total 16 connected true
cage-21: cage r1c4-r1c5-r1c6 total 17 connected true
cage-22: cage r9c4-r9c5-r9c6 total 13 connected true
kropki r7c7-r7c8 white
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Not all possible dots are shown.
