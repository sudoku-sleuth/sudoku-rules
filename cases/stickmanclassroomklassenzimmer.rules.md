---
format: open-rules
title: StickmanClassroomKlassenzimmer
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickmanclassroomklassenzimmer
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c3-r9c3 total 8 connected true
cage-2: cage r2c7-r2c8 total 10 connected true
cage-3: cage r3c6-r3c7 total 10 connected true
cage-4: cage r4c5-r4c6 total 10 connected true
cage-5: cage r5c2-r6c2 total 10 connected true
cage-6: cage r7c4-r7c5 total 10 connected true
cage-7: cage r9c1-r9c2 total 10 connected true
kropki-1: kropki r1c7-r1c8 colour "white"
kropki-2: kropki r1c8-r2c8 colour "white"
kropki-3: kropki r2c2-r3c2 colour "black"
whispers-1: whispers r7c1-r7c2-r7c3-r8c3-r9c3 gap 5
whispers-2: whispers r6c6-r6c7-r6c8-r7c8-r8c8 gap 5
whispers-3: whispers r5c1-r6c1-r7c1-r8c1-r9c1 gap 5
whispers-4: whispers r4c6-r5c6-r6c6-r7c6-r8c6 gap 5
renban-1: renban r2c2-r3c2-r3c3-r2c3
renban-2: renban r5c4-r5c3-r4c2-r5c2-r6c2-r7c2
renban-3: renban r7c3-r7c4-r8c4-r9c4-r9c5
renban-4: renban r1c7-r2c7-r2c8-r1c8-r3c7
renban-5: renban r6c8-r6c9-r7c9-r8c9
renban-6: renban r4c9-r4c8-r4c7-r5c7-r6c7
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
