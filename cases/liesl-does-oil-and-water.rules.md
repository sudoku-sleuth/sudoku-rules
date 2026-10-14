---
format: open-rules
title: Liesl does Oil and Water
setter: Blobz
source: https://sudokupad.app/blobz/liesl-does-oil-and-water
case: https://sudoku-sleuth.com/cases/liesl-does-oil-and-water
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0de5534495e31d820f24e99fe60f3055
---

```rules
sudoku 9x9
cage-1: cage r2c8-r2c9-r3c9-r4c8-r4c9 connected true
cage-2: cage r2c6-r2c7-r3c6 connected true
cage-3: cage r2c5-r3c5-r4c4-r4c5-r5c5 connected true
cage-4: cage r2c3-r2c4-r3c3-r3c4 connected true
cage-5: cage r2c1-r3c1-r4c1-r4c2 connected true
cage-6: cage r5c2-r6c2-r7c2 connected true
cage-7: cage r7c1-r8c1-r9c1-r9c2 connected true
cage-8: cage r6c5-r6c6-r7c5-r8c4-r8c5 connected true
cage-9: cage r5c9-r6c9-r7c9-r8c8-r8c9 connected true
cage-10: cage r4c7-r5c7-r5c8 connected true
layered-cage-1: layered-cage r2c8-r2c9-r3c9-r4c8-r4c9 upper [2,4,6,8]
layered-cage-2: layered-cage r2c6-r2c7-r3c6 upper [2,4,6,8]
layered-cage-3: layered-cage r2c5-r3c5-r4c4-r4c5-r5c5 upper [2,4,6,8]
layered-cage-4: layered-cage r2c3-r2c4-r3c3-r3c4 upper [2,4,6,8]
layered-cage-5: layered-cage r2c1-r3c1-r4c1-r4c2 upper [2,4,6,8]
layered-cage-6: layered-cage r5c2-r6c2-r7c2 upper [2,4,6,8]
layered-cage-7: layered-cage r7c1-r8c1-r9c1-r9c2 upper [2,4,6,8]
layered-cage-8: layered-cage r6c5-r6c6-r7c5-r8c4-r8c5 upper [2,4,6,8]
layered-cage-9: layered-cage r5c9-r6c9-r7c9-r8c8-r8c9 upper [2,4,6,8]
layered-cage-10: layered-cage r4c7-r5c7-r5c8 upper [2,4,6,8]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[4.5,4.5],[3.5,3.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,5.5],[1.5,6.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,8.5],[3.5,8.5],[3.5,7.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[4.5,6.5],[4.5,7.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[7.5,8.5],[7.5,7.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,4.5],[7.5,4.5],[7.5,3.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[8.5,0.5],[8.5,1.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[6.5,1.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,3.5],[2.5,3.5],[2.5,2.5],[1.5,2.5]],"color":"#dacac6ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits along lines sum to either 16 or 17.
