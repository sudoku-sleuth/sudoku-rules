---
fog:
  initiallyLit:
    - r4c4
    - r4c5
    - r4c6
    - r5c4
    - r5c5
    - r5c6
    - r6c4
    - r6c5
    - r6c6
format: open-rules
title: Foglo Picasso
setter: Meggen033
source: https://sudokupad.app/92zuv8n24l
case: https://sudoku-sleuth.com/cases/foglo-picasso
library: https://rules.sudoku-sleuth.com/
status: read
exported: b90249b4be15dd4fd174f127c0034d10
---

```rules
sudoku 9x9
kropki-1: kropki r7c6-r7c7 black
kropki-2: kropki r6c7-r7c7 black
kropki-3: kropki r3c2-r3c3 black
kropki-4: kropki r2c3-r3c3 black
kropki-5: kropki r5c2-r5c3 black
kropki-6: kropki r1c3-r1c4 black
kropki-7: kropki r1c7-r2c7 black
kropki-8: kropki r8c8-r8c9 black
kropki-9: kropki r4c9-r5c9 black
whispers-1: whispers r4c5-r4c6-r5c6 gap 5
whispers-2: whispers r5c4-r6c4-r6c5 gap 5
whispers-3: whispers r5c3-r4c3-r3c3-r3c4-r3c5 gap 5
whispers-4: whispers r7c8-r8c8-r9c8 gap 5
renban-1: renban r6c5-r6c6-r5c6
renban-2: renban r6c4-r5c5-r4c6
renban-3: renban r7c5-r7c6-r7c7-r6c7-r5c7
renban-4: renban r2c4-r2c5-r2c6-r3c6
renban-5: renban r1c8-r2c8-r3c8
renban-6: renban r3c1-r3c2-r4c2-r5c1-r6c1
renban-7: renban r8c3-r7c3-r7c2-r7c1
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•       Digits along a magenta renban line form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are given.
