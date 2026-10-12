---
format: open-rules
title: Crossing Sums 2
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/crossing-sums-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r6c2-r6c3-r7c3-r8c3-r8c4-r7c5-r6c5
renban-2: renban r5c1-r4c2-r4c3
renban-3: renban r6c8-r5c8-r4c7
renban-4: renban r8c9-r7c8-r7c7-r6c6-r5c5-r4c4-r3c3-r3c2-r2c1
renban-5: renban r2c6-r1c6-r1c7-r1c8-r1c9
renban-6: renban r2c4-r1c4-r1c3-r1c2
region-sum r8c1-r7c2-r7c3-r6c4-r5c5-r4c6-r3c7-r3c8-r2c9 segments [["r8c1","r7c2","r7c3"],["r6c4","r5c5","r4c6"],["r3c7","r3c8","r2c9"]]
```

• Normal Sudoku rules apply.
• Lines are both Renban and Sum Lines. Different colour lines are for clarification.
• Renban: Digits placed on lines must be a non-repeating set of consecutive digits, in any order.
• Sum Lines: The sum of the digits on a line is the same within each box the line is in. Lines that exist in a single box may be any sum.
