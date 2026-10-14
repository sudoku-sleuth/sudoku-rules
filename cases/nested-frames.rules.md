---
format: open-rules
title: Nested Frames
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/j7cck6w7cx
case: https://sudoku-sleuth.com/cases/nested-frames
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c1=2 r4c4=8 r7c7=3
exported: fe90e78a53c61d88858d69a9bed1d10f
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r1c5 white
kropki-2: kropki r4c9-r5c9 white
kropki-3: kropki r8c7-r8c8 white
kropki-4: kropki r2c4-r3c4 black
kropki-5: kropki r7c6-r8c6 black
kropki-6: kropki r4c7-r4c8 black
kropki-7: kropki r7c9-r8c9 black
renban-1: renban r3c2-r2c2-r2c3
renban-2: renban r2c1-r1c1-r1c2
renban-3: renban r2c7-r2c8-r3c8
renban-4: renban r1c8-r1c9-r2c9
renban-5: renban r7c2-r8c2-r8c3
renban-6: renban r8c1-r9c1-r9c2
renban-7: renban r8c7-r8c8-r7c8
renban-8: renban r9c8-r9c9-r8c9
renban-9: renban r4c1-r5c1-r6c1
renban-10: renban r4c2-r5c2-r6c2
renban-11: renban r4c3-r5c3-r6c3
renban-12: renban r3c4-r3c5-r3c6
renban-13: renban r2c4-r2c5-r2c6
renban-14: renban r1c4-r1c5-r1c6
renban-15: renban r4c7-r5c7-r6c7
renban-16: renban r4c8-r5c8-r6c8
renban-17: renban r4c9-r5c9-r6c9
renban-18: renban r7c4-r7c5-r7c6
renban-19: renban r8c4-r8c5-r8c6
renban-20: renban r9c4-r9c5-r9c6
renban-21: renban r5c4-r6c4-r6c5
renban-22: renban r4c5-r5c5-r5c6
```

**Sudoku, Renban, Kropki**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Renban Lines: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
