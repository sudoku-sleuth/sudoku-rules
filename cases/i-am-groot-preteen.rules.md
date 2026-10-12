---
format: open-rules
title: I Am Groot -- Preteen
setter: Blobz
source: https://sudokupad.app/1s6yonn2l6
case: https://sudoku-sleuth.com/cases/i-am-groot-preteen
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 connected true
cage-2: cage r1c4-r1c5-r2c4 connected true
cage-3: cage r1c6-r2c6 connected true
cage-4: cage r1c7-r1c8 connected true
cage-5: cage r1c9-r2c8-r2c9-r3c8 connected true
cage-6: cage r4c7-r5c7-r5c8-r6c7 connected true
cage-7: cage r4c9-r5c9 connected true
cage-8: cage r7c9-r8c8-r8c9 connected true
cage-9: cage r8c7-r9c6-r9c7 connected true
cage-10: cage r8c3-r9c3-r9c4 connected true
cage-11: cage r9c1-r9c2 connected true
cage-12: cage r6c1-r7c1-r8c1 connected true
cage-13: cage r5c1-r5c2 connected true
cage-14: cage r5c4-r5c5-r5c6-r6c5 connected true
parity-cells r5c4-r5c6 parity "odd"
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,4.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,4.5],[5.5,5.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,2.5],[5.5,1.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5],[2.5,1.5],[1.5,2.5],[2.5,3.5],[1.5,4.5],[2.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,7.5],[4.5,7.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5],[6.5,6.5],[7.5,5.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

Along grey lines EVERY pair of adjacent digits do not repeat and must sum to 11 or 12.

Digits in cages do not repeat and must sum to 11 or 12.

Grey circles denote odd digits.
