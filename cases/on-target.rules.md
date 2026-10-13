---
format: open-rules
title: On Target
setter: Will Power
source: https://f-puzzles.com/?id=ybazwysa
case: https://sudoku-sleuth.com/cases/on-target
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
whispers-1: whispers r6c3-r5c3-r4c3-r4c4-r3c4-r3c5-r3c6-r4c6-r4c7-r5c7-r6c7-r6c6-r7c6-r7c5-r7c4-r6c4 gap 5
whispers-2: whispers r5c4-r5c3-r5c2 gap 5
whispers-3: whispers r2c5-r3c5-r4c5 gap 5
whispers-4: whispers r5c6-r5c7-r5c8 gap 5
whispers-5: whispers r8c5-r7c5-r6c5 gap 5
pair-1: pair r8c8-r8c9 sum 10
pair-2: pair r8c7-r9c7 sum 10
pair-3: pair r7c3-r7c4 sum 5
pair-4: pair r2c5-r2c6 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,8.5],[5.5,8.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[6.5,7.5],[6.5,6.5],[7.5,6.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,4.5],[8.5,5.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,0.5],[6.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5],[4.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,6.5],[8.5,7.5],[8.5,8.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[1.5,7.5],[2.5,7.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,4.5],[0.5,3.5],[1.5,2.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,1.5],[0.5,1.5],[0.5,0.5]],"color":"#FF0000","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,2.5],[7.5,1.5],[8.5,1.5]],"color":"#FF0000","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. German Whispers- Numbers on GREEN lines are at least 5 apart from their neighbors on the line.  Renban Plus- Numbers on RED lines are CONSECUTIVE with their neighbors on the line. Numbers cannot repeat on Renban Plus Lines. Not all possible lines are shown. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible X and V are shown.
