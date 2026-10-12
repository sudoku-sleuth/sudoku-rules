---
format: open-rules
title: Crossing Sums
setter: Meggen033
source: https://sudokupad.app/j6x0zh7sxd
case: https://sudoku-sleuth.com/cases/crossing-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2 segments [["r2c2","r3c2"],["r4c2","r5c2","r6c2"],["r7c2","r8c2"]]
region-sum-2: region-sum r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8 segments [["r2c8","r3c8"],["r4c8","r5c8","r6c8"],["r7c8","r8c8"]]
renban-1: renban r1c4-r1c5-r2c6
renban-2: renban r3c7-r3c6-r3c5-r4c5-r5c6-r5c7-r4c7
renban-3: renban r6c5-r7c5-r8c4-r8c3-r7c3
renban-4: renban r8c5-r9c4-r9c3-r9c2-r9c1
renban-5: renban r5c1-r5c2-r6c3
renban-6: renban r3c1-r3c2-r3c3-r4c4-r5c5-r6c6-r7c7-r7c8-r7c9
```

• Normal Sudoku rules apply.
• Lines are both Renban and Sum Lines. Different colour lines are for clarification.
• Renban: Digits placed on lines must be a non-repeating set of consecutive digits, in any order.
• Sum Lines: The sum of the digits on a line is the same within each box the line is in. Lines that exist in a single box may be any sum.
