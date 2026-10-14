---
format: open-rules
title: Nuclear Fission (Kernspaltung)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/nuclear-fission-kernspaltung
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 689b5eea40587ed6ab78d1476877a599
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5 total 12 connected true
cage-2: cage r6c1-r6c2 total 4 connected true
cage-3: cage r5c4-r6c4 total 5 connected true
cage-4: cage r2c7-r3c7 total 9 connected true
kropki-1: kropki r2c4-r2c5 black
kropki-2: kropki r1c4-r2c4 black
whispers-1: whispers r3c6-r4c6-r4c7-r3c7 gap 5
whispers-2: whispers r3c6-r3c7 gap 5
whispers-3: whispers r6c3-r7c3-r7c4-r6c4 gap 5
whispers-4: whispers r6c3-r6c4 gap 5
whispers-5: whispers r5c3-r6c2-r7c2-r8c3-r8c4-r7c5-r6c5-r5c4 gap 5
whispers-6: whispers r5c4-r5c3 gap 5
whispers-7: whispers r2c6-r3c5-r4c5-r5c6-r5c7-r4c8-r3c8-r2c7 gap 5
whispers-8: whispers r2c6-r2c7 gap 5
parity-cells r3c5-r2c6-r2c7-r3c8-r4c8-r5c7-r5c6-r4c5-r5c4-r6c5-r7c5-r8c4-r8c3-r7c2-r6c2-r5c3 parity "odd"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,2.5],[3.5,3.5]],"color":"#5C74FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,1.5],[4.5,1.5],[4.5,0.5]],"color":"#5C74FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[1.5,4.5],[0.5,4.5]],"color":"#5C74FF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5]],"color":"#5C74FF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5],[8.5,5.5],[7.5,5.5]],"color":"#5C74FF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5]],"color":"#5C74FF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5],[4.5,7.5],[4.5,8.5]],"color":"#5C74FF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,7.5],[6.5,6.5],[6.5,7.5]],"color":"#7883FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on all blue lines contain the same set of 4 numbers each. Numbers in cages sum to the number in the top left corner of the cage. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are given. Numbers on gray circles are odd.
