---
format: open-rules
title: MOD 3 SQUAD
setter: Will Power
source: https://sudokupad.app/bf1hehgj1c
case: https://sudoku-sleuth.com/cases/mod-3-squad
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r1c9=5
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r2c3 colour "white"
kropki-2: kropki r1c1-r1c2 colour "black"
kropki-3: kropki r3c9-r4c9 colour "black"
kropki-4: kropki r3c3-r4c3 colour "black"
kropki-5: kropki r7c8-r8c8 colour "black"
kropki-6: kropki r7c5-r8c5 colour "black"
kropki-7: kropki r3c8-r4c8 colour "black"
whispers r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 gap 4
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,6.5],[7.5,5.5],[6.5,5.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,6.5],[6.5,7.5],[5.5,7.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,3.5],[7.5,2.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,0.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,1.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,0.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,3.5],[6.5,4.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,3.5],[5.5,4.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,3.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[2.5,3.5],[3.5,3.5],[3.5,4.5],[4.5,4.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,5.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,6.5],[4.5,6.5],[4.5,5.5],[5.5,5.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,5.5],[4.5,5.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,7.5],[4.5,7.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,6.5],[1.5,5.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,3.5],[1.5,2.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,0.5]],"color":"#2BB3AC","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.

DUTCH WHISPER- Numbers on the red line are at least 4 apart from their neighbors on the line.

MOD 3 LINES- Numbers on teal lines have the same remainder as one another when divided by 3. ie: lines can consist of the numbers 1,4,7 or 2,5,8 or 3,6,9. EXCEPT CELLS ON THE RED LINE, ALL POSSIBLE ORTHOGONAL MOD 3 LINES ARE SHOWN.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
