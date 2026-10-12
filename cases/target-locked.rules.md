---
format: open-rules
title: Target Locked
setter: Timotab
source: https://sudokupad.app/enc2jt93o7
case: https://sudoku-sleuth.com/cases/target-locked
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
renban-1: renban r3c3-r4c3-r5c3-r6c3-r7c4-r7c5-r7c6-r7c7
renban-2: renban r2c4-r2c5-r2c6-r2c7-r3c8-r4c8-r5c8-r6c8
renban-3: renban r1c2-r2c1-r3c1-r4c1
renban-4: renban r9c4-r9c5-r9c6
renban-5: renban r3c6-r3c7
region-sum-1: region-sum r1c4-r2c3-r3c2-r4c2-r5c2-r6c2-r7c3-r8c4-r8c5-r8c6-r8c7-r7c8 segments [["r1c4"],["r2c3","r3c2"],["r4c2","r5c2","r6c2"],["r7c3"],["r8c4","r8c5","r8c6"],["r8c7","r7c8"]]
region-sum-2: region-sum r1c6-r1c7-r2c8-r3c9-r4c9 segments [["r1c6"],["r1c7","r2c8","r3c9"],["r4c9"]]
region-sum-3: region-sum r4c4-r5c4-r6c4-r6c5-r6c6-r6c7-r5c7 segments [["r4c4","r5c4","r6c4","r6c5","r6c6"],["r6c7","r5c7"]]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.7,8.3],[1.3,7.7]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.3,3.7],[3.7,4.3]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.3,4.7],[4.7,5.3]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.7,2.3],[7.3,1.7]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,5.5],[3.3,4.7]],"color":"#2ecbffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,5.5],[3.3,4.7]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
```

• Normal sudoku rules apply. Place the digits 1 to 9 in every row, column, and box, without repetition.
• Region Sum: Box borders divide a hollow blue line into segments which have the same sum.
• Renban: A solid magenta line must contain a non-repeating set of consecutive digits in any order
