---
format: open-rules
title: No logical steps found part 4.. 2 years of setting
setter: Chip Sounder
source: https://sudokupad.app/blvlhs0oju
case: https://sudoku-sleuth.com/cases/no-logical-steps-found-part-4-2-years-of-setting
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r6c2=4 r6c8=5 r8c2=8 r8c8=7
exported: 306e78b98feb9e1c8358b513aeece7a2
---

```rules
sudoku 9x9
cage-1: cage r6c4-r6c5-r6c6-r7c4-r7c5-r7c6-r8c4-r8c5-r8c6 connected true
cage-2: cage r1c1-r2c1 total 9 connected true
cage-3: cage r3c1-r4c1 total 9 connected true
cage-4: cage r1c3-r2c3 total 9 connected true
cage-5: cage r1c7-r2c7 total 9 connected true
cage-6: cage r3c7-r4c7 total 9 connected true
cage-7: cage r6c9-r7c9-r8c9 total 15 connected true
cage-8: cage r3c3-r4c3-r5c3 total 15 connected true
kropki-1: kropki r9c4-r9c5 white
kropki-2: kropki r3c5-r4c5 white
kropki-3: kropki r2c7-r3c7 black
kropki-4: kropki r2c1-r3c1 black
kropki-5: kropki r4c6-r5c6 black
little-killer-1: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 30
little-killer-2: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 30
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[6.5,1.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,7.5],[6.5,7.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,5.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[1.5,2.5],[1.5,1.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

For some reason, the computer solver has no idea what to do, can you help?
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage without repeat sum to the total in the top left corner of the cage (if given).
Digits on a grey line must read the same forwards as backwards.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat.
No negative constraints.
