---
format: open-rules
title: Who knew?
setter: sujoyku
source: https://sudokupad.app/bkl8xd9iu6
case: https://sudoku-sleuth.com/cases/who-knew
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2-r1c3-r1c4-r1c5 gap 5
whispers-2: whispers r3c8-r4c9-r5c8-r6c9-r7c8 gap 5
whispers-3: whispers r8c2-r8c3-r7c4 gap 5
renban-1: renban r9c5-r9c6-r9c7-r9c8-r9c9
renban-2: renban r7c2-r6c1-r5c2-r4c1-r3c2
renban-3: renban r3c6-r2c7-r2c8
index-line-1: index-line r1c6-r1c7-r1c8-r1c9-r2c9-r3c9
index-line-2: index-line r9c4-r9c3-r9c2-r9c1-r8c1-r7c1
index-line-3: index-line r2c1-r2c2-r3c3-r2c4-r2c5
index-line-4: index-line r5c3-r6c4-r7c5-r7c6-r6c7-r6c8
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Index lines: Each turquoise line is an Index Line, i.e. the digit in the Nth cell along such a line (starting from the diamond) indicates the position along the line where the digit N appears. For example, if a diamond cell contains a 3, the third cell along that line must have a 1.

- German Whispers: Adjacent digits along a green line must differ by at least 5.

- Renban: Each purple line must contain a set of consecutive non-repeating digits in any order.
