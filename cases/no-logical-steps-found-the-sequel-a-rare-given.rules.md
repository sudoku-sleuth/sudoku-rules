---
format: open-rules
title: No logical steps found the sequel - A rare given
setter: Chip Sounder
source: https://sudokupad.app/7r9xbsfcoo
case: https://sudoku-sleuth.com/cases/no-logical-steps-found-the-sequel-a-rare-given
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r8c1=9
---

```rules
sudoku 9x9
cage-1: cage r8c7-r9c7 total 12 connected true
cage-2: cage r4c9-r5c9 total 12 connected true
cage-3: cage r9c1-r9c2-r9c3 total 13 connected true
cage-4: cage r1c8-r1c9 total 13 connected true
cage-5: cage r1c1-r2c1-r3c1 total 13 connected true
cage-6: cage r5c6-r6c6 total 10 connected true
kropki-1: kropki r3c8-r3c9 colour "black"
kropki-2: kropki r8c2-r8c3 colour "black"
kropki-3: kropki r4c2-r4c3 colour "black"
little-killer-1: little-killer r7c9-r8c8-r9c7 sum 11
little-killer-2: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 32
little-killer-3: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 41
little-killer-4: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 47
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[5.5,7.5],[7.5,5.5],[7.5,3.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,8.5],[8.5,5.5],[8.5,3.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[5.5,2.5],[3.5,2.5],[2.5,3.5],[2.5,5.5],[1.5,6.5],[2.5,6.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
```

For some reason, the computer solver has no idea what to do, can you help?
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage without repeat sum to the total in the top left corner of the cage (if given).
Digits on a grey line must read the same forwards as backwards.
Digits on a purple line must not repeat and form a set of consecutive digits in any order.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat.
No negative constraints.
