---
format: open-rules
title: Oil, Water, Renban
setter: Blobz
source: https://sudokupad.app/gjyeuspv3g
case: https://sudoku-sleuth.com/cases/oil-water-renban
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c6-r9c6-r9c7 total 20 connected true
cage-2: cage r7c1-r8c1-r9c1 total 11 connected true
cage-3: cage r1c8-r1c9-r2c9-r3c9-r4c9 total 23 connected true
layered-cage-1: layered-cage r8c6-r9c6-r9c7 upper [2,4,6,8]
layered-cage-2: layered-cage r7c1-r8c1-r9c1 upper [2,4,6,8]
layered-cage-3: layered-cage r1c8-r1c9-r2c9-r3c9-r4c9 upper [2,4,6,8]
renban-1: renban r1c1-r2c1-r3c1-r4c2-r5c3
renban-2: renban r9c3-r8c3-r7c3-r6c2-r5c1
renban-3: renban r6c4-r5c4-r4c5-r3c6-r2c6
renban-4: renban r4c6-r5c6-r6c5-r7c4-r8c4
renban-5: renban r9c4-r9c5-r8c6-r7c6
renban-6: renban r1c6-r1c5-r2c4-r3c4
renban-7: renban r1c9-r2c8-r3c8-r4c7-r5c8
renban-8: renban r9c7-r8c8-r7c8-r6c9-r5c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[46,47,55,64],"label":"odd","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[30,39,48,49,57],"label":"even","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[23,31,32,41,50],"label":"odd","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[65,66,74],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[58,67,76],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[70,79,80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[42,51,60],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[44,53,61,62,71],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[16,25,33,34],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[13,14,15,22],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[4,5,6],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[3,11,12],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[0,1,10],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[9,18,19,27],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[20,29,37,38],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Pink lines contain a set of non-repeating consecutive digits in any order.

Digits in cages do not repeat and must sum to the small clue, if given.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.
