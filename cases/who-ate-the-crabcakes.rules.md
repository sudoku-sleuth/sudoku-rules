---
format: open-rules
title: Who ATE the Crabcakes?
setter: Will Power
source: https://f-puzzles.com/?id=ybuy36nc
case: https://sudoku-sleuth.com/cases/who-ate-the-crabcakes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 660ac17c1832ae60b74d691992596f26
---

```rules
sudoku 9x9
cage-1: cage r9c2-r9c3-r9c4 total 8 connected true
cage-2: cage r6c1-r7c1 total 8 connected true
cage-3: cage r1c7-r1c8-r1c9 total 8 connected true
cage-4: cage r4c6-r5c6 total 8 connected true
cage-5: cage r2c1-r3c1-r4c1 total 8 connected true
cage-6: cage r6c4-r6c5-r6c6 total 8 connected true
arrow-1: arrow r3c6-r4c7-r5c7 bulb ["r3c5"]
arrow-2: arrow r6c3-r7c4-r7c5 bulb ["r5c3"]
arrow-3: arrow r5c1-r4c1 bulb ["r6c2"]
arrow-4: arrow r1c5-r1c4 bulb ["r2c6"]
arrow-5: arrow r8c3-r9c4 bulb ["r7c3"]
arrow-6: arrow r3c8-r4c9 bulb ["r3c7"]
arrow-7: arrow r8c6-r9c7 bulb ["r7c6"]
arrow-8: arrow r6c8-r7c9 bulb ["r6c7"]
arrow-9: arrow r3c4 bulb ["r4c5"]
arrow-10: arrow r4c3 bulb ["r5c4"]
little-killer-1: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 53
little-killer-2: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 32
little-killer-3: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 36
little-killer-4: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 53
little-killer-5: little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 24
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[40],"label":"8"}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. All numbers in cages sum to 8. Numbers outside the grid sum the numbers on the indicated diagonal. Numbers may repeat on arrows and diagonals, if other rules allow.
