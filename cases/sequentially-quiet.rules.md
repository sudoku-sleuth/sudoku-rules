---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
    - 40
format: open-rules
title: Sequentially Quiet
setter: Meggen033
source: https://sudokupad.app/29akakkb2u
case: https://sudoku-sleuth.com/cases/sequentially-quiet
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r4c6 colour "white"
kropki-2: kropki r4c3-r5c3 colour "white"
kropki-3: kropki r4c7-r5c7 colour "white"
kropki-4: kropki r2c6-r2c7 colour "white"
kropki-5: kropki r1c6-r1c7 colour "white"
kropki-6: kropki r5c7-r6c7 colour "white"
kropki-7: kropki r2c2-r2c3 colour "white"
kropki-8: kropki r1c9-r2c9 colour "white"
kropki-9: kropki r4c9-r5c9 colour "white"
kropki-10: kropki r9c3-r9c4 colour "white"
kropki-11: kropki r2c2-r3c2 colour "white"
kropki-12: kropki r8c6-r9c6 colour "white"
kropki-13: kropki r3c5-r4c5 colour "black"
kropki-14: kropki r1c6-r2c6 colour "black"
kropki-15: kropki r5c3-r5c4 colour "black"
kropki-16: kropki r5c6-r5c7 colour "black"
arrow-1: arrow r5c5-r4c4 bulb ["r4c6"]
arrow-2: arrow r3c7-r2c8 bulb ["r4c6"]
whispers-1: whispers r3c4-r3c5-r3c6 gap 5
whispers-2: whispers r2c5-r3c5 gap 5
whispers-3: whispers r3c7-r3c6 gap 5
whispers-4: whispers r1c5-r2c5 gap 5
whispers-5: whispers r3c3-r3c4 gap 5
whispers-6: whispers r7c3-r7c2-r8c2 gap 5
whispers-7: whispers r7c7-r7c8-r8c8 gap 5
renban-1: renban r6c3-r6c2-r5c2
renban-2: renban r7c9-r8c9-r9c9
renban-3: renban r4c4-r4c5-r4c6-r5c5
```

Normal Sudoku rules apply. 

Digits along a megenta Renban line form a set of consecutive non-repeating digits in any order.  The Renban line may branch.

The digits along each arrow must sum to the digit in the circled cell.

Adjacent digits along a green german whisper line must have a difference of at least 5.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.
