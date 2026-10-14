---
format: open-rules
title: The Path is Clear
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/the-path-is-clear
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 8f451495f5cd66bb01c5cad90539df2d
---

```rules
sudoku 9x9
kropki-1: kropki r5c9-r6c9 white
kropki-2: kropki r5c8-r5c9 white
kropki-3: kropki r4c8-r5c8 white
kropki-4: kropki r4c7-r4c8 white
kropki-5: kropki r3c7-r4c7 white
kropki-6: kropki r3c6-r3c7 white
kropki-7: kropki r2c6-r3c6 white
kropki-8: kropki r1c5-r2c5 white
kropki-9: kropki r1c4-r1c5 white
kropki-10: kropki r3c5-r3c6 white
kropki-11: kropki r2c5-r2c6 white
kropki-12: kropki r4c1-r5c1 white
kropki-13: kropki r5c1-r5c2 white
kropki-14: kropki r5c2-r6c2 white
kropki-15: kropki r6c2-r6c3 white
kropki-16: kropki r6c3-r7c3 white
kropki-17: kropki r7c3-r7c4 white
kropki-18: kropki r7c4-r8c4 white
kropki-19: kropki r8c4-r8c5 white
kropki-20: kropki r8c5-r9c5 white
kropki-21: kropki r9c5-r9c6 white
kropki-22: kropki r7c2-r7c3 white
kropki-23: kropki r9c8-r9c9 white
kropki-24: kropki r7c7-r8c7 white
kropki-25: kropki r2c5-r3c5 black
kropki-26: kropki r6c2-r7c2 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[1.5,8.5]],"color":"#FAA352","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[7.5,6.5]],"color":"#FAA352","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,2.5],[8.5,1.5]],"color":"#FAA352","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,0.5],[0.5,0.5]],"color":"#FAA352","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on orange lines contain the same numbers as all other orange lines. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all dots are given.
