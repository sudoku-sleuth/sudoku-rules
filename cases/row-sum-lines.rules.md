---
format: open-rules
title: Row Sum Lines
setter: Jobo
source: https://sudokupad.app/adkms6bibp
case: https://sudoku-sleuth.com/cases/row-sum-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[1.5,3.5],[2.5,2.5],[3.5,2.5],[3.5,4.5],[4.5,4.5],[5.5,5.5],[5.5,6.5],[7.5,6.5],[7.5,8.5]],"color":"#a2dad0ff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,6.5],[2.5,4.5],[2.5,3.5],[4.5,3.5],[4.5,2.5],[5.5,1.5],[6.5,1.5],[6.5,0.5],[7.5,0.5]],"color":"#d9e9a0ff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,6.5],[1.5,7.5],[2.5,7.5],[3.5,8.5],[4.5,7.5],[4.5,6.5],[5.5,5.5],[6.5,5.5],[6.5,4.5],[7.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#efb2ceff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,1.5],[2.5,0.5],[3.5,0.5],[3.5,1.5],[4.5,1.5],[5.5,2.5],[5.5,3.5],[6.5,3.5],[7.5,2.5],[8.5,2.5],[8.5,3.5]],"color":"#8fd0f2ff","thickness":10,"rounded":true}}
```

Normal sudoku rules apply.

Digits along a line sum to the same value for each row the line passes through.
