---
format: open-rules
title: Heard No More 10
setter: The Bard
source: https://sudokupad.app/solqbo3sei
case: https://sudoku-sleuth.com/cases/heard-no-more-10
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8ce6917d55dd66c8d07e129257cea286
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r2c1 black
kropki-2: kropki r2c4-r3c4 black
kropki-3: kropki r4c8-r5c8 black
kropki-4: kropki r5c2-r6c2 black
kropki-5: kropki r7c6-r8c6 black
kropki-6: kropki r8c9-r9c9 black
kropki-7: kropki r1c3-r1c4 black
kropki-8: kropki r2c6-r2c7 black
kropki-9: kropki r4c1-r4c2 black
kropki-10: kropki r5c4-r5c5 black
kropki-11: kropki r6c7-r6c8 black
kropki-12: kropki r9c5-r9c6 black
kropki-13: kropki r8c2-r8c3 black
kropki-14: kropki r7c8-r7c9 black
kropki-15: kropki r3c1-r4c1 black
kropki-16: kropki r6c8-r7c8 black
whispers-1: whispers r1c6-r2c6 gap 5
whispers-2: whispers r1c7-r2c7 gap 5
whispers-3: whispers r2c9-r3c9 gap 5
whispers-4: whispers r2c1-r3c1 gap 5
whispers-5: whispers r4c5-r5c5 gap 5
whispers-6: whispers r4c4-r5c4 gap 5
whispers-7: whispers r5c7-r6c7 gap 5
whispers-8: whispers r5c8-r6c8 gap 5
whispers-9: whispers r7c3-r8c3 gap 5
whispers-10: whispers r7c2-r8c2 gap 5
whispers-11: whispers r8c5-r9c5 gap 5
whispers-12: whispers r8c6-r9c6 gap 5
negative-1: negative relations [{"op":"ratio","value":2}] except [["r1c1","r2c1"],["r2c4","r3c4"],["r4c8","r5c8"],["r5c2","r6c2"],["r7c6","r8c6"],["r8c9","r9c9"],["r1c3","r1c4"],["r2c6","r2c7"],["r4c1","r4c2"],["r5c4","r5c5"],["r6c7","r6c8"],["r9c5","r9c6"],["r8c2","r8c3"],["r7c8","r7c9"],["r3c1","r4c1"],["r6c8","r7c8"]]
negative-2: negative relations [{"op":"at-least","value":5}] except [["r1c6","r2c6"],["r1c7","r2c7"],["r2c9","r3c9"],["r2c1","r3c1"],["r4c5","r5c5"],["r4c4","r5c4"],["r5c7","r6c7"],["r5c8","r6c8"],["r7c3","r8c3"],["r7c2","r8c2"],["r8c5","r9c5"],["r8c6","r9c6"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)

Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio. All black dots have been given.
