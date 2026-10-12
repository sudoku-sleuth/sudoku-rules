---
format: open-rules
title: Pushy Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/87evwyjdig
case: https://sudoku-sleuth.com/cases/pushy-dots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 colour "black"
kropki-2: kropki r4c1-r5c1 colour "black"
kropki-3: kropki r5c1-r6c1 colour "black"
kropki-4: kropki r6c9-r7c9 colour "black"
kropki-5: kropki r5c9-r6c9 colour "black"
kropki-6: kropki r4c9-r5c9 colour "black"
kropki-7: kropki r5c4-r5c5 colour "black"
kropki-8: kropki r2c4-r3c4 colour "black"
kropki-9: kropki r7c4-r8c4 colour "black"
kropki-10: kropki r8c2-r9c2 colour "black"
kropki-11: kropki r7c7-r7c8 colour "black"
kropki-12: kropki r8c7-r8c8 colour "black"
kropki-13: kropki r1c9-r2c9 colour "black"
kropki-14: kropki r5c3-r5c4 colour "white"
kropki-15: kropki r3c4-r4c4 colour "white"
kropki-16: kropki r8c4-r9c4 colour "white"
kropki-17: kropki r9c4-r9c5 colour "white"
kropki-18: kropki r3c1-r3c2 colour "white"
kropki-19: kropki r2c2-r3c2 colour "white"
kropki-20: kropki r4c3-r4c4 colour "white"
kropki-21: kropki r6c7-r7c7 colour "white"
kropki-22: kropki r7c2-r7c3 colour "white"
kropki-23: kropki r4c2-r4c3 colour "white"
kropki-24: kropki r5c8-r6c8 colour "white"
kropki-25: kropki r5c5-r6c5 colour "white"
kropki-26: kropki r1c8-r1c9 colour "white"
kropki-27: kropki r7c6-r8c6 colour "white"
```

**Sudoku, Kropki pairs**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
-Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
