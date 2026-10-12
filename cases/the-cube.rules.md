---
format: open-rules
title: The Cube
setter: The Bard
source: https://sudokupad.app/iond07ohyh
case: https://sudoku-sleuth.com/cases/the-cube
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c7-r1c8 colour "black"
kropki-2: kropki r2c4-r2c5 colour "black"
kropki-3: kropki r6c1-r6c2 colour "black"
kropki-4: kropki r4c2-r5c2 colour "black"
kropki-5: kropki r2c7-r3c7 colour "black"
kropki-6: kropki r2c8-r2c9 colour "black"
kropki-7: kropki r6c6-r6c7 colour "black"
whispers-1: whispers r1c9-r2c9-r3c9 gap 5
whispers-2: whispers r1c1-r2c1-r3c1-r4c1 gap 5
whispers-3: whispers r7c9-r8c9-r9c9 gap 5
whispers-4: whispers r7c1-r8c1-r9c1 gap 5
whispers-5: whispers r1c4-r1c5-r1c6 gap 5
whispers-6: whispers r9c4-r9c5-r9c6 gap 5
whispers-7: whispers r4c7-r5c7-r6c7-r7c6-r6c6-r5c6-r4c6-r3c7 gap 5 loop true
whispers-8: whispers r7c6-r7c5-r7c4-r7c3-r6c3-r5c3-r4c3-r4c4-r4c5-r4c6 gap 5
whispers-9: whispers r3c7-r3c6-r3c5-r3c4-r4c3 gap 5
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
German Whispers: Adjacent digits on a green line must have a difference of at least 5.
