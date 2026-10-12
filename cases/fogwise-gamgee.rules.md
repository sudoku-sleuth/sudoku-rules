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
title: Fogwise Gamgee
setter: Meggen033
source: https://sudokupad.app/wgnzlfx0ds
case: https://sudoku-sleuth.com/cases/fogwise-gamgee
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c6-r5c6 colour "white"
kropki-2: kropki r4c7-r5c7 colour "white"
kropki-3: kropki r7c4-r8c4 colour "white"
kropki-4: kropki r5c8-r5c9 colour "white"
kropki-5: kropki r5c6-r6c6 colour "white"
kropki-6: kropki r6c7-r6c8 colour "black"
kropki-7: kropki r7c3-r7c4 colour "black"
kropki-8: kropki r8c9-r9c9 colour "black"
arrow-1: arrow r6c4-r5c4-r4c4 bulb ["r6c5"]
arrow-2: arrow r4c6-r5c6 bulb ["r4c5"]
arrow-3: arrow r3c6-r3c7-r4c7 bulb ["r3c5"]
arrow-4: arrow r7c6-r7c7 bulb ["r7c5"]
arrow-5: arrow r8c3-r7c3 bulb ["r9c4"]
arrow-6: arrow r8c8-r8c7 bulb ["r7c8"]
arrow-7: arrow r5c3-r4c3 bulb ["r6c3"]
arrow-8: arrow r5c2-r6c2 bulb ["r4c2"]
whispers-1: whispers r6c4-r5c5-r4c6 gap 5
whispers-2: whispers r2c7-r3c7-r3c8 gap 5
whispers-3: whispers r1c7-r2c7 gap 5
whispers-4: whispers r3c9-r3c8 gap 5
whispers-5: whispers r1c1-r2c2-r1c3 gap 5
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	The digits along each arrow must sum to the digit in the circled cell.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
