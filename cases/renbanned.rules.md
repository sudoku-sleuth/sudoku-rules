---
format: open-rules
title: Renbanned
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/tk3hkyxvo5
case: https://sudoku-sleuth.com/cases/renbanned
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=1 r1c5=2 r4c8=5
exported: cf20c4b490affdf2f02f1562f53b361e
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r7c2 white
kropki-2: kropki r7c5-r8c5 white
kropki-3: kropki r5c4-r5c5 white
kropki-4: kropki r5c6-r6c6 white
kropki-5: kropki r7c4-r8c4 white
kropki-6: kropki r8c4-r9c4 white
kropki-7: kropki r5c7-r6c7 white
kropki-8: kropki r6c9-r7c9 white
kropki-9: kropki r6c3-r6c4 white
kropki-10: kropki r5c1-r6c1 white
kropki-11: kropki r7c7-r8c7 white
kropki-12: kropki r2c3-r3c3 white
kropki-13: kropki r3c9-r4c9 white
kropki-14: kropki r3c5-r4c5 black
kropki-15: kropki r3c2-r4c2 black
kropki-16: kropki r6c8-r7c8 black
kropki-17: kropki r2c6-r2c7 black
kropki-18: kropki r6c3-r7c3 black
kropki-19: kropki r8c6-r8c7 black
renban-1: renban r2c1-r1c2-r2c3-r2c4-r1c5-r2c6-r2c7-r1c8-r2c9
renban-2: renban r3c1-r2c2-r3c3-r3c4-r2c5-r3c6-r3c7-r2c8-r3c9
renban-3: renban r5c1-r4c2-r5c3-r5c4-r4c5-r5c6-r5c7-r4c8-r5c9
renban-4: renban r6c1-r5c2-r6c3-r6c4-r5c5-r6c6-r6c7-r5c8-r6c9
renban-5: renban r8c1-r7c2-r8c3-r8c4-r7c5-r8c6-r8c7-r7c8-r8c9
renban-6: renban r9c1-r8c2-r9c3-r9c4-r8c5-r9c6-r9c7-r8c8-r9c9
```

**Sudoku, Renban, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
