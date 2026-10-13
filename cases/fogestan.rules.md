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
title: Fogestan
setter: Meggen033
source: https://sudokupad.app/hmdvgku8io
case: https://sudoku-sleuth.com/cases/fogestan
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r6c6-r6c7 colour "white"
kropki-3: kropki r3c2-r4c2 colour "white"
kropki-4: kropki r1c4-r2c4 colour "white"
kropki-5: kropki r1c1-r2c1 colour "white"
kropki-6: kropki r5c7-r6c7 colour "black"
kropki-7: kropki r7c5-r7c6 colour "black"
arrow-1: arrow r5c5-r6c6 bulb ["r4c4"]
arrow-2: arrow r3c6-r3c7 bulb ["r3c5"]
arrow-3: arrow r3c4-r3c3 bulb ["r3c5"]
arrow-4: arrow r6c2-r6c1 bulb ["r5c3"]
arrow-5: arrow r8c7-r8c8-r7c8 bulb ["r8c6"]
arrow-6: arrow r9c9-r8c9 bulb ["r9c8"]
arrow-7: arrow r2c9-r2c8 bulb ["r3c9"]
whispers-1: whispers r5c4-r6c5-r5c6 gap 5
whispers-2: whispers r5c2-r4c3-r3c4-r2c5-r3c6-r4c7-r5c8 gap 5
renban-1: renban r5c4-r4c5-r5c6
renban-2: renban r5c2-r6c3-r7c4-r8c5-r7c6-r6c7-r5c8
pair-1: pair r4c5-r4c6 sum 10
pair-2: pair r6c4-r6c5 sum 10
pair-3: pair r4c7-r5c7 sum 10
pair-4: pair r7c6-r7c7 sum 10
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	The digits along each arrow must sum to the digit in the circled cell.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Adjacent cells connected with a X must sum to 10.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
