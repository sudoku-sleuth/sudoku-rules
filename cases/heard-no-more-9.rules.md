---
format: open-rules
title: Heard No More 9
setter: The Bard
source: https://sudokupad.app/7s7lrupysb
case: https://sudoku-sleuth.com/cases/heard-no-more-9
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r8c5-r9c5 colour "black"
whispers-1: whispers r1c1-r2c1-r2c2-r3c2 gap 5
whispers-2: whispers r1c2-r1c3 gap 5
whispers-3: whispers r2c3-r2c4-r2c5-r2c6-r1c6-r1c7-r1c8 gap 5
whispers-4: whispers r2c4-r3c4 gap 5
whispers-5: whispers r3c5-r2c5-r1c5-r1c6 gap 5
whispers-6: whispers r1c7-r2c7-r3c7-r3c8-r4c8-r4c9-r5c9-r6c9-r6c8-r7c8-r8c8-r9c8 gap 5
whispers-7: whispers r3c7-r3c6 gap 5
whispers-8: whispers r3c8-r2c8 gap 5
whispers-9: whispers r8c8-r8c7-r7c7-r7c6-r8c6-r8c7 gap 5
whispers-10: whispers r7c6-r6c6-r6c5-r6c4-r5c4-r4c4 gap 5
whispers-11: whispers r6c4-r6c3-r5c3-r5c4 gap 5
whispers-12: whispers r5c3-r4c3-r4c2-r4c1-r5c1 gap 5
whispers-13: whispers r4c1-r3c1 gap 5
whispers-14: whispers r7c9-r8c9 gap 5
whispers-15: whispers r4c5-r5c5 gap 5
whispers-16: whispers r8c2-r7c2-r7c3-r8c3-r8c4-r7c4-r7c3 gap 5
whispers-17: whispers r9c3-r9c4 gap 5
negative relations [{"op":"at-least","value":5}] except [["r1c1","r2c1"],["r2c1","r2c2"],["r2c2","r3c2"],["r1c2","r1c3"],["r2c3","r2c4"],["r2c4","r2c5"],["r2c5","r2c6"],["r2c6","r1c6"],["r1c6","r1c7"],["r1c7","r1c8"],["r2c4","r3c4"],["r3c5","r2c5"],["r2c5","r1c5"],["r1c5","r1c6"],["r1c7","r2c7"],["r2c7","r3c7"],["r3c7","r3c8"],["r3c8","r4c8"],["r4c8","r4c9"],["r4c9","r5c9"],["r5c9","r6c9"],["r6c9","r6c8"],["r6c8","r7c8"],["r7c8","r8c8"],["r8c8","r9c8"],["r3c7","r3c6"],["r3c8","r2c8"],["r8c8","r8c7"],["r8c7","r7c7"],["r7c7","r7c6"],["r7c6","r8c6"],["r8c6","r8c7"],["r7c6","r6c6"],["r6c6","r6c5"],["r6c5","r6c4"],["r6c4","r5c4"],["r5c4","r4c4"],["r6c4","r6c3"],["r6c3","r5c3"],["r5c3","r5c4"],["r5c3","r4c3"],["r4c3","r4c2"],["r4c2","r4c1"],["r4c1","r5c1"],["r4c1","r3c1"],["r7c9","r8c9"],["r4c5","r5c5"],["r8c2","r7c2"],["r7c2","r7c3"],["r7c3","r8c3"],["r8c3","r8c4"],["r8c4","r7c4"],["r7c4","r7c3"],["r9c3","r9c4"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)

Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
