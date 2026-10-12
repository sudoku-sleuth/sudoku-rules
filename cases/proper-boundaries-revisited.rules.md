---
format: open-rules
title: Proper Boundaries Revisited
setter: Will Power
source: https://sudokupad.app/tsmda1nzyn
case: https://sudoku-sleuth.com/cases/proper-boundaries-revisited
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r7c7-r7c8 total 5 connected true
cage-2: cage r3c2-r3c3 total 13 connected true
cage-3: cage r6c2-r6c3-r6c4-r6c5 total 14 connected true
cage-4: cage r4c5-r4c6-r4c7 total 8 connected true
cage-5: cage r8c5-r8c6-r8c7 total 12 connected true
cage-6: cage r9c6-r9c7 total 13 connected true
cage-7: cage r2c2-r2c3-r2c4 total 12 connected true
cage-8: cage r1c4-r1c5 total 5 connected true
kropki r6c4-r6c5 colour "black"
```

```drawing
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5],[3.5,6.5],[4.5,7.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,2.5],[6.5,3.5],[7.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5],[7.5,2.5],[8.5,3.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,3.5],[5.5,4.5],[6.5,5.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,4.5],[4.5,5.5],[5.5,6.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[4.5,1.5],[3.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,4.5],[0.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,5.5],[3.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,6.5],[4.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,7.5],[5.5,6.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,4.5],[8.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,3.5],[7.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,2.5],[6.5,1.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. 

ODD(+)- Numbers on blue and orange lines are ODD, and DO NOT REPEAT on each line. 

KILLER CAGES(+)- Numbers in cages sum to the number in the top left corner of the cage. The 8 and 12 are duplicated in their cage because the orange line can obscure them in some puzzle formats. The TWO pink cells bordering the long ends of each cage also sum to the number in the top left corner of the cage.

KROPKI PAIRS- Numbers with a black dot between them   are in a ratio of 2:1. Not all possible dots are given.
