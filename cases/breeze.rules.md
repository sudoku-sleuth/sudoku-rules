---
format: open-rules
title: Breeze
setter: Jobo
source: https://sudokupad.app/2kumnb1cbx
case: https://sudoku-sleuth.com/cases/breeze
library: https://rules.sudoku-sleuth.com/
status: read
exported: ce743a2be0cf51774874989c45f1156b
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r5c2 black
kropki-2: kropki r5c1-r6c1 black
kropki-3: kropki r7c2-r8c2 black
kropki-4: kropki r8c2-r8c3 black
kropki-5: kropki r6c8-r7c8 black
kropki-6: kropki r7c8-r7c9 black
kropki-7: kropki r5c8-r5c9 white
kropki-8: kropki r4c9-r5c9 white
kropki-9: kropki r2c8-r3c8 white
kropki-10: kropki r2c7-r2c8 white
kropki-11: kropki r3c1-r3c2 white
kropki-12: kropki r3c2-r4c2 white
renban-1: renban r1c1-r1c2-r1c3-r1c4-r1c5
renban-2: renban r2c2-r2c3-r2c4-r2c5-r2c6
renban-3: renban r3c3-r3c4-r3c5-r3c6-r3c7
renban-4: renban r4c4-r4c5-r4c6-r4c7-r4c8
renban-5: renban r5c7-r5c6-r5c5-r5c4-r5c3
renban-6: renban r6c6-r6c5-r6c4-r6c3-r6c2
renban-7: renban r7c3-r7c4-r7c5-r7c6-r7c7
renban-8: renban r8c4-r8c5-r8c6-r8c7-r8c8
renban-9: renban r9c5-r9c6-r9c7-r9c8-r9c9
```

Normal sudoku rules apply.

Purple lines contain a non-repeating set of consecutive digits in any order.

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
