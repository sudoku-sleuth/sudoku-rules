---
fog:
  initiallyLit:
    - 18
    - 19
    - 20
    - 21
    - 23
    - 24
    - 25
format: open-rules
title: This FOG is a Pointy GAS
setter: Meggen033
source: https://sudokupad.app/rx9d92ce9y
case: https://sudoku-sleuth.com/cases/this-fog-is-a-pointy-gas
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r3c5-r4c5 colour "white"
kropki-3: kropki r6c7-r7c7 colour "white"
kropki-4: kropki r5c9-r6c9 colour "white"
kropki-5: kropki r5c8-r6c8 colour "white"
kropki-6: kropki r3c7-r3c8 colour "black"
kropki-7: kropki r4c6-r5c6 colour "black"
kropki-8: kropki r5c3-r6c3 colour "black"
kropki-9: kropki r7c5-r8c5 colour "black"
kropki-10: kropki r6c7-r6c8 colour "black"
arrow-1: arrow r3c3-r3c2-r3c1 bulb ["r3c4"]
arrow-2: arrow r3c7-r3c8 bulb ["r3c6"]
arrow-3: arrow r3c5-r4c5 bulb ["r2c5"]
arrow-4: arrow r2c2-r2c3-r2c4 bulb ["r2c1"]
arrow-5: arrow r2c9-r2c8 bulb ["r3c9"]
arrow-6: arrow r5c6-r4c6 bulb ["r5c5"]
arrow-7: arrow r6c5-r6c6 bulb ["r6c4"]
arrow-8: arrow r6c3-r5c3 bulb ["r7c4"]
arrow-9: arrow r8c5-r7c5 bulb ["r8c4"]
arrow-10: arrow r7c7-r6c7 bulb ["r7c6"]
arrow-11: arrow r6c9-r5c9 bulb ["r7c9"]
arrow-12: arrow r6c1-r7c1 bulb ["r5c1"]
arrow-13: arrow r8c8-r8c7 bulb ["r7c8"]
arrow-14: arrow r8c2-r9c2 bulb ["r7c2"]
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	The digits along each arrow must sum to the digit in the circled cell.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
