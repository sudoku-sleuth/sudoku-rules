---
format: open-rules
title: Oil and Water 2
setter: Blobz
source: https://sudokupad.app/cjsvz56vlk
case: https://sudoku-sleuth.com/cases/oil-and-water-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2-r3c1-r4c1 total 26 connected true
cage-2: cage r1c3-r2c3 total 8 connected true
cage-3: cage r1c5-r2c5 total 10 connected true
cage-4: cage r1c8-r1c9-r2c9-r3c9 total 14 connected true
cage-5: cage r3c2-r4c2 total 9 connected true
cage-6: cage r3c3-r3c4-r4c4-r5c4 total 22 connected true
cage-7: cage r2c7-r3c6-r3c7-r3c8 connected true
cage-8: cage r4c6-r5c6-r6c6 total 12 connected true
cage-9: cage r4c9-r5c7-r5c8-r5c9-r6c7 total 24 connected true
cage-10: cage r5c1-r6c1 total 8 connected true
cage-11: cage r6c2-r6c3-r7c1-r7c2 total 24 connected true
cage-12: cage r6c4-r6c5-r7c5-r7c6 connected true
cage-13: cage r8c5-r8c6-r8c7 total 9 connected true
cage-14: cage r7c8-r7c9-r8c8-r8c9 total 20 connected true
cage-15: cage r9c6-r9c7 total 10 connected true
layered-cage-1: layered-cage r1c2-r2c1-r2c2-r3c1-r4c1 upper [2,4,6,8]
layered-cage-2: layered-cage r1c3-r2c3 upper [2,4,6,8]
layered-cage-3: layered-cage r1c5-r2c5 upper [2,4,6,8]
layered-cage-4: layered-cage r1c8-r1c9-r2c9-r3c9 upper [2,4,6,8]
layered-cage-5: layered-cage r3c2-r4c2 upper [2,4,6,8]
layered-cage-6: layered-cage r3c3-r3c4-r4c4-r5c4 upper [2,4,6,8]
layered-cage-7: layered-cage r2c7-r3c6-r3c7-r3c8 upper [2,4,6,8]
layered-cage-8: layered-cage r4c6-r5c6-r6c6 upper [2,4,6,8]
layered-cage-9: layered-cage r4c9-r5c7-r5c8-r5c9-r6c7 upper [2,4,6,8]
layered-cage-10: layered-cage r5c1-r6c1 upper [2,4,6,8]
layered-cage-11: layered-cage r6c2-r6c3-r7c1-r7c2 upper [2,4,6,8]
layered-cage-12: layered-cage r6c4-r6c5-r7c5-r7c6 upper [2,4,6,8]
layered-cage-13: layered-cage r8c5-r8c6-r8c7 upper [2,4,6,8]
layered-cage-14: layered-cage r7c8-r7c9-r8c8-r8c9 upper [2,4,6,8]
layered-cage-15: layered-cage r9c6-r9c7 upper [2,4,6,8]
```

Normal sudoku rules apply.

Digits in cages do not repeat and must sum to the small clue, if given.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.
