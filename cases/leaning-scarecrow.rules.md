---
format: open-rules
title: Leaning Scarecrow
setter: Will Power
source: https://sudokupad.app/39vaaquzea
case: https://sudoku-sleuth.com/cases/leaning-scarecrow
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 59a4d7fc11cd7a60d7f322644be2c91b
---

```rules
sudoku 9x9
kropki-1: kropki r9c8-r9c9 white
kropki-2: kropki r9c7-r9c8 white
kropki-3: kropki r8c9-r9c9 white
kropki-4: kropki r6c8-r6c9 white
kropki-5: kropki r1c4-r1c5 white
kropki-6: kropki r3c3-r3c4 white
kropki-7: kropki r5c5-r5c6 white
kropki-8: kropki r6c2-r7c2 white
kropki-9: kropki r8c7-r9c7 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[5.5,1.5],[4.5,2.5],[3.5,3.5],[2.5,4.5],[1.5,5.5],[0.5,6.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,7.5],[4.5,6.5],[5.5,5.5],[6.5,4.5],[7.5,3.5],[8.5,2.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,8.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,1.5],[3.5,2.5],[4.5,3.5],[5.5,4.5],[6.5,5.5],[7.5,6.5],[8.5,7.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,8.5],[4.5,8.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,2.5],[2.5,3.5],[3.5,4.5],[4.5,5.5],[5.5,6.5],[6.5,7.5],[7.5,8.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,3.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,6.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,8.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5],[7.5,2.5],[8.5,3.5]],"color":"#98FF96","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. GERMAN WHISPERS(+)- Numbers on green lines are EXACTLY 5 apart from their neighbors on the line. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
