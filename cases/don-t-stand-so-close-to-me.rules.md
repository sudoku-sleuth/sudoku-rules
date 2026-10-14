---
format: open-rules
title: Don't Stand So Close To Me
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/exm42d7xx0
case: https://sudoku-sleuth.com/cases/don-t-stand-so-close-to-me
library: https://rules.sudoku-sleuth.com/
status: read
exported: 17a247da14532a96c19b375acf40d994
---

```rules
sudoku 9x9
nabner-1: nabner r2c1-r1c2 distinct true
nabner-2: nabner r1c8-r2c9 distinct true
nabner-3: nabner r3c4-r4c4-r5c4 distinct true
nabner-4: nabner r3c5-r4c5-r5c5 distinct true
nabner-5: nabner r3c6-r4c6-r5c6 distinct true
nabner-6: nabner r1c3-r2c2-r3c1 distinct true
nabner-7: nabner r1c7-r2c8-r3c9 distinct true
nabner-8: nabner r4c1-r3c2-r2c3-r1c4 distinct true
nabner-9: nabner r1c6-r2c7-r3c8-r4c9 distinct true
nabner-10: nabner r6c1-r7c2-r8c3-r9c4 distinct true
nabner-11: nabner r9c6-r8c7-r7c8-r6c9 distinct true
nabner-12: nabner r9c7-r8c8-r7c9 distinct true
nabner-13: nabner r7c1-r8c2-r9c3 distinct true
nabner-14: nabner r8c1-r9c2 distinct true
nabner-15: nabner r9c8-r8c9 distinct true
nabner-16: nabner r6c5-r7c5-r8c5 distinct true
nabner-17: nabner r7c6-r6c6 distinct true
nabner-18: nabner r7c4-r6c4 distinct true
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [1,2]
quadruple-2: quadruple r1c7-r1c8-r2c7-r2c8 digits [1,2]
quadruple-3: quadruple r4c4-r4c5-r5c4-r5c5 digits [2]
quadruple-4: quadruple r8c2-r8c3-r9c2-r9c3 digits [8,9]
quadruple-5: quadruple r8c7-r8c8-r9c7-r9c8 digits [8,9]
quadruple-6: quadruple r7c1-r7c2-r8c1-r8c2 digits [6,7]
quadruple-7: quadruple r2c1-r2c2-r3c1-r3c2 digits [3,4]
quadruple-8: quadruple r2c8-r2c9-r3c8-r3c9 digits [3,4]
quadruple-9: quadruple r3c5-r3c6-r4c5-r4c6 digits [8]
quadruple-10: quadruple r5c5-r5c6-r6c5-r6c6 digits [8,9]
quadruple-11: quadruple r3c2-r3c3-r4c2-r4c3 digits [2]
quadruple-12: quadruple r4c6-r4c7-r5c6-r5c7 digits [5]
quadruple-13: quadruple r6c4-r6c5-r7c4-r7c5 digits [7]
quadruple-14: quadruple r7c8-r7c9-r8c8-r8c9 digits [6,7]
quadruple-15: quadruple r7c6-r7c7-r8c6-r8c7 digits [8]
quadruple-16: quadruple r6c7-r6c8-r7c7-r7c8 digits [1]
quadruple-17: quadruple r2c7-r2c8-r3c7-r3c8 digits [5]
```

**Sudoku, Nabner Lines, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Nabner line: No two digits along a Nabner line can be consecutive, regardless of their position on the line. Digits may not repeat on Nabner lines.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
