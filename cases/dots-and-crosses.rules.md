---
format: open-rules
title: Dots and Crosses
setter: EPH
source: https://sudokupad.app/g1i1udd38g
case: https://sudoku-sleuth.com/cases/dots-and-crosses
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 colour "black"
kropki-2: kropki r8c3-r9c3 colour "black"
kropki-3: kropki r7c8-r7c9 colour "black"
kropki-4: kropki r1c7-r2c7 colour "black"
kropki-5: kropki r2c4-r2c5 colour "black"
kropki-6: kropki r2c5-r2c6 colour "black"
kropki-7: kropki r8c6-r9c6 colour "black"
kropki-8: kropki r3c2-r3c3 colour "white"
kropki-9: kropki r2c7-r3c7 colour "white"
kropki-10: kropki r7c7-r7c8 colour "white"
kropki-11: kropki r7c3-r8c3 colour "white"
kropki-12: kropki r2c2-r2c3 colour "white"
kropki-13: kropki r7c2-r8c2 colour "white"
kropki-14: kropki r8c8-r8c9 colour "white"
kropki-15: kropki r2c8-r3c8 colour "white"
kropki-16: kropki r8c5-r9c5 colour "white"
kropki-17: kropki r5c1-r5c2 colour "white"
kropki-18: kropki r5c9-r6c9 colour "white"
kropki-19: kropki r6c4-r6c5 colour "white"
renban-1: renban r3c1-r3c2-r3c3-r3c4-r5c3-r4c3-r2c3-r1c3
renban-2: renban r6c3-r7c3-r8c3-r9c3-r7c5-r7c4-r7c2-r7c1
renban-3: renban r7c6-r7c7-r7c8-r7c9-r9c7-r8c7-r6c7-r5c7
renban-4: renban r4c7-r3c7-r3c8-r3c9-r1c7-r2c7-r3c6-r3c5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Renban: each magenta cross must contain a non-repeating set of consecutive digits.

Kropki pairs: digits separated by a white dot must be consecutive; digits separated by a black dot must be in a 2:1 ratio.
