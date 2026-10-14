---
format: open-rules
title: Good and Plenty
setter: Blobz
source: https://sudokupad.app/blobz/good-and-plenty
case: https://sudoku-sleuth.com/cases/good-and-plenty
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 17e9169695ba654a62c2e00e3293fcf0
---

```rules
sudoku 9x9
anti-knight
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,4]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,3]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2,4]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,3]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,2.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,3.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,7.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,3.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,1.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Cells a chess knight’s move apart cannot contain the same digit. 

Digits in circles must appear in a cell that touches the circle.

Digits on pink lines are consecutive.
