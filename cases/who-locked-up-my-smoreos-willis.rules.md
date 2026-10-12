---
format: open-rules
title: Who locked up my smoreos Willis?
setter: Chip Sounder
source: https://sudokupad.app/qbnr6bhind
case: https://sudoku-sleuth.com/cases/who-locked-up-my-smoreos-willis
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4-r8c5-r9c3-r9c4-r9c5 total 32 connected true
cage-2: cage r1c5-r1c6-r1c7-r2c5-r2c6-r2c7 total 32 connected true
cage-3: cage r4c5-r5c5-r6c5 total 18 connected true
cage-4: cage r7c3-r7c4 total 5 connected true
cage-5: cage r1c3-r2c3-r3c3 total 10 connected true
cage-6: cage r7c7-r7c8-r8c7 total 8 connected true
cage-7: cage r5c8-r5c9-r6c9 total 19 connected true
anti-king
kropki-1: kropki r8c3-r9c3 colour "black"
kropki-2: kropki r8c5-r9c5 colour "black"
kropki-3: kropki r1c5-r2c5 colour "black"
kropki-4: kropki r1c7-r2c7 colour "black"
kropki-5: kropki r5c6-r6c6 colour "black"
kropki-6: kropki r8c4-r9c4 colour "white"
kropki-7: kropki r1c6-r2c6 colour "white"
kropki-8: kropki r2c8-r2c9 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,6.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,3.5],[1.5,4.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,1.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,0.5],[6.5,0.5],[7.5,1.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a king's move (in chess) cannot contain the same digit.
Digits in a dotted cage sum to the total given without repeats.
Cells separated by a black dot has one digit double the other. (1:2 ratio).
Cells separated by a white dot are consecutive.
Adjacent digits along a red line must alternate parity.
