---
format: open-rules
title: Down on the Corner (CCR)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/down-on-the-corner-ccr
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8ecf883c4ec91eb1e77bc1c1b4caf129
---

```rules
sudoku 9x9
cage-1: cage r3c7-r3c8 total 5 connected true
cage-2: cage r3c4-r3c5 total 13 connected true
cage-3: cage r5c6-r6c6 total 8 connected true
kropki-1: kropki r1c2-r1c3 white
kropki-2: kropki r1c3-r1c4 white
kropki-3: kropki r1c4-r1c5 white
kropki-4: kropki r1c6-r1c7 white
kropki-5: kropki r1c7-r1c8 white
kropki-6: kropki r1c8-r1c9 white
kropki-7: kropki r2c9-r3c9 white
kropki-8: kropki r3c9-r4c9 white
kropki-9: kropki r4c9-r5c9 white
kropki-10: kropki r7c9-r8c9 white
kropki-11: kropki r7c7-r7c8 white
kropki-12: kropki r7c6-r7c7 white
kropki-13: kropki r6c8-r6c9 white
kropki-14: kropki r6c7-r6c8 white
kropki-15: kropki r6c5-r6c6 white
kropki-16: kropki r6c4-r6c5 white
kropki-17: kropki r6c2-r6c3 white
kropki-18: kropki r6c1-r6c2 white
little-killer-1: little-killer r1c8-r2c9 sum 9
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 14
little-killer-3: little-killer r1c6-r2c7-r3c8-r4c9 sum 19
little-killer-4: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 24
little-killer-5: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 29
little-killer-6: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 34
little-killer-7: little-killer r1c2-r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 sum 39
little-killer-8: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 44
little-killer-9: little-killer r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7-r9c8 sum 49
```

Normal Sudoku rules apply. Numbers outside the grid are the sum of the indicated diagonal. Numbers may repeat on diagonals, if other rules allow. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Not all possible dots are given.
