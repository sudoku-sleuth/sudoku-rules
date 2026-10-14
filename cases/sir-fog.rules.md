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
title: Sir Fog
setter: Meggen033
source: https://sudokupad.app/3tpm6ypyas
case: https://sudoku-sleuth.com/cases/sir-fog
library: https://rules.sudoku-sleuth.com/
status: read
exported: 31f84453bd2422def356367e7abd11a3
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r5c4 white
kropki-2: kropki r6c4-r6c5 white
kropki-3: kropki r5c7-r6c7 white
kropki-4: kropki r4c7-r5c7 white
kropki-5: kropki r7c6-r7c7 white
kropki-6: kropki r3c3-r4c3 white
kropki-7: kropki r1c6-r2c6 white
kropki-8: kropki r5c7-r5c8 black
kropki-9: kropki r7c5-r8c5 black
kropki-10: kropki r6c7-r7c7 black
kropki-11: kropki r3c3-r3c4 black
kropki-12: kropki r2c8-r2c9 black
whispers-1: whispers r4c5-r4c6-r5c6 gap 5
whispers-2: whispers r7c6-r8c6 gap 5
whispers-3: whispers r6c3-r5c3-r4c3 gap 5
whispers-4: whispers r7c1-r7c2-r8c2 gap 5
whispers-5: whispers r9c4-r9c3 gap 5
renban-1: renban r4c4-r5c5-r6c6
renban-2: renban r3c4-r3c5-r3c6
renban-3: renban r3c2-r2c2-r2c3
quadruple-1: quadruple r5c4-r5c5-r6c4-r6c5 digits [2,8]
quadruple-2: quadruple r4c5-r4c6-r5c5-r5c6 digits [4,6]
quadruple-3: quadruple r3c8-r3c9-r4c8-r4c9 digits [2,5,7]
quadruple-4: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,4,6,9]
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits in a white circle must appear at least once in the four surrounding cells.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
