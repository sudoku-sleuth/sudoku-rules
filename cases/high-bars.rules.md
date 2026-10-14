---
format: open-rules
title: High Bars
setter: Jobo
source: https://sudokupad.app/eoucbc58v9
case: https://sudoku-sleuth.com/cases/high-bars
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 20c73e7ba229713d1eea95ed33401ceb
---

```rules
sudoku 9x9
kropki-1: kropki r9c8-r9c9 white
kropki-2: kropki r1c1-r1c2 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[8.5,1.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[6.5,0.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[8.5,3.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[4.5,0.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[3.5,5.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[0.5,3.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[8.5,5.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[8.5,6.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[7.5,1.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,0.5]],"color":"#e3f6afff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Digits on a line can never be lower than the length of the line.

Digits separated by a white dot must be consecutive. Not all dots are given.
