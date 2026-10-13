---
fog:
  initiallyLit:
    - 18
    - 19
format: open-rules
title: "Shifter Lines 104: Shift your foglights on"
setter: gUBBLOR and EFlatMinor
source: ""
case: https://sudoku-sleuth.com/cases/shifter-lines-104
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 colour "black"
kropki-2: kropki r3c1-r4c1 colour "black"
kropki-3: kropki r3c8-r4c8 colour "black"
kropki-4: kropki r6c9-r7c9 colour "black"
kropki-5: kropki r2c2-r3c2 colour "black"
kropki-6: kropki r8c2-r9c2 colour "black"
kropki-7: kropki r3c2-r3c3 colour "white"
kropki-8: kropki r1c3-r2c3 colour "white"
kropki-9: kropki r1c4-r1c5 colour "white"
kropki-10: kropki r5c8-r6c8 colour "white"
kropki-11: kropki r6c7-r7c7 colour "white"
shifter-line-1: shifter-line r2c1-r3c1-r4c1
shifter-line-2: shifter-line r2c5-r2c4-r2c3-r3c4-r3c5
shifter-line-3: shifter-line r2c7-r3c6-r3c7
shifter-line-4: shifter-line r2c8-r3c8-r4c8
shifter-line-5: shifter-line r3c9-r4c9
shifter-line-6: shifter-line r5c9-r6c9-r7c9
shifter-line-7: shifter-line r4c4-r5c3-r5c4-r6c5
shifter-line-8: shifter-line r5c2-r6c2-r7c3
shifter-line-9: shifter-line r8c6-r8c7-r9c7
shifter-line-10: shifter-line r6c3-r6c4
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r1c4-r2c4 sum 10
pair-3: pair r4c9-r5c9 sum 10
pair-4: pair r8c6-r8c7 sum 10
pair-5: pair r4c4-r4c5 sum 10
pair-6: pair r5c2-r5c3 sum 10
pair-7: pair r6c1-r7c1 sum 10
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Fog of war: The grid is covered in fog. Placing correct digits will clear the fog from the surrounding cells.
