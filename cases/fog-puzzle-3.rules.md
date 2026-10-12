---
fog:
  initiallyLit:
    - 30
    - 31
    - 39
    - 40
format: open-rules
title: "Fog Puzzle #3"
setter: EPH
source: https://tinyurl.com/4devkpht
case: https://sudoku-sleuth.com/cases/fog-puzzle-3
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c9-r2c9 colour "white"
kropki-2: kropki r3c3-r3c4 colour "black"
kropki-3: kropki r3c4-r3c5 colour "black"
kropki-4: kropki r2c3-r3c3 colour "black"
kropki-5: kropki r3c3-r4c3 colour "black"
kropki-6: kropki r6c3-r7c3 colour "black"
whispers-1: whispers r5c4-r6c5-r5c5-r4c5 gap 5
whispers-2: whispers r1c2-r1c1-r2c2-r2c1 gap 5
whispers-3: whispers r3c2-r2c1 gap 5
whispers-4: whispers r7c3-r7c4-r7c5-r7c6-r7c7 gap 5
whispers-5: whispers r5c2-r6c2-r5c1 gap 5
whispers-6: whispers r5c7-r6c7-r7c7 gap 5
whispers-7: whispers r4c8-r5c7 gap 5
whispers-8: whispers r4c7-r4c8 gap 5
whispers-9: whispers r1c2-r1c1-r2c2-r2c1-r3c2 gap 5
whispers-10: whispers r6c5-r5c5-r4c5 gap 5
whispers-11: whispers r6c5-r5c4 gap 5
whispers-12: whispers r4c7-r4c8-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4-r7c3 gap 5
renban-1: renban r4c5-r4c4-r5c4
renban-2: renban r4c6-r3c7-r2c6-r1c5-r2c4
renban-3: renban r8c7-r9c8-r8c9-r7c8
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Fog rules: fog obscures most of the grid.  Placing a correct digit in a cell removes the fog from surrounding cells.

Lines in this puzzle do not branch or cross themselves.

Purple lines are renban lines: digit on a renban must be a non-repeating set of consecutive digits in any order.

Green lines are German Whisper lines: cells which are adjacent along a green line must contain digits with a difference of at least 5.

Digits in cells separated by a black dot must have a 1:2 ratio.  Digits in cells separated by a white dot must be consecutive.  Not all possible dots are necessarily given.
