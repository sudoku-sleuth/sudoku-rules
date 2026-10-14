---
format: open-rules
title: "Equality Cages 135: Locked out"
setter: gUBBLOR
source: https://sudokupad.app/n7uaq31zg8
case: https://sudoku-sleuth.com/cases/equality-cages-135-locked-out
library: https://rules.sudoku-sleuth.com/
status: read
exported: 70db27f3d7629838eb8b7d29f49c83a1
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r7c1-r7c2-r8c2-r8c3
equality-cage-2: equality-cage r7c6-r8c6
equality-cage-3: equality-cage r7c4-r7c5
equality-cage-4: equality-cage r4c5-r5c5
equality-cage-5: equality-cage r1c1-r2c1
equality-cage-6: equality-cage r5c8-r6c8
equality-cage-7: equality-cage r5c2-r5c3
equality-cage-8: equality-cage r4c7-r4c8
equality-cage-9: equality-cage r9c7-r9c8
equality-cage-10: equality-cage r4c2-r4c3
equality-cage-11: equality-cage r1c4-r2c3-r2c4-r3c4
kropki-1: kropki r7c1-r7c2 black
kropki-2: kropki r8c2-r9c2 black
lockout-1: lockout r2c1-r1c1-r1c2 ends ["r3c1","r1c3"] gap 4
lockout-2: lockout r6c8-r7c9 ends ["r5c9","r8c8"] gap 4
lockout-3: lockout r7c2-r8c2 ends ["r7c1","r8c3"] gap 4
lockout-4: lockout r8c4-r7c5 ends ["r8c3","r7c6"] gap 4
lockout-5: lockout r6c6-r5c5-r4c5 ends ["r7c6","r5c4"] gap 4
lockout-6: lockout r5c3-r6c2 ends ["r5c4","r7c1"] gap 4
lockout-7: lockout r2c6 ends ["r1c7","r3c6"] gap 4
lockout-8: lockout r4c7-r3c8 ends ["r3c6","r2c8"] gap 4
lockout-9: lockout cells [] ends ["r2c8","r1c7"] gap 4
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Lockout lines: Digits in the diamonds at the ends of a lockout line must differ by at least 4. Digits on a line must fall outside the range defined by their attached diamonds. Digits may repeat on the lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.
