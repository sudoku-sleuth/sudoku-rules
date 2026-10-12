---
format: open-rules
title: Oil-n-Water Quads
setter: Blobz
source: https://sudokupad.app/wezv577zv6
case: https://sudoku-sleuth.com/cases/oil-n-water-quads
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2-r3c3 connected true
cage-2: cage r2c7-r2c8-r3c7-r3c8 connected true
cage-3: cage r7c2-r7c3-r8c2-r8c3 connected true
cage-4: cage r7c7-r7c8-r8c7-r8c8 connected true
cage-5: cage r7c5-r8c5-r9c5 connected true
cage-6: cage r4c1-r4c2-r5c2-r6c2-r6c3 connected true
cage-7: cage r4c8-r4c9-r5c8-r6c7-r6c8 connected true
cage-8: cage r1c5-r2c5-r3c5 connected true
cage-9: cage r5c5-r6c4-r6c5-r6c6 connected true
cage-10: cage r6c1-r7c1-r8c1-r9c1-r9c2 connected true
cage-11: cage r6c9-r7c9-r8c9-r9c9 connected true
cage-12: cage r1c7-r1c8-r1c9-r2c9 connected true
layered-cage-1: layered-cage r2c2-r2c3-r3c2-r3c3 upper [2,4,6,8]
layered-cage-2: layered-cage r2c7-r2c8-r3c7-r3c8 upper [2,4,6,8]
layered-cage-3: layered-cage r7c2-r7c3-r8c2-r8c3 upper [2,4,6,8]
layered-cage-4: layered-cage r7c7-r7c8-r8c7-r8c8 upper [2,4,6,8]
layered-cage-5: layered-cage r7c5-r8c5-r9c5 upper [2,4,6,8]
layered-cage-6: layered-cage r4c1-r4c2-r5c2-r6c2-r6c3 upper [2,4,6,8]
layered-cage-7: layered-cage r4c8-r4c9-r5c8-r6c7-r6c8 upper [2,4,6,8]
layered-cage-8: layered-cage r1c5-r2c5-r3c5 upper [2,4,6,8]
layered-cage-9: layered-cage r5c5-r6c4-r6c5-r6c6 upper [2,4,6,8]
layered-cage-10: layered-cage r6c1-r7c1-r8c1-r9c1-r9c2 upper [2,4,6,8]
layered-cage-11: layered-cage r6c9-r7c9-r8c9-r9c9 upper [2,4,6,8]
layered-cage-12: layered-cage r1c7-r1c8-r1c9-r2c9 upper [2,4,6,8]
quadruple-1: quadruple r2c7-r2c8-r3c7-r3c8 digits [7]
quadruple-2: quadruple r2c2-r2c3-r3c2-r3c3 digits [1]
quadruple-3: quadruple r7c7-r7c8-r8c7-r8c8 digits [2]
quadruple-4: quadruple r7c5-r7c6-r8c5-r8c6 digits [4]
quadruple-5: quadruple r8c4-r8c5-r9c4-r9c5 digits [6]
quadruple-6: quadruple r7c2-r7c3-r8c2-r8c3 digits [8]
quadruple-7: quadruple r1c1-r1c2-r2c1-r2c2 digits [3]
quadruple-8: quadruple r1c3-r1c4-r2c3-r2c4 digits [1]
quadruple-9: quadruple r2c4-r2c5-r3c4-r3c5 digits [3,8]
quadruple-10: quadruple r1c5-r1c6-r2c5-r2c6 digits [5]
quadruple-11: quadruple r1c8-r1c9-r2c8-r2c9 digits [9]
quadruple-12: quadruple r4c7-r4c8-r5c7-r5c8 digits [3,9]
quadruple-13: quadruple r5c8-r5c9-r6c8-r6c9 digits [4,7]
quadruple-14: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,8]
quadruple-15: quadruple r8c1-r8c2-r9c1-r9c2 digits [2,9]
quadruple-16: quadruple r6c1-r6c2-r7c1-r7c2 digits [5]
quadruple-17: quadruple r4c1-r4c2-r5c1-r5c2 digits [7]
quadruple-18: quadruple r5c2-r5c3-r6c2-r6c3 digits [2,9]
quadruple-19: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,4]
quadruple-20: quadruple r5c5-r5c6-r6c5-r6c6 digits [3]
quadruple-21: quadruple r3c3-r3c4-r4c3-r4c4 digits [7]
```

Normal sudoku rules apply.

Digits in circles must appear in the surrounding 2x2 area.

Digits in cages do not repeat.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.
