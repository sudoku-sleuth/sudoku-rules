---
format: open-rules
title: One of These Things
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/one-of-these-things
case: https://sudoku-sleuth.com/cases/one-of-these-things
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=1
---

```rules
sudoku 9x9
kropki-1: kropki r2c7-r2c8 colour "white"
kropki-2: kropki r2c3-r3c3 colour "white"
kropki-3: kropki r5c1-r5c2 colour "white"
kropki-4: kropki r1c1-r2c1 colour "white"
kropki-5: kropki r2c8-r3c8 colour "white"
kropki-6: kropki r1c5-r2c5 colour "black"
kropki-7: kropki r5c8-r5c9 colour "black"
kropki-8: kropki r8c4-r9c4 colour "black"
kropki-9: kropki r1c2-r1c3 colour "black"
kropki-10: kropki r7c1-r8c1 colour "black"
kropki-11: kropki r9c7-r9c8 colour "black"
kropki-12: kropki r3c8-r4c8 colour "black"
renban-1: renban r5c1-r5c2-r5c3-r5c4-r4c4
renban-2: renban r1c5-r2c5-r3c5-r4c5-r4c6
renban-3: renban r5c9-r5c8-r5c7-r5c6-r6c6
renban-4: renban r6c5-r7c4-r8c4-r9c4-r9c3
renban-5: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-6: renban r1c7-r1c8-r1c9-r2c9-r3c9
renban-7: renban r9c7-r9c8-r9c9-r8c9-r7c9
renban-8: renban r9c2-r9c1-r8c1-r7c1
```

**Sudoku, Renban, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a THIN pink Renban line must form a set of non-repeating consecutive digits in some order.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
