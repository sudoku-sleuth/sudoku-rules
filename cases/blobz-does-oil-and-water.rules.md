---
format: open-rules
title: Blobz does Oil and Water
setter: Blobz
source: https://sudokupad.app/q83zhyblwh
case: https://sudoku-sleuth.com/cases/blobz-does-oil-and-water
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c4=7
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3-r5c3-r6c3-r7c3-r7c4 connected true
cage-2: cage r2c4-r2c5-r3c4-r3c5-r4c4-r4c5-r5c4-r5c5 connected true
cage-3: cage r4c6-r5c6-r5c7-r6c6-r7c6-r7c7-r8c6 connected true
cage-4: cage r7c8-r7c9-r8c8-r9c7-r9c8-r9c9 connected true
cage-5: cage r1c1-r2c1-r2c2-r3c1-r4c1-r4c2-r5c1 connected true
cage-6: cage r6c2-r7c2-r8c2 total 17 connected true
cage-7: cage r3c9-r4c9-r5c9-r6c9 total 18 connected true
cage-8: cage r1c5-r1c6-r2c6 total 15 connected true
cage-9: cage r8c4-r9c4 total 13 connected true
cage-10: cage r4c8-r5c8-r6c8 connected true
cage-11: cage r1c7-r1c8-r2c7 total 11 connected true
cage-12: cage r3c7-r4c7 total 12 connected true
layered-cage-1: layered-cage r3c3-r4c3-r5c3-r6c3-r7c3-r7c4 upper [2,4,6,8]
layered-cage-2: layered-cage r2c4-r2c5-r3c4-r3c5-r4c4-r4c5-r5c4-r5c5 upper [2,4,6,8]
layered-cage-3: layered-cage r4c6-r5c6-r5c7-r6c6-r7c6-r7c7-r8c6 upper [2,4,6,8]
layered-cage-4: layered-cage r7c8-r7c9-r8c8-r9c7-r9c8-r9c9 upper [2,4,6,8]
layered-cage-5: layered-cage r1c1-r2c1-r2c2-r3c1-r4c1-r4c2-r5c1 upper [2,4,6,8]
layered-cage-6: layered-cage r6c2-r7c2-r8c2 upper [2,4,6,8]
layered-cage-7: layered-cage r3c9-r4c9-r5c9-r6c9 upper [2,4,6,8]
layered-cage-8: layered-cage r1c5-r1c6-r2c6 upper [2,4,6,8]
layered-cage-9: layered-cage r8c4-r9c4 upper [2,4,6,8]
layered-cage-10: layered-cage r4c8-r5c8-r6c8 upper [2,4,6,8]
layered-cage-11: layered-cage r1c7-r1c8-r2c7 upper [2,4,6,8]
layered-cage-12: layered-cage r3c7-r4c7 upper [2,4,6,8]
renban-1: renban r3c3-r4c3-r5c3-r6c3-r7c3-r7c4
renban-2: renban r2c4-r3c4-r4c4-r5c4-r5c5-r2c5-r3c5-r4c5
renban-3: renban r4c6-r5c6-r6c6-r7c6-r8c6-r5c7-r7c7
renban-4: renban r7c8-r7c9-r8c8-r9c7-r9c8-r9c9
renban-5: renban r1c1-r2c1-r3c1-r4c1-r5c1-r4c2-r2c2
```

Normal sudoku rules apply.

Pink lines contain a set of consecutive digits.

Digits in cages do not repeat and must sum to the small clue, if given.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.
