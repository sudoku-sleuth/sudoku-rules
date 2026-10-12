---
format: open-rules
title: Temple of Equal Entropy
setter: EPH
source: https://tinyurl.com/53r3t6z2
case: https://sudoku-sleuth.com/cases/temple-of-equal-entropy
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r2c5=6
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5-r4c6 total 7 connected true
cage-2: cage r4c2-r5c2-r6c2 total 8 connected true
cage-3: cage r4c8-r5c8-r6c8 total 9 connected true
cage-4: cage r7c2-r8c2-r9c2-r9c3-r9c4 total 31 connected true
cage-5: cage r7c8-r8c8-r9c6-r9c7-r9c8 total 26 connected true
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,3.5],[5.5,4.5],[6.5,5.5],[7.5,5.5]],"color":"#5191E0","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5],[2.5,0.5],[3.5,0.5],[4.5,0.5],[5.5,0.5],[6.5,0.5],[7.5,0.5],[8.5,0.5]],"color":"#5191E0","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,8.5],[8.5,8.5]],"color":"#5191E0","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[1.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[1.5,6.5],[2.5,7.5]],"color":"#5191E0","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits must not repeat within a cage and must sum to the value in the corner of the cage.

The blue lines are Equal-sum Entropic lines: three consecutive cells on a line must have a high digit (789), a medium digit (456), and a low digit (123).  Additionally, the sum of the digits on a line segment within a box is the same for each box the line passes through.  If a line enters a box more than once, each segment within the box is considered separately.

The dark blue line is separate from the light blue line.
