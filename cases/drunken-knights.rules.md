---
format: open-rules
title: Drunken Knights
setter: Blobz
source: https://sudokupad.app/blobz/drunken-knights
case: https://sudoku-sleuth.com/cases/drunken-knights
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 3655ae7e4392793fd14c7dd99726a19b
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4-r2c1-r2c2-r3c2-r3c3-r4c2 connected true
cage-2: cage r1c5-r1c7-r2c4-r2c5-r2c7-r3c5-r3c6-r3c7-r3c8 connected true
cage-3: cage r1c6-r2c6 total 13 connected true
cage-4: cage r1c8-r2c8 total 13 connected true
cage-5: cage r1c9-r2c9-r3c9-r4c7-r4c8-r4c9-r5c7-r5c9-r6c9 connected true
cage-6: cage r5c8-r6c8-r7c8-r7c9-r8c8-r8c9-r9c7-r9c8-r9c9 connected true
cage-7: cage r9c5-r9c6 total 12 connected true
cage-8: cage r7c1-r8c1-r8c2-r8c3-r8c4-r9c1-r9c2-r9c3-r9c4 connected true
cage-9: cage r6c7-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r8c5-r8c6 connected true
cage-10: cage r4c6-r5c4-r5c6-r6c1-r6c2-r6c3-r6c4-r6c5-r6c6 connected true
cage-11: cage r3c1-r4c1-r4c3-r4c4-r4c5-r5c1-r5c2-r5c3-r5c5 connected true
anti-knight
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5],[0.5,2.5],[0.5,3.5]],"color":"#d5d5d5ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[1.5,5.5],[2.5,4.5],[1.5,3.5]],"color":"#d5d5d5ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[3.5,8.5]],"color":"#d5d5d5ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[8.5,6.5],[8.5,5.5]],"color":"#d5d5d5ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,0.5],[8.5,1.5]],"color":"#d5d5d5ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[4.5,2.5],[5.5,2.5]],"color":"#d5d5d5ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5],[5.5,5.5],[5.5,6.5]],"color":"#d5d5d5ff","thickness":12.8,"rounded":true}}
```

Those knights have been quaffing ale at the inn again, and are now so drunk they don't know upside-down from right-side-up! They know those grey lines are thermometers, but they can't remember which way round they go. Can you help?

Normal sudoku rules apply.

Cells a chess knight's move apart cannot contain the same digit.

Digits in cages cannot repeat, and must sum to the clue in the top left corner, if given.

The grey lines are thermometers where digits must increase from the bulb end. It is up to you to deduce which end is which!
