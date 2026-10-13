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
title: Fogzilla
setter: Meggen033
source: https://sudokupad.app/ozuflaxedl
case: https://sudoku-sleuth.com/cases/fogzilla
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r5c7 colour "white"
kropki-2: kropki r3c6-r3c7 colour "white"
kropki-3: kropki r3c3-r4c3 colour "white"
kropki-4: kropki r1c2-r1c3 colour "white"
kropki-5: kropki r5c5-r5c6 colour "black"
kropki-6: kropki r5c7-r6c7 colour "black"
kropki-7: kropki r6c3-r7c3 colour "black"
kropki-8: kropki r9c5-r9c6 colour "black"
whispers-1: whispers r6c4-r6c5-r6c6 gap 5
whispers-2: whispers r3c6-r3c5-r3c4 gap 5
whispers-3: whispers r6c2-r7c2-r8c2-r8c3-r8c4 gap 5
whispers-4: whispers r7c8-r8c8-r8c7 gap 5
renban-1: renban r4c5-r5c5-r6c5
renban-2: renban r4c3-r5c3-r6c3
renban-3: renban r2c6-r2c7-r2c8-r3c8-r4c8
renban-4: renban r3c2-r2c2-r2c3
pair-1: pair r4c4-r4c5 sum 10
pair-2: pair r3c7-r4c7 sum 10
pair-3: pair r3c3-r3c4 sum 10
pair-4: pair r2c5-r2c6 sum 10
pair-5: pair r4c5-r4c6 sum 5
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5.
