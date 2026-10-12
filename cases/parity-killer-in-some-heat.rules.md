---
format: open-rules
title: Parity killer in some heat
setter: Chip Sounder
source: https://sudokupad.app/q2sdrehsw1
case: https://sudoku-sleuth.com/cases/parity-killer-in-some-heat
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3-r5c3-r6c3 total 16 connected true
cage-2: cage r2c4-r3c4 total 7 connected true
cage-3: cage r6c4-r7c4 total 7 connected true
cage-4: cage r6c6-r6c7 total 3 connected true
cage-5: cage r3c7-r4c7-r5c7 total 15 connected true
cage-6: cage r2c6-r3c6-r4c6 total 12 connected true
cage-7: cage r7c6-r8c6-r9c6 total 18 connected true
cage-8: cage r8c7-r8c8-r8c9 total 11 connected true
thermo-1: thermo r6c8-r5c8-r4c8-r4c9
thermo-2: thermo r1c8-r2c8-r3c8-r3c9
thermo-3: thermo r4c2-r4c1-r3c1
kropki-1: kropki r8c4-r9c4 colour "black"
kropki-2: kropki r7c3-r8c3 colour "black"
kropki-3: kropki r4c3-r5c3 colour "black"
kropki-4: kropki r5c7-r6c7 colour "black"
kropki-5: kropki r1c5-r1c6 colour "black"
kropki-6: kropki r3c7-r4c7 colour "white"
kropki-7: kropki r8c6-r9c6 colour "white"
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,3.5],[2.5,2.5],[5.5,2.5],[5.5,3.5],[6.5,3.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[1.5,5.5],[2.5,6.5],[5.5,6.5],[5.5,5.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[6.5,5.5],[7.5,6.5],[7.5,8.5],[6.5,8.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along a red line must alternate parity.
Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Digits along a thermometer must rise from the bulb end.
