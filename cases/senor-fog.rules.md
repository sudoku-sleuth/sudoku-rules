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
title: Señor Fog
setter: Meggen033
source: https://sudokupad.app/jwhnabnyok
case: https://sudoku-sleuth.com/cases/senor-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c5-r4c5 colour "white"
kropki-2: kropki r7c3-r7c4 colour "white"
kropki-3: kropki r5c7-r6c7 colour "white"
kropki-4: kropki r8c7-r9c7 colour "white"
kropki-5: kropki r4c7-r4c8 colour "white"
kropki-6: kropki r6c5-r7c5 colour "black"
kropki-7: kropki r7c6-r7c7 colour "black"
kropki-8: kropki r2c6-r2c7 colour "black"
kropki-9: kropki r9c8-r9c9 colour "black"
kropki-10: kropki r3c2-r4c2 colour "black"
whispers-1: whispers r4c4-r5c3-r6c4-r7c5-r6c6-r5c7-r4c6 gap 5
whispers-2: whispers r8c4-r7c5 gap 5
whispers-3: whispers r8c6-r7c5 gap 5
whispers-4: whispers r5c2-r6c2-r7c2 gap 5
whispers-5: whispers r5c8-r6c8-r7c8 gap 5
renban-1: renban r4c5-r5c4-r6c5-r5c6
renban-2: renban r7c4-r8c4-r8c5-r8c6-r7c6
renban-3: renban r3c1-r2c2-r2c3-r3c4
```

•	Normal Sudoku rules apply. 
•	The grid is covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
