---
format: open-rules
title: Soccer Ball (Fußball) 足球
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/soccer-ball-fu-ball
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r2c3 colour "white"
kropki-2: kropki r4c2-r4c3 colour "black"
kropki-3: kropki r6c1-r6c2 colour "black"
kropki-4: kropki r9c6-r9c7 colour "black"
kropki-5: kropki r9c7-r9c8 colour "black"
kropki-6: kropki r1c6-r1c7 colour "black"
kropki-7: kropki r1c7-r1c8 colour "black"
kropki-8: kropki r4c4-r4c5 colour "black"
kropki-9: kropki r5c4-r6c4 colour "black"
kropki-10: kropki r5c3-r5c4 colour "black"
kropki-11: kropki r3c5-r4c5 colour "black"
kropki-12: kropki r3c1-r3c2 colour "black"
kropki-13: kropki r8c9-r9c9 colour "black"
kropki-14: kropki r8c6-r9c6 colour "black"
whispers-1: whispers r9c4-r9c3-r8c2-r7c1-r6c1-r5c1 gap 4
whispers-2: whispers r4c1-r3c1-r2c2 gap 4
whispers-3: whispers r9c5-r9c6-r9c7-r8c8 gap 4
whispers-4: whispers r1c5-r1c6 gap 4
whispers-5: whispers r1c7-r2c8 gap 4
whispers-6: whispers r6c9-r5c9 gap 4
whispers-7: whispers r4c9-r3c9 gap 4
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,2.5],[5.5,2.5],[4.5,1.5],[5.5,0.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,0.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5],[2.5,4.5],[1.5,3.5],[2.5,2.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,2.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[1.5,7.5],[2.5,6.5],[3.5,6.5],[3.5,7.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,8.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,4.5],[5.5,3.5],[6.5,4.5],[5.5,5.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,5.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,7.5],[6.5,6.5],[7.5,6.5],[7.5,7.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[6.5,8.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,2.5],[7.5,3.5],[7.5,4.5],[8.5,5.5]],"color":"#A1A1A1","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. RENBAN+ LINES- Numbers on gray lines are each either the numbers 1 through 5 or the numbers 5 through 9, without repeats, in any order. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers do not repeat on red lines. ALL POSSIBLE RED LINES ARE SHOWN ON THE PERIMETER OF THE BALL. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
