---
format: open-rules
title: Oil and Water
setter: Blobz
source: https://sudokupad.app/vzw2rsuz8v
case: https://sudoku-sleuth.com/cases/oil-and-water
library: https://rules.sudoku-sleuth.com/
status: read
exported: 23503dd65b6eab17d9f0fd355ab427d1
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 20 connected true
cage-2: cage r3c8-r3c9-r4c8-r4c9 total 28 connected true
cage-3: cage r8c5-r9c5-r9c6 total 8 connected true
cage-4: cage r8c9-r9c8-r9c9 total 18 connected true
cage-5: cage r4c1-r5c1-r5c2-r6c2 total 17 connected true
cage-6: cage r5c6-r6c5-r6c6 total 10 connected true
cage-7: cage r7c2-r7c3-r8c2-r8c3 total 12 connected true
cage-8: cage r4c5-r5c5 total 13 connected true
cage-9: cage r6c8-r7c7-r7c8 total 10 connected true
cage-10: cage r7c1-r8c1-r9c1 total 20 connected true
cage-11: cage r5c3-r5c4-r6c4 total 21 connected true
cage-12: cage r7c6-r8c6 total 13 connected true
cage-13: cage r8c7-r9c7 total 7 connected true
cage-14: cage r1c2-r2c2-r3c2 total 13 connected true
cage-15: cage r1c5-r2c5-r2c6 total 18 connected true
layered-cage-1: layered-cage r3c3-r3c4-r4c3-r4c4 upper [2,4,6,8]
layered-cage-2: layered-cage r3c8-r3c9-r4c8-r4c9 upper [2,4,6,8]
layered-cage-3: layered-cage r8c5-r9c5-r9c6 upper [2,4,6,8]
layered-cage-4: layered-cage r8c9-r9c8-r9c9 upper [2,4,6,8]
layered-cage-5: layered-cage r4c1-r5c1-r5c2-r6c2 upper [2,4,6,8]
layered-cage-6: layered-cage r5c6-r6c5-r6c6 upper [2,4,6,8]
layered-cage-7: layered-cage r7c2-r7c3-r8c2-r8c3 upper [2,4,6,8]
layered-cage-8: layered-cage r4c5-r5c5 upper [2,4,6,8]
layered-cage-9: layered-cage r6c8-r7c7-r7c8 upper [2,4,6,8]
layered-cage-10: layered-cage r7c1-r8c1-r9c1 upper [2,4,6,8]
layered-cage-11: layered-cage r5c3-r5c4-r6c4 upper [2,4,6,8]
layered-cage-12: layered-cage r7c6-r8c6 upper [2,4,6,8]
layered-cage-13: layered-cage r8c7-r9c7 upper [2,4,6,8]
layered-cage-14: layered-cage r1c2-r2c2-r3c2 upper [2,4,6,8]
layered-cage-15: layered-cage r1c5-r2c5-r2c6 upper [2,4,6,8]
```

Normal sudoku rules apply.

Digits in cages do not repeat and must sum to the given clue.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be above odd digits in mixed cages.
