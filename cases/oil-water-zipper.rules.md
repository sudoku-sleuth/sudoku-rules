---
format: open-rules
title: Oil, Water, Zipper
setter: Blobz
source: https://sudokupad.app/blobz/oil-water-zipper
case: https://sudoku-sleuth.com/cases/oil-water-zipper
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c5-r8c5-r9c5 connected true
cage-2: cage r7c2-r8c2-r9c2 connected true
cage-3: cage r7c8-r8c8-r9c8 connected true
cage-4: cage r3c4-r3c5-r3c6 connected true
cage-5: cage r1c4-r1c5-r1c6 connected true
cage-6: cage r3c1-r4c1-r5c1-r6c1 connected true
cage-7: cage r3c3-r4c3-r4c4 connected true
cage-8: cage r3c7-r3c8-r4c6-r4c7 connected true
cage-9: cage r5c6-r5c7-r6c7-r6c8 connected true
cage-10: cage r1c9-r2c9-r3c9-r4c9 connected true
cage-11: cage r5c4-r5c5 connected true
cage-12: cage r5c3-r6c2-r6c3-r7c3-r7c4 connected true
cage-13: cage r7c6-r8c6-r8c7-r9c7 connected true
cage-14: cage r8c3-r8c4-r9c3 connected true
cage-15: cage r5c9-r6c9-r7c9 connected true
cage-16: cage r7c1-r8c1-r9c1 connected true
cage-17: cage r1c1-r2c1 connected true
layered-cage-1: layered-cage r7c5-r8c5-r9c5 upper [2,4,6,8]
layered-cage-2: layered-cage r7c2-r8c2-r9c2 upper [2,4,6,8]
layered-cage-3: layered-cage r7c8-r8c8-r9c8 upper [2,4,6,8]
layered-cage-4: layered-cage r3c4-r3c5-r3c6 upper [2,4,6,8]
layered-cage-5: layered-cage r1c4-r1c5-r1c6 upper [2,4,6,8]
layered-cage-6: layered-cage r3c1-r4c1-r5c1-r6c1 upper [2,4,6,8]
layered-cage-7: layered-cage r3c3-r4c3-r4c4 upper [2,4,6,8]
layered-cage-8: layered-cage r3c7-r3c8-r4c6-r4c7 upper [2,4,6,8]
layered-cage-9: layered-cage r5c6-r5c7-r6c7-r6c8 upper [2,4,6,8]
layered-cage-10: layered-cage r1c9-r2c9-r3c9-r4c9 upper [2,4,6,8]
layered-cage-11: layered-cage r5c4-r5c5 upper [2,4,6,8]
layered-cage-12: layered-cage r5c3-r6c2-r6c3-r7c3-r7c4 upper [2,4,6,8]
layered-cage-13: layered-cage r7c6-r8c6-r8c7-r9c7 upper [2,4,6,8]
layered-cage-14: layered-cage r8c3-r8c4-r9c3 upper [2,4,6,8]
layered-cage-15: layered-cage r5c9-r6c9-r7c9 upper [2,4,6,8]
layered-cage-16: layered-cage r7c1-r8c1-r9c1 upper [2,4,6,8]
layered-cage-17: layered-cage r1c1-r2c1 upper [2,4,6,8]
zipper-1: zipper r6c1-r7c2-r8c1-r9c2-r8c3-r7c4-r8c5-r7c6-r8c7-r9c8-r8c9-r7c8-r6c9
zipper-2: zipper r4c1-r3c2-r2c1-r1c2-r2c3-r3c4-r2c5-r3c6-r2c7-r1c8-r2c9-r3c8-r4c9
zipper-3: zipper r5c8-r5c7-r6c6-r6c5-r5c5-r6c4-r5c3-r4c3-r4c2
zipper-4: zipper r1c4-r1c5-r1c6
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Along a Zipper line, pairs of digits equidistant from the center of the line sum to the digit in that cell.
