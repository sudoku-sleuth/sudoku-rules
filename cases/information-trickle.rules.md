---
format: open-rules
title: Information Trickle
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/x03vcirmd6
case: https://sudoku-sleuth.com/cases/information-trickle
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c3=1
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [7]
quadruple-2: quadruple r2c2-r2c3-r3c2-r3c3 digits [8]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [8]
quadruple-4: quadruple r7c7-r7c8-r8c7-r8c8 digits [9]
quadruple-5: quadruple r2c7-r2c8-r3c7-r3c8 digits [7]
quadruple-6: quadruple r1c8-r1c9-r2c8-r2c9 digits [9]
quadruple-7: quadruple r7c2-r7c3-r8c2-r8c3 digits [7]
quadruple-8: quadruple r8c1-r8c2-r9c1-r9c2 digits [9]
quadruple-9: quadruple r6c3-r6c4-r7c3-r7c4 digits [3]
quadruple-10: quadruple r3c3-r3c4-r4c3-r4c4 digits [4]
quadruple-11: quadruple r3c6-r3c7-r4c6-r4c7 digits [6]
quadruple-12: quadruple r6c6-r6c7-r7c6-r7c7 digits [2]
quadruple-13: quadruple r5c7-r5c8-r6c7-r6c8 digits [6]
quadruple-14: quadruple r4c8-r4c9-r5c8-r5c9 digits [4]
quadruple-15: quadruple r4c2-r4c3-r5c2-r5c3 digits [1]
quadruple-16: quadruple r5c1-r5c2-r6c1-r6c2 digits [2]
quadruple-17: quadruple r2c5-r2c6-r3c5-r3c6 digits [3]
quadruple-18: quadruple r1c4-r1c5-r2c4-r2c5 digits [5]
quadruple-19: quadruple r7c5-r7c6-r8c5-r8c6 digits [5]
quadruple-20: quadruple r8c4-r8c5-r9c4-r9c5 digits [3]
outside-1: outside r1c1-r1c2-r1c3 digits [1]
outside-2: outside r2c1-r2c2-r2c3 digits [2]
outside-3: outside r3c1-r3c2-r3c3 digits [3]
outside-4: outside r1c1-r2c1-r3c1 digits [4]
outside-5: outside r1c2-r2c2-r3c2 digits [5]
outside-6: outside r1c3-r2c3-r3c3 digits [6]
outside-7: outside r9c7-r8c7-r7c7 digits [1]
outside-8: outside r9c8-r8c8-r7c8 digits [2]
outside-9: outside r9c9-r8c9-r7c9 digits [3]
outside-10: outside r7c9-r7c8-r7c7 digits [4]
outside-11: outside r8c9-r8c8-r8c7 digits [5]
outside-12: outside r9c9-r9c8-r9c7 digits [6]
outside-13: outside r4c1-r4c2-r4c3 digits [4]
outside-14: outside r5c1-r5c2-r5c3 digits [5]
outside-15: outside r6c1-r6c2-r6c3 digits [6]
outside-16: outside r1c4-r2c4-r3c4 digits [7]
outside-17: outside r1c5-r2c5-r3c5 digits [8]
outside-18: outside r1c6-r2c6-r3c6 digits [9]
outside-19: outside r4c9-r4c8-r4c7 digits [1]
outside-20: outside r5c9-r5c8-r5c7 digits [2]
outside-21: outside r6c9-r6c8-r6c7 digits [3]
outside-22: outside r9c4-r8c4-r7c4 digits [4]
outside-23: outside r9c5-r8c5-r7c5 digits [5]
outside-24: outside r9c6-r8c6-r7c6 digits [6]
```

**Sudoku, Outside Clues, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Outside Clues: Digits outside the grid must appear in one of the first three cells of the row or column from the position of the clue.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
