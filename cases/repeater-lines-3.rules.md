---
format: open-rules
title: Repeater Lines 3
setter: The Bard
source: https://sudokupad.app/7z5tj3lyew
case: https://sudoku-sleuth.com/cases/repeater-lines-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 423313151dd83d2659c7eb1d14dbd3e2
---

```rules
sudoku 9x9
anti-knight
quadruple-1: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,3,6,9]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,4,5]
quadruple-3: quadruple r7c1-r7c2-r8c1-r8c2 digits [2,4,7,9]
quadruple-4: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,3,7,8]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,5.5],[4.5,6.5],[3.5,6.5]],"color":"#FF0073","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,3.5],[4.5,2.5],[5.5,2.5]],"color":"#FF0073","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,4.5],[2.5,5.5],[2.5,6.5]],"color":"#FF0073","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,1.5],[2.5,2.5],[1.5,3.5]],"color":"#FF0073","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,7.5],[6.5,6.5],[7.5,5.5]],"color":"#FF0073","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,3.5],[7.5,2.5],[8.5,2.5]],"color":"#FF0073","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,6.5],[8.5,5.5],[8.5,4.5]],"color":"#FF0073","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,2.5]],"color":"#FF0073","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
Repeater lines: every digit on a red line must occur more than once on that line.
Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
