---
format: open-rules
title: Tight Squeeze
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/tight-squeeze
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7a14f82ee1cbbdc0096fce742e7de2b0
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 13 repeats true connected true
cage-2: cage r7c3-r8c3-r9c3 total 21 repeats true connected true
cage-3: cage r1c5-r1c6 total 7 repeats true connected true
cage-4: cage r4c4-r4c5-r5c5-r5c6-r6c6-r6c7-r7c7 total 40 repeats true connected true
kropki-1: kropki r3c1-r3c2 white
kropki-2: kropki r2c2-r3c2 white
kropki-3: kropki r1c4-r2c4 white
kropki-4: kropki r2c4-r2c5 white
kropki-5: kropki r2c5-r2c6 white
kropki-6: kropki r2c1-r2c2 white
kropki-7: kropki r5c8-r6c8 white
kropki-8: kropki r4c8-r5c8 white
kropki-9: kropki r4c9-r5c9 white
kropki-10: kropki r5c9-r6c9 white
kropki-11: kropki r4c8-r4c9 white
kropki-12: kropki r5c2-r6c2 white
kropki-13: kropki r8c5-r8c6 white
kropki-14: kropki r4c3-r4c4 black
kropki-15: kropki r5c4-r5c5 black
kropki-16: kropki r6c5-r6c6 black
kropki-17: kropki r6c6-r7c6 black
kropki-18: kropki r7c7-r8c7 black
kropki-19: kropki r5c5-r6c5 black
kropki-20: kropki r8c8-r9c8 black
kropki-21: kropki r9c8-r9c9 black
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. The solver must determine if numbers repeat in cages. Numbers with a white dot between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are given.
