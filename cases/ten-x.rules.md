---
format: open-rules
title: Ten(x)
setter: Will Power
source: https://f-puzzles.com/?id=y9wuodao
case: https://sudoku-sleuth.com/cases/ten-x
library: https://rules.sudoku-sleuth.com/
status: read
exported: aea7884a1bc45bb2701b248f3391656b
---

```rules
sudoku 9x9
cage-1: cage r8c9-r9c7-r9c8-r9c9 total 30 connected true
cage-2: cage r5c4-r6c4-r7c4-r7c5 total 20 connected true
cage-3: cage r4c3-r4c4-r4c5-r5c3 total 30 connected true
cage-4: cage r3c5-r3c6-r4c6-r5c6 total 20 connected true
cage-5: cage r5c7-r6c5-r6c6-r6c7 total 30 connected true
cage-6: cage r7c1-r7c2-r8c1-r8c2 total 30 connected true
cage-7: cage r2c8-r2c9-r3c8-r3c9 total 30 connected true
cage-8: cage r1c1-r1c2-r1c3-r2c1 total 30 connected true
cage-9: cage r1c5-r2c4-r2c5-r3c4 total 10 connected true
cage-10: cage r7c6-r8c5-r8c6-r9c5 total 10 connected true
cage-11: cage r7c7-r7c8-r8c8 total 10 connected true
cage-12: cage r5c2-r6c2 total 10 connected true
cage-13: cage r3c1-r3c2-r4c2 total 10 connected true
kropki-1: kropki r6c5-r6c6 white
kropki-2: kropki r5c7-r6c7 white
kropki-3: kropki r4c3-r5c3 white
kropki-4: kropki r4c3-r4c4 white
kropki-5: kropki r4c4-r4c5 white
kropki-6: kropki r7c4-r7c5 white
kropki-7: kropki r5c4-r6c4 white
kropki-8: kropki r7c2-r8c2 white
kropki-9: kropki r8c1-r8c2 white
kropki-10: kropki r7c1-r8c1 white
kropki-11: kropki r2c9-r3c9 white
kropki-12: kropki r3c8-r3c9 white
kropki-13: kropki r2c8-r3c8 white
kropki-14: kropki r6c1-r6c2 white
kropki-15: kropki r5c1-r6c1 white
kropki-16: kropki r3c2-r4c2 white
kropki-17: kropki r7c8-r7c9 white
kropki-18: kropki r2c2-r2c3 white
kropki-19: kropki r8c3-r8c4 white
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages. Numbers with a white dot between them are consecutive. Not all dots are given.
