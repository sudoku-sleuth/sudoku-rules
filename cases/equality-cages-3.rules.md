---
format: open-rules
title: "Equality Cages 102: Renbanification"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/equality-cages-3
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1652a672f8f2647472875466cc41387e
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c8-r3c9
equality-cage-2: equality-cage r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
equality-cage-3: equality-cage r4c7-r4c8
equality-cage-4: equality-cage r7c7-r7c8-r8c7-r8c8-r8c9-r9c7
equality-cage-5: equality-cage r5c3-r6c2-r6c3-r7c2
equality-cage-6: equality-cage r1c3-r2c3-r2c4-r2c5
kropki-1: kropki r3c8-r3c9 black
kropki-2: kropki r3c9-r4c9 black
kropki-3: kropki r3c1-r4c1 black
kropki-4: kropki r7c9-r8c9 black
kropki-5: kropki r7c1-r7c2 black
kropki-6: kropki r7c7-r7c8 black
kropki-7: kropki r8c1-r8c2 black
kropki-8: kropki r1c9-r2c9 white
renban-1: renban r3c3-r3c2-r3c1
renban-2: renban r4c1-r4c2-r4c3
renban-3: renban r3c9-r4c9-r5c9-r6c9
renban-4: renban r3c8-r4c8-r5c8-r6c8
renban-5: renban r4c4-r5c5-r4c5-r5c6-r4c6-r3c7
renban-6: renban r7c1-r6c1-r6c2
renban-7: renban r2c4-r1c5-r2c5
renban-8: renban r8c5-r8c6-r7c6
pair-1: pair r3c3-r4c3 sum 10
pair-2: pair r8c9-r9c9 sum 10
pair-3: pair r5c6-r5c7 sum 10
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Renban: Digits along each renban line must be a set of consecutive digits in any order, and must not repeat.
