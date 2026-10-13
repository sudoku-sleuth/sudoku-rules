---
format: open-rules
title: Enter the Matrix
setter: The Bard
source: https://sudokupad.app/40qk3trip0
case: https://sudoku-sleuth.com/cases/enter-the-matrix
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r7c2 colour "white"
kropki-2: kropki r1c3-r1c4 colour "white"
kropki-3: kropki r1c4-r2c4 colour "white"
whispers-1: whispers r1c1-r2c1-r3c1 gap 5
whispers-2: whispers r5c1-r6c1 gap 5
whispers-3: whispers r8c1-r9c1 gap 5
whispers-4: whispers r9c2-r8c2 gap 5
whispers-5: whispers r2c2-r1c2 gap 5
whispers-6: whispers r4c3-r5c3 gap 5
whispers-7: whispers r7c3-r8c3 gap 5
whispers-8: whispers r8c4-r7c4 gap 5
whispers-9: whispers r6c4-r5c4 gap 5
whispers-10: whispers r4c4-r5c4 gap 5
whispers-11: whispers r3c4-r2c4 gap 5
whispers-12: whispers r2c5-r3c5 gap 5
whispers-13: whispers r1c5-r2c5 gap 5
whispers-14: whispers r5c5-r6c5 gap 5
whispers-15: whispers r7c5-r8c5-r9c5 gap 5
whispers-16: whispers r9c6-r8c6 gap 5
whispers-17: whispers r6c6-r5c6 gap 5
whispers-18: whispers r2c6-r1c6 gap 5
whispers-19: whispers r1c7-r2c7 gap 5
whispers-20: whispers r4c7-r5c7 gap 5
whispers-21: whispers r8c8-r7c8 gap 5
whispers-22: whispers r5c8-r4c8 gap 5
whispers-23: whispers r3c8-r2c8 gap 5
whispers-24: whispers r2c9-r3c9 gap 5
whispers-25: whispers r7c9-r8c9-r9c9 gap 5
whispers-26: whispers r4c9-r5c9-r6c9-r7c9 gap 5
pair-1: pair r6c7-r7c7 sum 5
pair-2: pair r6c6-r7c6 sum 5
negative-1: negative relations [{"op":"sum","value":5}] except [["r6c2","r7c2"],["r1c3","r1c4"],["r1c4","r2c4"],["r6c7","r7c7"],["r6c6","r7c6"]]
negative-2: negative relations [{"op":"at-least","value":5}] except [["r1c1","r2c1"],["r2c1","r3c1"],["r5c1","r6c1"],["r8c1","r9c1"],["r9c2","r8c2"],["r2c2","r1c2"],["r4c3","r5c3"],["r7c3","r8c3"],["r8c4","r7c4"],["r6c4","r5c4"],["r4c4","r5c4"],["r3c4","r2c4"],["r2c5","r3c5"],["r1c5","r2c5"],["r5c5","r6c5"],["r7c5","r8c5"],["r8c5","r9c5"],["r9c6","r8c6"],["r6c6","r5c6"],["r2c6","r1c6"],["r1c7","r2c7"],["r4c7","r5c7"],["r8c8","r7c8"],["r5c8","r4c8"],["r3c8","r2c8"],["r2c9","r3c9"],["r7c9","r8c9"],["r8c9","r9c9"],["r4c9","r5c9"],["r5c9","r6c9"],["r6c9","r7c9"]]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)  
V Pairs: Digits separated by a V sum to 5. All Vs have been given.
Consecutive Pairs: Digits separated by a white dot must be consecutive.
