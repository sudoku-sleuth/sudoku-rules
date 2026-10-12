---
format: open-rules
title: King of Hearts
setter: Will Power
source: https://f-puzzles.com/?id=yake747o
case: https://sudoku-sleuth.com/cases/king-of-hearts
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
arrow-1: arrow r2c3-r3c3-r4c3 bulb ["r1c3"]
arrow-2: arrow r2c7-r3c7-r4c7 bulb ["r1c7"]
arrow-3: arrow r3c2-r3c3-r4c3 bulb ["r2c1"]
arrow-4: arrow r3c8-r3c7-r4c7 bulb ["r2c9"]
arrow-5: arrow r2c4-r2c3-r3c3-r4c3 bulb ["r1c5"]
arrow-6: arrow r2c6-r2c7-r3c7-r4c7 bulb ["r1c5"]
whispers r4c4-r5c4-r6c4-r7c5-r6c6-r5c6-r4c6 gap 5
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,1.5],[5.5,0.5],[6.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,1.5],[7.5,2.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5],[8.5,7.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,7.5],[5.5,8.5],[6.5,8.5],[6.5,7.5],[7.5,7.5],[8.5,8.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,4.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,2.5],[2.5,1.5],[1.5,0.5]],"color":"#FFFF00","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[2.5,2.5]],"color":"#FFFF00","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,5.5],[0.5,4.5],[1.5,3.5],[1.5,2.5]],"color":"#FFFF00","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[2.5,6.5],[3.5,6.5]],"color":"#FFFF00","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5],[2.5,6.5]],"color":"#FFFF00","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. German Whispers- Numbers on the orange line are at least 5 apart from their neighbors on the line. Consecutive Renban Lines- Numbers on red lines are CONSECUTIVE with their neighbors on the line. Numbers on arrows sum to the number on the arrow's circle. All arrows on the left continue to the left arrowhead. All arrows on the right continue to the right arrowhead. Numbers on lines and arrows may repeat, if other rules allow. The arrows are colored yellow to highlight the crown only.
