---
format: open-rules
title: Uniqueness (Besonderheit)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/uniqueness-besonderheit
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r5c7=6 r6c4=6
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r7c9 colour "white"
kropki-2: kropki r6c9-r7c9 colour "white"
kropki-3: kropki r7c7-r7c8 colour "white"
kropki-4: kropki r4c5-r4c6 colour "white"
kropki-5: kropki r5c5-r5c6 colour "white"
kropki-6: kropki r6c4-r6c5 colour "white"
kropki-7: kropki r2c2-r2c3 colour "white"
arrow-1: arrow r5c7-r4c6-r3c5 bulb ["r6c8"]
arrow-2: arrow r3c5-r4c4-r5c3 bulb ["r2c6"]
arrow-3: arrow r5c3-r6c4-r7c5 bulb ["r4c2"]
arrow-4: arrow r7c5-r6c6-r5c7 bulb ["r8c4"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,5.5],[7.5,6.5],[8.5,7.5]],"color":"#9497FF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,2.5],[6.5,1.5],[7.5,0.5]],"color":"#9497FF","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,2.5],[2.5,3.5],[3.5,4.5]],"color":"#9497FF","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5],[3.5,6.5],[4.5,5.5]],"color":"#9497FF","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,7.5],[5.5,8.5],[6.5,8.5]],"color":"#9497FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,4.5],[2.5,5.5],[1.5,6.5]],"color":"#9497FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,5.5],[7.5,4.5],[8.5,3.5]],"color":"#9497FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. Blue lines each contain the same set of 4 numbers, and the set adds to 20. Numbers with white dots between them are consecutive. Not all possible dots are given.
