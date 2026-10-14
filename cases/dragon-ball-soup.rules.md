---
format: open-rules
title: Dragon Ball Soup
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/dragon-ball-soup
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some source features still need to be checked against our reading.
  - The source describes Renban lines that are not yet included in our reading.
exported: 52065a6b4ff6693a6ef56da18e7b5f95
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [6,7]
quadruple-2: quadruple r3c5-r3c6-r4c5-r4c6 digits [2,3,4]
quadruple-3: quadruple r6c4-r6c5-r7c4-r7c5 digits [3,4,5]
quadruple-4: quadruple r8c8-r8c9-r9c8-r9c9 digits [4,5]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,1.5],[1.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,7.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,1.5],[7.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5],[7.5,6.5],[6.5,7.5],[5.5,7.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,0.5],[7.5,1.5],[8.5,2.5],[8.5,3.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,4.5],[2.5,5.5],[3.5,5.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[6.5,3.5],[5.5,3.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,5.5],[4.5,4.5],[3.5,3.5],[3.5,2.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Circled digits where four cells meet must be present as values in at least one of those four cells.

Renban Sumlines: The digits on a line within each 3x3 box it passes through create a sum. The sums for each box the line passes through creates a set of consecutive non-repeating integers in any order. i.e. If r4c3=7 and r6c7=8 the digits on that line in box 5 could sum to either 6 or 9.

Exported from sudokulab.net
