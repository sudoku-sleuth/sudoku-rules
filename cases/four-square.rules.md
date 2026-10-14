---
format: open-rules
title: Four Square
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/havbq9bnk5
case: https://sudoku-sleuth.com/cases/four-square
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=1 r5c3=9 r5c7=7 r7c5=2
exported: 3db59de2c06ea074f71f17c88e07f38a
---

```rules
sudoku 9x9
kropki-1: kropki r4c1-r5c1 black
kropki-2: kropki r5c9-r6c9 black
kropki-3: kropki r7c4-r8c4 black
kropki-4: kropki r7c7-r8c7 black
kropki-5: kropki r2c3-r3c3 black
kropki-6: kropki r2c6-r3c6 black
kropki-7: kropki r1c4-r2c4 white
kropki-8: kropki r3c2-r3c3 white
kropki-9: kropki r3c7-r3c8 white
kropki-10: kropki r3c8-r4c8 white
kropki-11: kropki r7c7-r7c8 white
kropki-12: kropki r6c2-r7c2 white
kropki-13: kropki r7c2-r7c3 white
kropki-14: kropki r6c6-r6c7 white
renban-1: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-2: renban r1c7-r1c8-r1c9-r2c9-r3c9
renban-3: renban r7c9-r8c9-r9c9-r9c8-r9c7
renban-4: renban r7c1-r8c1-r9c1-r9c2-r9c3
renban-5: renban r2c3-r2c2-r3c2-r4c2-r5c2-r6c2
renban-6: renban r7c2-r8c2-r8c3-r8c4-r8c5-r8c6
renban-7: renban r8c7-r8c8-r7c8-r6c8-r5c8-r4c8
renban-8: renban r3c8-r2c8-r2c7-r2c6-r2c5-r2c4
renban-9: renban r3c7-r4c7-r4c6-r3c6
renban-10: renban r6c6-r7c6-r7c7-r6c7
renban-11: renban r6c3-r7c3-r7c4-r6c4
renban-12: renban r3c3-r4c3-r4c4-r3c4
```

- Normal sudoku rules apply. 
- Renban line: Digits along each Renban line must form a set of non-repeating consecutive digits in any order.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
