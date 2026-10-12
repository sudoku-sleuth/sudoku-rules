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
title: Fog Jagger
setter: Meggen033
source: https://sudokupad.app/jht5duig7b
case: https://sudoku-sleuth.com/cases/fog-jagger
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r7c4 colour "white"
kropki-2: kropki r6c6-r7c6 colour "white"
kropki-3: kropki r7c9-r8c9 colour "white"
kropki-4: kropki r3c1-r4c1 colour "white"
kropki-5: kropki r3c9-r4c9 colour "white"
kropki-6: kropki r3c5-r4c5 colour "black"
kropki-7: kropki r7c5-r8c5 colour "black"
kropki-8: kropki r5c1-r6c1 colour "black"
kropki-9: kropki r5c9-r6c9 colour "black"
kropki-10: kropki r1c1-r1c2 colour "black"
whispers-1: whispers r6c4-r5c5-r4c6 gap 5
whispers-2: whispers r4c4-r5c5-r6c6 gap 5
whispers-3: whispers r3c7-r4c6 gap 5
whispers-4: whispers r3c3-r4c4 gap 5
whispers-5: whispers r7c3-r6c4 gap 5
whispers-6: whispers r7c7-r6c6 gap 5
whispers-7: whispers r6c3-r5c4 gap 5
whispers-8: whispers r6c7-r5c6 gap 5
whispers-9: whispers r7c3-r7c4-r7c5-r7c6-r7c7 gap 5
whispers-10: whispers r2c4-r3c3 gap 5
whispers-11: whispers r6c1-r5c2 gap 5
whispers-12: whispers r5c8-r4c8-r3c8 gap 5
renban-1: renban r4c5-r5c4-r6c5-r5c6
renban-2: renban r8c4-r9c5-r8c6
renban-3: renban r7c2-r8c2-r8c3
renban-4: renban r7c8-r8c8-r8c7
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•       Digits along a magenta renban line form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
