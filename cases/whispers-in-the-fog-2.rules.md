---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
    - 40
format: open-rules
title: Whispers in the Fog
setter: Meggen033
source: https://sudokupad.app/o0q3eqqa8b
case: https://sudoku-sleuth.com/cases/whispers-in-the-fog-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r3c3-r4c3 colour "white"
kropki-3: kropki r3c4-r3c5 colour "white"
kropki-4: kropki r5c7-r6c7 colour "white"
kropki-5: kropki r7c4-r8c4 colour "white"
kropki-6: kropki r3c7-r4c7 colour "white"
kropki-7: kropki r5c5-r5c6 colour "black"
kropki-8: kropki r4c6-r5c6 colour "black"
kropki-9: kropki r4c3-r5c3 colour "black"
kropki-10: kropki r3c3-r3c4 colour "black"
kropki-11: kropki r2c5-r3c5 colour "black"
kropki-12: kropki r6c6-r6c7 colour "black"
kropki-13: kropki r7c1-r7c2 colour "black"
kropki-14: kropki r7c8-r7c9 colour "black"
kropki-15: kropki r8c8-r8c9 colour "black"
kropki-16: kropki r3c8-r4c8 colour "black"
whispers-1: whispers r4c4-r4c5-r4c6 gap 5
whispers-2: whispers r5c5-r4c5 gap 5
whispers-3: whispers r2c3-r2c2-r3c2-r4c2-r5c2-r6c2-r6c3 gap 5
whispers-4: whispers r5c8-r6c8-r7c8-r7c7-r7c6-r7c5-r6c5 gap 5
whispers-5: whispers r2c6-r1c7-r1c8-r2c9-r3c9 gap 5
whispers-6: whispers r3c5-r2c6 gap 5
```

•	Normal Sudoku rules apply. 

•	Adjacent digits along a green German Whisper line must have a difference of at least 5.

•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.
