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
title: German Summer in the Fog
setter: Meggen033
source: https://sudokupad.app/79w02u4lff
case: https://sudoku-sleuth.com/cases/german-summer-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c4-r6c4-r6c5-r6c6-r5c6
thermo-2: thermo r4c3-r5c3-r6c3
thermo-3: thermo r7c3-r7c4-r7c5-r7c6-r7c7
kropki-1: kropki r5c2-r5c3 colour "white"
kropki-2: kropki r6c7-r6c8 colour "white"
kropki-3: kropki r7c4-r8c4 colour "white"
kropki-4: kropki r2c5-r3c5 colour "white"
kropki-5: kropki r7c8-r7c9 colour "white"
kropki-6: kropki r6c2-r7c2 colour "white"
kropki-7: kropki r8c1-r9c1 colour "white"
kropki-8: kropki r5c4-r5c5 colour "black"
kropki-9: kropki r3c8-r4c8 colour "black"
whispers-1: whispers r4c4-r4c5-r4c6 gap 5
whispers-2: whispers r5c5-r4c5 gap 5
whispers-3: whispers r3c3-r3c4-r3c5-r3c6-r3c7 gap 5
whispers-4: whispers r4c7-r3c7 gap 5
pair-1: pair r5c5-r6c5 sum 10
pair-2: pair r5c7-r6c7 sum 10
pair-3: pair r8c6-r8c7 sum 10
pair-4: pair r2c3-r2c4 sum 10
```

•	Normal Sudoku rules apply. 
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along each thermometer must increase starting from the bulb end.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Adjacent cells connected with an X must sum to 10.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
