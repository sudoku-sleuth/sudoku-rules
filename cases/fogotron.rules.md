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
title: Fogotron
setter: Meggen033
source: https://sudokupad.app/514o7c7qak
case: https://sudoku-sleuth.com/cases/fogotron
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r6c4-r6c5 colour "white"
kropki-3: kropki r4c6-r4c7 colour "white"
kropki-4: kropki r3c4-r3c5 colour "white"
kropki-5: kropki r2c3-r2c4 colour "white"
kropki-6: kropki r1c9-r2c9 colour "white"
kropki-7: kropki r4c4-r5c4 colour "black"
kropki-8: kropki r3c5-r3c6 colour "black"
kropki-9: kropki r4c3-r5c3 colour "black"
kropki-10: kropki r1c1-r2c1 colour "black"
whispers-1: whispers r4c4-r5c5-r6c6 gap 5
whispers-2: whispers r6c4-r5c5-r4c6 gap 5
whispers-3: whispers r7c4-r8c5-r7c6 gap 5
whispers-4: whispers r6c3-r7c4 gap 5
whispers-5: whispers r6c7-r7c6 gap 5
whispers-6: whispers r4c2-r3c2-r2c2-r2c3 gap 5
whispers-7: whispers r4c8-r3c8-r2c8 gap 5
whispers-8: whispers r8c1-r8c2-r8c3 gap 5
renban-1: renban r6c4-r7c5-r6c6
renban-2: renban r5c3-r4c3-r3c3-r3c4
renban-3: renban r3c6-r3c7-r4c7-r5c7
renban-4: renban r2c7-r2c8
renban-5: renban r7c1-r7c2-r7c3
renban-6: renban r8c7-r8c8-r8c9
pair r5c4-r6c4 relation {"op":"sum","value":10}
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Adjacent cells connected with a X must sum to 10.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
