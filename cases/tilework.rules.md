---
format: open-rules
title: Tilework
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r8qrnqsfwf
case: https://sudoku-sleuth.com/cases/tilework
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=5 r2c8=5 r3c6=9 r4c3=1 r6c7=8 r7c4=2 r8c2=4 r9c9=9
---

```rules
sudoku 9x9
kropki-1: kropki r1c5-r1c6 colour "white"
kropki-2: kropki r5c9-r6c9 colour "white"
kropki-3: kropki r9c4-r9c5 colour "white"
kropki-4: kropki r9c3-r9c4 colour "white"
kropki-5: kropki r6c9-r7c9 colour "white"
kropki-6: kropki r5c1-r6c1 colour "black"
kropki-7: kropki r4c9-r5c9 colour "black"
kropki-8: kropki r9c5-r9c6 colour "black"
kropki-9: kropki r1c4-r1c5 colour "black"
renban-1: renban r3c1-r2c1-r1c2-r1c3
renban-2: renban r1c7-r1c8-r2c9-r3c9
renban-3: renban r7c9-r8c9-r9c8-r9c7
renban-4: renban r9c3-r9c2-r8c1-r7c1
renban-5: renban r4c1-r4c2-r5c3-r6c2-r6c1
renban-6: renban r1c4-r2c4-r3c5-r2c6-r1c6
renban-7: renban r4c9-r4c8-r5c7-r6c8-r6c9
renban-8: renban r9c4-r8c4-r7c5-r8c6-r9c6
renban-9: renban r4c6-r4c5-r4c4-r5c4-r6c4-r6c5-r6c6-r5c6
renban-10: renban r3c7-r3c8-r2c8
renban-11: renban r3c3-r3c2-r2c2
renban-12: renban r7c3-r7c2-r8c2
renban-13: renban r7c7-r7c8-r8c8
```

**Standard Sudoku, Renban, Kropki (no negative)**

- Normal sudoku rules apply. 
- Renban line: Digits along each Renban line must form a set of non-repeating consecutive digits in any order.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
