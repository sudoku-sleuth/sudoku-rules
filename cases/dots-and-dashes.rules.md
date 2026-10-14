---
format: open-rules
title: Dots and Dashes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/82s2xq7aag
case: https://sudoku-sleuth.com/cases/dots-and-dashes
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c4=6
exported: a28b01f646020a2a3f9d965753dd1dd7
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 black
kropki-2: kropki r4c2-r5c2 black
kropki-3: kropki r2c5-r3c5 black
kropki-4: kropki r7c5-r8c5 black
kropki-5: kropki r5c8-r6c8 black
kropki-6: kropki r8c8-r9c8 black
kropki-7: kropki r6c2-r7c2 black
kropki-8: kropki r3c8-r4c8 black
kropki-9: kropki r4c1-r5c1 black
kropki-10: kropki r7c7-r8c7 black
renban-1: renban r1c1-r1c2
renban-2: renban r1c4-r1c5
renban-3: renban r1c7-r1c8
renban-4: renban r2c2-r2c3
renban-5: renban r2c5-r2c6
renban-6: renban r2c8-r2c9
renban-7: renban r4c8-r4c9
renban-8: renban r4c6-r4c5
renban-9: renban r4c2-r4c3
renban-10: renban r5c1-r5c2
renban-11: renban r5c4-r5c5
renban-12: renban r5c7-r5c8
renban-13: renban r7c1-r7c2
renban-14: renban r8c2-r8c3
renban-15: renban r8c5-r8c6
renban-16: renban r7c4-r7c5
renban-17: renban r7c7-r7c8
renban-18: renban r8c8-r8c9
renban-19: renban r3c1-r3c2
renban-20: renban r3c4-r3c5
renban-21: renban r3c7-r3c8
renban-22: renban r6c2-r6c3
renban-23: renban r6c5-r6c6
renban-24: renban r6c8-r6c9
renban-25: renban r9c1-r9c2
renban-26: renban r9c5-r9c4
renban-27: renban r9c7-r9c8
```

**Sudoku, Renban, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
