---
format: open-rules
title: Emerald
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/emerald
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7a2761f05f2f63393ceef64d8b01d2e2
---

```rules
sudoku 9x9
cage-1: cage r4c8-r4c9 total 13 connected true
cage-2: cage r4c1-r4c2 total 13 connected true
cage-3: cage r6c1-r6c2 total 11 connected true
cage-4: cage r6c8-r6c9 total 13 connected true
cage-5: cage r2c6-r3c6 total 12 connected true
kropki-1: kropki r5c5-r5c6 white
kropki-2: kropki r8c4-r8c5 white
kropki-3: kropki r5c2-r6c2 black
kropki-4: kropki r6c2-r7c2 black
kropki-5: kropki r4c6-r5c6 black
whispers-1: whispers r2c7-r1c6-r1c5-r1c4-r2c3-r2c2-r3c2-r4c1-r5c1-r6c1-r7c2-r8c2-r8c3 gap 5
whispers-2: whispers r9c5-r9c6-r8c7-r8c8-r7c8-r6c9-r5c9-r4c9-r3c8-r2c8 gap 5
whispers-3: whispers r6c6-r5c7-r4c6-r3c5-r4c4-r5c3-r6c4-r7c5 gap 5
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on lines. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
