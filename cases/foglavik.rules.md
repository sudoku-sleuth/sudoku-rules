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
title: Foglavik
setter: Meggen033
source: https://sudokupad.app/8jc0n3w1lb
case: https://sudoku-sleuth.com/cases/foglavik
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r5c6-r5c7 colour "white"
kropki-3: kropki r2c6-r3c6 colour "white"
kropki-4: kropki r7c5-r7c6 colour "white"
kropki-5: kropki r5c2-r6c2 colour "white"
kropki-6: kropki r9c4-r9c5 colour "white"
kropki-7: kropki r5c5-r5c6 colour "black"
kropki-8: kropki r3c5-r4c5 colour "black"
kropki-9: kropki r7c2-r7c3 colour "black"
kropki-10: kropki r4c8-r5c8 colour "black"
whispers-1: whispers r4c4-r5c4-r6c4-r6c5-r6c6 gap 5
whispers-2: whispers r3c4-r2c4-r2c5 gap 5
whispers-3: whispers r6c7-r7c7 gap 5
whispers-4: whispers r6c8-r6c7 gap 5
whispers-5: whispers r3c3-r3c4 gap 5
whispers-6: whispers r5c8-r5c9-r4c9 gap 5
whispers-7: whispers r7c2-r8c2-r8c3 gap 5
renban-1: renban r4c4-r4c5-r4c6-r5c6-r6c6
renban-2: renban r5c4-r5c5-r6c5
renban-3: renban r3c5-r3c6-r3c7-r4c7-r5c7
renban-4: renban r7c4-r7c3-r6c3
renban-5: renban r6c2-r7c1-r8c1
pair-1: pair r5c3-r6c3 relation {"op":"sum","value":10}
pair-2: pair r7c8-r8c8 relation {"op":"sum","value":10}
pair-3: pair r2c2-r3c2 relation {"op":"sum","value":10}
pair-4: pair r7c4-r7c5 relation {"op":"sum","value":5}
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5.
