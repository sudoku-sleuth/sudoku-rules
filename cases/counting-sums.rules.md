---
format: open-rules
title: Counting Sums
setter: Meggen033
source: https://sudokupad.app/6njgp40d4p
case: https://sudoku-sleuth.com/cases/counting-sums
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
renban-1: renban r4c5-r3c4-r3c5
renban-2: renban r8c5-r7c5-r6c6-r5c7-r5c8
renban-3: renban r5c4-r5c3-r4c3-r3c3-r2c3-r2c4-r1c4
renban-4: renban r1c5-r1c6-r2c7-r3c8-r4c9-r5c9
renban-5: renban r9c5-r9c4-r8c3-r7c2-r6c1-r5c1
renban-6: renban r8c6-r7c6-r6c7-r6c8
renban-7: renban r5c5-r6c5
renban-8: renban r1c9-r1c8-r2c8
```

• Normal Sudoku rules apply.
• Lines are both Renban and Region Sum Lines.
• Renban: Digits placed on lines must be a non-repeating set of consecutive digits, in any order.
• Region Sum Lines: Box borders divide the line into segments with the same sum.
• Lines that do not cross box borders are normal Renban lines.
