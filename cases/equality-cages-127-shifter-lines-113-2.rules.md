---
format: open-rules
title: "Shifter Lines 113: Pairdoku"
setter: gUBBLOR
source: https://sudokupad.app/xaqmjlq5rj
case: https://sudoku-sleuth.com/cases/equality-cages-127-shifter-lines-113-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r6c5 colour "black"
kropki-2: kropki r1c7-r1c8 colour "black"
kropki-3: kropki r3c1-r3c2 colour "white"
kropki-4: kropki r2c8-r2c9 colour "white"
shifter-line-1: shifter-line r4c2-r5c3-r5c4-r6c5
shifter-line-2: shifter-line r7c4-r8c3-r8c2
shifter-line-3: shifter-line r1c8-r1c7-r2c6-r3c6
shifter-line-4: shifter-line r5c7-r6c8-r7c8-r8c7
shifter-line-5: shifter-line r2c2-r3c3-r2c4
```

Must be solved in conjunction with Equality Cages 127: Pairdoku!

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
