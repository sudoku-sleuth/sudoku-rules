---
format: open-rules
title: Ball of String
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/ball-of-string
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 3016d9f7820bf57f1f33706805382218
---

```rules
sudoku 9x9
kropki-1: kropki r3c5-r3c6 white
kropki-2: kropki r3c4-r3c5 white
kropki-3: kropki r3c4-r4c4 white
kropki-4: kropki r4c4-r5c4 white
kropki-5: kropki r5c4-r5c5 white
kropki-6: kropki r6c3-r6c4 white
kropki-7: kropki r6c4-r7c4 white
kropki-8: kropki r7c4-r7c5 white
kropki-9: kropki r6c6-r6c7 white
kropki-10: kropki r5c7-r6c7 white
kropki-11: kropki r2c7-r3c7 white
kropki-12: kropki r8c6-r9c6 white
kropki-13: kropki r9c6-r9c7 white
kropki-14: kropki r3c7-r3c8 white
kropki-15: kropki r7c7-r7c8 black
kropki-16: kropki r2c2-r3c2 black
kropki-17: kropki r2c9-r3c9 black
kropki-18: kropki r2c4-r3c4 black
kropki-19: kropki r2c6-r3c6 black
kropki-20: kropki r7c4-r8c4 black
kropki-21: kropki r4c1-r4c2 black
kropki-22: kropki r3c2-r3c3 black
kropki-23: kropki r3c2-r4c2 black
kropki-24: kropki r2c5-r2c6 black
kropki-25: kropki r7c8-r8c8 black
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,2.5],[3.5,3.5],[2.5,4.5],[1.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5],[3.5,5.5],[4.5,6.5],[5.5,7.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,6.5],[5.5,5.5],[6.5,4.5],[7.5,3.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,4.5],[5.5,3.5],[4.5,2.5],[3.5,1.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,2.5],[4.5,2.5],[3.5,2.5],[2.5,2.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5],[6.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on lines must be between the two numbers in the circles at the endpoints of the line. All lines are straight, and numbers must be between the endpoints of all lines they appear on. Numbers may repeat on lines, if other rules allow. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible dots are given.
