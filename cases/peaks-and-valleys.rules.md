---
format: open-rules
title: Peaks and Valleys
setter: Will Power
source: https://f-puzzles.com/?id=ydoz6dze
case: https://sudoku-sleuth.com/cases/peaks-and-valleys
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r4c6-r4c7 relation {"op":"sum","value":10}
pair-2: pair r1c9-r2c9 relation {"op":"sum","value":10}
pair-3: pair r7c6-r7c7 relation {"op":"sum","value":10}
pair-4: pair r8c8-r9c8 relation {"op":"sum","value":5}
extremum-1: extremum r7c2-r8c1-r9c2-r8c3-r9c6-r9c9-r8c8-r7c9-r5c8-r4c9-r2c9-r2c7-r3c5-r1c4-r3c1-r4c3-r6c3-r5c5-r1c4-r2c7-r2c9-r3c1-r3c5-r4c3-r4c9-r5c5-r5c8-r6c3-r7c2-r7c9-r8c1-r8c3-r8c8-r9c2-r9c6-r9c9 type "min" exhaustive false
extremum-2: extremum r4c2-r2c3-r1c5-r2c6-r3c8-r1c9-r4c5-r5c6-r6c5-r6c9-r8c9-r9c7-r8c4-r8c2-r9c1-r7c1-r1c5-r1c9-r2c3-r2c6-r3c8-r4c2-r4c5-r5c6-r6c5-r6c9-r7c1-r8c2-r8c4-r8c9-r9c1-r9c7 type "max" exhaustive false
```

Normal Sudoku rules apply.  Cells with a "V" between them sum to 5.  Cells with an "X" between them sum to 10.  Blue cells are LESS THAN ALL orthogonally neighboring cells.  Red cells are GREATER THAN ALL orthogonally neighboring cells. All red and blue cells are shown.
