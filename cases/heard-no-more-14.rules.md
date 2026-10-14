---
format: open-rules
title: Heard No More 14
setter: The Bard
source: https://sudokupad.app/280t8awp88
case: https://sudoku-sleuth.com/cases/heard-no-more-14
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8d3da5ff9012200f0b614a85473f5db7
---

```rules
sudoku 9x9
kropki r1c6-r2c6 black
whispers-1: whispers r1c3-r1c2-r1c1-r2c1-r3c1-r3c2-r3c3 gap 5
whispers-2: whispers r3c7-r2c7-r1c7-r1c8-r1c9-r2c9-r3c9 gap 5
whispers-3: whispers r7c7-r7c8-r7c9-r8c9-r9c9-r9c8-r9c7 gap 5
whispers-4: whispers r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r7c1 gap 5
whispers-5: whispers r4c8-r4c7-r4c6-r5c6-r6c6 gap 5
whispers-6: whispers r4c6-r3c6-r2c6-r2c5-r3c5 gap 5
whispers-7: whispers r4c3-r5c3-r6c3-r6c2-r6c1 gap 5
whispers-8: whispers r2c4-r3c4 gap 5
whispers-9: whispers r4c5-r5c5 gap 5
whispers-10: whispers r8c4-r8c5-r7c5-r7c4 gap 5 loop true
whispers-11: whispers r6c7-r6c8-r5c8-r5c7 gap 5 loop true
negative relations [{"op":"at-least","value":5}] except [["r1c3","r1c2"],["r1c2","r1c1"],["r1c1","r2c1"],["r2c1","r3c1"],["r3c1","r3c2"],["r3c2","r3c3"],["r3c7","r2c7"],["r2c7","r1c7"],["r1c7","r1c8"],["r1c8","r1c9"],["r1c9","r2c9"],["r2c9","r3c9"],["r7c7","r7c8"],["r7c8","r7c9"],["r7c9","r8c9"],["r8c9","r9c9"],["r9c9","r9c8"],["r9c8","r9c7"],["r7c3","r8c3"],["r8c3","r9c3"],["r9c3","r9c2"],["r9c2","r9c1"],["r9c1","r8c1"],["r8c1","r7c1"],["r4c8","r4c7"],["r4c7","r4c6"],["r4c6","r5c6"],["r5c6","r6c6"],["r4c6","r3c6"],["r3c6","r2c6"],["r2c6","r2c5"],["r2c5","r3c5"],["r4c3","r5c3"],["r5c3","r6c3"],["r6c3","r6c2"],["r6c2","r6c1"],["r2c4","r3c4"],["r4c5","r5c5"],["r8c4","r8c5"],["r8c5","r7c5"],["r7c5","r7c4"],["r7c4","r8c4"],["r6c7","r6c8"],["r6c8","r5c8"],["r5c8","r5c7"],["r5c7","r6c7"]]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)

Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
