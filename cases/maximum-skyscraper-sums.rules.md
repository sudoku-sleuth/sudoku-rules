---
format: open-rules
title: Maximum Skyscraper Sums
setter: Will Power
source: https://f-puzzles.com/?id=yyjml3ea
case: https://sudoku-sleuth.com/cases/maximum-skyscraper-sums
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 4abe70a97a3ed6a1b94f59a7db76fc89
---

```rules
sudoku 9x9
anti-king
extremum r9c2-r7c3-r8c4-r9c9-r7c7-r6c9-r5c8-r3c8-r1c9-r1c6-r3c6-r2c3-r2c1-r4c1-r6c1-r5c4-r4c5-r5c6-r6c5-r1c6-r1c9-r2c1-r2c3-r3c6-r3c8-r4c1-r4c5-r5c4-r5c6-r5c8-r6c1-r6c5-r6c9-r7c3-r7c7-r8c4-r9c2-r9c9 type "max" exhaustive true
```

```drawing
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,-0.5],"width":0.8,"height":0.8,"rounded":false,"text":"19","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0.8,"height":0.8,"rounded":false,"text":"18","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,-0.5],"width":0.8,"height":0.8,"rounded":false,"text":"14","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,0.5],"width":0.8,"height":0.8,"rounded":false,"text":"16","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2.5],"width":0.8,"height":0.8,"rounded":false,"text":"21","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,5.5],"width":0.8,"height":0.8,"rounded":false,"text":"27","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,6.5],"width":0.8,"height":0.8,"rounded":false,"text":"17","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,9.5],"width":0.8,"height":0.8,"rounded":false,"text":"30","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.5],"width":0.8,"height":0.8,"rounded":false,"text":"24","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0.8,"height":0.8,"rounded":false,"text":"28","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0.8,"height":0.8,"rounded":false,"text":"26","textColor":"#000000","thickness":0,"fontSize":36}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0.8,"height":0.8,"rounded":false,"text":"25","textColor":"#000000","thickness":0,"fontSize":36}}
```

Normal Sudoku rules apply.  Numbers in blue Maximum cells are greater than ALL cells orthogonally adjacent to them.  All possible Maximum cells are shown.  Cells that are a chess king's move apart cannot have the same digit.  SKYSCRAPER SUMS- Numbers in the grid represent a building of that height, at that location.  Higher buildings block the view of all lower ones behind them.  Numbers outside the grid are the sum of all building HEIGHTS that can be seen, looking orthogonally into the grid, from that location.  NOTE: In F-Puzzles, be careful.  To allow me to use numbers outside the grid for the purpose of skyscrapers, numbers in conflict inside the grid do not turn red.  Also, the F-Puzzles timer will not confirm your correct puzzle and stop when you have completed the puzzle.  Submit your answer anyway.
