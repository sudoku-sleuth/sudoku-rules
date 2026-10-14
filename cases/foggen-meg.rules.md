---
fog:
  initiallyLit:
    - r4c4
    - r4c5
    - r4c6
    - r5c4
    - r5c5
    - r5c6
    - r6c4
    - r6c5
    - r6c6
format: open-rules
title: Foggen Meg
setter: Meggen033
source: https://sudokupad.app/yxb3v4k5r3
case: https://sudoku-sleuth.com/cases/foggen-meg
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0b16b6159f0a3284c0bc1daf4ec5a040
---

```rules
sudoku 9x9
thermo-1: thermo r6c5-r5c5-r4c5
thermo-2: thermo r4c6-r5c6-r6c6
thermo-3: thermo r4c4-r5c4-r6c4
thermo-4: thermo r8c3-r7c3-r6c3-r5c3
thermo-5: thermo r8c7-r7c7-r6c7-r5c7-r5c8
kropki-1: kropki r5c4-r5c5 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r7c6-r8c6 white
kropki-4: kropki r3c1-r3c2 white
kropki-5: kropki r7c5-r8c5 black
kropki-6: kropki r2c5-r3c5 black
kropki-7: kropki r6c2-r7c2 black
kropki-8: kropki r7c7-r7c8 black
kropki-9: kropki r3c8-r3c9 black
whispers-1: whispers r4c4-r4c5-r4c6 gap 5
whispers-2: whispers r6c4-r6c5-r6c6 gap 5
whispers-3: whispers r5c4-r4c3 gap 5
whispers-4: whispers r5c6-r4c7 gap 5
whispers-5: whispers r3c4-r3c5-r3c6 gap 5
whispers-6: whispers r7c4-r7c5-r7c6 gap 5
whispers-7: whispers r8c2-r9c2 gap 5
whispers-8: whispers r8c9-r8c8-r9c8 gap 5
whispers-9: whispers r1c4-r1c5-r1c6-r1c7 gap 5
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along each thermometer must increase starting from the bulb end.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
