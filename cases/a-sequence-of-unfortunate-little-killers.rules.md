---
format: open-rules
title: A Sequence of Unfortunate Little Killers
setter: Timotab
source: https://sudokupad.app/1voggjofru
case: https://sudoku-sleuth.com/cases/a-sequence-of-unfortunate-little-killers
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c6=5
exported: 839cfc217c5584c635f8533ba7acbe53
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 71
little-killer-2: little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 37
little-killer-3: little-killer r1c8-r2c9 sum 13
little-killer-4: little-killer r1c7-r2c8-r3c9 sum 13
little-killer-5: little-killer r6c9-r7c8-r8c7-r9c6 sum 13
little-killer-6: little-killer r7c9-r8c8-r9c7 sum 13
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,3.5]],"color":"#cccf","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,3.5]],"color":"#cccf","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[3.5,3.5]],"color":"#cccf","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[2.5,6.5]],"color":"#cccf","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[2.5,7.5]],"color":"#cccf","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[4.5,6.5]],"color":"#cccf","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[5.5,6.5]],"color":"#cccf","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,7.5],[8.5,7.5]],"color":"#cccf","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,2.5]],"color":"#cccf","thickness":10,"rounded":true}}
```

• Normal Sudoku rules apply
• Sequence lines: Grey lines are sequence lines. Adjacent digits on any given line must have a constant difference, and must stay the same or increase from one end. 
• Little Killers: Numbers outside the grid show the sum of the digits on the diagonal indicated by the arrow.
