---
format: open-rules
title: "Dutch Flat Mates: Minimum Lines"
setter: Jobo
source: https://sudokupad.app/xl75h7g0um
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-minimum-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,1.5],[0.5,0.5],[2.5,0.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,5.5],[2.5,3.5],[3.5,2.5],[3.5,1.5],[4.5,0.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[4.5,5.5],[6.5,3.5],[7.5,3.5],[8.5,2.5],[7.5,1.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,7.5],[1.5,8.5],[0.5,8.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[6.5,8.5],[5.5,8.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,5.5],[0.5,6.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,2.5],[3.5,4.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[8.5,5.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Every 5 in the grid must have a '1' directly above it or a '9' directly below it. It may have both, but it doesn't need both.

Digits on a lime green line can never be lower than the length of the line.
