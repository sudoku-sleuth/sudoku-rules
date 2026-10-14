---
format: open-rules
title: Teenage Love
setter: Blobz
source: https://sudokupad.app/f92ld5yxt0
case: https://sudoku-sleuth.com/cases/teenage-love
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c3=1 r4c4=4 r8c7=1 r8c8=3
exported: 1bad39e557c59fb08a0a03c5b22b7c34
---

```rules
sudoku 9x9
arrow r4c8-r4c7-r5c6 bulb ["r3c9"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0,9,10,18],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[2,3],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[4,5],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[6,7,8,17],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[24,33,42,51],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[34,43],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[53,61,62],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[71,79,80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[77,78],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[58,67],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[65,73,74],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[63,72],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[54,55,64],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[49,50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[39,48],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[31,32,40,41],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[28,37],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,2.5],[5.5,1.5],[4.5,0.5],[3.5,0.5],[2.5,1.5]],"color":"#FFA3D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,2.5],[1.5,3.5],[2.5,4.5],[1.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#FFA3D9","thickness":11.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5],[5.5,7.5],[6.5,6.5],[7.5,5.5],[8.5,4.5]],"color":"#FFA3D9","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

Every adjacent pair of digits along the line do not repeat and must sum to 13 or 14.

Digits in cages do not repeat and must sum to 13 or 14.

Digits along the arrow (which may repeat) sum to the value in the attached circle.
