---
format: open-rules
title: Wiggly worm
setter: Chip Sounder
source: https://sudokupad.app/3zzlmy7a00
case: https://sudoku-sleuth.com/cases/wiggly-worm
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c2-r9c1-r9c2 total 21 connected true
cage-2: cage r5c5-r5c6-r5c7-r5c8-r5c9-r6c5-r7c5-r8c5-r9c5 connected true
cage-3: cage r7c6-r8c6-r9c6 total 14 connected true
cage-4: cage r6c6-r6c7-r6c8-r6c9 total 17 connected true
kropki-1: kropki r2c4-r2c5 colour "black"
kropki-2: kropki r2c5-r2c6 colour "black"
kropki-3: kropki r3c1-r4c1 colour "black"
kropki-4: kropki r7c8-r8c8 colour "black"
kropki-5: kropki r9c8-r9c9 colour "black"
kropki-6: kropki r1c3-r1c4 colour "white"
kropki-7: kropki r1c4-r1c5 colour "white"
kropki-8: kropki r1c5-r1c6 colour "white"
kropki-9: kropki r1c6-r1c7 colour "white"
kropki-10: kropki r1c7-r1c8 colour "white"
kropki-11: kropki r1c8-r1c9 colour "white"
kropki-12: kropki r4c1-r5c1 colour "white"
kropki-13: kropki r5c7-r6c7 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,8.5],[0.5,7.5],[1.5,6.5],[0.5,5.5],[1.5,4.5],[0.5,3.5],[1.5,2.5],[2.5,3.5],[3.5,2.5],[3.5,1.5],[2.5,1.5],[3.5,0.5],[4.5,1.5],[5.5,0.5],[6.5,1.5],[7.5,0.5],[6.5,0.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along a grey line must read the same forwards as backwards.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
Digits in a dotted cage without repeat sum to the total in the top left corner of the cage (if given).
