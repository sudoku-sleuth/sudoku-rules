---
format: open-rules
title: Oil, Water, Glyph
setter: Blobz
source: https://sudokupad.app/blobz/oil-water-glyph
case: https://sudoku-sleuth.com/cases/oil-water-glyph
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2-r3c1 connected true
cage-2: cage r3c2-r4c1-r4c2 connected true
cage-3: cage r1c3-r2c3-r2c4-r3c4-r4c4 connected true
cage-4: cage r5c1-r5c2-r6c1-r6c2 connected true
cage-5: cage r4c3-r5c3-r5c4-r6c4 connected true
cage-6: cage r6c3-r7c2-r7c3-r8c1-r8c2 connected true
cage-7: cage r8c3-r9c2-r9c3-r9c4 connected true
cage-8: cage r8c6-r9c5-r9c6-r9c7 connected true
cage-9: cage r7c7-r8c7-r8c8-r9c8 connected true
cage-10: cage r7c9-r8c9-r9c9 connected true
cage-11: cage r6c6-r7c5-r7c6-r8c5 connected true
cage-12: cage r2c6-r3c5-r3c6-r3c7-r4c6 connected true
cage-13: cage r1c7-r2c7 connected true
cage-14: cage r1c8-r2c8-r3c8 connected true
cage-15: cage r1c9-r2c9-r3c9 connected true
cage-16: cage r4c8-r4c9-r5c8-r5c9 total 16 connected true
cage-17: cage r5c7-r6c7-r6c8-r7c8 connected true
cage-18: cage r1c4-r1c5-r1c6-r2c5 connected true
layered-cage-1: layered-cage r1c1-r1c2-r2c1-r2c2-r3c1 upper [2,4,6,8]
layered-cage-2: layered-cage r3c2-r4c1-r4c2 upper [2,4,6,8]
layered-cage-3: layered-cage r1c3-r2c3-r2c4-r3c4-r4c4 upper [2,4,6,8]
layered-cage-4: layered-cage r5c1-r5c2-r6c1-r6c2 upper [2,4,6,8]
layered-cage-5: layered-cage r4c3-r5c3-r5c4-r6c4 upper [2,4,6,8]
layered-cage-6: layered-cage r6c3-r7c2-r7c3-r8c1-r8c2 upper [2,4,6,8]
layered-cage-7: layered-cage r8c3-r9c2-r9c3-r9c4 upper [2,4,6,8]
layered-cage-8: layered-cage r8c6-r9c5-r9c6-r9c7 upper [2,4,6,8]
layered-cage-9: layered-cage r7c7-r8c7-r8c8-r9c8 upper [2,4,6,8]
layered-cage-10: layered-cage r7c9-r8c9-r9c9 upper [2,4,6,8]
layered-cage-11: layered-cage r6c6-r7c5-r7c6-r8c5 upper [2,4,6,8]
layered-cage-12: layered-cage r2c6-r3c5-r3c6-r3c7-r4c6 upper [2,4,6,8]
layered-cage-13: layered-cage r1c7-r2c7 upper [2,4,6,8]
layered-cage-14: layered-cage r1c8-r2c8-r3c8 upper [2,4,6,8]
layered-cage-15: layered-cage r1c9-r2c9-r3c9 upper [2,4,6,8]
layered-cage-16: layered-cage r4c8-r4c9-r5c8-r5c9 upper [2,4,6,8]
layered-cage-17: layered-cage r5c7-r6c7-r6c8-r7c8 upper [2,4,6,8]
layered-cage-18: layered-cage r1c4-r1c5-r1c6-r2c5 upper [2,4,6,8]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,0.5],[1.5,1.5],[1.5,0.5],[2.5,0.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,3.5],[2.5,4.5],[2.5,5.5],[1.5,5.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[0.5,8.5],[1.5,8.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,8.5],[4.5,6.5],[5.5,7.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,5.5],[5.5,3.5],[5.5,4.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,0.5],[4.5,2.5],[5.5,1.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,0.5],[6.5,2.5],[7.5,2.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,4.5],[7.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,6.5],[7.5,7.5],[6.5,8.5],[6.5,7.5]],"color":"#c8ccccff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits in cages must sum to the small clue, if given.

Along lines, digits must strictly increase or decrease.
