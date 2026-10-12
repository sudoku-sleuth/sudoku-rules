---
format: open-rules
title: Heard No More 13
setter: The Bard
source: https://sudokupad.app/m0u5eecvvc
case: https://sudoku-sleuth.com/cases/heard-no-more-13
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r7c4-r8c4 colour "black"
whispers-1: whispers r1c4-r2c4-r3c4-r4c4-r5c4 gap 5
whispers-2: whispers r4c5-r5c5-r6c5-r7c5 gap 5
whispers-3: whispers r6c5-r6c6-r5c6 gap 5
whispers-4: whispers r8c7-r7c7-r6c7-r5c7-r4c7-r3c7 gap 5
whispers-5: whispers r5c8-r4c8-r3c8-r2c8-r1c8-r1c9 gap 5
whispers-6: whispers r5c3-r6c3-r7c3-r8c3 gap 5
whispers-7: whispers r8c1-r7c1-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 gap 5
whispers-8: whispers r7c1-r6c1-r6c2 gap 5
whispers-9: whispers r4c6-r3c6-r2c6 gap 5
whispers-10: whispers r8c5-r9c5 gap 5
whispers-11: whispers r8c9-r9c9 gap 5
whispers-12: whispers r8c6-r9c6 gap 5
negative relations [{"op":"at-least","value":5}] except [["r1c4","r2c4"],["r2c4","r3c4"],["r3c4","r4c4"],["r4c4","r5c4"],["r4c5","r5c5"],["r5c5","r6c5"],["r6c5","r7c5"],["r6c5","r6c6"],["r6c6","r5c6"],["r8c7","r7c7"],["r7c7","r6c7"],["r6c7","r5c7"],["r5c7","r4c7"],["r4c7","r3c7"],["r5c8","r4c8"],["r4c8","r3c8"],["r3c8","r2c8"],["r2c8","r1c8"],["r1c8","r1c9"],["r5c3","r6c3"],["r6c3","r7c3"],["r7c3","r8c3"],["r8c1","r7c1"],["r7c1","r7c2"],["r7c2","r6c2"],["r6c2","r5c2"],["r5c2","r4c2"],["r4c2","r3c2"],["r3c2","r2c2"],["r2c2","r1c2"],["r7c1","r6c1"],["r6c1","r6c2"],["r4c6","r3c6"],["r3c6","r2c6"],["r8c5","r9c5"],["r8c9","r9c9"],["r8c6","r9c6"]]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)

Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
