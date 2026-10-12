---
format: open-rules
title: youcancallmeMartha
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6yb0g8h8gh
case: https://sudoku-sleuth.com/cases/youcancallmemartha
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=8 r8c1=1 r9c5=4
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 colour "white"
kropki-2: kropki r4c3-r5c3 colour "white"
kropki-3: kropki r6c6-r6c7 colour "white"
kropki-4: kropki r7c3-r7c4 colour "white"
kropki-5: kropki r9c6-r9c7 colour "white"
kropki-6: kropki r4c1-r5c1 colour "white"
kropki-7: kropki r3c4-r3c5 colour "black"
kropki-8: kropki r3c5-r3c6 colour "black"
kropki-9: kropki r8c7-r8c8 colour "black"
kropki-10: kropki r7c2-r8c2 colour "black"
kropki-11: kropki r4c7-r4c8 colour "black"
kropki-12: kropki r8c4-r9c4 colour "black"
kropki-13: kropki r5c6-r6c6 colour "black"
kropki-14: kropki r3c1-r4c1 colour "black"
kropki-15: kropki r3c3-r4c3 colour "black"
kropki-16: kropki r8c6-r9c6 colour "black"
renban-1: renban r3c1-r2c1-r1c1-r2c2-r1c3-r2c3-r3c3
renban-2: renban r4c4-r3c4-r2c4-r2c5-r3c6-r4c6
renban-3: renban r5c7-r4c7-r3c7-r3c8-r3c9-r4c8-r5c9
renban-4: renban r7c2-r6c2-r5c2-r5c1-r5c3
renban-5: renban r8c4-r7c4-r6c4-r7c6-r7c5-r8c6-r6c6
renban-6: renban r9c7-r8c7-r7c7-r7c8-r8c9-r9c9
```

**Sudoku, Renban, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Kropki: Digits separated by a black dot are in a 2:1 ratio. Digits separated by a white dot are consecutive. Not all possible dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
