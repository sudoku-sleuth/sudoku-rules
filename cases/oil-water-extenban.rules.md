---
format: open-rules
title: Oil, Water, Extenban
setter: Blobz
source: https://sudokupad.app/blobz/oil-water-extenban
case: https://sudoku-sleuth.com/cases/oil-water-extenban
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e38a27bf8b16e7350a0d75f5753cae66
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c2-r2c3-r3c2 connected true
cage-2: cage r4c2-r5c2-r6c1-r6c2-r7c1 total 29 connected true
cage-3: cage r7c3-r7c4-r8c2-r8c3-r9c2 total 23 connected true
cage-4: cage r4c5-r5c5-r6c5 total 16 connected true
cage-5: cage r8c6-r9c5-r9c6 total 20 connected true
cage-6: cage r4c8-r5c8-r6c8-r6c9-r7c9 connected true
cage-7: cage r4c7-r5c7-r6c7 connected true
cage-8: cage r2c9-r3c9-r4c9 connected true
cage-9: cage r1c8-r2c7-r2c8-r3c8 connected true
cage-10: cage r2c6-r3c6 connected true
cage-11: cage r1c5-r2c5-r3c5 total 18 connected true
cage-12: cage r7c6-r7c7-r8c7-r8c8-r9c8 connected true
layered-cage-1: layered-cage r1c2-r2c2-r2c3-r3c2 upper [2,4,6,8]
layered-cage-2: layered-cage r4c2-r5c2-r6c1-r6c2-r7c1 upper [2,4,6,8]
layered-cage-3: layered-cage r7c3-r7c4-r8c2-r8c3-r9c2 upper [2,4,6,8]
layered-cage-4: layered-cage r4c5-r5c5-r6c5 upper [2,4,6,8]
layered-cage-5: layered-cage r8c6-r9c5-r9c6 upper [2,4,6,8]
layered-cage-6: layered-cage r4c8-r5c8-r6c8-r6c9-r7c9 upper [2,4,6,8]
layered-cage-7: layered-cage r4c7-r5c7-r6c7 upper [2,4,6,8]
layered-cage-8: layered-cage r2c9-r3c9-r4c9 upper [2,4,6,8]
layered-cage-9: layered-cage r1c8-r2c7-r2c8-r3c8 upper [2,4,6,8]
layered-cage-10: layered-cage r2c6-r3c6 upper [2,4,6,8]
layered-cage-11: layered-cage r1c5-r2c5-r3c5 upper [2,4,6,8]
layered-cage-12: layered-cage r7c6-r7c7-r8c7-r8c8-r9c8 upper [2,4,6,8]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,6.5],[1.5,7.5]],"color":"#fecefaff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,2.5],[2.5,3.5],[2.5,4.5]],"color":"#fecefaff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5],[3.5,1.5],[2.5,1.5]],"color":"#fecefaff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,2.5],[5.5,3.5],[5.5,4.5]],"color":"#fecefaff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,0.5],[6.5,0.5],[7.5,1.5],[6.5,2.5]],"color":"#fecefaff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#fecefaff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[4.5,8.5],[3.5,7.5],[2.5,8.5]],"color":"#fecefaff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[4.5,6.5],[3.5,5.5],[3.5,4.5]],"color":"#fecefaff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits in cages must sum to the small clue, if given.

Digits along a pink line form a consecutive group in any order. Digits do not repeat on the line EXCEPT for the ends, which are the SAME digit. For example, possible fills for a line of length 4 might be 6456, 7867, 1231, etc.
