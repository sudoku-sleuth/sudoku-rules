---
format: open-rules
title: Mixed Nuts (Gemischte Nüsse)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/mixed-nuts-gemischte-nusse
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 9d2b591a4d407b91ad2a14334882629b
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 white
kropki-2: kropki r2c4-r2c5 white
kropki-3: kropki r2c6-r2c7 white
kropki-4: kropki r2c7-r3c7 white
kropki-5: kropki r4c7-r5c7 white
kropki-6: kropki r5c7-r6c7 white
kropki-7: kropki r7c6-r7c7 white
kropki-8: kropki r7c5-r7c6 white
kropki-9: kropki r7c4-r7c5 white
kropki-10: kropki r7c3-r7c4 white
kropki-11: kropki r6c3-r7c3 white
kropki-12: kropki r4c3-r5c3 white
kropki-13: kropki r3c3-r4c3 white
kropki-14: kropki r5c4-r5c5 white
kropki-15: kropki r5c5-r5c6 white
kropki-16: kropki r5c3-r5c4 white
kropki-17: kropki r2c3-r3c3 black
kropki-18: kropki r3c7-r4c7 black
kropki-19: kropki r6c7-r7c7 black
kropki-20: kropki r5c3-r6c3 black
kropki-21: kropki r2c5-r2c6 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,3.5]],"color":"#7EA3FF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,1.5],[8.5,2.5],[8.5,3.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[2.5,2.5]],"color":"#FA9BBB","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[5.5,5.5]],"color":"#70FAE5","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,7.5],[3.5,7.5],[3.5,8.5]],"color":"#FAA328","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#D6CC00","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible dots are given. Numbers on lines have the same difference between all neighbors on that line. Each line has a different difference between its neighbors. Numbers cannot repeat on lines.
