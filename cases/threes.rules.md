---
format: open-rules
title: Threes
setter: Blobz
source: https://sudokupad.app/tz4td0ak0p
case: https://sudoku-sleuth.com/cases/threes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r6c6-r6c7 total 3 connected true
cage-2: cage r1c1-r1c2-r1c3-r2c1-r2c3-r3c1-r3c3 total 33 connected true
whispers-1: whispers r4c1-r4c2-r4c3-r5c2-r5c3-r6c3-r6c2-r6c1 gap 5
whispers-2: whispers r7c7-r7c8-r7c9-r8c8-r8c9-r9c9-r9c8-r9c7 gap 5
renban r7c5-r7c6-r8c5-r8c6-r9c6-r9c5
region-sum-1: region-sum r3c5-r3c6-r3c7-r4c6-r4c7-r5c7-r5c6-r5c5 segments [["r3c5","r3c6"],["r3c7"],["r4c6"],["r4c7","r5c7"],["r5c6","r5c5"]]
region-sum-2: region-sum r7c2-r7c3-r7c4-r8c3-r8c4-r9c4-r9c3-r9c2 segments [["r7c2","r7c3"],["r7c4"],["r8c3"],["r8c4","r9c4"],["r9c3","r9c2"]]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,8.5],[2.5,7.5],[2.5,8.5],[3.5,8.5],[3.5,7.5]],"color":"#FFAD43","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

Killer: digits in cages must sum to the clue in the top left corner.

Renban: digits along the pink line are consecutive but in any order.

German Whisper: adjacent digits along green lines differ by at least 5.

Region Sum: for each blue line, digits on the line have an equal sum N within each box it passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.

Modulo: Every three adjacent digits along the orange line must be drawn one from each modulo group: {1,4,7}, {2,5,8}, {3,6,9}.
