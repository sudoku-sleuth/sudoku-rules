---
fog:
  initiallyLit:
    - 10
    - 11
    - 12
    - 19
    - 20
    - 21
    - 28
    - 29
    - 30
format: open-rules
title: One Knight's Foggy Arrow
setter: Meggen033
source: https://sudokupad.app/t39p1101v7
case: https://sudoku-sleuth.com/cases/one-knight-s-foggy-arrow
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight stated true
kropki-1: kropki r2c2-r2c3 colour "white"
kropki-2: kropki r6c3-r7c3 colour "white"
kropki-3: kropki r3c6-r3c7 colour "black"
arrow-1: arrow r3c4-r2c4 bulb ["r4c4"]
arrow-2: arrow r3c3-r2c2 bulb ["r4c4"]
arrow-3: arrow r4c3-r4c2 bulb ["r4c4"]
arrow-4: arrow r5c3-r5c4 bulb ["r5c2"]
arrow-5: arrow r3c5-r4c5 bulb ["r2c5"]
arrow-6: arrow r4c6-r3c6 bulb ["r5c6"]
arrow-7: arrow r6c4-r6c3-r6c2 bulb ["r6c5"]
arrow-8: arrow r8c9-r9c8 bulb ["r9c9"]
pair-1: pair r3c3-r4c3 relation {"op":"sum","value":10}
pair-2: pair r3c3-r3c4 relation {"op":"sum","value":5}
pair-3: pair r7c8-r8c8 relation {"op":"sum","value":5}
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	The digits along each arrow must sum to the digit in the circled cell.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
