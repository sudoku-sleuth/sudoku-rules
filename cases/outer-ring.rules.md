---
format: open-rules
title: Outer Ring
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/m0ns2pidnh
case: https://sudoku-sleuth.com/cases/outer-ring
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4b31d82cd4977a9e6b0f7cf27776e806
---

```rules
sudoku 9x9
outside-1: outside r1c1-r1c2-r1c3 digits [1,2]
outside-2: outside r1c9-r2c9-r3c9 digits [1,2]
outside-3: outside r6c9-r6c8-r6c7 digits [1,2]
outside-4: outside r9c3-r8c3-r7c3 digits [1,2]
outside-5: outside r1c3-r2c3-r3c3 digits [3,4]
outside-6: outside r4c1-r4c2-r4c3 digits [3]
outside-7: outside r5c1-r5c2-r5c3 digits [4]
outside-8: outside r4c9-r4c8-r4c7 digits [4]
outside-9: outside r5c9-r5c8-r5c7 digits [3]
outside-10: outside r9c8-r8c8-r7c8 digits [3,4]
outside-11: outside r7c1-r7c2-r7c3 digits [5,6]
outside-12: outside r9c9-r9c8-r9c7 digits [5]
outside-13: outside r1c7-r2c7-r3c7 digits [5]
outside-14: outside r1c8-r2c8-r3c8 digits [6]
outside-15: outside r9c1-r9c2-r9c3 digits [2,8]
outside-16: outside r7c9-r7c8-r7c7 digits [1,9]
outside-17: outside r1c6-r2c6-r3c6 digits [2,7]
outside-18: outside r3c1-r3c2-r3c3 digits [7,8,9]
outside-19: outside r2c9-r2c8-r2c7 digits [1,3]
outside-20: outside r9c5-r8c5-r7c5 digits [6,8]
outside-21: outside r1c4-r2c4-r3c4 digits [4]
outside-22: outside r9c4-r8c4-r7c4 digits [5,7]
outside-23: outside r8c9-r8c8-r8c7 digits [2,6]
outside-24: outside r8c1-r8c2-r8c3 digits [1,4,7]
outside-25: outside r9c1-r8c1-r7c1 digits [7,8]
outside-26: outside r1c1-r2c1-r3c1 digits [5]
outside-27: outside r1c2-r2c2-r3c2 digits [8]
outside-28: outside r9c7-r8c7-r7c7 digits [8]
```

**Sudoku, Outside Clues**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Outside Clues: Digits outside the grid must appear in one of the first three cells of the row or column from the position of the clue.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
