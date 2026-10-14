---
format: open-rules
title: Needlepoint 252
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/needlepoint-252
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: db3f70858b4663db161abaec35bd7b84
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5 total 13 connected true
cage-2: cage r1c7-r1c8 total 9 connected true
cage-3: cage r7c2-r8c2 total 9 connected true
cage-4: cage r5c7-r5c8 total 6 connected true
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[6.5,2.5],[7.5,3.5],[8.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5],[3.5,5.5],[4.5,6.5],[5.5,7.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,2.5],[4.5,3.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,3.5],[6.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,6.5],[7.5,7.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,6.5],[3.5,7.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5],[2.5,7.5],[1.5,6.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,3.5],[2.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,1.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[3.5,7.5],[4.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,4.5],[3.5,3.5],[4.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,5.5],[6.5,4.5],[7.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,7.5],[7.5,6.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"    6","textColor":"#000000","fontSize":14}}
```

Normal Sudoku rules apply. Numbers on each line multiply to 252. Numbers may repeat on lines. The Number 1 cannot appear on any lines. Line color only clarifies the different lines. Numbers in cages sum to the number in the top left corner of the cage. In the case where the line covers the cage total, the total is repeated, below where it should be.
