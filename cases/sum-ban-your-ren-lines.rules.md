---
format: open-rules
title: Sum-Ban your Ren-Lines
setter: Meggen033
source: https://sudokupad.app/4y00jnd09d
case: https://sudoku-sleuth.com/cases/sum-ban-your-ren-lines
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r6c1-r6c2-r6c3-r5c4-r5c5-r5c6-r4c7-r4c8-r4c9
renban-2: renban r6c9-r6c8-r7c7-r8c7-r9c6-r8c5-r7c4
renban-3: renban r4c1-r4c2-r3c3-r2c3-r1c4-r2c5-r3c6
renban-4: renban r7c5-r7c6-r6c6-r6c5
renban-5: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-6: renban r9c7-r9c8-r9c9-r8c9-r7c9
renban-7: renban r2c6-r1c6-r1c7-r1c8
renban-8: renban r2c7-r2c8-r3c8
renban-9: renban r7c2-r8c2-r8c3
renban-10: renban r3c5-r3c4-r4c4-r4c5
```

• Normal Sudoku rules apply.
• Magenta lines are both Renban and Sum Lines. 
• Renban: Digits placed on lines must be a non-repeating set of consecutive digits, in any order.
• Sum Lines: Box borders divide the line into segments of equal sum.
