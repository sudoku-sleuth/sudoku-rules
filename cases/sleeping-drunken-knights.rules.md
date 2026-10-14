---
format: open-rules
title: Sleeping Drunken Knights
setter: Blobz
source: https://sudokupad.app/99nc7lymy2
case: https://sudoku-sleuth.com/cases/sleeping-drunken-knights
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r7c1=9
exported: 49887d9ce096d2e92b2907437c2c7d63
---

```rules
sudoku 9x9
cage-1: cage r6c2-r6c3 total 13 connected true
cage-2: cage r5c9-r6c9 total 13 connected true
cage-3: cage r5c8-r6c8-r7c8-r7c9-r8c7-r8c8-r9c7-r9c8-r9c9 connected true
cage-4: cage r8c1-r8c2-r8c3-r9c1-r9c2-r9c3-r9c4-r9c5-r9c6 connected true
cage-5: cage r6c5-r7c2-r7c3-r7c4-r7c5-r7c6-r8c4-r8c5-r8c6 connected true
cage-6: cage r4c3-r4c5-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r6c4 connected true
cage-7: cage r1c1-r1c2-r2c1-r3c1-r4c1-r4c2-r5c1-r6c1-r7c1 connected true
cage-8: cage r2c4-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r4c4 connected true
cage-9: cage r1c9-r2c7-r2c8-r2c9-r3c9-r4c6-r4c7-r4c8-r4c9 connected true
cage-10: cage r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r2c3-r2c5-r2c6 connected true
cage-11: cage r6c6-r6c7-r7c7 total 6 connected true
anti-knight
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[2.5,0.5],[2.5,1.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,6.5],[2.5,7.5],[2.5,6.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,3.5],[2.5,3.5],[3.5,4.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,8.5],[4.5,7.5],[4.5,8.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,7.5],[5.5,8.5],[6.5,8.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,7.5],[8.5,8.5],[8.5,7.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,4.5],[7.5,5.5],[7.5,4.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,1.5],[4.5,0.5],[4.5,1.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,5.5],[5.5,5.5],[6.5,6.5]],"color":"#CCCCCC","thickness":17.6,"rounded":true}}
```

After a raucous evening quaffing vast amounts of ale, those knights are now sleeping off the effects. ...zzzZZZ

When they wake with splitting hangovers, they won't know upside-down from right-side-up! They'll vaguely remember those grey lines are thermometers, but they won't remember which way round they go. Can you help?

Normal sudoku rules apply.

Cells a (chess) knight's move apart cannot contain the same digit.

Digits in cages cannot repeat, and must sum to the clue in the top left corner, if given.

The grey lines are thermometers where digits must increase from the bulb end. It is up to you to deduce which end is which!
