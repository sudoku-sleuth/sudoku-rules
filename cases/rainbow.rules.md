---
format: open-rules
title: Rainbow
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/rainbow
library: https://rules.sudoku-sleuth.com/
status: read
exported: e6fd2bf32ca72a6a358e79ba63fe6cc9
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r2c5-r2c6-r2c7 total 15 connected true
cage-2: cage r3c2-r3c3 total 5 connected true
cage-3: cage r3c7-r3c8 total 5 connected true
cage-4: cage r4c8-r4c9 total 5 connected true
cage-5: cage r4c1-r4c2 total 5 connected true
cage-6: cage r5c9-r6c9 total 5 connected true
cage-7: cage r5c1-r6c1 total 5 connected true
cage-8: cage r3c4-r3c5-r3c6 total 18 connected true
cage-9: cage r4c3-r4c4 total 13 connected true
cage-10: cage r4c6-r4c7 total 13 connected true
cage-11: cage r6c2-r7c1-r7c2 total 24 connected true
cage-12: cage r6c8-r7c8-r7c9 total 23 connected true
cage-13: cage r5c7-r5c8 total 14 connected true
cage-14: cage r5c2-r5c3 total 14 connected true
cage-15: cage r5c4-r5c5-r5c6 total 14 connected true
cage-16: cage r6c3-r6c4 total 12 connected true
cage-17: cage r6c6-r6c7 total 8 connected true
cage-18: cage r7c3-r8c1-r8c2-r8c3 total 24 connected true
cage-19: cage r7c7-r8c7-r8c8-r8c9 total 14 connected true
kropki-1: kropki r2c5-r3c5 white
kropki-2: kropki r7c5-r8c5 white
kropki-3: kropki r6c5-r7c5 white
kropki-4: kropki r2c9-r3c9 white
pair r3c1-r4c1 sum 10
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. Numbers with a white dot between them are consecutive. Numbers with an X between them sum to 10. Not all possible dots and X are given.
