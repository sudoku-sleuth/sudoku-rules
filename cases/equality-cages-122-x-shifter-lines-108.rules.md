---
format: open-rules
title: "Equality Cages 122 x Shifter Lines 108: Vortex"
setter: gUBBLOR
source: https://sudokupad.app/1q5mfy7jrf
case: https://sudoku-sleuth.com/cases/equality-cages-122-x-shifter-lines-108
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0d95ef0466ff88dc11e24edc3ed6f877
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r4c5-r5c4-r5c5-r6c4
equality-cage-2: equality-cage r7c5-r7c6
equality-cage-3: equality-cage r5c1-r5c2
equality-cage-4: equality-cage r7c8-r7c9
equality-cage-5: equality-cage r1c3-r1c4
equality-cage-6: equality-cage r8c2-r9c2
equality-cage-7: equality-cage r2c8-r2c9-r3c7-r3c8
equality-cage-8: equality-cage r1c6-r1c7
equality-cage-9: equality-cage r7c2-r7c3
equality-cage-10: equality-cage r9c7-r9c8
equality-cage-11: equality-cage r9c4-r9c5
kropki-1: kropki r4c5-r5c5 black
kropki-2: kropki r6c5-r6c6 black
kropki-3: kropki r8c3-r8c4 black
kropki-4: kropki r2c9-r3c9 black
kropki-5: kropki r5c8-r6c8 white
kropki-6: kropki r4c2-r5c2 white
kropki-7: kropki r5c1-r6c1 white
shifter-line-1: shifter-line r5c5-r6c6-r7c6-r8c7
shifter-line-2: shifter-line r6c5-r6c4-r5c3-r5c2
shifter-line-3: shifter-line r4c5-r4c6-r5c7-r5c8
shifter-line-4: shifter-line r5c4-r4c4-r3c5-r3c6-r2c7-r1c7
shifter-line-5: shifter-line r4c3-r4c2-r3c2-r2c1
shifter-line-6: shifter-line r7c5-r8c4-r8c3-r9c2
shifter-line-7: shifter-line r6c7-r6c8-r7c9-r8c9
pair-1: pair r5c4-r6c4 sum 10
pair-2: pair r2c5-r2c6 sum 10
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.
