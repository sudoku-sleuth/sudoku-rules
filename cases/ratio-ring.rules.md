---
format: open-rules
title: Ratio Ring
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/ratio-ring
library: https://rules.sudoku-sleuth.com/
status: read
exported: 44ee5b744724521708967f6f95b60b8f
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c8-r2c9 total 10 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 14 connected true
cage-3: cage r8c1-r8c2-r9c1-r9c2 total 20 connected true
cage-4: cage r1c1-r1c2-r2c1-r2c2 total 19 connected true
pair-1: pair r3c8-r4c8 difference 2
pair-2: pair r2c6-r2c7 difference 2
pair-3: pair r2c4-r2c5 difference 2
pair-4: pair r3c2-r4c2 difference 2
pair-5: pair r7c9-r8c9 difference 2
pair-6: pair r5c2-r6c2 difference 2
pair-7: pair r4c5-r4c6 difference 2
pair-8: pair r5c5-r5c6 difference 2
kropki-1: kropki r6c7-r7c7 black
kropki-2: kropki r7c6-r7c7 black
kropki-3: kropki r6c3-r7c3 black
kropki-4: kropki r3c3-r4c3 black
kropki-5: kropki r3c3-r3c4 black
kropki-6: kropki r3c7-r4c7 black
kropki-7: kropki r5c7-r6c7 black
kropki-8: kropki r4c3-r5c3 black
kropki-9: kropki r3c5-r3c6 black
kropki-10: kropki r7c4-r7c5 black
kropki-11: kropki r8c5-r9c5 black
arrow-1: arrow r9c2-r9c1 bulb ["r8c2"]
arrow-2: arrow r2c9-r1c9 bulb ["r2c8"]
```

Normal Sudoku rules apply. Numbers in cages sum to te number in the top left corner of the cage. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them have a DIFFERENCE OF 2. Not all possible dots are given. Numbers on arrows sum to the number in the arrow's circle.
