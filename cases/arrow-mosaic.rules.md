---
format: open-rules
title: Arrow Mosaic
setter: Blobz
source: https://sudokupad.app/blobz/arrow-mosaic
case: https://sudoku-sleuth.com/cases/arrow-mosaic
library: https://rules.sudoku-sleuth.com/
status: read
exported: c8b2664da8b069e114575291af034b3c
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 connected true
cage-2: cage r1c3-r1c4-r2c3 connected true
cage-3: cage r1c5-r2c4-r2c5 connected true
cage-4: cage r1c6-r1c7-r2c6 connected true
cage-5: cage r1c8-r1c9-r2c9 connected true
cage-6: cage r2c7-r2c8-r3c8 connected true
cage-7: cage r3c6-r3c7-r4c7 connected true
cage-8: cage r4c5-r4c6-r5c6 connected true
cage-9: cage r5c4-r5c5-r6c5 connected true
cage-10: cage r6c3-r6c4-r7c4 connected true
cage-11: cage r7c2-r7c3-r8c3 connected true
cage-12: cage r7c1-r8c1-r8c2-r9c2 connected true
cage-13: cage r5c1-r6c1-r6c2 connected true
cage-14: cage r3c1-r3c2-r4c1 connected true
cage-15: cage r4c2-r4c3-r5c2-r5c3 connected true
cage-16: cage r3c4-r3c5-r4c4 connected true
cage-17: cage r3c9-r4c8-r4c9 connected true
cage-18: cage r5c8-r5c9-r6c8 connected true
cage-19: cage r6c9-r7c8-r7c9 connected true
cage-20: cage r8c8-r8c9-r9c9 connected true
cage-21: cage r5c7-r6c6-r6c7 connected true
cage-22: cage r7c5-r7c6-r8c5 connected true
cage-23: cage r8c4-r9c3-r9c4 connected true
cage-24: cage r8c6-r9c5-r9c6 connected true
cage-25: cage r7c7-r8c7-r9c7 connected true
layered-cage-1: layered-cage r1c2-r2c1-r2c2 upper [2,4,6,8]
layered-cage-2: layered-cage r1c3-r1c4-r2c3 upper [2,4,6,8]
layered-cage-3: layered-cage r1c5-r2c4-r2c5 upper [2,4,6,8]
layered-cage-4: layered-cage r1c6-r1c7-r2c6 upper [2,4,6,8]
layered-cage-5: layered-cage r1c8-r1c9-r2c9 upper [2,4,6,8]
layered-cage-6: layered-cage r2c7-r2c8-r3c8 upper [2,4,6,8]
layered-cage-7: layered-cage r3c6-r3c7-r4c7 upper [2,4,6,8]
layered-cage-8: layered-cage r4c5-r4c6-r5c6 upper [2,4,6,8]
layered-cage-9: layered-cage r5c4-r5c5-r6c5 upper [2,4,6,8]
layered-cage-10: layered-cage r6c3-r6c4-r7c4 upper [2,4,6,8]
layered-cage-11: layered-cage r7c2-r7c3-r8c3 upper [2,4,6,8]
layered-cage-12: layered-cage r7c1-r8c1-r8c2-r9c2 upper [2,4,6,8]
layered-cage-13: layered-cage r5c1-r6c1-r6c2 upper [2,4,6,8]
layered-cage-14: layered-cage r3c1-r3c2-r4c1 upper [2,4,6,8]
layered-cage-15: layered-cage r4c2-r4c3-r5c2-r5c3 upper [2,4,6,8]
layered-cage-16: layered-cage r3c4-r3c5-r4c4 upper [2,4,6,8]
layered-cage-17: layered-cage r3c9-r4c8-r4c9 upper [2,4,6,8]
layered-cage-18: layered-cage r5c8-r5c9-r6c8 upper [2,4,6,8]
layered-cage-19: layered-cage r6c9-r7c8-r7c9 upper [2,4,6,8]
layered-cage-20: layered-cage r8c8-r8c9-r9c9 upper [2,4,6,8]
layered-cage-21: layered-cage r5c7-r6c6-r6c7 upper [2,4,6,8]
layered-cage-22: layered-cage r7c5-r7c6-r8c5 upper [2,4,6,8]
layered-cage-23: layered-cage r8c4-r9c3-r9c4 upper [2,4,6,8]
layered-cage-24: layered-cage r8c6-r9c5-r9c6 upper [2,4,6,8]
layered-cage-25: layered-cage r7c7-r8c7-r9c7 upper [2,4,6,8]
arrow-1: arrow r3c2-r3c1 bulb ["r2c2"]
arrow-2: arrow r7c1-r6c1 bulb ["r8c2"]
arrow-3: arrow r7c3-r7c4 bulb ["r6c2"]
arrow-4: arrow r6c4-r5c3-r4c3 bulb ["r6c5"]
arrow-5: arrow r4c6-r4c5 bulb ["r5c7"]
arrow-6: arrow r2c8-r2c7 bulb ["r1c9"]
arrow-7: arrow r3c8-r4c9 bulb ["r2c9"]
arrow-8: arrow r8c8-r8c9 bulb ["r7c7"]
arrow-9: arrow r9c5-r9c4 bulb ["r8c5"]
arrow-10: arrow r1c4-r1c3 bulb ["r1c5"]
arrow-11: arrow r3c5-r2c6 bulb ["r3c6"]
arrow-12: arrow r9c2-r8c3 bulb ["r9c1"]
arrow-13: arrow r8c7-r9c7 bulb ["r8c6"]
arrow-14: arrow r5c9-r6c9-r7c8 bulb ["r5c8"]
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits along arrows sum to the digit in the attached circle. Digits may repeat along arrows if allowed by other rules.
