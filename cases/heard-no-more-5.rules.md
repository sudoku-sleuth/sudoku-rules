---
format: open-rules
title: Heard No More 5
setter: The Bard
source: https://sudokupad.app/8g8d1vh8qo
case: https://sudoku-sleuth.com/cases/heard-no-more-5
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r4c4 colour "white"
kropki-2: kropki r3c6-r3c7 colour "white"
whispers-1: whispers r4c3-r5c3-r6c3 gap 5
whispers-2: whispers r3c2-r4c2-r5c2-r6c2-r7c2 gap 5
whispers-3: whispers r4c7-r5c7-r6c7 gap 5
whispers-4: whispers r3c8-r4c8-r5c8-r6c8-r7c8 gap 5
whispers-5: whispers r2c4-r2c5-r2c6 gap 5
whispers-6: whispers r2c9-r3c9 gap 5
whispers-7: whispers r7c9-r8c9 gap 5
whispers-8: whispers r7c1-r8c1 gap 5
whispers-9: whispers r4c6-r4c5-r4c4 gap 5
whispers-10: whispers r3c5-r4c5 gap 5
whispers-11: whispers r5c6-r5c7 gap 5
whispers-12: whispers r6c4-r6c3 gap 5
whispers-13: whispers r9c4-r8c4-r8c3 gap 5
whispers-14: whispers r3c4-r2c4 gap 5
whispers-15: whispers r6c6-r6c7 gap 5
whispers-16: whispers r7c5-r8c5 gap 5
whispers-17: whispers r2c7-r1c7 gap 5
whispers-18: whispers r3c1-r2c1 gap 5
whispers-19: whispers r9c7-r9c6-r8c6-r8c5-r8c4 gap 5
whispers-20: whispers r1c1-r2c1 gap 5
whispers-21: whispers r1c8-r2c8 gap 5
whispers-22: whispers r3c6-r4c6 gap 5
whispers-23: whispers r5c6-r6c6 gap 5
negative relations [{"op":"at-least","value":5}] except [["r4c3","r5c3"],["r5c3","r6c3"],["r3c2","r4c2"],["r4c2","r5c2"],["r5c2","r6c2"],["r6c2","r7c2"],["r4c7","r5c7"],["r5c7","r6c7"],["r3c8","r4c8"],["r4c8","r5c8"],["r5c8","r6c8"],["r6c8","r7c8"],["r2c4","r2c5"],["r2c5","r2c6"],["r2c9","r3c9"],["r7c9","r8c9"],["r7c1","r8c1"],["r4c6","r4c5"],["r4c5","r4c4"],["r3c5","r4c5"],["r5c6","r5c7"],["r6c4","r6c3"],["r9c4","r8c4"],["r8c4","r8c3"],["r3c4","r2c4"],["r6c6","r6c7"],["r7c5","r8c5"],["r2c7","r1c7"],["r3c1","r2c1"],["r9c7","r9c6"],["r9c6","r8c6"],["r8c6","r8c5"],["r8c5","r8c4"],["r1c1","r2c1"],["r1c8","r2c8"],["r3c6","r4c6"],["r5c6","r6c6"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)  
Kropki: digits with a white dot between them are consecutive.
