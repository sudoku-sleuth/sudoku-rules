---
format: open-rules
title: Oil, Water, Arrows
setter: Blobz
source: https://sudokupad.app/blobz/oil-water-arrows
case: https://sudoku-sleuth.com/cases/oil-water-arrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6404b620dc1d8269c6e8eb742a34a2cf
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c7-r2c8-r2c9 total 17 connected true
cage-2: cage r2c5-r3c4-r3c5-r3c6-r4c5 total 22 connected true
cage-3: cage r3c2-r3c3-r4c1-r4c2 connected true
cage-4: cage r5c5-r6c4-r6c5-r6c6 connected true
cage-5: cage r4c7-r5c7-r5c8 total 19 connected true
cage-6: cage r3c7-r3c8-r4c8-r4c9 connected true
cage-7: cage r6c8-r6c9-r7c7-r7c8 connected true
cage-8: cage r7c9-r8c9-r9c9 total 14 connected true
cage-9: cage r8c7-r9c7-r9c8 total 18 connected true
cage-10: cage r7c4-r7c5-r7c6-r8c5 connected true
cage-11: cage r8c3-r9c2-r9c3 total 12 connected true
cage-12: cage r7c1-r8c1-r9c1 total 12 connected true
cage-13: cage r6c1-r6c2-r7c2-r7c3 connected true
layered-cage-1: layered-cage r1c9-r2c7-r2c8-r2c9 upper [2,4,6,8]
layered-cage-2: layered-cage r2c5-r3c4-r3c5-r3c6-r4c5 upper [2,4,6,8]
layered-cage-3: layered-cage r3c2-r3c3-r4c1-r4c2 upper [2,4,6,8]
layered-cage-4: layered-cage r5c5-r6c4-r6c5-r6c6 upper [2,4,6,8]
layered-cage-5: layered-cage r4c7-r5c7-r5c8 upper [2,4,6,8]
layered-cage-6: layered-cage r3c7-r3c8-r4c8-r4c9 upper [2,4,6,8]
layered-cage-7: layered-cage r6c8-r6c9-r7c7-r7c8 upper [2,4,6,8]
layered-cage-8: layered-cage r7c9-r8c9-r9c9 upper [2,4,6,8]
layered-cage-9: layered-cage r8c7-r9c7-r9c8 upper [2,4,6,8]
layered-cage-10: layered-cage r7c4-r7c5-r7c6-r8c5 upper [2,4,6,8]
layered-cage-11: layered-cage r8c3-r9c2-r9c3 upper [2,4,6,8]
layered-cage-12: layered-cage r7c1-r8c1-r9c1 upper [2,4,6,8]
layered-cage-13: layered-cage r6c1-r6c2-r7c2-r7c3 upper [2,4,6,8]
arrow-1: arrow r2c9-r2c8 bulb ["r1c9"]
arrow-2: arrow r2c4-r3c4 bulb ["r2c3"]
arrow-3: arrow r4c2-r4c1 bulb ["r3c2"]
arrow-4: arrow r3c8-r3c7 bulb ["r4c8"]
arrow-5: arrow r5c5-r6c5 bulb ["r4c5"]
arrow-6: arrow r7c2-r6c2 bulb ["r7c3"]
arrow-7: arrow r6c8-r7c8 bulb ["r6c9"]
arrow-8: arrow r8c5-r7c6 bulb ["r9c5"]
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat and must sum to the small clue, if given.

Digits along arrows sum to the digit in the attached circle.
