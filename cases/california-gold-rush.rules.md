---
format: open-rules
title: California Gold Rush
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/california-gold-rush
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage r6c8-r6c9 total 9 connected true
kropki r8c6-r9c6 colour "white"
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[0.5,0.5],[0.5,1.5],[0.5,2.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,1.5],[2.5,2.5],[1.5,3.5],[0.5,4.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,2.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,4.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,4.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,2.5],[5.5,3.5],[4.5,4.5],[3.5,5.5],[2.5,6.5],[1.5,7.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,4.5],[6.5,5.5],[5.5,6.5],[4.5,7.5],[3.5,8.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,7.5],[6.5,7.5]],"color":"#d3d3d3","thickness":6.4,"rounded":true}}
```

Normal Sudoku rules apply.

All lines are german whisper lines where adjacent digits must have a difference of at least 5.  German Whisper lines are also "equal sum lines". ie The sum of the digits on a line within a particular 3x3 box must be the same for all the boxes the line passes through.

A white dot between cells indicates cells with consecutive values. Not all dots are shown.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

Exported from sudokulab.net
