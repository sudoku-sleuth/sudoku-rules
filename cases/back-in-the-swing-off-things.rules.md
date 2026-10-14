---
format: open-rules
title: Back in the swing off things
setter: Chip Sounder
source: https://sudokupad.app/qlntum677c
case: https://sudoku-sleuth.com/cases/back-in-the-swing-off-things
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 35afc9a54dc141bf6e15822a7ade179c
---

```rules
sudoku 9x9
cage-1: cage r6c4-r6c5 total 5 connected true
cage-2: cage r1c6-r2c6 total 13 connected true
cage-3: cage r1c5-r2c4-r2c5-r3c4-r4c3-r4c4-r5c2-r5c3-r5c4 connected true
cage-4: cage r4c1-r4c2-r5c1 total 12 connected true
cage-5: cage r3c5-r4c5-r5c5 total 16 connected true
cage-6: cage r6c6-r7c6 total 9 connected true
cage-7: cage r1c3-r2c3 total 9 connected true
kropki-1: kropki r6c8-r6c9 black
kropki-2: kropki r7c1-r8c1 black
kropki-3: kropki r1c8-r1c9 white
kropki-4: kropki r8c1-r9c1 white
kropki-5: kropki r1c5-r1c6 white
little-killer-1: little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 18
little-killer-2: little-killer r1c4-r2c3-r3c2-r4c1 sum 14
little-killer-3: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 44
parity-cells r1c4 parity "even"
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,1.5],[6.5,2.5],[7.5,2.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[2.5,3.5],[2.5,4.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[6.5,5.5],[5.5,6.5],[5.5,8.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5],[3.5,2.5],[4.5,2.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,5.5],[2.5,6.5],[2.5,7.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.  Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along a bold grey line must read the same thing forwards as backwards.
Clues outside the grid give the sum of the digits along the indicated diagonal, digits may repeat if other rules allow.
Digits in a dotted cage without repeat sum to the total in the top left most cell of the cage (if given).
Cells with a grey highlighted square is even parity.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
No negative constraints.
