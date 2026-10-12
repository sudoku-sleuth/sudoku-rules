---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
    - 39
    - 40
    - 41
    - 48
    - 49
    - 50
format: open-rules
title: Kermit the Fog
setter: Meggen033
source: https://sudokupad.app/9visz83clp
case: https://sudoku-sleuth.com/cases/kermit-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r5c5-r5c6 colour "white"
kropki-3: kropki r3c6-r4c6 colour "white"
kropki-4: kropki r8c5-r8c6 colour "white"
kropki-5: kropki r5c7-r5c8 colour "white"
kropki-6: kropki r7c4-r8c4 colour "white"
kropki-7: kropki r8c3-r9c3 colour "white"
kropki-8: kropki r7c2-r8c2 colour "white"
kropki-9: kropki r5c1-r6c1 colour "white"
kropki-10: kropki r6c7-r6c8 colour "white"
kropki-11: kropki r4c1-r4c2 colour "white"
kropki-12: kropki r3c7-r3c8 colour "white"
kropki-13: kropki r1c8-r2c8 colour "white"
kropki-14: kropki r4c4-r5c4 colour "black"
kropki-15: kropki r5c6-r6c6 colour "black"
kropki-16: kropki r3c5-r3c6 colour "black"
kropki-17: kropki r5c2-r5c3 colour "black"
kropki-18: kropki r8c2-r8c3 colour "black"
kropki-19: kropki r1c7-r1c8 colour "black"
whispers-1: whispers r4c5-r5c5-r6c5 gap 5
whispers-2: whispers r6c6-r7c6 gap 5
whispers-3: whispers r7c5-r7c6 gap 5
whispers-4: whispers r3c5-r2c5 gap 5
whispers-5: whispers r7c4-r7c3-r6c3 gap 5
whispers-6: whispers r3c4-r3c3-r4c3 gap 5
whispers-7: whispers r6c9-r7c8 gap 5
whispers-8: whispers r8c9-r7c8 gap 5
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
