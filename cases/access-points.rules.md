---
format: open-rules
title: Access Points
setter: Will Power
source: https://f-puzzles.com/?id=y759grw6
case: https://sudoku-sleuth.com/cases/access-points
library: https://rules.sudoku-sleuth.com/
status: read
exported: 874c53a3c96cef509bb3cd04b9788bf5
---

```rules
sudoku 9x9
cage-1: cage r9c8-r9c9 total 5 connected true
cage-2: cage r8c1-r9c1 total 6 connected true
cage-3: cage r1c1-r1c2 total 7 connected true
cage-4: cage r1c8-r2c8 total 8 connected true
cage-5: cage r8c7-r8c8 total 9 connected true
cage-6: cage r7c2-r8c2 total 10 connected true
cage-7: cage r2c7-r3c7 total 12 connected true
cage-8: cage r7c6-r7c7 total 13 connected true
cage-9: cage r6c3-r7c3 total 14 connected true
cage-10: cage r3c3-r3c4 total 15 connected true
cage-11: cage r3c6-r4c6 total 16 connected true
cage-12: cage r6c5-r6c6 total 17 connected true
cage-13: cage r2c2-r2c3 total 11 connected true
cage-14: cage r2c9-r3c9 total 4 connected true
cage-15: cage r5c1-r5c2-r5c3 total 20 connected true
cage-16: cage r5c7-r5c8-r5c9 total 18 connected true
kropki-1: kropki r1c1-r1c2 white
kropki-2: kropki r1c2-r1c3 white
kropki-3: kropki r4c2-r4c3 white
kropki-4: kropki r4c9-r5c9 white
kropki-5: kropki r2c7-r2c8 white
```

Normal Sudoku rulers apply. Numbers in cages sum to the number in the top left corner of the cage.  Numbers with a white dot between them are consecutive. Not all dots are given.
