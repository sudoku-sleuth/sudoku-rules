---
format: open-rules
title: 5 Golden Rings
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/5-golden-rings
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c6-r3c7 total 14 connected true
cage-2: cage r3c2-r3c3 total 14 connected true
anti-king
kropki-1: kropki r5c4-r6c4 colour "white"
kropki-2: kropki r4c5-r5c5 colour "white"
kropki-3: kropki r8c2-r8c3 colour "white"
kropki-4: kropki r9c3-r9c4 colour "white"
kropki-5: kropki r6c8-r7c8 colour "white"
kropki-6: kropki r2c3-r2c4 colour "white"
kropki-7: kropki r3c2-r4c2 colour "white"
kropki-8: kropki r5c1-r5c2 colour "white"
kropki-9: kropki r8c1-r9c1 colour "white"
kropki-10: kropki r9c1-r9c2 colour "white"
kropki-11: kropki r1c3-r1c4 colour "white"
kropki-12: kropki r6c2-r7c2 colour "white"
kropki-13: kropki r4c7-r5c7 colour "white"
kropki-14: kropki r3c8-r4c8 colour "white"
kropki-15: kropki r8c6-r9c6 colour "white"
kropki-16: kropki r9c8-r9c9 colour "white"
kropki-17: kropki r6c5-r6c6 colour "black"
kropki-18: kropki r8c3-r9c3 colour "black"
kropki-19: kropki r7c2-r8c2 colour "black"
kropki-20: kropki r8c4-r9c4 colour "black"
kropki-21: kropki r1c4-r1c5 colour "black"
kropki-22: kropki r2c1-r3c1 colour "black"
kropki-23: kropki r2c1-r2c2 colour "black"
kropki-24: kropki r4c2-r5c2 colour "black"
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5],[0.5,5.5],[1.5,6.5],[2.5,6.5],[3.5,6.5],[4.5,5.5],[4.5,4.5],[4.5,3.5],[3.5,2.5],[2.5,2.5],[1.5,2.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,3.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[2.5,3.5],[3.5,4.5],[4.5,4.5],[5.5,4.5],[6.5,3.5],[6.5,2.5],[6.5,1.5],[5.5,0.5],[4.5,0.5],[3.5,0.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,0.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,6.5],[2.5,7.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,7.5],[6.5,6.5],[6.5,5.5],[5.5,4.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,4.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,3.5],[4.5,4.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5],[6.5,5.5],[7.5,5.5],[8.5,4.5],[8.5,3.5],[8.5,2.5],[7.5,1.5],[6.5,1.5],[5.5,1.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,1.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,3.5],[5.5,3.5],[4.5,4.5],[4.5,5.5],[4.5,6.5],[5.5,7.5],[6.5,7.5],[7.5,7.5],[8.5,6.5],[8.5,5.5],[8.5,4.5]],"color":"#FFE030","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5]],"color":"#FFE030","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. ANTI KING-The same number cannot be a chess king's move apart. CELL RANKING- A cell's rank is equal to the number of golden lines that go to the center of the cell (Example: Row 5 Column 5 has 6 lines that go to its center, and is rank 6). WITHIN EACH OF THE NINE 3x3 BOXES, cells with higher rank will always be a higher number than cells with a lower rank. Cells with no golden lines can be any number. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Numbers in cages sum to the number in the top left corner of the cage.
