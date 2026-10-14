---
format: open-rules
title: Drone
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/drone
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 135c1082c1dc6a4c98b7d2c367179ea3
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2 total 9 connected true
cage-2: cage r4c8-r4c9 total 12 connected true
arrow-1: arrow r5c7-r5c8 bulb ["r5c6"]
arrow-2: arrow r6c3-r7c2-r8c1 bulb ["r7c4"]
arrow-3: arrow r3c4-r2c3-r1c2 bulb ["r4c3"]
arrow-4: arrow r4c7-r3c8-r2c9 bulb ["r3c6"]
arrow-5: arrow r7c6-r8c7-r9c8 bulb ["r6c7"]
arrow-6: arrow r8c2-r9c1 bulb ["r8c3"]
arrow-7: arrow r8c8-r9c9 bulb ["r7c8"]
arrow-8: arrow r7c5-r8c5 bulb ["r6c5"]
arrow-9: arrow r6c6-r5c6 bulb ["r6c5"]
arrow-10: arrow r3c5-r2c5 bulb ["r4c5"]
arrow-11: arrow r4c4-r5c5 bulb ["r4c5"]
arrow-12: arrow r4c6-r4c7 bulb ["r4c5"]
arrow-13: arrow r5c3-r5c2 bulb ["r5c4"]
arrow-14: arrow r6c4-r6c5 bulb ["r5c4"]
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,1.5],[7.5,0.5]],"color":"#FF9199","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,2.5],[2.5,3.5]],"color":"#FF9199","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5],[3.5,6.5]],"color":"#FF9199","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,6.5],[8.5,7.5]],"color":"#FF9199","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's circle. ONE NUMBER REPEATS ON EACH 3-CELL ARROW (red lines). All other arrows are 2-cell arrows. Numbers in cages sum to the number in the top left corner of the cage. All numbers in blue squares are the same as one another.
