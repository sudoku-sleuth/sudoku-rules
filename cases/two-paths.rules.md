---
format: open-rules
title: Two Paths
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/two-paths
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r3c7 colour "black"
kropki-2: kropki r8c5-r8c6 colour "black"
kropki-3: kropki r5c3-r6c3 colour "black"
kropki-4: kropki r5c4-r6c4 colour "black"
pair-1: pair r7c7-r7c8 relation {"op":"sum","value":10}
pair-2: pair r8c7-r8c8 relation {"op":"sum","value":10}
pair-3: pair r6c6-r6c7 relation {"op":"sum","value":10}
extremum r6c5-r3c2-r2c8-r7c9-r8c3-r6c8-r3c9-r4c1-r9c1-r9c6-r1c7-r1c4-r1c9-r4c8-r3c5-r1c1-r4c6-r7c6-r9c4-r8c7-r9c8-r5c7 type "max" exhaustive true
```

Normal Sudoku rules apply. There are two paths of consecutive numbers from 1 to 9.  One starts at the top of the grid and ends at the bottom.  The other starts at the bottom and ends at the top. Consecutive numbers on each path touch orthogonally or diagonally. Numbers in gray cells are greater than ALL orthogonal neighbors. ALL POSSIBLE MAXIMUMS ARE SHOWN. Numbers with an X between them sum to 10. Numbers with a black dot between them are in a ratio of 2:1. Not all possible X and dots are shown.
