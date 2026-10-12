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
title: Monsieur Fog
setter: Meggen033
source: https://sudokupad.app/i0m0yvit6n
case: https://sudoku-sleuth.com/cases/monsieur-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r4c5-r4c6-r5c6-r6c6-r6c5
thermo-2: thermo r4c8-r5c8-r6c8
kropki-1: kropki r7c5-r8c5 colour "white"
kropki-2: kropki r2c5-r3c5 colour "white"
kropki-3: kropki r7c8-r7c9 colour "white"
kropki-4: kropki r3c8-r3c9 colour "white"
kropki-5: kropki r3c5-r3c6 colour "black"
kropki-6: kropki r7c5-r7c6 colour "black"
kropki-7: kropki r7c4-r7c5 colour "black"
kropki-8: kropki r3c4-r3c5 colour "black"
kropki-9: kropki r5c8-r5c9 colour "black"
whispers-1: whispers r4c4-r5c4-r6c4-r5c5 gap 5 loop true
whispers-2: whispers r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r7c6 gap 5
whispers-3: whispers r7c9-r8c9 gap 5
whispers-4: whispers r3c9-r2c9 gap 5
whispers-5: whispers r4c3-r5c3-r6c3-r5c2 gap 5 loop true
whispers-6: whispers r4c1-r3c2 gap 5
whispers-7: whispers r6c1-r7c2 gap 5
whispers-8: whispers r2c3-r3c2 gap 5
whispers-9: whispers r8c3-r7c2 gap 5
whispers-10: whispers r8c4-r8c3 gap 5
whispers-11: whispers r1c6-r1c7 gap 5
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along each thermometer must increase starting from the bulb end.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
