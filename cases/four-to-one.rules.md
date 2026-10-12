---
format: open-rules
title: Four To One
setter: Will Power
source: https://sudokupad.app/cqgvzoaruk
case: https://sudoku-sleuth.com/cases/four-to-one
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage r7c4-r7c5-r8c4-r8c5-r8c6 total 15 connected true
kropki-1: kropki r4c2-r4c3 colour "white"
kropki-2: kropki r3c3-r3c4 colour "white"
kropki-3: kropki r2c4-r2c5 colour "white"
kropki-4: kropki r2c6-r3c6 colour "white"
kropki-5: kropki r3c7-r4c7 colour "white"
kropki-6: kropki r4c8-r5c8 colour "white"
kropki-7: kropki r6c7-r6c8 colour "white"
kropki-8: kropki r7c6-r7c7 colour "white"
kropki-9: kropki r8c5-r8c6 colour "white"
kropki-10: kropki r7c4-r8c4 colour "white"
kropki-11: kropki r6c3-r7c3 colour "white"
kropki-12: kropki r5c2-r6c2 colour "white"
kropki-13: kropki r3c5-r4c5 colour "white"
kropki-14: kropki r4c4-r4c5 colour "white"
kropki-15: kropki r5c3-r5c4 colour "white"
kropki-16: kropki r5c4-r6c4 colour "white"
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,3.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,0.5],[1.5,0.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,3.5],[4.5,4.5]],"color":"#FF7383","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.

DUTCH WHISPERS(+)- Numbers on red lines are EXACTLY 4 apart from their neighbors on the line.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given.

KILLER CAGE- Numbers in the cage sum to the number in the top left corner of the cage.
