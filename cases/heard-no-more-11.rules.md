---
format: open-rules
title: Heard No More 11
setter: The Bard
source: https://sudokupad.app/0iad2zaabb
case: https://sudoku-sleuth.com/cases/heard-no-more-11
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c5-r2c5-r2c6-r3c6 gap 5
whispers-2: whispers r8c4-r8c5-r9c5 gap 5
whispers-3: whispers r2c2-r3c2-r3c3-r2c3 gap 5
whispers-4: whispers r6c8-r6c9 gap 5
whispers-5: whispers r9c3-r9c2-r8c2-r8c1 gap 5
whispers-6: whispers r8c2-r7c2-r7c1-r6c1-r5c1 gap 5
whispers-7: whispers r7c9-r7c8-r8c8-r8c7 gap 5
whispers-8: whispers r7c6-r7c7 gap 5
whispers-9: whispers r9c8-r9c9 gap 5
pair-1: pair r8c7-r9c7 sum 10
pair-2: pair r5c2-r5c3 sum 10
pair-3: pair r7c1-r8c1 sum 10
pair-4: pair r8c4-r8c5 sum 10
pair-5: pair r2c2-r2c3 sum 10
pair-6: pair r3c2-r3c3 sum 10
pair-7: pair r2c7-r2c8 sum 10
pair-8: pair r2c5-r2c6 sum 10
pair-9: pair r5c7-r5c8 sum 10
pair-10: pair r3c8-r4c8 sum 10
pair-11: pair r4c1-r4c2 sum 5
negative relations [{"op":"at-least","value":5}] except [["r1c5","r2c5"],["r2c5","r2c6"],["r2c6","r3c6"],["r8c4","r8c5"],["r8c5","r9c5"],["r2c2","r3c2"],["r3c2","r3c3"],["r3c3","r2c3"],["r6c8","r6c9"],["r9c3","r9c2"],["r9c2","r8c2"],["r8c2","r8c1"],["r8c2","r7c2"],["r7c2","r7c1"],["r7c1","r6c1"],["r6c1","r5c1"],["r7c9","r7c8"],["r7c8","r8c8"],["r8c8","r8c7"],["r7c6","r7c7"],["r9c8","r9c9"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)

XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
