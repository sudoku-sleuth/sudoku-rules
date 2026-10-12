---
format: open-rules
title: Boxing Day
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/boxing-day-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5 total 10 connected true
cage-2: cage r4c6-r4c7 total 10 connected true
cage-3: cage r5c4-r6c4 total 10 connected true
cage-4: cage r7c4-r7c5 total 10 connected true
cage-5: cage r5c2-r6c2 total 10 connected true
cage-6: cage r3c2-r4c2 total 10 connected true
cage-7: cage r2c2-r2c3 total 10 connected true
cage-8: cage r2c4-r2c5 total 10 connected true
cage-9: cage r2c6-r2c7 total 10 connected true
cage-10: cage r2c8-r2c9 total 10 connected true
cage-11: cage r9c2-r9c3 total 10 connected true
cage-12: cage r9c4-r9c5 total 10 connected true
cage-13: cage r9c8-r9c9 total 10 connected true
cage-14: cage r6c9-r7c9 total 10 connected true
kropki-1: kropki r7c5-r7c6 colour "white"
kropki-2: kropki r4c7-r5c7 colour "white"
kropki-3: kropki r6c7-r7c7 colour "white"
kropki-4: kropki r4c2-r5c2 colour "white"
kropki-5: kropki r2c7-r2c8 colour "white"
kropki-6: kropki r7c9-r8c9 colour "white"
kropki-7: kropki r8c1-r9c1 colour "white"
kropki-8: kropki r4c5-r4c6 colour "black"
kropki-9: kropki r4c4-r5c4 colour "black"
kropki-10: kropki r6c4-r7c4 colour "black"
kropki-11: kropki r5c7-r6c7 colour "black"
kropki-12: kropki r7c6-r7c7 colour "black"
kropki-13: kropki r2c3-r2c4 colour "black"
kropki-14: kropki r2c2-r3c2 colour "black"
kropki-15: kropki r8c2-r9c2 colour "black"
kropki-16: kropki r9c7-r9c8 colour "black"
kropki-17: kropki r5c9-r6c9 colour "black"
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5],[1.5,6.5],[1.5,7.5],[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5],[8.5,5.5],[8.5,4.5],[8.5,3.5],[8.5,2.5],[8.5,1.5],[7.5,1.5],[6.5,1.5],[5.5,1.5],[4.5,1.5],[3.5,1.5],[2.5,1.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,1.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,4.5],[3.5,5.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,6.5],[6.5,5.5],[6.5,4.5],[6.5,3.5],[5.5,3.5],[4.5,3.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,3.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. KILLER- Numbers inside cages sum to 10. KROPKI DOTS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. FOR NEIGHBORS ON THE GRAY LINES, ALL POSSIBLE 10 CAGES AND DOTS ARE GIVEN. When a white AND black dot can both exist in the same place, the black dot is shown. For any cells not neighbors on gray lines, there is no negative constraint for cages and dots.
