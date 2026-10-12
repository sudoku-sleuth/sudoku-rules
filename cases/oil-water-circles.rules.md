---
format: open-rules
title: Oil, Water, Circles
setter: Blobz
source: https://sudokupad.app/blobz/oil-water-circles
case: https://sudoku-sleuth.com/cases/oil-water-circles
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c9=1 r4c9=2 r7c1=8 r9c3=3
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r2c2 connected true
cage-2: cage r1c2-r1c3-r1c4-r2c3 connected true
cage-3: cage r1c5-r2c4-r2c5-r2c6-r3c5 connected true
cage-4: cage r1c7-r2c7-r3c7-r3c8 connected true
cage-5: cage r1c8-r1c9-r2c8 connected true
cage-6: cage r3c1-r3c2-r3c3 connected true
cage-7: cage r4c1-r4c2-r5c1-r6c1 connected true
cage-8: cage r6c2-r7c2-r7c3-r8c3 total 16 connected true
cage-9: cage r8c2-r9c1-r9c2 connected true
cage-10: cage r7c5-r8c4-r8c5-r8c6-r9c5 connected true
cage-11: cage r7c6-r7c7-r8c7-r9c7-r9c8 connected true
cage-12: cage r8c8-r8c9-r9c9 connected true
cage-13: cage r5c8-r6c8-r7c8-r7c9 total 20 connected true
cage-14: cage r4c9-r5c9-r6c9 connected true
cage-15: cage r4c7-r5c7-r6c7 connected true
cage-16: cage r3c4-r4c4-r4c5-r4c6 connected true
cage-17: cage r6c4-r6c5-r6c6 connected true
cage-18: cage r4c3-r5c3-r6c3 connected true
layered-cage-1: layered-cage r1c1-r2c1-r2c2 upper [2,4,6,8]
layered-cage-2: layered-cage r1c2-r1c3-r1c4-r2c3 upper [2,4,6,8]
layered-cage-3: layered-cage r1c5-r2c4-r2c5-r2c6-r3c5 upper [2,4,6,8]
layered-cage-4: layered-cage r1c7-r2c7-r3c7-r3c8 upper [2,4,6,8]
layered-cage-5: layered-cage r1c8-r1c9-r2c8 upper [2,4,6,8]
layered-cage-6: layered-cage r3c1-r3c2-r3c3 upper [2,4,6,8]
layered-cage-7: layered-cage r4c1-r4c2-r5c1-r6c1 upper [2,4,6,8]
layered-cage-8: layered-cage r6c2-r7c2-r7c3-r8c3 upper [2,4,6,8]
layered-cage-9: layered-cage r8c2-r9c1-r9c2 upper [2,4,6,8]
layered-cage-10: layered-cage r7c5-r8c4-r8c5-r8c6-r9c5 upper [2,4,6,8]
layered-cage-11: layered-cage r7c6-r7c7-r8c7-r9c7-r9c8 upper [2,4,6,8]
layered-cage-12: layered-cage r8c8-r8c9-r9c9 upper [2,4,6,8]
layered-cage-13: layered-cage r5c8-r6c8-r7c8-r7c9 upper [2,4,6,8]
layered-cage-14: layered-cage r4c9-r5c9-r6c9 upper [2,4,6,8]
layered-cage-15: layered-cage r4c7-r5c7-r6c7 upper [2,4,6,8]
layered-cage-16: layered-cage r3c4-r4c4-r4c5-r4c6 upper [2,4,6,8]
layered-cage-17: layered-cage r6c4-r6c5-r6c6 upper [2,4,6,8]
layered-cage-18: layered-cage r4c3-r5c3-r6c3 upper [2,4,6,8]
counting-circles r1c1-r1c9-r2c2-r2c6-r2c8-r3c3-r3c7-r4c4-r4c6-r5c2-r5c5-r5c8-r6c4-r6c6-r7c3-r8c2-r8c5-r8c8-r9c1-r9c9
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits in cages must sum to the small clue, if given.

A digit in a circle indicates how many circles contain that digit.
