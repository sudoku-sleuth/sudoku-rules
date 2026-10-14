---
format: open-rules
title: Heard No More 8
setter: The Bard
source: https://sudokupad.app/perpk6yep1
case: https://sudoku-sleuth.com/cases/heard-no-more-8
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0b18aaf4b5bb7102648632da157ea591
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r3c2 black
kropki-2: kropki r8c8-r9c8 black
whispers-1: whispers r2c2-r2c3-r2c4 gap 5
whispers-2: whispers r2c5-r2c4 gap 5
whispers-3: whispers r3c2-r3c3-r3c4-r3c5 gap 5
whispers-4: whispers r3c1-r3c2 gap 5
whispers-5: whispers r1c9-r2c9 gap 5
whispers-6: whispers r2c7-r2c8-r1c8 gap 5
whispers-7: whispers r4c7-r4c8 gap 5
whispers-8: whispers r5c5-r5c6 gap 5
whispers-9: whispers r5c4-r6c4 gap 5
whispers-10: whispers r4c1-r5c1-r5c2-r5c3-r5c4 gap 5
whispers-11: whispers r8c4-r8c5-r8c6-r8c7 gap 5
whispers-12: whispers r9c7-r9c6-r9c5 gap 5
whispers-13: whispers r8c8-r8c7 gap 5
whispers-14: whispers r8c9-r8c8 gap 5
whispers-15: whispers r7c7-r8c7 gap 5
whispers-16: whispers r6c7-r7c7 gap 5
whispers-17: whispers r7c6-r7c7 gap 5
whispers-18: whispers r7c5-r7c4 gap 5
whispers-19: whispers r8c3-r8c4 gap 5
whispers-20: whispers r9c3-r9c2 gap 5
whispers-21: whispers r6c2-r7c2-r7c3 gap 5
negative relations [{"op":"at-least","value":5}] except [["r2c2","r2c3"],["r2c3","r2c4"],["r2c5","r2c4"],["r3c2","r3c3"],["r3c3","r3c4"],["r3c4","r3c5"],["r3c1","r3c2"],["r1c9","r2c9"],["r2c7","r2c8"],["r2c8","r1c8"],["r4c7","r4c8"],["r5c5","r5c6"],["r5c4","r6c4"],["r4c1","r5c1"],["r5c1","r5c2"],["r5c2","r5c3"],["r5c3","r5c4"],["r8c4","r8c5"],["r8c5","r8c6"],["r8c6","r8c7"],["r9c7","r9c6"],["r9c6","r9c5"],["r8c8","r8c7"],["r8c9","r8c8"],["r7c7","r8c7"],["r6c7","r7c7"],["r7c6","r7c7"],["r7c5","r7c4"],["r8c3","r8c4"],["r9c3","r9c2"],["r6c2","r7c2"],["r7c2","r7c3"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)  
Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
