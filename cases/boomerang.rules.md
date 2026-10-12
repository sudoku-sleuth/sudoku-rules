---
format: open-rules
title: Boomerang
setter: Chip Sounder
source: https://sudokupad.app/xfpxgfnxyn
case: https://sudoku-sleuth.com/cases/boomerang
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 5 connected true
cage-2: cage r8c4-r9c4 total 5 connected true
cage-3: cage r8c6-r8c7 total 5 connected true
cage-4: cage r6c8-r7c8 total 5 connected true
cage-5: cage r5c6-r5c7 total 5 connected true
cage-6: cage r3c5-r4c5 total 5 connected true
cage-7: cage r3c1-r3c2 total 5 connected true
thermo-1: thermo r9c1-r9c2
thermo-2: thermo r8c4-r9c4
thermo-3: thermo r8c7-r8c6
thermo-4: thermo r7c8-r6c8
thermo-5: thermo r5c7-r5c6
thermo-6: thermo r4c5-r3c5
thermo-7: thermo r3c2-r3c1
thermo-8: thermo r2c9-r2c8
kropki-1: kropki r5c6-r6c6 colour "white"
kropki-2: kropki r4c4-r4c5 colour "white"
kropki-3: kropki r1c7-r2c7 colour "white"
kropki-4: kropki r3c9-r4c9 colour "white"
kropki-5: kropki r7c4-r8c4 colour "black"
kropki-6: kropki r5c5-r5c6 colour "black"
kropki-7: kropki r5c3-r5c4 colour "black"
little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 36
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,1.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,6.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,8.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,6.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,2.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,2.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,6.5],[7.5,7.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,8.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.
Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeat.
Digits on a grey bulbed line must rise from the bulb end.
Digits on a green line must differ by at least 5.
Digits on a normal gray line read the same forwards as backwards.
Cells separated by a white dot are consecutive.
Cells separated by a black dot has one digit double or half the other (1:2 ratio).
Not all dots are necessarily given.
Clues outside the grid sum the digits in the given direction without branching, digits may repeat (if other rules allow).
