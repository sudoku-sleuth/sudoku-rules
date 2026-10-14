---
format: open-rules
title: "Shifter Lines 101: Introduction to Shifter Lines"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/shifter-lines
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c8=1
exported: 331de7471c8a05711c369c0c0a73acfb
---

```rules
sudoku 9x9
kropki-1: kropki r7c7-r7c8 black
kropki-2: kropki r2c3-r3c3 black
kropki-3: kropki r4c5-r4c6 black
kropki-4: kropki r4c6-r5c6 black
kropki-5: kropki r4c2-r5c2 black
kropki-6: kropki r1c5-r2c5 black
kropki-7: kropki r7c8-r8c8 white
kropki-8: kropki r6c6-r6c7 white
kropki-9: kropki r6c7-r6c8 white
kropki-10: kropki r7c5-r8c5 white
shifter-line-1: shifter-line r6c6-r5c6-r5c7-r6c7-r7c6-r8c6-r7c7-r7c8-r6c8-r5c8
shifter-line-2: shifter-line r2c5-r3c5-r4c5-r4c6-r4c7-r4c8-r3c8
shifter-line-3: shifter-line r8c8-r7c9-r6c9-r5c9
shifter-line-4: shifter-line r1c5-r1c4-r1c3-r2c3
shifter-line-5: shifter-line r2c1-r3c2-r4c2-r4c3-r4c4-r5c5
shifter-line-6: shifter-line r4c3-r3c4-r2c4
shifter-line-7: shifter-line r5c4-r6c4-r7c3-r7c2-r6c2-r5c3
shifter-line-8: shifter-line r9c2-r9c3-r8c4-r8c5
shifter-line-9: shifter-line r5c2-r6c1-r7c1
shifter-line-10: shifter-line r2c7-r2c6-r1c6-r1c7
pair-1: pair r6c2-r7c2 sum 10
pair-2: pair r7c6-r7c7 sum 5
pair-3: pair r5c2-r6c2 sum 5
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.
