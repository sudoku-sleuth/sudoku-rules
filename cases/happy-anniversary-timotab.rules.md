---
format: open-rules
title: Happy Anniversary, Timotab
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9tmesf5wll
case: https://sudoku-sleuth.com/cases/happy-anniversary-timotab
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c7-r2c8 colour "white"
kropki-2: kropki r5c9-r6c9 colour "white"
kropki-3: kropki r8c3-r9c3 colour "white"
kropki-4: kropki r1c8-r1c9 colour "white"
kropki-5: kropki r4c5-r4c6 colour "white"
kropki-6: kropki r5c1-r6c1 colour "black"
kropki-7: kropki r5c5-r6c5 colour "black"
kropki-8: kropki r2c4-r3c4 colour "black"
kropki-9: kropki r2c7-r3c7 colour "black"
kropki-10: kropki r8c8-r8c9 colour "black"
kropki-11: kropki r5c2-r6c2 colour "black"
whispers-1: whispers r3c1-r2c1-r1c2-r2c3-r3c3 gap 4
whispers-2: whispers r2c3-r2c2-r2c1 gap 4
whispers-3: whispers r3c4-r2c4-r3c5-r2c5 gap 4
whispers-4: whispers r3c6-r2c6-r3c7-r2c7 gap 4
whispers-5: whispers r2c8-r3c8 gap 4
whispers-6: whispers r5c1-r6c1-r5c2 gap 4
whispers-7: whispers r5c4-r6c3-r5c3 gap 4 loop true
whispers-8: whispers r6c4-r6c3 gap 4
whispers-9: whispers r6c5-r5c5-r5c6 gap 4
whispers-10: whispers r5c8-r5c7-r6c8-r6c7 gap 4
whispers-11: whispers r9c3-r8c2-r8c1-r9c1-r9c2 gap 4
whispers-12: whispers r9c5-r8c5-r8c6 gap 4
whispers-13: whispers r7c8-r8c8-r8c9-r7c9 gap 4
whispers-14: whispers r9c8-r9c9-r8c9 gap 4
```

**Sudoku, kropki pairs, whisper-4**

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
