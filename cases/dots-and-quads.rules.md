---
format: open-rules
title: Dots And Quads
setter: Jobo
source: https://sudokupad.app/tpr9ed1kmt
case: https://sudoku-sleuth.com/cases/dots-and-quads
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3e1df899277e8e2f7877b3cb202e44c5
---

```rules
sudoku 9x9
kropki-1: kropki r2c9-r3c9 white
kropki-2: kropki r3c8-r3c9 white
kropki-3: kropki r3c8-r4c8 white
kropki-4: kropki r4c7-r4c8 white
kropki-5: kropki r4c7-r5c7 white
kropki-6: kropki r5c6-r5c7 white
kropki-7: kropki r5c6-r6c6 white
kropki-8: kropki r6c5-r6c6 white
kropki-9: kropki r6c5-r7c5 white
kropki-10: kropki r7c4-r7c5 white
kropki-11: kropki r7c4-r8c4 white
kropki-12: kropki r8c3-r8c4 white
kropki-13: kropki r8c3-r9c3 white
kropki-14: kropki r9c2-r9c3 white
kropki-15: kropki r7c1-r8c1 black
kropki-16: kropki r7c1-r7c2 black
kropki-17: kropki r6c2-r7c2 black
kropki-18: kropki r6c2-r6c3 black
kropki-19: kropki r5c3-r6c3 black
kropki-20: kropki r5c3-r5c4 black
kropki-21: kropki r4c4-r5c4 black
kropki-22: kropki r4c4-r4c5 black
kropki-23: kropki r3c5-r4c5 black
kropki-24: kropki r3c5-r3c6 black
kropki-25: kropki r2c6-r3c6 black
kropki-26: kropki r2c6-r2c7 black
kropki-27: kropki r1c7-r2c7 black
kropki-28: kropki r1c7-r1c8 black
quadruple-1: quadruple r7c2-r7c3-r8c2-r8c3 digits [6]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [7]
quadruple-3: quadruple r2c7-r2c8-r3c7-r3c8 digits [8]
quadruple-4: quadruple r6c6-r6c7-r7c6-r7c7 digits [9]
```

Normal sudoku rules apply.

Digits in a quadruple clue must appear at least once in the four surrounding cells.

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
