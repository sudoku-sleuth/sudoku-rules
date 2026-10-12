---
format: open-rules
title: X-Mates
setter: EPH
source: https://sudokupad.app/5wam1zl683
case: https://sudoku-sleuth.com/cases/x-mates
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: 1.......9.2.....8...3...7.....4.6.......5.......1.9.....4...6...3.....7.2.......8
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,3.242],[0.5,3.092]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,2.242],[3.5,2.092]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,3.242],[4.5,3.092]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,2.758],[5.5,2.908]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.242,4.5],[2.092,4.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.242,3.5],[4.092,3.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.242,5.5],[4.092,5.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.242,6.5],[5.092,6.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.242,5.5],[6.092,5.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,8.242],[3.5,8.092]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

10-Mates: a digit, N, in a cell with an arrow, gives the distance to its complement (10-N) in the direction of the arrow.
