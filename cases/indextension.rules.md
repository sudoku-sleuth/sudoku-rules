---
format: open-rules
title: Indextension
setter: Marty Sears
source: https://sudokupad.app/5yns3lrhe0
case: https://sudoku-sleuth.com/cases/indextension
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: e5a9f49bc1b917ecf17ebd4592ac751c
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#8ce0d7ff","thickness":0,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#8ce0d7ff","thickness":0,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#8ce0d7ff","thickness":0,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#8ce0d7ff","thickness":0,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#8ce0d7ff","thickness":0,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#8ce0d7ff","thickness":0,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5],[8.5,2.5],[7.5,2.5],[6.5,3.5],[5.5,3.5],[5.5,4.5],[7.5,6.5],[5.5,8.5],[3.5,8.5],[2.5,7.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[7.5,8.5],[8.5,8.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,2.5],[4.5,2.5],[4.5,3.5],[3.5,3.5],[3.5,2.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,4.5],[2.5,4.5],[2.5,3.5],[1.5,3.5],[1.5,2.5],[2.5,2.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,0.5],[1.5,1.5],[2.5,0.5],[3.5,1.5],[4.5,0.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5],[5.5,5.5],[4.5,4.5],[4.5,5.5],[3.5,6.5],[2.5,5.5],[3.5,5.5]],"color":"#8ce0d7ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

INDEX LINES:
The value of the Nth cell along a line (starting from the diamond) indicates the position along the line of the cell which has the value N. Eg: if the first cell along a line has a value of 3, then the 3rd cell along that line has a value of 1. The value of a cell always equals its digit UNLESS it is a pseudo cell.

PSEUDO CELLS:
Every row, column and box contains exactly one pseudo cell, and every pseudo cell contains a different digit. The value of a pseudo cell equals its row number plus its column number, regardless of which digit appears in the cell.
