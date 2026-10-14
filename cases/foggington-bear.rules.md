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
title: Foggington Bear
setter: Meggen033
source: https://sudokupad.app/mcigx8govd
case: https://sudoku-sleuth.com/cases/foggington-bear
library: https://rules.sudoku-sleuth.com/
status: read
exported: 031924dd077073661a7a4a1c3fc111b6
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r7c4-r8c4 white
kropki-4: kropki r7c6-r8c6 white
kropki-5: kropki r2c4-r2c5 white
kropki-6: kropki r2c5-r2c6 white
kropki-7: kropki r9c6-r9c7 white
kropki-8: kropki r8c7-r8c8 white
kropki-9: kropki r6c2-r6c3 white
kropki-10: kropki r6c1-r6c2 white
kropki-11: kropki r2c2-r3c2 white
kropki-12: kropki r2c1-r3c1 white
kropki-13: kropki r6c8-r6c9 white
kropki-14: kropki r5c5-r6c5 black
kropki-15: kropki r8c3-r9c3 black
kropki-16: kropki r7c3-r8c3 black
kropki-17: kropki r5c2-r6c2 black
kropki-18: kropki r3c1-r3c2 black
kropki-19: kropki r1c7-r1c8 black
whispers-1: whispers r4c4-r3c5-r4c6 gap 5
whispers-2: whispers r7c6-r7c5-r8c5 gap 5
whispers-3: whispers r7c5-r7c4 gap 5
whispers-4: whispers r8c2-r9c3 gap 5
renban-1: renban r6c4-r6c5-r6c6
renban-2: renban r7c2-r7c1-r8c1-r9c2
renban-3: renban r5c9-r4c9-r4c8-r3c8
parity-cells r4c4-r4c6 parity "odd"
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•       Cells with a filled circle must be odd.
•       Digits along a magenta renban line form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
