---
format: open-rules
title: Black Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4t2xc3pebe
case: https://sudoku-sleuth.com/cases/black-knight
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c6=7 r6c4=5
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r7c2-r7c3 colour "white"
kropki-2: kropki r3c7-r3c8 colour "white"
kropki-3: kropki r9c1-r9c2 colour "white"
kropki-4: kropki r1c1-r1c2 colour "black"
kropki-5: kropki r2c2-r2c3 colour "black"
kropki-6: kropki r3c1-r3c2 colour "black"
kropki-7: kropki r5c1-r5c2 colour "black"
kropki-8: kropki r4c2-r4c3 colour "black"
kropki-9: kropki r6c2-r6c3 colour "black"
kropki-10: kropki r9c7-r9c8 colour "black"
kropki-11: kropki r8c8-r8c9 colour "black"
kropki-12: kropki r7c7-r7c8 colour "black"
kropki-13: kropki r6c8-r6c9 colour "black"
kropki-14: kropki r5c7-r5c8 colour "black"
kropki-15: kropki r4c8-r4c9 colour "black"
kropki-16: kropki r2c5-r3c5 colour "black"
kropki-17: kropki r3c4-r3c5 colour "black"
kropki-18: kropki r2c5-r2c6 colour "black"
kropki-19: kropki r7c5-r7c6 colour "black"
```

- Normal Sudoku rules apply.

- Cells separated by a black dot have a 1:2 ratio. Cells separated by a white dot must be consecutive. Not all dots are necessarily given.

- Cells that are a knight's move apart (in chess) may not contain the same digit.
