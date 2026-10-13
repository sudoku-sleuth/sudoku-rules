---
format: open-rules
title: "Equality Cages 103: Flüsterzeit (Whisper time)"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/equality-cages-4
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r9c7-r9c8
equality-cage-2: equality-cage r7c8-r7c9-r8c8-r8c9
equality-cage-3: equality-cage r8c1-r8c2-r8c3-r9c3
equality-cage-4: equality-cage r2c1-r2c2-r2c3-r2c4
equality-cage-5: equality-cage r4c5-r4c6
equality-cage-6: equality-cage r2c9-r3c9-r4c9-r5c9
kropki-1: kropki r9c7-r9c8 colour "black"
kropki-2: kropki r4c1-r5c1 colour "black"
kropki-3: kropki r1c3-r1c4 colour "black"
kropki-4: kropki r3c4-r4c4 colour "white"
whispers-1: whispers r9c7-r8c7-r7c7-r8c8-r7c8-r8c9-r7c9 gap 5
whispers-2: whispers r9c1-r8c2-r7c2-r7c3-r7c4-r8c4-r9c3-r9c4-r8c3 gap 5
whispers-3: whispers r3c1-r4c2-r3c3-r3c4-r2c3-r1c4 gap 5
whispers-4: whispers r2c6-r1c6-r2c7-r3c6-r3c7-r4c8-r5c7 gap 5
whispers-5: whispers r5c2-r6c3-r5c4-r5c3 gap 5 loop true
pair-1: pair r5c1-r6c1 sum 10
pair-2: pair r8c3-r8c4 sum 10
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

German Whispers: Adjacent digits along each German Whisper line must have a difference of at least 5. Digits may repeat on the line.
