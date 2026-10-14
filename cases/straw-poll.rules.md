---
format: open-rules
title: Straw Poll
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/straw-poll
case: https://sudoku-sleuth.com/cases/straw-poll
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c9=4 r5c4=3 r8c1=6
exported: 49af5ab066c807c6f98c201f9dd4a230
---

```rules
sudoku 9x9
kropki-1: kropki r7c2-r8c2 white
kropki-2: kropki r8c2-r9c2 white
kropki-3: kropki r8c3-r8c4 white
kropki-4: kropki r2c8-r3c8 white
kropki-5: kropki r1c8-r2c8 white
kropki-6: kropki r7c4-r7c5 white
kropki-7: kropki r7c5-r7c6 white
kropki-8: kropki r3c2-r4c2 white
kropki-9: kropki r4c2-r5c2 white
kropki-10: kropki r2c3-r2c4 white
kropki-11: kropki r2c4-r2c5 white
kropki-12: kropki r3c5-r3c6 white
kropki-13: kropki r3c6-r3c7 white
kropki-14: kropki r8c6-r8c7 white
kropki-15: kropki r8c7-r8c8 white
kropki-16: kropki r6c8-r7c8 white
kropki-17: kropki r5c8-r6c8 white
kropki-18: kropki r5c1-r6c1 white
kropki-19: kropki r6c1-r7c1 white
kropki-20: kropki r7c7-r7c8 white
kropki-21: kropki r5c9-r6c9 white
kropki-22: kropki r3c9-r4c9 white
kropki-23: kropki r7c9-r8c9 white
nabner-1: nabner r3c1-r2c2-r3c3 distinct true
nabner-2: nabner r2c3-r3c4-r2c5 distinct true
nabner-3: nabner r3c5-r2c6-r3c7 distinct true
nabner-4: nabner r3c9-r4c8-r5c9 distinct true
nabner-5: nabner r5c8-r6c9-r7c8 distinct true
nabner-6: nabner r3c2-r4c1-r5c2 distinct true
nabner-7: nabner r5c1-r6c2-r7c1 distinct true
nabner-8: nabner r7c4-r8c5-r7c6 distinct true
nabner-9: nabner r8c6-r7c7-r8c8-r7c9 distinct true
nabner-10: nabner r2c7-r3c8-r2c9-r1c8 distinct true
nabner-11: nabner r8c2-r7c3-r8c4 distinct true
nabner-12: nabner r7c2-r8c1-r9c2-r8c3 distinct true
```

**Sudoku, Nabner Lines, Consecutive Pairs**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Nabner line: No two digits along a Nabner line can be consecutive, regardless of their position on the line. Digits may not repeat on Nabner lines.
- Consecutive Pairs: Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
