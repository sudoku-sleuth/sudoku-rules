---
format: open-rules
title: Lucky 7
setter: Chip Sounder
source: https://sudokupad.app/9gut32e5n7
case: https://sudoku-sleuth.com/cases/lucky-7
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=7
---

```rules
sudoku 9x9
kropki-1: kropki r7c4-r7c5 colour "black"
kropki-2: kropki r9c8-r9c9 colour "black"
kropki-3: kropki r2c9-r3c9 colour "black"
kropki-4: kropki r1c8-r2c8 colour "black"
kropki-5: kropki r4c7-r4c8 colour "black"
kropki-6: kropki r5c1-r5c2 colour "black"
kropki-7: kropki r1c1-r1c2 colour "black"
kropki-8: kropki r2c6-r2c7 colour "black"
kropki-9: kropki r5c8-r6c8 colour "white"
arrow-1: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-2: arrow r9c2-r9c3-r9c4 bulb ["r9c1"]
arrow-3: arrow r7c3-r7c2 bulb ["r6c3"]
arrow-4: arrow r7c7-r7c8-r7c9 bulb ["r6c6"]
arrow-5: arrow r6c8-r6c7 bulb ["r6c9"]
arrow-6: arrow r6c5-r6c4 bulb ["r5c6"]
arrow-7: arrow r5c7-r5c8 bulb ["r5c6"]
arrow-8: arrow r9c7-r9c6 bulb ["r8c8"]
arrow-9: arrow r5c2-r5c3 bulb ["r6c1"]
arrow-10: arrow r2c7-r3c7 bulb ["r1c7"]
arrow-11: arrow r2c5-r3c5-r4c5 bulb ["r1c5"]
arrow-12: arrow r1c1-r1c2 bulb ["r2c2"]
arrow-13: arrow r4c3-r4c4 bulb ["r4c2"]
```

Normal 9x9 sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits on an arrowed line sum to the digit in the connected circle. If a circle has 2 arrows, both arrows sum to the circle individually.
Cells separated a black dot has a 1:2 ratio (one digit is double the other).
Cells separated by a white dot are consecutive.
Not all dots are necessarily given.
