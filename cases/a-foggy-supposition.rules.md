---
fog:
  initiallyLit: []
format: open-rules
title: A Foggy Supposition
setter: Meggen033
source: https://sudokupad.app/0m4z1odmqf
case: https://sudoku-sleuth.com/cases/a-foggy-supposition
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9c87e515b818521ce837c52d8fc26f94
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r4c6 black
kropki-2: kropki r6c4-r6c5 black
kropki-3: kropki r5c3-r5c4 black
kropki-4: kropki r4c2-r4c3 black
kropki-5: kropki r3c8-r4c8 black
kropki-6: kropki r2c7-r3c7 black
kropki-7: kropki r3c3-r3c4 black
kropki-8: kropki r8c8-r8c9 black
whispers-1: whispers r6c5-r6c6 gap 5
whispers-2: whispers r4c5-r4c4 gap 5
whispers-3: whispers r6c4-r6c3 gap 5
whispers-4: whispers r5c7-r5c8 gap 5
whispers-5: whispers r4c9-r5c9-r6c9 gap 5
whispers-6: whispers r7c3-r7c4-r7c5-r7c6-r7c7 gap 5
whispers-7: whispers r3c4-r3c5-r3c6 gap 5
whispers-8: whispers r9c7-r9c8-r8c8 gap 5
whispers-9: whispers r1c2-r2c2-r2c1 gap 5
whispers-10: whispers r2c6-r1c7-r1c8 gap 5
renban-1: renban r5c4-r4c5-r5c6-r6c5
renban-2: renban r4c3-r5c3-r6c3
renban-3: renban r3c9-r3c8-r3c7
renban-4: renban r6c2-r7c2-r7c3
renban-5: renban r8c6-r8c7-r7c7
```

•	Normal Sudoku rules apply. 
•	The grid is covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required (Except for the cell in Row 5 Column 5).
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are given.
