---
format: open-rules
title: Find the Compass Bearings
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/find-the-compass-bearings
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
kropki-1: kropki r1c5-r1c6 colour "black"
kropki-2: kropki r1c4-r2c4 colour "black"
kropki-3: kropki r6c7-r6c8 colour "black"
kropki-4: kropki r5c7-r5c8 colour "black"
kropki-5: kropki r8c9-r9c9 colour "black"
kropki-6: kropki r7c8-r7c9 colour "black"
kropki-7: kropki r7c2-r8c2 colour "black"
kropki-8: kropki r7c1-r7c2 colour "black"
kropki-9: kropki r3c2-r3c3 colour "black"
kropki-10: kropki r1c3-r2c3 colour "black"
kropki-11: kropki r5c5-r5c6 colour "black"
kropki-12: kropki r4c4-r4c5 colour "black"
kropki-13: kropki r1c8-r2c8 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,7.5],[6.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5],[6.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,4.5],[3.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,4.5],[5.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,3.5],[5.5,3.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5],[5.5,5.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5],[5.5,0.5],[4.5,1.5],[5.5,2.5],[4.5,2.5],[3.5,2.5]],"color":"#BDBDBD","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,3.5],[0.5,3.5],[1.5,4.5],[2.5,5.5],[1.5,5.5],[0.5,5.5]],"color":"#BDBDBD","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[3.5,7.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#BDBDBD","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[4.5,6.5]],"color":"#BDBDBD","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,4.5],[6.5,3.5],[7.5,3.5],[7.5,4.5],[7.5,5.5],[8.5,5.5],[8.5,4.5],[8.5,3.5]],"color":"#BDBDBD","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Gray lines North (N), South (S), East (E), and West (W) contain one each RENBAN LINE (consecutive, but in any order), GERMAN WHISPER LINE (all numbers are at least 5 apart from their neighbors on the line), DUTCH WHISPER LINE (all numbers are at least 4 apart from their neighbors on the line) and CONSECUTIVE LINE (all numbers are consecutive with their neighbors on the line). The solver must determine which gray line is which type. Numbers on each of the four straight lines in box 5 sum to 17. Red lines are also Dutch Whispers lines. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
