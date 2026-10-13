---
format: open-rules
title: Dual Containment
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/dual-containment
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c7-r1c8 colour "white"
kropki-2: kropki r1c8-r1c9 colour "white"
kropki-3: kropki r1c9-r2c9 colour "white"
kropki-4: kropki r2c8-r2c9 colour "white"
kropki-5: kropki r2c7-r2c8 colour "white"
kropki-6: kropki r6c4-r7c4 colour "white"
kropki-7: kropki r3c3-r4c3 colour "white"
pair-1: pair r2c2-r3c2 sum 10
pair-2: pair r4c5-r5c5 sum 10
pair-3: pair r3c2-r4c2 sum 5
pair-4: pair r3c5-r4c5 sum 5
pair-5: pair r2c3-r2c4 sum 5
pair-6: pair r5c3-r5c4 sum 5
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[1.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[2.5,1.5],[3.5,1.5],[4.5,1.5],[5.5,1.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5],[4.5,2.5],[4.5,3.5],[4.5,4.5],[4.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[5.5,5.5],[5.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5],[6.5,7.5],[7.5,7.5],[8.5,7.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5],[7.5,6.5],[7.5,7.5],[7.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,5.5],[6.5,5.5],[7.5,5.5],[8.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on lines are between the numbers in the circles at each end of the line. Numbers with a white dot between them are consecutive. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible dots, X and V are given.
