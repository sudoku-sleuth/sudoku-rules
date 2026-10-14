---
format: open-rules
title: Killer Tesselation
setter: sujoyku
source: https://sudokupad.app/p9zwnv4cpw
case: https://sudoku-sleuth.com/cases/killer-tesselation
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - We have only read part of the published answer so far.
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
exported: 1711f5a266416b379a4efe924c2f4e2c
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
cage-1: cage r4c3-r5c3 total 8 connected true
cage-2: cage r7c4-r7c5 total 9 connected true
cage-3: cage r5c7-r6c7 total 10 connected true
cage-4: cage r3c5-r3c6 total 11 connected true
cage-5: cage r3c3-r3c4 total 12 connected true
cage-6: cage r7c6-r7c7 total 10 connected true
cage-7: cage r6c2-r6c3-r6c4 total 13 connected true
cage-8: cage r5c1-r5c2 total 10 connected true
cage-9: cage r5c8-r5c9 total 10 connected true
cage-10: cage r4c6-r4c7-r4c8 total 17 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.4,0.8],[3.8,0.8],[4.2,1.2],[4.2,1.8],[3.8,2.2],[3.2,2.2],[2.8,1.8],[2.8,1.2],[3.2,0.8],[3.4,0.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.8,0.8],[3.8,0.2],[4.2,-0.2],[4.8,-0.2],[5.2,0.2],[5.2,0.8],[4.8,1.2],[4.2,1.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.8,1.8],[2.2,1.8],[1.8,2.2],[1.8,2.8],[2.2,3.2],[2.2,3.8],[1.8,4.2],[1.2,4.2],[0.8,3.8],[0.8,3.2],[1.2,2.8],[1.8,2.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.2,2.2],[3.2,2.8],[3.8,2.8],[4.2,3.2],[4.8,3.2],[5.2,2.8],[5.8,2.8],[6.2,3.2],[6.2,3.8],[6.8,3.8],[7.2,4.2],[7.8,4.2],[8.2,3.8],[8.8,3.8],[9.2,4.2],[9.2,4.8],[8.8,5.2],[8.2,5.2],[8.2,5.8],[7.8,6.2],[7.2,6.2],[7.2,6.8],[6.8,7.2],[6.2,7.2],[6.2,7.8],[5.8,8.2],[5.2,8.2],[5.2,8.8],[4.8,9.2],[4.2,9.2],[3.8,8.8],[3.8,8.2],[4.2,7.8],[4.8,7.8],[5.2,8.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.2,2.8],[2.8,3.2],[2.8,3.8],[2.2,3.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.8,2.8],[3.8,2.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.2,3.2],[4.2,3.8],[4.8,3.8],[5.2,4.2],[5.8,4.2],[6.2,3.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.8,3.2],[4.8,3.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.2,2.8],[5.2,2.2],[4.8,1.8],[4.2,1.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.8,2.8],[5.8,2.2],[6.2,1.8],[6.8,1.8],[7.2,2.2],[7.2,2.8],[7.8,2.8],[8.2,3.2],[8.2,3.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.2,3.2],[6.8,3.2],[7.2,2.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.8,3.8],[6.8,3.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.2,4.2],[7.2,4.8],[7.8,4.8],[8.2,5.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.8,4.2],[7.8,4.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.2,6.2],[6.8,5.8],[6.2,5.8],[5.8,6.2],[5.8,6.8],[6.2,7.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.8,8.2],[3.2,8.2],[2.8,7.8],[2.8,7.2],[3.2,6.8],[3.2,6.2],[2.8,5.8],[2.8,5.2],[3.2,4.8],[3.2,4.2],[2.8,3.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.2,7.8],[4.2,7.2],[4.8,7.2],[5.2,6.8],[5.2,6.2],[5.8,6.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.8,7.8],[4.8,7.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.2,3.2],[2.8,3.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.8,3.8],[0.2,3.8],[-0.2,4.2],[-0.2,4.8],[0.2,5.2],[0.8,5.2],[1.2,4.8],[1.8,4.8],[2.2,5.2],[2.2,5.8],[1.8,6.2],[1.8,6.8],[2.2,7.2],[2.8,7.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.2,4.2],[1.2,4.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1.8,4.2],[1.8,4.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.2,4.2],[3.8,4.2],[3.8,4.8],[3.2,4.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.8,5.2],[2.2,5.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2.8,5.8],[2.2,5.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3.2,6.2],[3.8,6.2],[4.2,5.8],[4.8,5.8],[5.2,6.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3.2,6.8],[3.8,6.8],[4.2,7.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.8,1.8],[4.8,1.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[5.2,2.2],[5.8,2.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[4.2,3.8],[3.8,4.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[5.2,4.2],[5.2,4.8],[4.8,5.2],[4.2,5.2],[4.2,5.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[5.8,4.2],[5.8,4.8],[5.2,4.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[6.2,1.8],[6.2,1.2],[5.8,0.8],[5.2,0.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[7.2,4.8],[6.8,5.2],[6.2,5.2],[5.8,4.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[6.8,5.8],[6.8,5.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[6.2,5.8],[6.2,5.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.8,5.8],[4.8,5.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[4.2,5.2],[3.8,4.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5.8,6.8],[5.2,6.8]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[3.8,6.8],[3.8,6.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1.8,6.2],[1.2,6.2],[0.8,5.8],[0.8,5.2]],"color":"#000000","thickness":0.64,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[7.8,2.8],[8.2,3.2],[8.2,3.8],[8.8,3.8],[9.2,4.2],[9.2,4.8],[8.8,5.2],[8.2,5.2],[8.2,5.8],[7.8,6.2],[7.2,6.2],[7.2,6.8],[6.8,7.2],[6.2,7.2],[6.2,7.8],[5.8,8.2],[5.2,8.2],[5.2,8.8],[4.8,9.2],[4.2,9.2],[3.8,8.8],[3.8,8.2],[3.2,8.2],[2.8,7.8],[2.8,7.2],[2.2,7.2],[1.8,6.8],[1.8,6.2],[1.2,6.2],[0.8,5.8],[0.8,5.2],[0.2,5.2],[-0.2,4.8],[-0.2,4.2],[0.2,3.8],[0.8,3.8],[0.8,3.2],[1.2,2.8],[1.8,2.8],[1.8,2.2],[2.2,1.8],[2.8,1.8],[2.8,1.2],[3.2,0.8],[3.8,0.8],[3.8,0.2],[4.2,-0.2],[4.8,-0.2],[5.2,0.2],[5.2,0.8],[5.8,0.8],[6.2,1.2],[6.2,1.8],[6.8,1.8],[7.2,2.2],[7.2,2.8],[7.8,2.8]],"color":"#000000","thickness":2.56,"rounded":true}}
```

TESSELLATION
- Fill each cell with a digit from 1-9.
- Cells sharing an edge can't have the same digit.
- Each horizontal row and vertical column contains a non-repeating consecutive set of digits (like 23456) in any order.

Killer Cages
- Digits in a cage sum to the clue in the clue in the top left.
