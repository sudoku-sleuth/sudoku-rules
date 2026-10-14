---
format: open-rules
title: Glow Sticks
setter: Jobo
source: https://sudokupad.app/fw4eqvmhuu
case: https://sudoku-sleuth.com/cases/glow-sticks
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 2d9674b1e2d7d03f7a4a8b2590bb7a1b
---

```rules
sudoku 9x9
region-sum-1: region-sum r1c2-r1c3-r1c4-r2c4 segments [["r1c2","r1c3"],["r1c4","r2c4"]]
region-sum-2: region-sum r5c3-r6c3-r7c3-r7c2-r7c1 segments [["r5c3","r6c3"],["r7c3","r7c2","r7c1"]]
region-sum-3: region-sum r9c5-r9c6-r9c7-r9c8-r9c9 segments [["r9c5","r9c6"],["r9c7","r9c8","r9c9"]]
region-sum-4: region-sum r8c5-r7c5-r6c5-r6c6-r6c7-r6c8-r7c8 segments [["r8c5","r7c5"],["r6c5","r6c6"],["r6c7","r6c8"],["r7c8"]]
region-sum-5: region-sum r4c4-r4c5-r3c5-r3c6-r3c7 segments [["r4c4","r4c5"],["r3c5","r3c6"],["r3c7"]]
region-sum-6: region-sum r1c6-r2c6-r2c7-r2c8 segments [["r1c6","r2c6"],["r2c7","r2c8"]]
region-sum-7: region-sum r3c9-r4c9-r5c9 segments [["r3c9"],["r4c9","r5c9"]]
region-sum-8: region-sum r8c4-r9c4-r9c3-r9c2 segments [["r8c4","r9c4"],["r9c3","r9c2"]]
region-sum-9: region-sum r2c2-r3c2-r4c2-r4c1 segments [["r2c2","r3c2"],["r4c2","r4c1"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,2.5],[0.5,3.5],[1.5,3.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5],[1.5,6.5],[1.5,7.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,8.5],[4.5,8.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,5.5],[2.5,4.5],[3.5,4.5],[3.5,3.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,2.5],[6.5,2.5],[6.5,1.5],[6.5,0.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[6.5,4.5],[5.5,4.5],[5.5,5.5],[5.5,6.5],[5.5,7.5],[6.5,7.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,5.5],[8.5,6.5],[8.5,7.5],[8.5,8.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5],[8.5,2.5],[8.5,1.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,1.5],[3.5,1.5],[3.5,0.5]],"color":"#2ECBFF","thickness":5,"rounded":true}}
```

Normal sudoku rules apply.

All lines contain a non-repeating set of consecutive digits in any order, and are divided by box borders into segments with the same sum.
