---
fog:
  initiallyLit:
    - 2
    - 11
    - 18
    - 19
    - 20
format: open-rules
title: Hush Through the Fog
setter: Meggen033
source: https://sudokupad.app/5ob5w1qpg3
case: https://sudoku-sleuth.com/cases/hush-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r2c3-r3c3 colour "white"
kropki-3: kropki r2c1-r3c1 colour "white"
kropki-4: kropki r4c6-r4c7 colour "white"
kropki-5: kropki r7c6-r7c7 colour "white"
kropki-6: kropki r2c2-r3c2 colour "black"
kropki-7: kropki r2c6-r3c6 colour "black"
kropki-8: kropki r1c4-r2c4 colour "black"
whispers r2c1-r3c2-r4c2-r5c2-r6c3-r7c3-r8c2-r9c2-r9c3-r8c4-r7c5-r6c5-r7c6-r8c7-r9c8-r8c9-r7c8-r6c7-r5c6-r4c7-r3c8-r3c7-r2c7-r1c8-r1c7-r2c6-r2c5-r2c4-r3c4-r2c3-r2c2 gap 5
pair-1: pair r3c1-r3c2 relation {"op":"sum","value":10}
pair-2: pair r1c3-r2c3 relation {"op":"sum","value":10}
pair-3: pair r3c4-r4c4 relation {"op":"sum","value":10}
pair-4: pair r4c1-r4c2 relation {"op":"sum","value":10}
```

•    Normal Sudoku rules apply. 
•    THERE IS ONE, AND ONLY ONE, green German Whisper line, along which, adjacent digits must have a difference of at least 5.
•    Adjacent cells connected with a X must sum to 10.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.  No guessing is required.
