---
format: open-rules
title: Cages and modular lines
setter: Chip Sounder
source: https://sudokupad.app/jbv33wrc7d
case: https://sudoku-sleuth.com/cases/cages-and-modular-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: cb70ea87f5a2c080fbe1e28d61362356
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 8 connected true
cage-2: cage r1c3-r2c3-r3c3 total 20 connected true
cage-3: cage r1c5-r2c5-r3c5 total 8 connected true
cage-4: cage r1c9-r2c9-r3c9-r4c9 total 15 connected true
cage-5: cage r1c6-r1c7-r2c7-r3c7 total 23 connected true
cage-6: cage r2c4-r3c4-r4c3-r4c4 total 13 connected true
cage-7: cage r4c5-r5c5 total 7 connected true
cage-8: cage r4c1-r5c1 total 7 connected true
cage-9: cage r5c2-r5c3-r5c4 total 20 connected true
cage-10: cage r5c6-r5c7 total 8 connected true
cage-11: cage r6c8-r7c8-r8c7-r8c8 total 15 connected true
cage-12: cage r6c6-r6c7 total 7 connected true
cage-13: cage r7c6-r7c7-r8c6 total 10 connected true
cage-14: cage r8c5-r9c5-r9c6 total 17 connected true
cage-15: cage r6c2-r6c3-r6c4-r7c2-r7c3-r7c4-r8c2-r8c3-r8c4 total 45 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[8.5,0.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[8.5,4.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[8.5,2.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,2.5],[2.5,2.5],[3.5,3.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,5.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,7.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,8.5],[8.5,7.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box. Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
Adjacent digits along a teal line must alternate between low (147), medium (258) and high (369) any set of three in a row must contain one of each modularity.
