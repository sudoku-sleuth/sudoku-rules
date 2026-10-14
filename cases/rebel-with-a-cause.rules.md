---
format: open-rules
title: Rebel with a Cause
setter: Will Power
source: https://f-puzzles.com/?id=ydbrah53
case: https://sudoku-sleuth.com/cases/rebel-with-a-cause
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 9fca844ac6f6479b275933acfbf12f91
---

```rules
sudoku 9x9
arrow-1: arrow r4c2-r4c3-r5c3 bulb ["r4c1"]
arrow-2: arrow r3c1-r2c1-r1c1 bulb ["r4c1"]
arrow-3: arrow r2c4-r2c5 bulb ["r2c3"]
arrow-4: arrow r8c6-r7c6-r7c5 bulb ["r9c6"]
arrow-5: arrow r9c7-r9c8-r9c9 bulb ["r9c6"]
arrow-6: arrow r5c4-r6c4-r7c4 bulb ["r4c4"]
arrow-7: arrow r7c9-r8c9 bulb ["r6c9"]
arrow-8: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-9: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-10: arrow r8c2-r7c3 bulb ["r9c1"]
arrow-11: arrow r5c6-r5c7-r4c7 bulb ["r5c5"]
arrow-12: arrow r4c6-r3c7-r2c8 bulb ["r5c5"]
arrow-13: arrow r5c8-r4c9 bulb ["r6c7"]
arrow-14: arrow r3c6-r3c5 bulb ["r4c5"]
arrow-15: arrow r2c7-r1c8 bulb ["r1c6"]
extremum r7c2-r8c3 type "max" exhaustive false
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,0.5],[8.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,1.5],[8.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,1.5],[8.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"text":" ","textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. Numbers on arrows increase FROM the arrow's point for all circles, EXCEPT for the 3 RED arrows on the rebel circle, where all numbers on the arrows increase TOWARD the arrow's point. Numbers may not repeat on arrows. Maximum- Numbers with 4 arrows pointed outward are greater than all orthogonal numbers next to them.
