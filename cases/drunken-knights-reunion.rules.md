---
format: open-rules
title: Drunken Knights Reunion
setter: Blobz
source: https://sudokupad.app/dfldewhz42
case: https://sudoku-sleuth.com/cases/drunken-knights-reunion
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 432c062b5d80df55b9bd3b91f457d959
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4-r2c1-r3c1-r4c1-r5c1-r6c1 connected true
cage-2: cage r2c2-r2c3-r2c4-r3c2-r3c4-r3c5-r4c4-r5c3-r5c4 connected true
cage-3: cage r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r4c7-r4c8 connected true
cage-4: cage r2c5-r2c6-r3c6-r4c5-r4c6-r5c5-r5c6-r5c7-r6c5 connected true
cage-5: cage r3c8-r3c9-r4c9-r5c8-r5c9-r6c6-r6c7-r6c8-r7c8 connected true
cage-6: cage r6c9-r7c9-r8c6-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9 connected true
cage-7: cage r7c5-r7c6-r8c3-r8c5-r9c2-r9c3-r9c4-r9c5-r9c6 connected true
cage-8: cage r6c4-r7c1-r7c2-r7c3-r7c4-r8c1-r8c2-r8c4-r9c1 connected true
cage-9: cage r6c2-r6c3 total 8 connected true
cage-10: cage r3c3-r4c3 total 9 connected true
cage-11: cage r4c2-r5c2 total 4 connected true
anti-knight
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,0.5],[8.5,0.5],[8.5,1.5],[8.5,2.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,4.5],[8.5,5.5],[7.5,4.5],[6.5,4.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[7.5,6.5],[8.5,6.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,6.5],[4.5,7.5],[5.5,8.5],[4.5,8.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,4.5],[3.5,5.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[1.5,2.5],[0.5,2.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,4.5],[2.5,3.5],[2.5,4.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,0.5],[5.5,0.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
```

Those knights have been at it again, quaffing enormous amounts of ale at the inn and, as before, are now so drunk they don't know upside-down from right-side-up! They know those grey lines are thermometers, but they can't remember which way round they go. Can you help?

Normal sudoku rules apply.

Cells a (chess) knight's move apart cannot contain the same digit.

Digits in cages cannot repeat, and must sum to the clue in the top left corner, if given.

The grey lines are thermometers where digits must increase from the bulb end. It is up to you to deduce which end is which!
