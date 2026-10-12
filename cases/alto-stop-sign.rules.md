---
format: open-rules
title: ALTO! (Stop Sign)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/alto-stop-sign
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c6-r2c6 total 13 connected true
cage-2: cage r3c8-r3c9 total 15 connected true
cage-3: cage r6c8-r6c9 total 9 connected true
cage-4: cage r8c7-r8c8 total 15 connected true
cage-5: cage r2c2-r2c3 total 15 connected true
cage-6: cage r5c1-r5c2 total 13 connected true
cage-7: cage r7c1-r7c2 total 15 connected true
cage-8: cage r8c4-r9c4 total 13 connected true
cage-9: cage r3c5-r4c5 total 16 connected true
kropki-1: kropki r5c2-r6c2 colour "black"
kropki-2: kropki r5c3-r6c3 colour "black"
kropki-3: kropki r4c2-r4c3 colour "black"
kropki-4: kropki r4c7-r4c8 colour "black"
kropki-5: kropki r5c8-r6c8 colour "black"
kropki-6: kropki r5c7-r6c7 colour "black"
kropki-7: kropki r6c7-r6c8 colour "black"
kropki-8: kropki r4c6-r5c6 colour "black"
kropki-9: kropki r5c5-r6c5 colour "black"
kropki-10: kropki r1c7-r1c8 colour "black"
kropki-11: kropki r6c4-r7c4 colour "black"
kropki-12: kropki r8c1-r9c1 colour "black"
extremum r7c1-r6c1-r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c8-r3c9-r4c9-r5c9-r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r9c4-r9c3-r8c2 type "max" exhaustive false
```

```drawing
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,1.5],[3.5,1.5],[3.5,2.5],[4.5,2.5],[5.5,2.5]],"color":"#99B1EB","thickness":8,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,2.5]],"color":"#99B1EB","thickness":8,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,3.5],[5.5,3.5],[5.5,4.5]],"color":"#99B1EB","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5],[5.5,5.5]],"color":"#99B1EB","thickness":8,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,5.5],[3.5,6.5]],"color":"#99B1EB","thickness":8,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,6.5],[3.5,6.5],[3.5,7.5],[4.5,7.5],[5.5,7.5]],"color":"#99B1EB","thickness":8,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5]],"color":"#99B1EB","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. All cages share a property that is to be determined by the solver. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. MAXIMUM- All numbers on the border of the ALTO sign are higher (alto) than all of their adjacent neighbors that are not on the sign border. All maximum cells are chosen from 5 numbers. The other 4 do not appear on the border. If you get stuck, read the rules again.
