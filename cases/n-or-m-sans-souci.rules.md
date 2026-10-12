---
format: open-rules
title: N or M.  Sans Souci?
setter: EPH
source: https://sudokupad.app/k3cttvd4j1
case: https://sudoku-sleuth.com/cases/n-or-m-sans-souci
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,5.708],[0.5,5.958]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,1.708],[2.5,1.958]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,0.708],[7.5,0.958]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,4.708],[8.5,4.958]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.745,1.745],[2.922,1.922]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.708,3.5],[1.958,3.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.708,4.5],[2.958,4.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,4.292],[0.5,4.042]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,8.292],[1.5,8.042]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,3.292],[8.5,3.042]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,6.292],[8.5,6.042]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,7.292],[6.5,7.042]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.255,7.255],[6.078,7.078]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.292,8.5],[6.042,8.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.292,4.5],[6.042,4.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.255,0.745],[8.078,0.922]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.255,0.745],[6.078,0.922]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.255,1.745],[5.078,1.922]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.745,8.255],[0.922,8.078]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.745,7.255],[3.922,7.078]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

N-Mates: a digit in a cell with an arrow gives the distance (in the direction of the arrow) to another cell.  The sum of the digits in the two cells must be equal to either the row or column number of the cell with the arrow.  Multiple arrows in a cell operate independently.
