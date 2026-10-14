---
format: open-rules
title: Fletcher
setter: Jobo
source: https://sudokupad.app/qiig5epi72
case: https://sudoku-sleuth.com/cases/fletcher
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 588fedf4e79a0c40978a7a0791e64623
---

```rules
sudoku 9x9
arrow-1: arrow r1c1-r1c2 bulb ["r2c1"]
arrow-2: arrow r4c1-r4c2 bulb ["r3c1"]
arrow-3: arrow r9c1-r9c2-r9c3 bulb ["r8c1"]
arrow-4: arrow r6c1-r6c2-r6c3 bulb ["r7c1"]
arrow-5: arrow r2c6-r1c6 bulb ["r2c7"]
arrow-6: arrow r2c9-r1c9 bulb ["r2c8"]
arrow-7: arrow r9c9-r8c9 bulb ["r9c8"]
arrow-8: arrow r9c6-r8c6 bulb ["r9c7"]
arrow-9: arrow r5c5-r6c5 bulb ["r4c5"]
arrow-10: arrow r4c7-r5c7-r5c6 bulb ["r4c6"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[3.5,0.5]],"color":"#08bbbb4c","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[8.5,0.5]],"color":"#08bbbb4c","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,4.5],[3.5,6.5]],"color":"#08bbbb4c","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,8.5]],"color":"#08bbbb4c","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,8.5]],"color":"#08bbbb4c","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Cyan lines consist of one or more contiguous, non-overlapping groups of cells, each of which sums to 10.
