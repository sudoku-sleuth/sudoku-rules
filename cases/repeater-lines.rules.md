---
format: open-rules
title: Repeater Lines
setter: The Bard
source: https://sudokupad.app/2tw84fvwxs
case: https://sudoku-sleuth.com/cases/repeater-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=2
---

```rules
sudoku 9x9
pair-1: pair r8c4-r8c5 relation {"op":"sum","value":10}
pair-2: pair r1c4-r1c5 relation {"op":"sum","value":10}
pair-3: pair r4c7-r4c8 relation {"op":"sum","value":10}
pair-4: pair r8c3-r9c3 relation {"op":"sum","value":10}
pair-5: pair r8c7-r9c7 relation {"op":"sum","value":10}
pair-6: pair r9c8-r9c9 relation {"op":"sum","value":10}
pair-7: pair r5c8-r5c9 relation {"op":"sum","value":10}
pair-8: pair r4c2-r4c3 relation {"op":"sum","value":10}
pair-9: pair r2c6-r3c6 relation {"op":"sum","value":10}
pair-10: pair r3c4-r3c5 relation {"op":"sum","value":10}
pair-11: pair r1c8-r1c9 relation {"op":"sum","value":10}
pair-12: pair r1c6-r1c7 relation {"op":"sum","value":10}
pair-13: pair r5c1-r6c1 relation {"op":"sum","value":10}
pair-14: pair r5c2-r6c2 relation {"op":"sum","value":10}
pair-15: pair r2c2-r3c2 relation {"op":"sum","value":10}
pair-16: pair r3c3-r4c3 relation {"op":"sum","value":10}
pair-17: pair r2c8-r3c8 relation {"op":"sum","value":10}
pair-18: pair r4c5-r4c6 relation {"op":"sum","value":5}
pair-19: pair r6c5-r6c6 relation {"op":"sum","value":5}
pair-20: pair r4c2-r5c2 relation {"op":"sum","value":5}
pair-21: pair r8c8-r9c8 relation {"op":"sum","value":5}
pair-22: pair r9c3-r9c4 relation {"op":"sum","value":5}
pair-23: pair r3c5-r4c5 relation {"op":"sum","value":5}
pair-24: pair r6c5-r7c5 relation {"op":"sum","value":5}
pair-25: pair r1c8-r2c8 relation {"op":"sum","value":5}
parity-cells r9c2 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,5.5],[4.5,6.5],[5.5,5.5],[6.5,4.5]],"color":"#FF006A","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,6.5],[3.5,7.5]],"color":"#FF006A","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,8.5]],"color":"#FF006A","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,2.5],[2.5,1.5],[3.5,0.5]],"color":"#FF006A","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5],[7.5,2.5],[8.5,3.5]],"color":"#FF006A","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,6.5],[6.5,7.5],[5.5,8.5]],"color":"#FF006A","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,6.5],[7.5,5.5],[7.5,4.5],[7.5,3.5],[6.5,2.5],[5.5,1.5],[4.5,1.5],[3.5,1.5],[2.5,2.5],[1.5,3.5]],"color":"#FF006A","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Repeater lines: a digit on the red-wine colored line must occur multiple times.
XY: digits between an X add to ten, and digits between a V add to 5.
The grey square is an even digit.
