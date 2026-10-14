---
format: open-rules
title: "Equality Cages 101: Introduction to Equality Cages"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/equality-cages-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=4 r3c8=7
exported: 69c6ac44214f4dd945092e75592ce4f9
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c2-r3c3
equality-cage-2: equality-cage r3c8-r3c9
equality-cage-3: equality-cage r1c1-r1c2-r2c1-r2c2
equality-cage-4: equality-cage r3c4-r3c5-r3c6-r3c7
equality-cage-5: equality-cage r8c3-r8c4-r9c2-r9c3
equality-cage-6: equality-cage r2c6-r2c7-r2c8-r2c9
equality-cage-7: equality-cage r7c7-r7c8-r8c7-r8c8
equality-cage-8: equality-cage r6c9-r7c9
equality-cage-9: equality-cage r4c4-r4c5-r5c5-r5c6
equality-cage-10: equality-cage r4c2-r4c3-r5c2-r5c3
kropki-1: kropki r8c1-r9c1 black
kropki-2: kropki r9c2-r9c3 black
kropki-3: kropki r7c6-r8c6 black
kropki-4: kropki r6c6-r6c7 black
kropki-5: kropki r4c1-r4c2 black
kropki-6: kropki r8c5-r9c5 black
kropki-7: kropki r8c6-r8c7 black
kropki-8: kropki r1c8-r1c9 white
kropki-9: kropki r1c6-r1c7 white
kropki-10: kropki r7c7-r7c8 white
kropki-11: kropki r8c1-r8c2 white
pair-1: pair r6c6-r7c6 sum 10
pair-2: pair r8c8-r8c9 sum 10
pair-3: pair r4c4-r4c5 sum 10
pair-4: pair r1c1-r2c1 sum 10
pair-5: pair r8c3-r9c3 sum 5
pair-6: pair r2c1-r2c2 sum 5
pair-7: pair r2c7-r2c8 sum 5
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.
