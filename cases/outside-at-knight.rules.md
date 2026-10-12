---
format: open-rules
title: Outside at Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qkre9ai0oq
case: https://sudoku-sleuth.com/cases/outside-at-knight
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=5
---

```rules
sudoku 9x9
anti-knight
outside-1: outside r2c1-r2c2-r2c3 digits [1,2]
outside-2: outside r1c4-r2c4-r3c4 digits [1,2]
outside-3: outside r8c9-r8c8-r8c7 digits [8,9]
outside-4: outside r9c6-r8c6-r7c6 digits [8,9]
outside-5: outside r1c9-r1c8-r1c7 digits [3,4]
outside-6: outside r9c1-r9c2-r9c3 digits [6,7]
outside-7: outside r9c8-r8c8-r7c8 digits [4,5]
outside-8: outside r1c2-r2c2-r3c2 digits [5,6]
outside-9: outside r4c9-r4c8-r4c7 digits [7,8]
outside-10: outside r6c1-r6c2-r6c3 digits [2,3]
outside-11: outside r9c3-r8c3-r7c3 digits [8]
outside-12: outside r1c7-r2c7-r3c7 digits [2]
outside-13: outside r7c1-r7c2-r7c3 digits [4]
outside-14: outside r3c9-r3c8-r3c7 digits [6]
outside-15: outside r9c1-r8c1-r7c1 digits [2]
outside-16: outside r1c9-r2c9-r3c9 digits [8]
```

- Normal sudoku rules apply.
- Cells a chess knight's move apart must contain different digits.
- Digits outside the grid must appear in one of the first three cells of the row or column from the position of the clue.
