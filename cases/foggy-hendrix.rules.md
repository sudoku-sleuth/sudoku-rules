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
title: Foggy Hendrix
setter: Meggen033
source: https://sudokupad.app/kp9283x4h8
case: https://sudoku-sleuth.com/cases/foggy-hendrix
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8ddc815ca201f25f90625612080d39ef
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 black
kropki-2: kropki r4c5-r5c5 black
kropki-3: kropki r6c7-r7c7 black
kropki-4: kropki r7c6-r7c7 black
arrow-1: arrow r5c4-r4c4 bulb ["r6c4"]
arrow-2: arrow r4c3-r3c3-r3c4-r3c5 bulb ["r5c3"]
arrow-3: arrow r2c5-r3c6 bulb ["r2c4"]
arrow-4: arrow r8c6-r8c7-r7c8-r6c8 bulb ["r8c5"]
arrow-5: arrow r7c9-r6c9 bulb ["r8c8"]
arrow-6: arrow r9c2-r9c3 bulb ["r8c2"]
arrow-7: arrow r2c8-r1c9 bulb ["r2c7"]
whispers-1: whispers r6c4-r6c5-r6c6 gap 5
whispers-2: whispers r6c7-r5c7-r4c7 gap 5
renban-1: renban r4c6-r5c6-r6c6
renban-2: renban r7c6-r7c5-r7c4
renban-3: renban r8c3-r7c3
renban-4: renban r1c2-r2c2-r3c2
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	The digits along each arrow must sum to the digit in the circled cell.  Digits may repeat along arrows if allowed by other rules.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order
•	A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.
