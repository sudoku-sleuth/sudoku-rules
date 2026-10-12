---
format: open-rules
title: Setting Proper Boundaries
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/setting-proper-boundaries
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1 total 6 connected true
cage-2: cage r4c2-r5c2 total 10 connected true
cage-3: cage r4c3-r5c3-r6c3 total 12 connected true
cage-4: cage r7c4-r7c5-r7c6 total 14 connected true
cage-5: cage r1c3-r1c4-r1c5 total 12 connected true
cage-6: cage r5c5-r5c6-r5c7 total 15 connected true
kropki-1: kropki r9c1-r9c2 colour "black"
kropki-2: kropki r6c5-r7c5 colour "black"
kropki-3: kropki r2c1-r3c1 colour "black"
kropki-4: kropki r5c6-r5c7 colour "black"
kropki-5: kropki r8c8-r9c8 colour "black"
kropki-6: kropki r4c7-r5c7 colour "black"
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,1.5],[2.5,2.5],[1.5,3.5],[0.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,3.5],[4.5,4.5],[3.5,5.5],[2.5,6.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,5.5],[6.5,6.5],[5.5,7.5],[4.5,8.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,5.5],[2.5,6.5],[3.5,7.5],[4.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,3.5],[4.5,4.5],[5.5,5.5],[6.5,6.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[6.5,2.5],[7.5,3.5],[8.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on blue and orange lines are ODD, and DO NOT REPEAT on each line. Numbers in cages sum to the number in the top left corner of the cage. The 15 is duplicated in its cage because the orange line can obscure it in some puzzle formats. The TWO pink cells bordering the long ends of each three-cell cage also sum to the number in the top left corner of the cage. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
