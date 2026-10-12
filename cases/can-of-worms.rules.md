---
format: open-rules
title: Can of Worms
setter: Meggen033
source: https://sudokupad.app/vwd7v6gu78
case: https://sudoku-sleuth.com/cases/can-of-worms
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r9c4-r9c5 colour "white"
kropki-3: kropki r8c6-r9c6 colour "white"
renban-1: renban r3c3-r2c3-r1c4-r1c5-r1c6-r2c7-r3c7
renban-2: renban r5c8-r4c8-r3c8-r2c9
renban-3: renban r6c7-r6c8-r7c9-r8c9-r9c9
renban-4: renban r7c7-r8c7-r9c6-r9c5-r9c4-r8c3-r7c3
renban-5: renban r8c1-r7c2-r6c2-r5c3-r5c4
renban-6: renban r5c2-r4c3-r3c4-r3c5-r4c5-r5c5
```

• Normal Sudoku rules apply.
• Lines are both Renban and Sum Lines.
• Renban: Digits placed on lines must be a non-repeating set of consecutive digits, in any order.
• Sum Lines: The sum of the digits on a line is the same within each box the line is in.
• Consecutive Pairs: Cells separated by a white dot must be consecutive. Not all white dots are given.
