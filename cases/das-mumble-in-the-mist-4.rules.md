---
fog:
  initiallyLit:
    - 0
    - 1
    - 2
    - 9
    - 10
    - 11
    - 18
    - 19
    - 20
format: open-rules
title: Das Mumble in the Mist
setter: Meggen033
source: https://sudokupad.app/fdhk9l3aau
case: https://sudoku-sleuth.com/cases/das-mumble-in-the-mist-4
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r1c1-r2c1 colour "white"
kropki-3: kropki r3c8-r3c9 colour "white"
kropki-4: kropki r4c4-r5c4 colour "white"
kropki-5: kropki r4c4-r4c5 colour "white"
kropki-6: kropki r9c4-r9c5 colour "white"
kropki-7: kropki r3c3-r3c4 colour "black"
kropki-8: kropki r3c5-r3c6 colour "black"
kropki-9: kropki r4c8-r5c8 colour "black"
kropki-10: kropki r7c6-r7c7 colour "black"
whispers r2c1-r2c2-r3c2-r4c1-r5c2-r6c3-r7c3-r8c2-r9c1-r9c2-r9c3-r8c4-r7c4-r6c5-r6c6-r7c7-r8c8-r7c8-r6c8-r5c7-r4c7-r4c6-r4c5-r3c6-r2c7-r1c8-r1c7-r1c6-r2c5-r3c4-r2c3-r1c2 gap 5
pair-1: pair r2c2-r2c3 sum 10
pair-2: pair r3c2-r3c3 sum 10
pair-3: pair r9c3-r9c4 sum 10
```

•    Normal Sudoku rules apply. 
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•    THERE IS ONE, AND ONLY ONE, green German Whisper line, along which, adjacent digits must have a difference of at least 5.
•    A black dot between cells indicates cell values with a 2:1 ratio.  A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    Adjacent cells connected with an X must sum to 10.
