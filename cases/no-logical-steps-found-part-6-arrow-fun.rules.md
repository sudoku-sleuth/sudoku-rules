---
format: open-rules
title: No logical steps found part 6.. arrow fun
setter: Chip Sounder
source: https://sudokupad.app/crrnjy9jtp
case: https://sudoku-sleuth.com/cases/no-logical-steps-found-part-6-arrow-fun
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r8c4-r9c4 colour "black"
kropki-2: kropki r5c1-r5c2 colour "black"
kropki-3: kropki r6c7-r6c8 colour "black"
kropki-4: kropki r4c6-r4c7 colour "black"
kropki-5: kropki r7c2-r7c3 colour "black"
kropki-6: kropki r7c1-r8c1 colour "white"
kropki-7: kropki r9c5-r9c6 colour "white"
arrow-1: arrow r2c2-r2c3 bulb ["r1c1"]
arrow-2: arrow r4c1-r5c1 bulb ["r3c2"]
arrow-3: arrow r2c4-r3c4-r3c3 bulb ["r1c5"]
arrow-4: arrow r5c5-r5c6 bulb ["r6c4"]
arrow-5: arrow r5c9-r5c8-r5c7 bulb ["r4c9"]
arrow-6: arrow r8c4-r9c4 bulb ["r7c4"]
arrow-7: arrow r7c5-r7c6 bulb ["r7c4"]
little-killer r6c9-r7c8-r8c7-r9c6 sum 20
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,5.5],[4.5,1.5],[8.5,1.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[5.5,2.5],[3.5,4.5],[3.5,7.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

For some reason, the computer solver has no idea what to do, can you help?
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along a grey line must read the same forwards as backwards.
Digits on a green arrow line must sum to the digit in the connected green circle, digits may repeat if other rules allow.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat if other rules allow.
No negative constraints.
