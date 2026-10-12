---
format: open-rules
title: Tidy Up Those Lines!
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/tidy-up-those-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r7c4-r7c5 colour "white"
kropki-3: kropki r8c2-r9c2 colour "white"
kropki-4: kropki r7c6-r7c7 colour "white"
kropki-5: kropki r2c4-r3c4 colour "black"
kropki-6: kropki r4c1-r4c2 colour "black"
kropki-7: kropki r7c7-r7c8 colour "black"
kropki-8: kropki r1c9-r2c9 colour "black"
kropki-9: kropki r5c6-r5c7 colour "black"
kropki-10: kropki r9c5-r9c6 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,2.5],[7.5,3.5]],"color":"#7DDAFF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,6.5],[3.5,7.5]],"color":"#7DDAFF","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#B199FF","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[2.5,3.5],[2.5,4.5]],"color":"#B199FF","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5],[4.5,1.5],[4.5,2.5]],"color":"#B199FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[6.5,8.5],[6.5,7.5],[6.5,6.5]],"color":"#B199FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5],[6.5,5.5]],"color":"#FFA46B","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,5.5]],"color":"#FFA46B","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,1.5],[8.5,1.5],[8.5,2.5]],"color":"#FFA46B","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#FFA46B","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,3.5],[3.5,2.5],[4.5,3.5]],"color":"#FFA46B","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5],[3.5,6.5],[3.5,5.5]],"color":"#C4ABFF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,7.5],[8.5,6.5],[8.5,7.5]],"color":"#FFB45E","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Lines have the same set of numbers, in the same order, as all other lines of the same color. No other restrictions on lines. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
