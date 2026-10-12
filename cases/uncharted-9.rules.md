---
format: open-rules
title: Uncharted 9
setter: iEtsh
source: https://sudokupad.app/7t90zlfvf3
case: https://sudoku-sleuth.com/cases/uncharted-9
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
cage-1: cage r2c5-r2c6 total 9 connected true
cage-2: cage r8c1-r9c1 total 9 connected true
cage-3: cage r6c6-r7c6 total 9 connected true
cage-4: cage r2c7-r2c8 total 9 connected true
cage-5: cage r9c4-r9c5 total 9 connected true
cage-6: cage r5c5-r6c5 total 9 connected true
kropki-1: kropki r8c5-r9c5 colour "black"
kropki-2: kropki r7c8-r7c9 colour "black"
kropki-3: kropki r3c6-r4c6 colour "black"
kropki-4: kropki r1c3-r2c3 colour "black"
kropki-5: kropki r3c3-r3c4 colour "black"
kropki-6: kropki r7c4-r7c5 colour "black"
kropki-7: kropki r4c4-r4c5 colour "black"
kropki-8: kropki r4c3-r5c3 colour "white"
kropki-9: kropki r3c2-r4c2 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.745,6.255],[4.922,6.078]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.708,7.5],[1.958,7.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,6.292],[1.5,6.042]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,1.292],[1.5,1.042]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.292,0.5],[3.042,0.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.708,3.5],[6.958,3.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.292,3.5],[2.042,3.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.708,5.5],[7.958,5.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,8.292],[7.5,8.042]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.708,4.5],[4.958,4.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,7.292],[3.5,7.042]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,3.708],[8.5,3.958]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.833,4.375],[6.833,4.625]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.292,8.5],[6.042,8.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8.5,0.708],[8.5,0.958]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,1.708],[0.5,1.958]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.708,7.5],[5.958,7.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.292,1.5],[5.042,1.5]],"color":"#000000","thickness":1.28,"headLength":0.12,"rounded":true}}
```

Rules

Rows, columns, and regions must each contain the digits 1–9 exactly once.

The 9 regions are hidden and must be determined by shading. Every region is orthogonally connected.

Arrow clues: The digit in an arrow cell indicates the number of consecutive cells immediately following it in the direction of the arrow that belong to the same region as the arrow cell.

Killer cages: Digits within a cage must sum to the given total. Digits may not repeat within a cage.

White Kropki dots: Digits separated by a white dot are consecutive.

Black Kropki dots: Digits separated by a black dot have a 1:2 ratio.

Region separation: Any two cells connected by a Kropki dot must belong to different regions, regardless of the dot's color.
