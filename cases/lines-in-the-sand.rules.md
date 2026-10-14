---
format: open-rules
title: Lines in the Sand
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/lines-in-the-sand
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: a80b97037d1040a6bd164871b8327efa
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r5c4 black
kropki-2: kropki r2c8-r2c9 black
whispers-1: whispers r5c1-r5c2-r5c3-r5c4-r6c4-r6c5-r6c6 gap 5
whispers-2: whispers r5c9-r5c8-r5c7-r5c6-r4c6-r4c5-r4c4 gap 5
whispers-3: whispers r5c7-r4c7-r4c8-r4c9 gap 5
whispers-4: whispers r5c3-r6c3-r6c2-r6c1 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,4.5],[5.5,5.5]],"color":"#8AADFF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,7.5],[8.5,8.5]],"color":"#8AADFF","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,1.5],[0.5,0.5]],"color":"#8AADFF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,4.5],[8.5,5.5]],"color":"#82A8FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,4.5],[2.5,5.5]],"color":"#82A8FF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,6.5],[3.5,5.5],[4.5,4.5],[5.5,3.5],[6.5,2.5],[7.5,1.5],[8.5,0.5]],"color":"#FF5B4D","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,4.5],[6.5,4.5],[5.5,4.5]],"color":"#FF5B4D","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[3.5,4.5]],"color":"#FF5B4D","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,5.5],[7.5,4.5],[7.5,3.5],[7.5,2.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. DUTCH WHISPERS+ LINES- Numbers on red lines are either 4 or 5 apart from their neighbors on the line. Red lines each have at least one pair of neighbors that are 4 apart. Numbers do not repeat on red lines. Numbers on blue lines have the same remainder when divided by 3 (N mod 3 = 0, 1 or 2 for the line). RENBAN+ Line- Numbers on the purple line are CONSECUTIVE with their neighbors on the line. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
