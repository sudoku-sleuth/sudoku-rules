---
format: open-rules
title: Lots happening
setter: Chip Sounder
source: https://sudokupad.app/q0wkbr04ta
case: https://sudoku-sleuth.com/cases/lots-happening
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 7c645084191e14ab7f367d593775470c
---

```rules
sudoku 9x9
thermo r1c5-r2c4-r3c3-r4c4-r5c4
kropki-1: kropki r2c5-r2c6 white
kropki-2: kropki r6c6-r7c6 white
kropki-3: kropki r7c6-r8c6 white
kropki-4: kropki r5c2-r6c2 white
kropki-5: kropki r4c7-r4c8 black
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r6c6-r6c7 sum 10
pair-3: pair r8c6-r8c7 sum 10
pair-4: pair r7c2-r7c3 sum 10
pair-5: pair r4c2-r5c2 sum 5
pair-6: pair r7c1-r8c1 sum 5
pair-7: pair r1c3-r2c3 sum 5
pair-8: pair r1c6-r2c6 sum 5
pair-9: pair r4c5-r5c5 sum 5
pair-10: pair r7c4-r8c4 sum 5
pair-11: pair r7c7-r8c7 sum 5
pair-12: pair r4c8-r5c8 sum 5
pair-13: pair r1c9-r2c9 sum 5
sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 0
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5],[5.5,8.5],[4.5,8.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,2.5],[6.5,2.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits once each in every row, column and 3x3 box.
Digits on a thermometer must rise from the bulb end.
Digits on a green line must differ by at least 5.
Clues outside the grid sum the digits between the 1 and 9 in their respective row/column.
Cells separated by a black dot has one digit double the other.
Cells separated by a white dot are consecutive.
Cells separated by a V sum to 5.
Cells separated by an X sum to 10.
No negative constraints.
