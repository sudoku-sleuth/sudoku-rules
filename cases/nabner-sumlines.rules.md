---
format: open-rules
title: Nabner Sumlines
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/nabner-sumlines
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,2.5],[1.5,1.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,2.5],[3.5,3.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[2.5,6.5],[1.5,6.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,2.5],[7.5,2.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,6.5],[7.5,6.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,4.5],[2.5,3.5],[1.5,3.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,0.5],[7.5,0.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,0.5],[3.5,0.5],[3.5,1.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,7.5],[2.5,8.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,6.5],[7.5,7.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[8.5,8.5],[7.5,8.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,8.5],[5.5,8.5],[5.5,7.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,7.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
```

Normal Sudoku rules apply. 

All lines are "nabner" lines; ie they cannot contain repeated digits and no two digits along a line may be consecutive. Eg If a line contains a 2, there cannot be a 1 or 3 anywhere along the line.

Nabner lines are also "equal sum lines". ie The sum of the digits on a line within a particular 3x3 box must be the same for all the boxes the line passes through.

Exported from sudokulab.net
