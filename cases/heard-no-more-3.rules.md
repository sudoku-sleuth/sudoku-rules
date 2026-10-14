---
format: open-rules
title: Heard No More 3
setter: The Bard
source: https://sudokupad.app/tdjg23kx2z
case: https://sudoku-sleuth.com/cases/heard-no-more-3
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=4 r8c6=6
exported: 408d969de4aa1a85873e18687ebd21d3
---

```rules
sudoku 9x9
whispers-1: whispers r3c4-r4c4-r5c4-r6c4-r6c5-r6c6-r6c7 gap 5
whispers-2: whispers r5c7-r4c7-r3c7-r3c6-r3c5 gap 5
whispers-3: whispers r7c4-r7c5-r7c6 gap 5
whispers-4: whispers r4c3-r5c3-r6c3 gap 5
whispers-5: whispers r3c8-r4c8-r5c8 gap 5
whispers-6: whispers r2c7-r2c6-r2c5 gap 5
whispers-7: whispers r1c6-r2c6 gap 5
whispers-8: whispers r8c4-r9c4 gap 5
whispers-9: whispers r8c8-r8c9 gap 5
whispers-10: whispers r1c3-r1c4 gap 5
whispers-11: whispers r8c1-r8c2 gap 5
whispers-12: whispers r7c2-r8c2 gap 5
whispers-13: whispers r3c1-r3c2-r4c2 gap 5
whispers-14: whispers r2c2-r3c2 gap 5
whispers-15: whispers r5c2-r4c2 gap 5
whispers-16: whispers r2c1-r2c2 gap 5
whispers-17: whispers r7c7-r7c6 gap 5
whispers-18: whispers r8c5-r9c5 gap 5
negative relations [{"op":"at-least","value":5}] except [["r3c4","r4c4"],["r4c4","r5c4"],["r5c4","r6c4"],["r6c4","r6c5"],["r6c5","r6c6"],["r6c6","r6c7"],["r5c7","r4c7"],["r4c7","r3c7"],["r3c7","r3c6"],["r3c6","r3c5"],["r7c4","r7c5"],["r7c5","r7c6"],["r4c3","r5c3"],["r5c3","r6c3"],["r3c8","r4c8"],["r4c8","r5c8"],["r2c7","r2c6"],["r2c6","r2c5"],["r1c6","r2c6"],["r8c4","r9c4"],["r8c8","r8c9"],["r1c3","r1c4"],["r8c1","r8c2"],["r7c2","r8c2"],["r3c1","r3c2"],["r3c2","r4c2"],["r2c2","r3c2"],["r5c2","r4c2"],["r2c1","r2c2"],["r7c7","r7c6"],["r8c5","r9c5"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

German whispers: digits next to each other along the green line must have a difference of at least 5. All vertical and horizontal German whisper lines have been given, no diagonal lines. (i.e. There is a negative constraint.)
