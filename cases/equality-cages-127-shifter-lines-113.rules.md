---
format: open-rules
title: "Equality Cages 127: Pairdoku"
setter: gUBBLOR
source: https://sudokupad.app/dcu69catng
case: https://sudoku-sleuth.com/cases/equality-cages-127-shifter-lines-113
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3d7df8f4080de7257d66a3e47ed8c856
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r4c2-r5c2
equality-cage-2: equality-cage r6c5-r7c5
equality-cage-3: equality-cage r1c6-r1c7-r2c6-r2c7
equality-cage-4: equality-cage r5c6-r5c7
equality-cage-5: equality-cage r8c4-r8c5
equality-cage-6: equality-cage r6c9-r7c9
equality-cage-7: equality-cage r2c2-r3c2
equality-cage-8: equality-cage r1c3-r2c3
kropki-1: kropki r4c2-r5c2 black
kropki-2: kropki r1c6-r2c6 black
kropki-3: kropki r8c9-r9c9 black
kropki-4: kropki r6c4-r7c4 black
kropki-5: kropki r7c8-r8c8 black
kropki-6: kropki r7c4-r7c5 white
kropki-7: kropki r2c6-r2c7 white
```

Must be solved in conjunction with Shifter Lines 113: Pairdoku!

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
