---
format: open-rules
title: Oil, Water, Knights
setter: Blobz
source: https://sudokupad.app/dyjymkifub
case: https://sudoku-sleuth.com/cases/oil-water-knights
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=1 r3c3=3 r3c9=7 r4c7=4 r6c2=8 r9c2=9 r9c8=6
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r4c5-r5c3-r5c4-r5c5 connected true
cage-2: cage r4c7-r5c6-r5c7-r6c6-r7c6-r7c7-r8c7-r8c8 connected true
cage-3: cage r1c6-r2c6-r3c6-r3c7-r4c6 connected true
cage-4: cage r2c7-r2c8-r3c8-r4c8-r4c9-r5c8 connected true
cage-5: cage r5c9-r6c9-r7c9-r8c9-r9c9 connected true
cage-6: cage r1c9-r2c9-r3c9 connected true
cage-7: cage r7c5-r8c4-r8c5-r8c6-r9c5 connected true
cage-8: cage r7c2-r8c1-r8c2-r8c3-r9c2 connected true
cage-9: cage r1c2-r1c3-r2c3-r2c4-r3c2-r3c3 connected true
cage-10: cage r4c2-r4c3-r5c2 connected true
anti-knight
layered-cage-1: layered-cage r3c4-r3c5-r4c5-r5c3-r5c4-r5c5 upper [2,4,6,8]
layered-cage-2: layered-cage r4c7-r5c6-r5c7-r6c6-r7c6-r7c7-r8c7-r8c8 upper [2,4,6,8]
layered-cage-3: layered-cage r1c6-r2c6-r3c6-r3c7-r4c6 upper [2,4,6,8]
layered-cage-4: layered-cage r2c7-r2c8-r3c8-r4c8-r4c9-r5c8 upper [2,4,6,8]
layered-cage-5: layered-cage r5c9-r6c9-r7c9-r8c9-r9c9 upper [2,4,6,8]
layered-cage-6: layered-cage r1c9-r2c9-r3c9 upper [2,4,6,8]
layered-cage-7: layered-cage r7c5-r8c4-r8c5-r8c6-r9c5 upper [2,4,6,8]
layered-cage-8: layered-cage r7c2-r8c1-r8c2-r8c3-r9c2 upper [2,4,6,8]
layered-cage-9: layered-cage r1c2-r1c3-r2c3-r2c4-r3c2-r3c3 upper [2,4,6,8]
layered-cage-10: layered-cage r4c2-r4c3-r5c2 upper [2,4,6,8]
```

Normal sudoku rules apply.

Cells a (chess) knight's move apart cannot contain the same digit.

Digits in cages do not repeat.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.
