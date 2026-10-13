---
format: open-rules
title: Heard No More 2
setter: The Bard
source: https://sudokupad.app/5kofu69w0n
case: https://sudoku-sleuth.com/cases/heard-no-more-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r4c4-r4c5 colour "black"
whispers-1: whispers r2c2-r2c3-r3c3 gap 5
whispers-2: whispers r1c4-r1c5-r1c6 gap 5
whispers-3: whispers r2c9-r3c9 gap 5
whispers-4: whispers r2c5-r3c5 gap 5
whispers-5: whispers r3c1-r4c1-r4c2 gap 5
whispers-6: whispers r5c2-r6c2 gap 5
whispers-7: whispers r9c2-r9c3-r8c3 gap 5
whispers-8: whispers r8c1-r9c1 gap 5
whispers-9: whispers r7c4-r8c4-r8c3 gap 5
whispers-10: whispers r5c4-r5c5-r6c5 gap 5
whispers-11: whispers r4c5-r5c5 gap 5
whispers-12: whispers r4c9-r3c9 gap 5
whispers-13: whispers r3c8-r4c8-r4c7 gap 5
whispers-14: whispers r5c8-r4c8 gap 5
whispers-15: whispers r5c7-r5c8 gap 5
whispers-16: whispers r7c8-r7c7-r7c6 gap 5
whispers-17: whispers r8c7-r8c6 gap 5
whispers-18: whispers r9c7-r8c7 gap 5
whispers-19: whispers r6c6-r7c6-r7c5-r6c5 gap 5
whispers-20: whispers r5c3-r5c2 gap 5
pair-1: pair r8c7-r8c8 sum 5
pair-2: pair r2c8-r2c9 sum 5
pair-3: pair r1c8-r1c9 sum 5
pair-4: pair r2c2-r3c2 sum 5
negative-1: negative relations [{"op":"sum","value":5}] except [["r4c4","r4c5"],["r8c7","r8c8"],["r2c8","r2c9"],["r1c8","r1c9"],["r2c2","r3c2"]]
negative-2: negative relations [{"op":"at-least","value":5}] except [["r2c2","r2c3"],["r2c3","r3c3"],["r1c4","r1c5"],["r1c5","r1c6"],["r2c9","r3c9"],["r2c5","r3c5"],["r3c1","r4c1"],["r4c1","r4c2"],["r5c2","r6c2"],["r9c2","r9c3"],["r9c3","r8c3"],["r8c1","r9c1"],["r7c4","r8c4"],["r8c4","r8c3"],["r5c4","r5c5"],["r5c5","r6c5"],["r4c5","r5c5"],["r4c9","r3c9"],["r3c8","r4c8"],["r4c8","r4c7"],["r5c8","r4c8"],["r5c7","r5c8"],["r7c8","r7c7"],["r7c7","r7c6"],["r8c7","r8c6"],["r9c7","r8c7"],["r6c6","r7c6"],["r7c6","r7c5"],["r7c5","r6c5"],["r5c3","r5c2"]]
```

Heard No More 2
Normal sudoku rules apply, place the digits 1-9 in each row, column, and box.
German whispers: digits next to each other along the green line must have a difference of at least 5. All vertical and horizontal German whisper lines have been given, no diagonal lines. 
V: digits with an V between them sum to 5. All V’s have been given.
Kropki: Digits with a black dot between them are in a ratio of 1:2.
