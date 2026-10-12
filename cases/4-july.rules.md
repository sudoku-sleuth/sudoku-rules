---
format: open-rules
title: 4 July
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/4-july
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r3c4-r2c3-r1c2
thermo-2: thermo r3c4-r3c3-r3c2-r3c1
thermo-3: thermo r3c4-r2c5-r1c6
thermo-4: thermo r3c4-r3c5-r3c6-r3c7
thermo-5: thermo r3c4-r4c5-r5c6-r6c7
thermo-6: thermo r3c4-r4c4-r5c4-r6c4
thermo-7: thermo r8c5-r8c4-r8c3-r8c2
thermo-8: thermo r8c5-r8c6-r8c7-r8c8
thermo-9: thermo r8c5-r9c6
thermo-10: thermo r8c5-r9c4
thermo-11: thermo r4c8-r3c8-r2c8
thermo-12: thermo r4c8-r3c9
thermo-13: thermo r4c8-r5c9
thermo-14: thermo r4c8-r3c7-r2c6-r1c5
thermo-15: thermo r4c8-r4c7-r4c6-r4c5
thermo-16: thermo r8c5-r7c6-r6c7
thermo-17: thermo r8c5-r7c5-r6c5
thermo-18: thermo r8c5-r7c4-r6c3
thermo-19: thermo r3c4-r4c3
thermo-20: thermo r4c8-r5c7
thermo-21: thermo r4c8-r4c9
thermo-22: thermo r5c1-r5c2-r5c3-r5c4
thermo-23: thermo r5c1-r4c1-r3c1
thermo-24: thermo r5c1-r6c1-r7c1
thermo-25: thermo r5c1-r4c2
thermo-26: thermo r5c1-r6c2-r7c3-r8c4
thermo-27: thermo r4c8-r5c8-r6c8-r7c8
thermo-28: thermo r8c5-r9c5
thermo-29: thermo r1c3-r2c4-r3c5
thermo-30: thermo r1c3-r2c3
thermo-31: thermo r1c3-r2c2-r3c1
thermo-32: thermo r1c3-r1c2-r1c1
thermo-33: thermo r1c3-r1c4-r1c5-r1c6
thermo-34: thermo r3c4-r2c4-r1c4
kropki-1: kropki r8c2-r8c3 colour "white"
kropki-2: kropki r8c5-r8c6 colour "white"
kropki-3: kropki r8c6-r8c7 colour "white"
kropki-4: kropki r1c1-r1c2 colour "white"
kropki-5: kropki r1c5-r1c6 colour "white"
kropki-6: kropki r5c2-r5c3 colour "white"
kropki-7: kropki r3c1-r4c1 colour "white"
kropki-8: kropki r4c7-r4c8 colour "white"
kropki-9: kropki r4c6-r4c7 colour "white"
kropki-10: kropki r2c8-r3c8 colour "white"
kropki-11: kropki r5c8-r6c8 colour "white"
extremum r2c9 type "max" exhaustive false
```

```drawing
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5],[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,2.5],[2.5,3.5],[3.5,4.5],[4.5,5.5],[5.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,3.5],[3.5,3.5],[2.5,3.5],[1.5,3.5],[0.5,3.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,4.5],[2.5,3.5],[3.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[3.5,7.5],[3.5,6.5],[3.5,5.5],[3.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[3.5,7.5],[2.5,6.5],[1.5,5.5],[0.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,7.5],[2.5,8.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[5.5,0.5],[4.5,0.5],[3.5,0.5],[2.5,0.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,0.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5],[4.5,2.5],[4.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[6.5,2.5],[7.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,4.5],[8.5,4.5]],"color":"#FFFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,3.5],[7.5,4.5],[8.5,5.5]],"color":"#FFFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,5.5],[7.5,4.5],[8.5,3.5]],"color":"#FFFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5],[7.5,6.5],[7.5,7.5]],"color":"#FFFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,7.5],[3.5,7.5],[4.5,7.5],[5.5,7.5],[6.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5]],"color":"#FFFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5]],"color":"#FFFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,1.5],[2.5,0.5]],"color":"#FFFFFF","thickness":8,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,3.5],[2.5,4.5]],"color":"#FFFFFF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on thermometers increase from the bulb end (the center of each firework color is a bulb end). Numbers with a white dot between them are consecutive. Not all possible dots are given. The gray cell is a maximum cell, which is greater than all orthogonal neighbors.
