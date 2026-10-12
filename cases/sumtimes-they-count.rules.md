---
format: open-rules
title: Sumtimes They Count
setter: Meggen033
source: https://sudokupad.app/5az147769f
case: https://sudoku-sleuth.com/cases/sumtimes-they-count
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r8c3-r7c3-r6c3-r5c2-r5c1
renban-2: renban r2c7-r3c7-r4c7-r5c8-r5c9
renban-3: renban r2c3-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8
renban-4: renban r6c5-r6c4-r7c4-r8c5
renban-5: renban r4c6-r4c5-r3c5-r2c6
renban-6: renban r4c3-r4c2-r3c2-r2c1
renban-7: renban r5c7-r6c8-r6c9
renban-8: renban r7c5-r8c6-r9c6-r9c7-r9c8-r9c9-r8c9
renban-9: renban r1c8-r2c9-r3c8
renban-10: renban r3c6-r2c5-r1c5-r2c4
```

• Normal Sudoku rules apply.
• Lines are both Renban and Sum Lines. Different color lines are for clarification.
• Renban: Digits placed on lines must be a non-repeating set of consecutive digits, in any order.
• Sum Lines: The sum of the digits on a line is the same within each box the line is in. Lines that exist in a single box may be any sum.
