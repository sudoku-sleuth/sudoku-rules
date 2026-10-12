---
format: open-rules
title: Heard No More
setter: The Bard
source: https://sudokupad.app/hk3zby5e7x
case: https://sudoku-sleuth.com/cases/heard-no-more
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2 gap 5
whispers-2: whispers r3c6-r3c5 gap 5
whispers-3: whispers r8c1-r9c1 gap 5
whispers-4: whispers r7c2-r8c2 gap 5
whispers-5: whispers r8c3-r9c3 gap 5
whispers-6: whispers r7c8-r8c8 gap 5
whispers-7: whispers r8c7-r9c7 gap 5
whispers-8: whispers r8c9-r9c9 gap 5
whispers-9: whispers r7c5-r8c5-r9c5 gap 5
whispers-10: whispers r7c4-r8c4 gap 5
whispers-11: whispers r1c8-r1c9 gap 5
whispers-12: whispers r2c8-r1c8 gap 5
whispers-13: whispers r3c8-r3c7 gap 5
whispers-14: whispers r1c7-r2c7 gap 5
whispers-15: whispers r3c1-r3c2 gap 5
whispers-16: whispers r4c7-r3c7 gap 5
whispers-17: whispers r4c6-r3c6 gap 5
whispers-18: whispers r4c3-r3c3 gap 5
whispers-19: whispers r3c4-r3c3-r3c2-r4c2-r4c3 gap 5
whispers-20: whispers r5c1-r5c2-r4c2 gap 5
whispers-21: whispers r4c5-r5c5-r5c6 gap 5
whispers-22: whispers r6c5-r6c4-r7c4 gap 5
whispers-23: whispers r5c8-r6c8-r7c8 gap 5
whispers-24: whispers r6c7-r6c8 gap 5
whispers-25: whispers r9c6-r9c7 gap 5
whispers-26: whispers r9c8-r9c9 gap 5
whispers-27: whispers r5c9-r6c9 gap 5
whispers-28: whispers r7c9-r6c9 gap 5
whispers-29: whispers r1c3-r1c4-r2c4 gap 5
whispers-30: whispers r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r3c7 gap 5
whispers-31: whispers r5c7-r5c8 gap 5
whispers-32: whispers r6c1-r7c1-r7c2 gap 5
pair-1: pair r8c8-r8c9 relation {"op":"sum","value":5}
pair-2: pair r8c1-r8c2 relation {"op":"sum","value":5}
negative relations [{"op":"at-least","value":5}] except [["r1c1","r1c2"],["r3c6","r3c5"],["r8c1","r9c1"],["r7c2","r8c2"],["r8c3","r9c3"],["r7c8","r8c8"],["r8c7","r9c7"],["r8c9","r9c9"],["r7c5","r8c5"],["r8c5","r9c5"],["r7c4","r8c4"],["r1c8","r1c9"],["r2c8","r1c8"],["r3c8","r3c7"],["r1c7","r2c7"],["r3c1","r3c2"],["r4c7","r3c7"],["r4c6","r3c6"],["r4c3","r3c3"],["r3c4","r3c3"],["r3c3","r3c2"],["r3c2","r4c2"],["r4c2","r4c3"],["r5c1","r5c2"],["r5c2","r4c2"],["r4c5","r5c5"],["r5c5","r5c6"],["r6c5","r6c4"],["r6c4","r7c4"],["r5c8","r6c8"],["r6c8","r7c8"],["r6c7","r6c8"],["r9c6","r9c7"],["r9c8","r9c9"],["r5c9","r6c9"],["r7c9","r6c9"],["r1c3","r1c4"],["r1c4","r2c4"],["r2c2","r2c3"],["r2c3","r2c4"],["r2c4","r2c5"],["r2c5","r2c6"],["r2c6","r2c7"],["r2c7","r3c7"],["r5c7","r5c8"],["r6c1","r7c1"],["r7c1","r7c2"]]
```

Normal sudoku rules apply, place the digits 1-9 in each row, column, and box.
German whispers: digits next to each other along the green line must have a difference of at least 5. All vertical and horizontal German whisper lines have been given, no diagonal lines. 
V: digits with an V between them sum to 5.
