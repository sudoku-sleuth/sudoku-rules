---
fog:
  initiallyLit:
    - r3c2
    - r3c3
    - r3c7
    - r3c8
format: open-rules
title: This FOG is a Green GAS
setter: Meggen033
source: https://sudokupad.app/ubmph730zj
case: https://sudoku-sleuth.com/cases/this-fog-is-a-green-gas
library: https://rules.sudoku-sleuth.com/
status: read
exported: 644b698bfa54a7178968c838365f90b3
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r3c5 white
kropki-2: kropki r3c5-r4c5 white
kropki-3: kropki r7c5-r8c5 white
kropki-4: kropki r6c6-r6c7 white
kropki-5: kropki r4c2-r4c3 white
kropki-6: kropki r1c4-r2c4 black
kropki-7: kropki r2c6-r3c6 black
kropki-8: kropki r5c4-r6c4 black
kropki-9: kropki r4c7-r4c8 black
whispers-1: whispers r3c1-r3c2-r3c3-r3c4 gap 5
whispers-2: whispers r3c6-r3c7-r3c8-r3c9 gap 5
whispers-3: whispers r4c5-r5c5-r6c5-r7c5 gap 5
whispers-4: whispers r2c5-r1c5 gap 5
whispers-5: whispers r5c4-r5c5-r5c6 gap 5
whispers-6: whispers r8c5-r8c4-r8c3 gap 5
whispers-7: whispers r8c6-r9c6 gap 5
whispers-8: whispers r5c7-r6c7-r7c7 gap 5
whispers-9: whispers r5c3-r6c3-r7c3 gap 5
whispers-10: whispers r4c2-r4c1-r5c1 gap 5
whispers-11: whispers r4c8-r4c9-r5c9 gap 5
whispers-12: whispers r2c1-r1c2 gap 5
whispers-13: whispers r6c1-r7c1-r8c1 gap 5
whispers-14: whispers r9c1-r8c1 gap 5
whispers-15: whispers r1c8-r1c9 gap 5
whispers-16: whispers r8c9-r9c8 gap 5
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
