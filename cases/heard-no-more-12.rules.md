---
format: open-rules
title: Heard No More 12
setter: The Bard
source: https://sudokupad.app/4qgoa26ye4
case: https://sudoku-sleuth.com/cases/heard-no-more-12
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r9c1-r9c2
whispers-1: whispers r2c4-r2c5-r2c6-r1c6 gap 5
whispers-2: whispers r3c7-r3c6-r3c5-r3c4-r4c4-r5c4-r6c4 gap 5
whispers-3: whispers r7c4-r7c5-r7c6-r6c6-r6c5-r7c5 gap 5
whispers-4: whispers r9c4-r8c4-r8c5-r8c6 gap 5
whispers-5: whispers r4c9-r4c8-r4c7-r4c6 gap 5
whispers-6: whispers r4c8-r3c8 gap 5
whispers-7: whispers r5c7-r5c8-r5c9 gap 5
whispers-8: whispers r5c3-r5c2-r6c2-r6c3 gap 5
whispers-9: whispers r6c2-r6c1 gap 5
whispers-10: whispers r2c2-r2c3 gap 5
whispers-11: whispers r9c7-r9c8 gap 5
whispers-12: whispers r1c2-r1c3 gap 5
whispers-13: whispers r2c7-r2c8 gap 5
whispers-14: whispers r7c2-r7c3 gap 5
whispers-15: whispers r5c2-r5c1-r4c1-r4c2 gap 5 loop true
negative relations [{"op":"at-least","value":5}] except [["r2c4","r2c5"],["r2c5","r2c6"],["r2c6","r1c6"],["r3c7","r3c6"],["r3c6","r3c5"],["r3c5","r3c4"],["r3c4","r4c4"],["r4c4","r5c4"],["r5c4","r6c4"],["r7c4","r7c5"],["r7c5","r7c6"],["r7c6","r6c6"],["r6c6","r6c5"],["r6c5","r7c5"],["r9c4","r8c4"],["r8c4","r8c5"],["r8c5","r8c6"],["r4c9","r4c8"],["r4c8","r4c7"],["r4c7","r4c6"],["r4c8","r3c8"],["r5c7","r5c8"],["r5c8","r5c9"],["r5c3","r5c2"],["r5c2","r6c2"],["r6c2","r6c3"],["r6c2","r6c1"],["r2c2","r2c3"],["r9c7","r9c8"],["r1c2","r1c3"],["r2c7","r2c8"],["r7c2","r7c3"],["r5c2","r5c1"],["r5c1","r4c1"],["r4c1","r4c2"],["r4c2","r5c2"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German whispers: Adjacent digits on a green line must have a difference of at least 5. All German whisper lines have been given that would be vertical or horizontal. (i.e. There is a negative constraint, but this does not apply to diagonally adjacent digits.)
Thermometers: Digits on grey thermos must increase from the bulb to the tip.
