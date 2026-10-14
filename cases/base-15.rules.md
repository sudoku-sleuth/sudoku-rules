---
format: open-rules
title: Base 15
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/base-15
library: https://rules.sudoku-sleuth.com/
status: read
exported: e10640e982191a40caabb816f108031e
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5-r4c6 total 15 connected true
cage-2: cage r5c4-r5c5-r5c6 total 15 connected true
cage-3: cage r6c4-r6c5-r6c6 total 15 connected true
cage-4: cage r6c7-r6c8-r6c9 total 23 connected true
cage-5: cage r5c1-r5c2-r5c3 total 21 connected true
cage-6: cage r4c7-r4c8-r4c9 total 13 connected true
cage-7: cage r3c3-r3c4-r3c5-r3c6-r3c7 total 15 connected true
cage-8: cage r7c3-r7c4-r7c5-r7c6-r7c7 total 15 connected true
cage-9: cage r8c4-r8c5 total 15 connected true
cage-10: cage r9c5-r9c6 total 15 connected true
cage-11: cage r2c4-r2c5 total 15 connected true
cage-12: cage r1c5-r1c6 total 15 connected true
cage-13: cage r2c6-r2c7-r2c8-r2c9 total 10 connected true
cage-14: cage r1c3-r2c3 total 13 connected true
cage-15: cage r8c3-r9c3 total 14 connected true
cage-16: cage r7c2-r8c2 total 10 connected true
cage-17: cage r8c7-r8c8 total 13 connected true
cage-18: cage r8c9-r9c9 total 3 connected true
kropki-1: kropki r4c5-r5c5 white
kropki-2: kropki r5c5-r6c5 white
kropki-3: kropki r6c5-r7c5 white
kropki-4: kropki r8c3-r8c4 white
kropki-5: kropki r1c6-r1c7 white
parity-cells r6c4-r6c6-r6c8-r6c2-r4c8-r4c3-r4c1-r4c2 parity "odd"
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Not all possible dots are given. Numbers on a gray circle are odd.
