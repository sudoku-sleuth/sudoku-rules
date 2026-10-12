---
format: open-rules
title: Vortex
setter: Sir Moose
source: https://sudokupad.app/sv3s571h04
case: https://sudoku-sleuth.com/cases/vortex
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2 total 8 connected true
cage-2: cage r1c4-r2c4 total 9 connected true
cage-3: cage r4c8-r4c9 total 7 connected true
cage-4: cage r8c6-r9c6 total 6 connected true
anti-knight
region-sum-1: region-sum r3c7-r3c6-r2c5-r3c4-r4c4-r5c3 segments [["r3c7"],["r3c6","r2c5","r3c4"],["r4c4"],["r5c3"]]
region-sum-2: region-sum r3c5-r4c6-r4c7-r5c8-r6c7-r7c7 segments [["r3c5"],["r4c6"],["r4c7","r5c8","r6c7"],["r7c7"]]
region-sum-3: region-sum r5c7-r6c6-r7c6-r8c5-r7c4-r7c3-r7c2 segments [["r5c7"],["r6c6"],["r7c6","r8c5","r7c4"],["r7c3","r7c2"]]
region-sum-4: region-sum r7c5-r6c4-r6c3-r5c2-r4c3-r3c2 segments [["r7c5"],["r6c4"],["r6c3","r5c2","r4c3"],["r3c2"]]
region-sum-5: region-sum r8c1-r9c1-r9c2-r8c3-r9c4-r9c5 segments [["r8c1","r9c1","r9c2","r8c3"],["r9c4","r9c5"]]
```

Normal Sudoku Rules Apply

Region Sum Lines: For each line, it has an equal sum in each box it passes through.

KIller Cage: Digits in the cage sum to the number in the upper left of the cage.

Anti-Knight: Cells that see each other in a knight's move in chess cannot contain the same digit.
