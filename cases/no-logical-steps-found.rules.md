---
format: open-rules
title: No logical steps found?
setter: Chip Sounder
source: https://sudokupad.app/xywgeb41sj
case: https://sudoku-sleuth.com/cases/no-logical-steps-found
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 1c2cdc4a25b645ced436fff0fd20f9d1
---

```rules
sudoku 9x9
cage-1: cage r7c3-r7c4-r7c5-r8c3-r8c4-r8c5-r9c3-r9c4-r9c5 connected true
cage-2: cage r5c1-r5c2-r6c1-r6c2 total 22 connected true
cage-3: cage r5c8-r5c9-r6c8-r6c9 total 23 connected true
cage-4: cage r7c7-r8c7-r9c7 total 15 connected true
cage-5: cage r2c1-r2c2-r3c1-r3c2 total 15 connected true
cage-6: cage r5c6-r6c6 total 10 connected true
cage-7: cage r1c3-r1c4-r1c5 total 10 connected true
kropki-1: kropki r1c7-r2c7 black
kropki-2: kropki r4c7-r5c7 black
kropki-3: kropki r8c6-r9c6 black
little-killer-1: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 25
little-killer-2: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 34
little-killer-3: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 40
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,5.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,6.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,2.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[1.5,7.5],[1.5,8.5],[2.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[8.5,3.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,1.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
```

For some reason, the computer solver has no idea what to do, can you help?
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage without repeat sum to the total in the top left corner of the cage (if given).
Digits on a grey line must read the same forwards as backwards.
Digits on a purple line must not repeat and form a set of consecutive digits in any order.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat.
No negative constraints.
