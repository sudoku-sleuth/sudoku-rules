---
fog:
  initiallyLit:
    - 13
    - 31
    - 58
format: open-rules
title: One Knight's Foggy Secret
setter: Meggen033
source: https://sudokupad.app/tvls5hsro4
case: https://sudoku-sleuth.com/cases/one-knight-s-foggy-secret
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight stated true
kropki-1: kropki r6c8-r6c9 colour "white"
kropki-2: kropki r9c7-r9c8 colour "white"
kropki-3: kropki r6c5-r7c5 colour "black"
kropki-4: kropki r5c6-r5c7 colour "black"
kropki-5: kropki r4c2-r4c3 colour "black"
kropki-6: kropki r1c3-r1c4 colour "black"
kropki-7: kropki r8c7-r9c7 colour "black"
whispers-1: whispers r2c4-r2c5-r2c6 gap 5
whispers-2: whispers r1c5-r2c5-r3c5 gap 5
whispers-3: whispers r4c4-r4c5-r4c6 gap 5
whispers-4: whispers r5c5-r4c5 gap 5
whispers-5: whispers r7c4-r7c5-r7c6 gap 5
whispers-6: whispers r8c5-r7c5 gap 5
whispers-7: whispers r4c7-r4c8-r5c8 gap 5
whispers-8: whispers r4c3-r5c3-r6c3 gap 5
whispers-9: whispers r3c4-r3c3-r3c2 gap 5
whispers-10: whispers r6c7-r7c7-r8c7 gap 5
whispers-11: whispers r6c8-r6c7 gap 5
whispers-12: whispers r2c2-r3c2 gap 5
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.  No guessing is required.
