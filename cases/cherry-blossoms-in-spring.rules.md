---
format: open-rules
title: Cherry Blossoms in Spring
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/cherry-blossoms-in-spring
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c5-r9c5 total 12 connected true
cage-2: cage r7c7-r7c8 total 12 connected true
cage-3: cage r9c1-r9c2 total 13 connected true
cage-4: cage r8c3-r8c4 total 15 connected true
cage-5: cage r7c1-r7c2 total 6 connected true
renban r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r6c4-r5c6-r5c7
quadruple-1: quadruple r1c5-r1c6-r2c5-r2c6 digits [4,6,7,9]
quadruple-2: quadruple r1c7-r1c8-r2c7-r2c8 digits [1,3,4,9]
quadruple-3: quadruple r2c8-r2c9-r3c8-r3c9 digits [5,6,7,9]
quadruple-4: quadruple r2c6-r2c7-r3c6-r3c7 digits [2,3,4,8]
quadruple-5: quadruple r2c4-r2c5-r3c4-r3c5 digits [1,3,5,6]
quadruple-6: quadruple r3c2-r3c3-r4c2-r4c3 digits [1,3,4,9]
quadruple-7: quadruple r5c2-r5c3-r6c2-r6c3 digits [1,4,6,7]
quadruple-8: quadruple r5c6-r5c7-r6c6-r6c7 digits [1,2,5,9]
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,2.5],[5.5,1.5]],"color":"#FFC4FE","thickness":16,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[2.5,3.5]],"color":"#FFC4FE","thickness":16,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[1.5,8.5],[2.5,8.5]],"color":"#FFC4FE","thickness":16,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,4.5],[3.5,3.5]],"color":"#FFC4FE","thickness":16,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,6.5],[4.5,7.5],[3.5,7.5],[2.5,6.5],[1.5,6.5],[1.5,5.5]],"color":"#FFC4FE","thickness":16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5],[2.5,1.5],[1.5,2.5],[1.5,3.5],[0.5,3.5]],"color":"#FFC4FE","thickness":16,"rounded":true}}
```

Normal Sudoku rules apply. Quadruples: The numbers in each circle are the numbers in the four surrounding cells. The numbers on each PINK Line sum to 17. Numbers may repeat on pink lines. Renban Line: The BROWN line contains one set of the numbers 1-9, without repeats. Numbers in cages sum to the number in the top left corner of the cage.
