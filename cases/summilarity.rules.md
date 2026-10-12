---
format: open-rules
title: Summilarity
setter: Marty Sears
source: https://sudokupad.app/xow2m4mdg5
case: https://sudoku-sleuth.com/cases/summilarity
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 10
  cols: 10
  symbols:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10
unique-11: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1
unique-12: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2
unique-13: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3
unique-14: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4
unique-15: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5
unique-16: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6
unique-17: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7
unique-18: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8
unique-19: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9
unique-20: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[10.125,9.625],[10.125,10.125],[-0.125,10.125],[-0.125,-0.125],[10.125,-0.125],[10.125,9.625]],"color":"#76a2ebff","thickness":15.36,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[-0.375,8.125],[-0.375,8.875],[-0.375,-0.375],[10.375,-0.375],[10.375,10.375],[-0.375,10.375],[-0.375,8.875]],"color":"#ccdff7ff","thickness":15.36,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[10.25,9.75],[10.25,10.25],[-0.25,10.25],[-0.25,-0.25],[10.25,-0.25],[10.25,9.75]],"color":"#9abaeeff","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[-0.25,4.25],[-0.25,4.75]],"color":"#9abaeeff","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,5.5],[3.5,4.5],[2.5,3.5],[0.5,3.5],[0.5,2.5],[3.5,2.5],[3.5,1.5],[2.5,0.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,8.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,9.5],[4.5,9.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,7.5],[3.5,6.5],[3.5,5.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[4.5,0.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,4.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[9.5,2.5],[9.5,4.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5],[9.5,5.5],[8.5,6.5],[7.5,6.5],[6.5,7.5],[6.5,8.5],[7.5,8.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[9.5,9.5],[9.5,7.5],[8.5,7.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,5.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,9.5],[7.5,9.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,7.5],[3.5,6.5],[3.5,5.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[4.5,0.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,5.5],[3.5,4.5],[2.5,3.5],[0.5,3.5],[0.5,2.5],[3.5,2.5],[3.5,1.5],[2.5,0.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[9.5,4.5],[9.5,2.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,4.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5],[9.5,5.5],[8.5,6.5],[7.5,6.5],[6.5,7.5],[6.5,8.5],[7.5,8.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[9.5,7.5],[9.5,9.5]],"color":"#47ccfbff","thickness":9.6,"rounded":true}}
```

ISOFILL:
Divide the grid into 10 regions, each with 10 orthogonally connected cells. Every cell in a region must contain the same digit. All of the digits 0-9 must appear in the grid.

REGION SUM LINES:
Blue lines are divided into at least two segments by region borders. Each segment on a line has the same sum, but this sum may be different for different lines.
