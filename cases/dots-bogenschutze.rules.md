---
format: open-rules
title: Dots & Bogenschütze
setter: Meggen033
source: https://sudokupad.app/wg6vi4rgs8
case: https://sudoku-sleuth.com/cases/dots-bogenschutze
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r5c4 colour "white"
kropki-2: kropki r7c7-r8c7 colour "white"
kropki-3: kropki r7c7-r7c8 colour "white"
kropki-4: kropki r7c3-r7c4 colour "white"
kropki-5: kropki r8c1-r9c1 colour "white"
kropki-6: kropki r4c4-r4c5 colour "black"
kropki-7: kropki r3c7-r4c7 colour "black"
kropki-8: kropki r1c8-r1c9 colour "black"
kropki-9: kropki r1c6-r2c6 colour "black"
arrow-1: arrow r9c4-r8c4-r7c4 bulb ["r9c5"]
arrow-2: arrow r4c9-r4c8-r4c7 bulb ["r5c9"]
arrow-3: arrow r7c2-r7c3 bulb ["r7c1"]
arrow-4: arrow r2c7-r3c7 bulb ["r1c7"]
arrow-5: arrow r3c1-r3c2 bulb ["r2c1"]
arrow-6: arrow r1c3-r2c3 bulb ["r1c2"]
whispers-1: whispers r4c1-r4c2-r4c3-r4c4-r3c4-r2c4-r1c4 gap 5
whispers-2: whispers r9c7-r9c8-r9c9-r8c9-r7c9 gap 5
whispers-3: whispers r1c1-r2c2-r3c3 gap 5
```

•   Normal Sudoku rules apply.  
•   The digits along each arrow must sum to the digit in the circled cell.
•   Adjacent digits along a green German Whisper line must have a difference of at least 5.
•   A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
