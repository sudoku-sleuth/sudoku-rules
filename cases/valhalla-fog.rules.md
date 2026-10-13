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
title: Valhalla Fog
setter: Meggen033
source: https://sudokupad.app/3jyf2q08mx
case: https://sudoku-sleuth.com/cases/valhalla-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r8c5 colour "white"
kropki-2: kropki r5c7-r6c7 colour "white"
kropki-3: kropki r6c8-r7c8 colour "white"
kropki-4: kropki r7c8-r7c9 colour "white"
kropki-5: kropki r9c1-r9c2 colour "white"
kropki-6: kropki r1c1-r2c1 colour "white"
kropki-7: kropki r5c5-r6c5 colour "black"
kropki-8: kropki r2c5-r3c5 colour "black"
kropki-9: kropki r5c3-r6c3 colour "black"
whispers-1: whispers r5c4-r4c5-r5c6 gap 5
whispers-2: whispers r3c4-r2c5-r3c6 gap 5
whispers-3: whispers r7c4-r7c5-r7c6 gap 5
whispers-4: whispers r3c3-r4c3-r5c3 gap 5
whispers-5: whispers r3c7-r4c7-r5c7 gap 5
renban-1: renban r6c4-r5c5-r6c6
renban-2: renban r3c4-r3c5-r3c6
renban-3: renban r2c4-r1c5-r2c6
renban-4: renban r1c7-r2c7-r3c7
renban-5: renban r1c3-r2c3-r3c3
renban-6: renban r5c2-r6c2-r7c2
renban-7: renban r9c8-r9c7-r9c6
pair-1: pair r4c5-r5c5 sum 10
pair-2: pair r8c4-r9c4 sum 10
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Adjacent cells connected with an X must sum to 10.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
