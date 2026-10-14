---
format: open-rules
title: Cubic Doublers
setter: Blobz
source: https://sudokupad.app/oc72tqid2q
case: https://sudoku-sleuth.com/cases/cubic-doublers
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c1=3
exported: 9290042f2697a4d365f494d43b764a06
---

```rules
sudoku 9x9
cage-1: cage r2c9-r3c9 connected true
cage-2: cage r2c8-r3c8 connected true
cage-3: cage r2c7-r3c7 connected true
cage-4: cage r4c7-r4c8-r4c9-r5c8-r6c8 connected true
cage-5: cage r7c7-r7c8-r8c7 connected true
cage-6: cage r9c8-r9c9 connected true
cage-7: cage r8c6-r9c5-r9c6 connected true
cage-8: cage r8c4-r8c5-r9c4 connected true
cage-9: cage r6c2-r7c2-r7c3 connected true
cage-10: cage r8c1-r9c1 connected true
cage-11: cage r4c4-r5c3-r5c4-r6c3 connected true
cage-12: cage r6c4-r7c4-r7c5 connected true
cage-13: cage r3c6-r4c5-r4c6 connected true
cage-14: cage r1c6-r2c6 connected true
cage-15: cage r3c4-r3c5 connected true
cage-16: cage r1c1-r1c2-r1c3-r1c4-r2c4 connected true
cage-17: cage r2c1-r2c2 connected true
value-modifier name "doubler" factor 2 offset 0 exactly [["r1c1","r1c2","r1c3","r1c4","r1c5","r1c6","r1c7","r1c8","r1c9"],["r2c1","r2c2","r2c3","r2c4","r2c5","r2c6","r2c7","r2c8","r2c9"],["r3c1","r3c2","r3c3","r3c4","r3c5","r3c6","r3c7","r3c8","r3c9"],["r4c1","r4c2","r4c3","r4c4","r4c5","r4c6","r4c7","r4c8","r4c9"],["r5c1","r5c2","r5c3","r5c4","r5c5","r5c6","r5c7","r5c8","r5c9"],["r6c1","r6c2","r6c3","r6c4","r6c5","r6c6","r6c7","r6c8","r6c9"],["r7c1","r7c2","r7c3","r7c4","r7c5","r7c6","r7c7","r7c8","r7c9"],["r8c1","r8c2","r8c3","r8c4","r8c5","r8c6","r8c7","r8c8","r8c9"],["r9c1","r9c2","r9c3","r9c4","r9c5","r9c6","r9c7","r9c8","r9c9"],["r1c1","r2c1","r3c1","r4c1","r5c1","r6c1","r7c1","r8c1","r9c1"],["r1c2","r2c2","r3c2","r4c2","r5c2","r6c2","r7c2","r8c2","r9c2"],["r1c3","r2c3","r3c3","r4c3","r5c3","r6c3","r7c3","r8c3","r9c3"],["r1c4","r2c4","r3c4","r4c4","r5c4","r6c4","r7c4","r8c4","r9c4"],["r1c5","r2c5","r3c5","r4c5","r5c5","r6c5","r7c5","r8c5","r9c5"],["r1c6","r2c6","r3c6","r4c6","r5c6","r6c6","r7c6","r8c6","r9c6"],["r1c7","r2c7","r3c7","r4c7","r5c7","r6c7","r7c7","r8c7","r9c7"],["r1c8","r2c8","r3c8","r4c8","r5c8","r6c8","r7c8","r8c8","r9c8"],["r1c9","r2c9","r3c9","r4c9","r5c9","r6c9","r7c9","r8c9","r9c9"],["r1c1","r1c2","r1c3","r2c1","r2c2","r2c3","r3c1","r3c2","r3c3"],["r1c4","r1c5","r1c6","r2c4","r2c5","r2c6","r3c4","r3c5","r3c6"],["r1c7","r1c8","r1c9","r2c7","r2c8","r2c9","r3c7","r3c8","r3c9"],["r4c1","r4c2","r4c3","r5c1","r5c2","r5c3","r6c1","r6c2","r6c3"],["r4c4","r4c5","r4c6","r5c4","r5c5","r5c6","r6c4","r6c5","r6c6"],["r4c7","r4c8","r4c9","r5c7","r5c8","r5c9","r6c7","r6c8","r6c9"],["r7c1","r7c2","r7c3","r8c1","r8c2","r8c3","r9c1","r9c2","r9c3"],["r7c4","r7c5","r7c6","r8c4","r8c5","r8c6","r9c4","r9c5","r9c6"],["r7c7","r7c8","r7c9","r8c7","r8c8","r8c9","r9c7","r9c8","r9c9"]] count 1 atMostOne [] distinct false
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[6]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[8]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[59]}}
```

Normal sudoku rules apply.

Digits in cages do not repeat, and must sum to a perfect cube (i.e. cage totals are 1, 8, or 27).

The grid contains 9 doublers, one in each row, column, and box. For purposes of cage totals, cells on doublers count as double their value. Each digit from 1 through 9 is doubled exactly once.
