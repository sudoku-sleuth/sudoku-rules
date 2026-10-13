---
format: open-rules
title: Heard No More 7
setter: The Bard
source: https://sudokupad.app/nai2p2499d
case: https://sudoku-sleuth.com/cases/heard-no-more-7
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c9-r2c9 gap 5
whispers-2: whispers r3c5-r3c6 gap 5
whispers-3: whispers r3c4-r3c5 gap 5
whispers-4: whispers r4c2-r4c1-r3c1 gap 5
whispers-5: whispers r5c8-r5c9 gap 5
whispers-6: whispers r6c8-r5c8 gap 5
whispers-7: whispers r6c4-r6c5 gap 5
whispers-8: whispers r8c5-r8c6 gap 5
whispers-9: whispers r2c3-r1c3 gap 5
whispers-10: whispers r4c9-r5c9 gap 5
whispers-11: whispers r8c8-r8c7-r7c7 gap 5
whispers-12: whispers r4c4-r4c3-r5c3-r5c4 gap 5
whispers-13: whispers r8c9-r8c8 gap 5
whispers-14: whispers r5c4-r4c4 gap 5
pair-1: pair r5c8-r6c8 sum 10
pair-2: pair r8c5-r8c6 sum 10
pair-3: pair r4c4-r5c4 sum 10
pair-4: pair r5c3-r5c4 sum 10
pair-5: pair r2c5-r2c6 sum 10
pair-6: pair r3c1-r3c2 sum 10
pair-7: pair r3c2-r4c2 sum 10
pair-8: pair r4c2-r4c3 sum 10
pair-9: pair r5c5-r5c6 sum 10
pair-10: pair r6c2-r6c3 sum 10
pair-11: pair r8c1-r8c2 sum 10
pair-12: pair r8c7-r8c8 sum 10
quadruple r2c2-r2c3-r3c2-r3c3 digits [1,2,3,6]
negative relations [{"op":"at-least","value":5}] except [["r1c9","r2c9"],["r3c5","r3c6"],["r3c4","r3c5"],["r4c2","r4c1"],["r4c1","r3c1"],["r5c8","r5c9"],["r6c8","r5c8"],["r6c4","r6c5"],["r8c5","r8c6"],["r2c3","r1c3"],["r4c9","r5c9"],["r8c8","r8c7"],["r8c7","r7c7"],["r4c4","r4c3"],["r4c3","r5c3"],["r5c3","r5c4"],["r8c9","r8c8"],["r5c4","r4c4"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)  
X Pairs: Digits separated by an X sum to 10.
Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
