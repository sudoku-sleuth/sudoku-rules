---
format: open-rules
title: Heard No More 4
setter: The Bard
source: https://sudokupad.app/guszc4iajg
case: https://sudoku-sleuth.com/cases/heard-no-more-4
library: https://rules.sudoku-sleuth.com/
status: read
exported: 42be73b8ea9d0927d2f33c6890aa02db
---

```rules
sudoku 9x9
whispers-1: whispers r5c3-r5c4-r5c5-r5c6-r5c7 gap 5
whispers-2: whispers r8c7-r8c6-r8c5-r8c4-r8c3 gap 5
whispers-3: whispers r2c3-r2c4-r2c5-r2c6-r2c7 gap 5
whispers-4: whispers r4c7-r4c8-r5c8-r6c8-r6c7 gap 5
whispers-5: whispers r4c1-r4c2 gap 5
whispers-6: whispers r9c6-r8c6 gap 5
whispers-7: whispers r1c6-r2c6 gap 5
whispers-8: whispers r1c4-r2c4 gap 5
whispers-9: whispers r9c4-r8c4 gap 5
whispers-10: whispers r6c9-r7c9 gap 5
whispers-11: whispers r2c2-r2c3 gap 5
whispers-12: whispers r1c2-r1c3 gap 5
whispers-13: whispers r3c2-r4c2 gap 5
whispers-14: whispers r9c1-r9c2-r9c3 gap 5
whispers-15: whispers r3c9-r3c8-r4c8 gap 5
whispers-16: whispers r6c1-r6c2-r7c2-r7c3-r8c3 gap 5
whispers-17: whispers r7c8-r7c9 gap 5
pair-1: pair r8c8-r9c8 sum 10
pair-2: pair r1c7-r1c8 sum 10
pair-3: pair r9c4-r9c5 sum 5
negative relations [{"op":"at-least","value":5}] except [["r5c3","r5c4"],["r5c4","r5c5"],["r5c5","r5c6"],["r5c6","r5c7"],["r8c7","r8c6"],["r8c6","r8c5"],["r8c5","r8c4"],["r8c4","r8c3"],["r2c3","r2c4"],["r2c4","r2c5"],["r2c5","r2c6"],["r2c6","r2c7"],["r4c7","r4c8"],["r4c8","r5c8"],["r5c8","r6c8"],["r6c8","r6c7"],["r4c1","r4c2"],["r9c6","r8c6"],["r1c6","r2c6"],["r1c4","r2c4"],["r9c4","r8c4"],["r6c9","r7c9"],["r2c2","r2c3"],["r1c2","r1c3"],["r3c2","r4c2"],["r9c1","r9c2"],["r9c2","r9c3"],["r3c9","r3c8"],["r3c8","r4c8"],["r6c1","r6c2"],["r6c2","r7c2"],["r7c2","r7c3"],["r7c3","r8c3"],["r7c8","r7c9"]]
```

Heard No More 4
Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)  

XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
