---
format: open-rules
title: "Shifter Lines 109: Between the Shifter Lines"
setter: gUBBLOR
source: https://sudokupad.app/3znqrou0so
case: https://sudoku-sleuth.com/cases/shifter-lines-109
library: https://rules.sudoku-sleuth.com/
status: read
exported: a891ca66de3e9298525772386b2be18c
---

```rules
sudoku 9x9
kropki r7c6-r8c6 black
shifter-line-1: shifter-line r5c9-r6c9-r7c8-r8c7-r8c6-r7c6-r6c6-r6c5-r7c4-r8c3-r7c2-r6c2-r5c3-r4c4-r5c4
shifter-line-2: shifter-line r5c5-r4c5-r3c5-r2c4-r3c3-r3c2-r4c1
shifter-line-3: shifter-line r4c7-r4c8-r3c8-r2c9
between-1: between r1c4-r2c4 ends ["r1c3","r2c3"]
between-2: between r1c5-r1c6 ends ["r2c6","r1c7"]
between-3: between r9c2 ends ["r9c3","r9c1"]
between-4: between r8c9 ends ["r9c9","r8c8"]
between-5: between r6c9-r7c8-r8c7-r8c6-r7c6-r6c6-r6c5-r7c4-r8c3-r7c2-r6c2-r5c3-r4c4 ends ["r5c9","r5c4"]
between-6: between r5c5-r4c5 ends ["r5c4","r3c6"]
between-7: between r4c7-r4c8 ends ["r3c6","r5c9"]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Between lines: Cells along lines between two filled circles must have values between those in the circles. Digits may repeat on between lines.
