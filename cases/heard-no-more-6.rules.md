---
format: open-rules
title: Heard No More 6
setter: The Bard
source: https://sudokupad.app/2xtdqvscb1
case: https://sudoku-sleuth.com/cases/heard-no-more-6
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=1
---

```rules
sudoku 9x9
whispers-1: whispers r3c5-r3c6 gap 5
whispers-2: whispers r2c8-r2c9 gap 5
whispers-3: whispers r4c2-r5c2 gap 5
whispers-4: whispers r5c6-r5c5-r6c5 gap 5
whispers-5: whispers r5c4-r6c4 gap 5
whispers-6: whispers r6c6-r5c6 gap 5
whispers-7: whispers r8c6-r8c5 gap 5
whispers-8: whispers r9c4-r8c4 gap 5
whispers-9: whispers r9c5-r9c4 gap 5
whispers-10: whispers r3c8-r2c8 gap 5
whispers-11: whispers r4c9-r5c9 gap 5
whispers-12: whispers r5c7-r6c7 gap 5
whispers-13: whispers r8c7-r7c7 gap 5
whispers-14: whispers r8c8-r7c8 gap 5
whispers-15: whispers r1c3-r2c3 gap 5
whispers-16: whispers r5c8-r4c8 gap 5
pair-1: pair r4c2-r5c2 sum 10
pair-2: pair r2c3-r3c3 sum 10
pair-3: pair r4c1-r5c1 sum 10
pair-4: pair r7c2-r8c2 sum 10
pair-5: pair r6c1-r6c2 sum 10
pair-6: pair r8c3-r9c3 sum 10
pair-7: pair r5c5-r5c6 sum 10
pair-8: pair r6c5-r6c6 sum 10
negative relations [{"op":"at-least","value":5}] except [["r3c5","r3c6"],["r2c8","r2c9"],["r4c2","r5c2"],["r5c6","r5c5"],["r5c5","r6c5"],["r5c4","r6c4"],["r6c6","r5c6"],["r8c6","r8c5"],["r9c4","r8c4"],["r9c5","r9c4"],["r3c8","r2c8"],["r4c9","r5c9"],["r5c7","r6c7"],["r8c7","r7c7"],["r8c8","r7c8"],["r1c3","r2c3"],["r5c8","r4c8"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)  
X Pairs: Digits separated by an X sum to 10.
