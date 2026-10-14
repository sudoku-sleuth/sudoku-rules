---
format: open-rules
title: Lion's Mane
setter: Timotab
source: https://sudokupad.app/1pg1r91t7m
case: https://sudoku-sleuth.com/cases/lion-s-mane
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 7839890d2674c386280d86a25ba6b154
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3 total 5 connected true
cage-2: cage r3c7-r4c7 total 15 connected true
cage-3: cage r7c7-r8c7 total 9 connected true
cage-4: cage r7c3-r8c3 total 15 connected true
cage-5: cage r5c5-r6c5-r7c5 total 12 connected true
cage-6: cage r2c3-r2c4 total 8 connected true
cage-7: cage r2c6-r2c7 total 7 connected true
cage-8: cage r8c2-r9c2-r9c3 total 15 connected true
cage-9: cage r8c8-r9c7-r9c8 total 9 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5],[3.5,3.5],[3.5,2.5],[4.5,2.5],[4.5,3.5],[5.5,2.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,5.5],[3.5,5.5],[3.5,6.5],[4.5,6.5],[4.5,5.5],[5.5,6.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,2.5],[6.5,3.5],[7.5,3.5],[7.5,2.5],[8.5,3.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,6.5],[6.5,5.5],[7.5,5.5],[7.5,6.5],[8.5,5.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[3.5,4.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,5.5],[2.5,4.5],[1.5,3.5],[1.5,2.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,0.5],[5.5,1.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,1.5],[3.5,0.5],[2.5,1.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,8.5],[3.5,7.5],[4.5,8.5],[4.5,7.5],[5.5,8.5],[6.5,7.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
```

• Normal sudoku rules apply
• Digits in cages cannot repeat and must sum to the clue in the top left corner of the cage
• Every set of three adjacent digits on a peach line must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9)
