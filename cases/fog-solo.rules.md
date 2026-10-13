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
title: Fog Solo
setter: Meggen033
source: https://sudokupad.app/gbwiiay32s
case: https://sudoku-sleuth.com/cases/fog-solo
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r5c5-r5c6 colour "white"
kropki-3: kropki r7c4-r7c5 colour "white"
kropki-4: kropki r7c5-r7c6 colour "white"
kropki-5: kropki r8c3-r8c4 colour "white"
kropki-6: kropki r8c6-r8c7 colour "white"
kropki-7: kropki r9c7-r9c8 colour "white"
kropki-8: kropki r3c5-r4c5 colour "black"
kropki-9: kropki r1c6-r2c6 colour "black"
kropki-10: kropki r7c3-r8c3 colour "black"
kropki-11: kropki r7c7-r8c7 colour "black"
whispers-1: whispers r5c4-r4c5-r5c6-r6c5 gap 5 loop true
whispers-2: whispers r6c8-r7c8-r8c8 gap 5
whispers-3: whispers r1c7-r2c7 gap 5
whispers-4: whispers r2c8-r1c7 gap 5
whispers-5: whispers r6c1-r5c1 gap 5
whispers-6: whispers r6c9-r5c9 gap 5
whispers-7: whispers r4c9-r5c9 gap 5
whispers-8: whispers r4c1-r5c1 gap 5
whispers-9: whispers r3c2-r3c1-r4c1 gap 5
whispers-10: whispers r3c3-r2c3-r2c2 gap 5
renban-1: renban r4c4-r4c5-r4c6
renban-2: renban r3c4-r2c4-r2c5-r2c6-r3c6
renban-3: renban r6c2-r7c2-r8c2
pair-1: pair r4c5-r5c5 sum 10
pair-2: pair r9c2-r9c3 sum 10
pair-3: pair r9c6-r9c7 sum 10
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Adjacent cells connected with an X must sum to 10.
