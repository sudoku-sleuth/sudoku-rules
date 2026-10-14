---
format: open-rules
title: In the Queue
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/in-the-queue
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 1ecd796be7d882a8a0bf45ae75a2808e
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 14 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 26 connected true
cage-3: cage r1c8-r1c9-r2c8-r2c9 total 16 connected true
cage-4: cage r8c1-r8c2-r9c1-r9c2 total 24 connected true
kropki-1: kropki r6c4-r7c4 black
kropki-2: kropki r2c5-r3c5 black
kropki-3: kropki r2c1-r3c1 black
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,6.5],[6.5,5.5],[6.5,4.5],[6.5,3.5],[6.5,2.5],[5.5,2.5],[4.5,2.5],[3.5,2.5]],"color":"#91F2F2","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,2.5]],"color":"#91F2F2","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,2.5]],"color":"#91F2F2","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5],[8.5,5.5],[8.5,6.5],[7.5,6.5]],"color":"#91F2F2","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,7.5],[6.5,8.5],[5.5,8.5],[4.5,8.5]],"color":"#91F2F2","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5]],"color":"#91F2F2","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,5.5],[3.5,6.5]],"color":"#91F2F2","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,3.5]],"color":"#91F2F2","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on blue lines are consecutive with their neighbors on the line. Numbers may repeat on blue lines. Numbers with a black dot between them are in a ratio of 2:1.  Not all possible lines and dots are given. Numbers in cages sum to the number in the top left corner of the cage.
