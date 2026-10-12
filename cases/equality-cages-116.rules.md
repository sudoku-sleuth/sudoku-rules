---
format: open-rules
title: "Equality Cages 116: Fluister tijd (Whisper time)"
setter: gUBBLOR
source: https://sudokupad.app/lunoa97u72
case: https://sudoku-sleuth.com/cases/equality-cages-116
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r5c6-r6c6
equality-cage-2: equality-cage r4c5-r5c5
equality-cage-3: equality-cage r5c4-r6c4-r6c5-r7c4
equality-cage-4: equality-cage r1c5-r2c5
equality-cage-5: equality-cage r1c3-r1c4
equality-cage-6: equality-cage r1c8-r1c9-r2c8-r2c9
equality-cage-7: equality-cage r3c2-r3c3-r4c2-r4c3
equality-cage-8: equality-cage r5c1-r6c1
equality-cage-9: equality-cage r8c9-r9c9
equality-cage-10: equality-cage r8c7-r8c8
kropki-1: kropki r5c6-r6c6 colour "black"
kropki-2: kropki r6c4-r6c5 colour "black"
kropki-3: kropki r1c9-r2c9 colour "black"
kropki-4: kropki r5c5-r5c6 colour "white"
kropki-5: kropki r1c1-r1c2 colour "white"
whispers-1: whispers r4c5-r5c5-r6c6-r6c5-r6c4-r7c4-r8c5-r9c5-r9c4 gap 4
whispers-2: whispers r1c9-r2c9-r2c8-r2c7-r3c7-r3c6-r2c5-r1c5-r1c4-r1c3-r1c2 gap 4
whispers-3: whispers r6c1-r7c1-r8c2-r9c2 gap 4
whispers-4: whispers r9c8-r8c9-r7c9-r7c8-r6c8-r5c8-r5c9 gap 4
whispers-5: whispers r4c2-r5c3-r5c4-r4c4-r3c3 gap 4 loop true
pair-1: pair r1c8-r2c8 relation {"op":"sum","value":10}
pair-2: pair r8c2-r8c3 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Dutch Whispers: Adjacent digits along each Dutch Whisper line must have a difference of at least 4. Digits may repeat on the line.
