---
format: open-rules
title: Big Cage, Little Cage
setter: Chip Sounder
source: https://sudokupad.app/1bccosbpww
case: https://sudoku-sleuth.com/cases/big-cage-little-cage
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c2=5 r9c2=1
---

```rules
sudoku 9x9
cage-1: cage r8c2-r8c3-r8c4-r8c5-r9c2-r9c3-r9c4-r9c5 total 40 connected true
cage-2: cage r4c1-r4c2-r5c1-r5c2-r6c1-r6c2-r7c1-r7c2 total 40 connected true
cage-3: cage r1c1-r1c2 total 10 connected true
cage-4: cage r1c3-r2c3 total 10 connected true
cage-5: cage r8c9-r9c9 total 10 connected true
cage-6: cage r8c7-r9c7-r9c8 total 15 connected true
cage-7: cage r2c1-r2c2 total 5 connected true
cage-8: cage r4c4-r4c5 total 7 connected true
cage-9: cage r1c5-r1c6-r1c7-r1c8-r2c5-r2c6-r2c7-r2c8 total 40 connected true
cage-10: cage r4c8-r5c8 total 11 connected true
cage-11: cage r7c8-r8c8 total 10 connected true
kropki-1: kropki r5c4-r5c5 colour "black"
kropki-2: kropki r6c1-r7c1 colour "black"
kropki-3: kropki r1c7-r1c8 colour "black"
kropki-4: kropki r5c8-r6c8 colour "black"
kropki-5: kropki r8c6-r9c6 colour "white"
kropki-6: kropki r5c1-r6c1 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[6.5,5.5],[6.5,4.5],[5.5,3.5],[4.5,3.5],[4.5,4.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[6.5,8.5],[6.5,7.5],[5.5,6.5],[4.5,6.5],[3.5,5.5],[3.5,4.5],[2.5,5.5],[2.5,7.5],[1.5,7.5],[0.5,6.5],[1.5,5.5],[1.5,4.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeating a digit.
Digits on the grey line must read the same forwards as backwards.
Cells separated by a black dot has one digit double the other.
Cells separated by a white dot are consecutive.
Not all dots are given.
