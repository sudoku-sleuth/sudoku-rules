---
format: open-rules
title: Fallen Mast in a Storm
setter: Marty Sears
source: https://sudokupad.app/68spijnw4s
case: https://sudoku-sleuth.com/cases/fallen-mast-in-a-storm
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
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
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[0.5,8.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[4.5,8.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[5.5,8.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[2.5,4.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[0.5,8.5]],"color":"#b3fdfdff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[4.5,8.5]],"color":"#b3fdfdff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[5.5,8.5]],"color":"#b3fdfdff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[2.5,4.5]],"color":"#b3fdfdff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[8.5,8.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[0.5,0.5]],"color":"#b3fdfdff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[2.5,1.5],[3.5,0.5],[4.5,1.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,3.5],[0.5,4.5],[0.5,5.5]],"color":"#FFFFFF","thickness":19.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[2.5,1.5],[3.5,0.5],[4.5,1.5]],"color":"#08a5ffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,3.5],[0.5,4.5],[0.5,5.5]],"color":"#08a5ffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[9.333,8.667],[9.333,9.333],[-0.333,9.333],[-0.333,-0.333],[9.333,-0.333],[9.333,8.667]],"color":"#807b9eff","thickness":14.72,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[-0.333,4.333],[-0.333,5]],"color":"#807b9eff","thickness":14.72,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7,6],[9,6],[9,9],[6,9],[6,6],[7,6]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[9,6],[9,3],[6,3],[6,6],[3,6],[3,3],[6,3]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6,9],[0,9],[0,6],[3,6],[3,9]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[9,3],[9,0],[6,0],[6,3]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,3],[0,3],[0,6]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,3]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
```

TRIPLE TROUBLE: Fill the grid with the digits 1-9, so that no digit repeats in any row or column. Each 3x3 box must be filled using only 3 distinct digits (with repeats being allowed.)

SAME DIFFERENCE: Adjacent digits along a turquoise line always have the same difference. This difference must be determined for each turquoise line.

REGION SUM: 3x3 box borders divide darker blue lines into segments, which each have the same sum. This sum must be determined for each darker blue line.
