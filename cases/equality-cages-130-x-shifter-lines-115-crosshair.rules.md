---
format: open-rules
title: "Equality Cages 130 x Shifter Lines 115: Crosshair"
setter: gUBBLOR
source: https://sudokupad.app/98101seep5
case: https://sudoku-sleuth.com/cases/equality-cages-130-x-shifter-lines-115-crosshair
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c3-r3c4-r4c3-r4c4
equality-cage-2: equality-cage r3c6-r3c7-r4c6-r4c7
equality-cage-3: equality-cage r6c6-r6c7-r7c6-r7c7
equality-cage-4: equality-cage r6c3-r6c4-r7c3-r7c4
equality-cage-5: equality-cage r9c2-r9c3
equality-cage-6: equality-cage r9c7-r9c8
equality-cage-7: equality-cage r1c7-r1c8
equality-cage-8: equality-cage r1c2-r1c3
kropki-1: kropki r6c3-r7c3 colour "black"
kropki-2: kropki r3c6-r4c6 colour "black"
kropki-3: kropki r3c3-r3c4 colour "black"
kropki-4: kropki r6c6-r6c7 colour "black"
kropki-5: kropki r6c1-r6c2 colour "black"
kropki-6: kropki r4c8-r4c9 colour "black"
kropki-7: kropki r5c3-r5c4 colour "white"
kropki-8: kropki r5c6-r5c7 colour "white"
kropki-9: kropki r2c5-r3c5 colour "white"
kropki-10: kropki r7c5-r8c5 colour "white"
kropki-11: kropki r1c8-r2c8 colour "white"
kropki-12: kropki r8c2-r9c2 colour "white"
shifter-line-1: shifter-line r8c6-r7c6-r7c7-r6c7-r6c8
shifter-line-2: shifter-line r4c2-r4c3-r3c3-r3c4-r2c4
shifter-line-3: shifter-line r6c2-r6c3-r7c3-r7c4-r8c4
shifter-line-4: shifter-line r2c6-r3c6-r3c7-r4c7-r4c8
shifter-line-5: shifter-line r3c5-r4c5
shifter-line-6: shifter-line r5c6-r5c7
shifter-line-7: shifter-line r6c5-r7c5
shifter-line-8: shifter-line r5c3-r5c4
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
