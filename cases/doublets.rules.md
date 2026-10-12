---
format: open-rules
title: Doublets
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/y78hbp4tw5
case: https://sudoku-sleuth.com/cases/doublets
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r5c2 colour "black"
kropki-2: kropki r2c4-r2c5 colour "black"
kropki-3: kropki r8c6-r8c7 colour "black"
kropki-4: kropki r6c8-r7c8 colour "black"
kropki-5: kropki r6c1-r7c1 colour "black"
kropki-6: kropki r9c3-r9c4 colour "black"
kropki-7: kropki r1c7-r1c8 colour "black"
kropki-8: kropki r6c9-r7c9 colour "black"
kropki-9: kropki r3c1-r4c1 colour "black"
kropki-10: kropki r3c7-r4c7 colour "black"
kropki-11: kropki r4c3-r4c4 colour "black"
kropki-12: kropki r5c5-r6c5 colour "black"
kropki-13: kropki r2c3-r2c4 colour "black"
renban-1: renban r5c2-r4c2-r3c2-r3c3-r2c3-r2c4-r2c5
renban-2: renban r8c5-r8c6-r8c7-r7c7-r7c8-r6c8-r5c8
renban-3: renban r3c1-r2c1-r1c2-r1c3
renban-4: renban r9c7-r9c8-r8c9-r7c9
renban-5: renban r6c1-r7c1-r8c1-r9c1-r9c2-r9c3-r9c4
renban-6: renban r1c6-r1c7-r1c8-r1c9-r2c9-r3c9-r4c9
renban-7: renban r7c2-r6c3
```

**Sudoku, Renban, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban Lines: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
