---
format: open-rules
title: Green, Purple, Green
setter: sujoyku
source: https://sudokupad.app/3w5zw7etb4
case: https://sudoku-sleuth.com/cases/green-purple-green
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r9c1 colour "black"
kropki-2: kropki r7c3-r8c3 colour "black"
kropki-3: kropki r2c7-r3c7 colour "white"
kropki-4: kropki r1c9-r2c9 colour "white"
whispers-1: whispers r7c1-r7c2-r7c3 gap 5
whispers-2: whispers r9c1-r9c2-r9c3 gap 5
whispers-3: whispers r1c1-r2c1-r3c1 gap 5
whispers-4: whispers r1c2-r2c2-r3c2 gap 5
whispers-5: whispers r2c7-r2c8-r2c9 gap 5
whispers-6: whispers r3c7-r3c8-r3c9 gap 5
whispers-7: whispers r7c7-r8c7-r9c7 gap 5
whispers-8: whispers r7c9-r8c9-r9c9 gap 5
whispers-9: whispers r4c2-r5c1 gap 5
whispers-10: whispers r5c9-r6c8 gap 5
whispers-11: whispers r1c4-r2c4 gap 5
whispers-12: whispers r2c6-r3c6 gap 5
renban-1: renban r8c1-r8c2-r8c3
renban-2: renban r1c3-r2c3-r3c3
renban-3: renban r1c7-r1c8-r1c9
renban-4: renban r7c8-r8c8-r9c8
renban-5: renban r5c3-r6c2
renban-6: renban r4c8-r5c7
renban-7: renban r9c4-r9c5
renban-8: renban r7c5-r7c6
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.

- Renban: Each purple line must contain a set of consecutive non-repeating digits in any order.

- Kropki dots: Digits joined by a black dot have a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all dots are given.)
