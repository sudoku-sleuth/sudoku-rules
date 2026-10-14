---
format: open-rules
title: Spooky Division
setter: sujoyku
source: https://sudokupad.app/a4dxrs2ldx
case: https://sudoku-sleuth.com/cases/spooky-division
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: d55b8c78f9cb34639c2273ede066e375
---

```rules
sudoku 9x9
pair r7c7-r7c6 less
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,0.5],[6.5,1.5],[7.5,1.5],[8.5,2.5],[6.5,2.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,1.5],[4.5,1.5],[4.5,2.5],[5.5,3.5],[5.5,6.5],[4.5,7.5],[4.5,6.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,4.5],[3.5,3.5],[2.5,2.5],[2.5,1.5],[1.5,1.5],[1.5,0.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,6.5],[0.5,6.5],[0.5,5.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[3.5,8.5],[2.5,7.5],[1.5,8.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,3.5],[1.5,3.5],[2.5,4.5],[1.5,5.5],[0.5,4.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5],[8.5,8.5],[7.5,8.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[6.5,3.5],[6.5,4.5],[7.5,4.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Spooky Division Lines: On each line in the grid, the digits must sum to exactly 31. Moreover, lines which are separated by box borders are split into segments whose sums may differ by at most 1.

- Inequality: The inequality sign is a "greater than" and points to the lower digit.
