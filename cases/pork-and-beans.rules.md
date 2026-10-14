---
format: open-rules
title: Pork and Beans
setter: Tingo
source: https://tinyurl.com/porkandbeanssudoku
case: https://sudoku-sleuth.com/cases/pork-and-beans
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6e6322fc4e5d93a9c344d9148d1f3aae
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r5c2 white
kropki-2: kropki r2c8-r3c8 white
kropki-3: kropki r6c1-r7c1 black
kropki-4: kropki r6c2-r7c2 black
kropki-5: kropki r6c3-r7c3 black
kropki-6: kropki r6c4-r7c4 black
kropki-7: kropki r4c5-r4c6 black
kropki-8: kropki r3c5-r3c6 black
kropki-9: kropki r1c8-r1c9 black
kropki-10: kropki r1c9-r2c9 black
kropki-11: kropki r5c7-r6c7 black
kropki-12: kropki r5c8-r6c8 black
kropki-13: kropki r8c8-r8c9 black
kropki-14: kropki r9c7-r9c8 black
kropki-15: kropki r7c2-r8c2 black
kropki-16: kropki r8c2-r8c3 black
kropki-17: kropki r4c1-r4c2 black
kropki-18: kropki r2c1-r2c2 black
kropki-19: kropki r1c3-r2c3 black
renban-1: renban r6c1-r6c2-r6c3-r6c4
renban-2: renban r3c6-r4c6-r5c6-r6c6-r7c6
renban-3: renban r6c7-r6c8-r6c9
renban-4: renban r8c8-r9c7
renban-5: renban r4c1-r3c1-r2c1
renban-6: renban r1c3-r1c4-r1c5
```

Normal Sudoku rules apply.
Pink lines (pork strips) are renban lines. All digits along a line must be consecutive in any order. 
Cells joined by white dots must be consecutive in value. Cells joined by black dots must be in a ratio of 2:1. Not all dots (beans) are given.
