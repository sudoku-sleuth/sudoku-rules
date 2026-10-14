---
format: open-rules
title: Darth Vader
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/darth-vader
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 2dcd3a48d36c87a12fcaea0c17048d70
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2 total 3 connected true
cage-2: cage r1c1-r1c2 total 9 connected true
cage-3: cage r2c7-r2c8 total 11 connected true
cage-4: cage r4c3-r4c4 total 10 connected true
cage-5: cage r4c6-r4c7 total 10 connected true
cage-6: cage r6c2-r6c3 total 10 connected true
cage-7: cage r5c6-r6c6 total 10 connected true
cage-8: cage r6c7-r6c8 total 10 connected true
cage-9: cage r6c5-r7c5 total 5 connected true
cage-10: cage r8c9-r9c9 total 5 connected true
kropki-1: kropki r8c7-r8c8 white
kropki-2: kropki r1c6-r2c6 white
whispers-1: whispers r5c5-r6c4-r6c3-r5c2-r4c3-r4c4 gap 5
whispers-2: whispers r4c4-r5c5 gap 5
whispers-3: whispers r5c5-r6c6-r6c7-r5c8-r4c7-r4c6 gap 5
whispers-4: whispers r4c6-r5c5 gap 5
whispers-5: whispers r4c3-r3c4-r2c4-r1c5-r2c6-r3c6-r4c7 gap 5
renban-1: renban r8c3-r7c4-r6c5-r7c6-r8c7-r8c4-r7c5-r8c5-r8c6
renban-2: renban r1c7-r2c8-r3c8-r4c9
renban-3: renban r8c2-r7c1-r6c1-r5c1-r4c1
renban-4: renban r8c8-r7c9-r6c9-r5c9
renban-5: renban r1c3-r2c2-r3c2
```

```drawing
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5],[7.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers may repeat on the green line. Numbers on purple lines are each a set of non-repeating consecutive numbers, in any order. Numbers on the gray line are between the numbers in the circles at the end of the line. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Not all possible dots are given.
