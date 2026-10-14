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
title: Foganapur
setter: Meggen033
source: https://sudokupad.app/z3e4zdx0l9
case: https://sudoku-sleuth.com/cases/foganapur
library: https://rules.sudoku-sleuth.com/
status: read
exported: fe51a79d397e19452cdea53c1dbcd078
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r6c4 white
kropki-2: kropki r4c3-r5c3 white
kropki-3: kropki r3c1-r3c2 white
kropki-4: kropki r6c3-r7c3 white
kropki-5: kropki r7c5-r7c6 white
kropki-6: kropki r4c8-r5c8 white
kropki-7: kropki r3c8-r4c8 white
kropki-8: kropki r1c6-r1c7 white
kropki-9: kropki r4c3-r4c4 black
kropki-10: kropki r7c4-r8c4 black
kropki-11: kropki r1c7-r2c7 black
whispers-1: whispers r6c4-r6c5 gap 5
whispers-2: whispers r4c4-r5c4 gap 5
whispers-3: whispers r7c1-r7c2-r8c2 gap 5
whispers-4: whispers r3c7-r4c7-r5c7 gap 5
renban-1: renban r5c5-r6c5-r6c6-r5c6
renban-2: renban r5c2-r6c2-r6c3-r7c3-r7c4
renban-3: renban r2c6-r2c7-r2c8-r3c8-r4c8
quadruple-1: quadruple r4c5-r4c6-r5c5-r5c6 digits [1,5,9]
quadruple-2: quadruple r3c2-r3c3-r4c2-r4c3 digits [2,5,8]
quadruple-3: quadruple r7c6-r7c7-r8c6-r8c7 digits [6,7,9]
```

•    Normal Sudoku rules apply. 
•    Adjacent digits along a green German Whisper line must have a difference of at least 5.
•    Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    Digits in a white circle must appear at least once in the four surrounding cells.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
