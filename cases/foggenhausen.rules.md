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
title: Föggenhausen
setter: Meggen033
source: https://sudokupad.app/3h2bxiaqm1
case: https://sudoku-sleuth.com/cases/foggenhausen
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r7c4 colour "white"
kropki-2: kropki r3c6-r4c6 colour "white"
kropki-3: kropki r3c4-r4c4 colour "white"
kropki-4: kropki r7c6-r8c6 colour "white"
kropki-5: kropki r6c1-r7c1 colour "white"
kropki-6: kropki r4c7-r5c7 colour "white"
kropki-7: kropki r3c9-r4c9 colour "white"
kropki-8: kropki r5c4-r5c5 colour "black"
kropki-9: kropki r5c5-r5c6 colour "black"
kropki-10: kropki r4c3-r5c3 colour "black"
kropki-11: kropki r7c3-r8c3 colour "black"
kropki-12: kropki r2c8-r3c8 colour "black"
kropki-13: kropki r7c8-r8c8 colour "black"
whispers-1: whispers r4c5-r4c6 gap 5
whispers-2: whispers r6c5-r6c4 gap 5
whispers-3: whispers r5c7-r5c8 gap 5
whispers-4: whispers r5c3-r5c2 gap 5
whispers-5: whispers r7c2-r8c2 gap 5
whispers-6: whispers r9c2-r8c2 gap 5
whispers-7: whispers r2c5-r1c5-r1c6 gap 5
renban-1: renban r6c5-r5c6-r4c6
renban-2: renban r6c4-r5c4-r4c5
renban-3: renban r7c5-r7c6-r7c7-r6c7
renban-4: renban r4c3-r3c3-r3c4-r3c5
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
