---
format: open-rules
title: High heat from the outset
setter: Chip Sounder
source: https://sudokupad.app/swaho00yx8
case: https://sudoku-sleuth.com/cases/high-heat-from-the-outset
library: https://rules.sudoku-sleuth.com/
status: read
exported: 298394c1828691df9e28dfe7f7b84281
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5-r3c5 total 24 connected true
cage-2: cage r5c3-r5c4-r6c3-r6c4-r7c3-r7c4 total 39 connected true
cage-3: cage r5c6-r5c7-r6c6-r6c7-r7c6-r7c7 total 39 connected true
cage-4: cage r5c1-r6c1-r7c1 total 11 connected true
cage-5: cage r5c9-r6c9-r7c9 total 19 connected true
cage-6: cage r8c8-r9c8 total 15 connected true
cage-7: cage r8c2-r9c2 total 9 connected true
cage-8: cage r1c6-r1c7-r2c6-r2c7 total 23 connected true
thermo-1: thermo r2c1-r1c1-r1c2-r2c2-r3c2-r4c2
thermo-2: thermo r2c9-r1c9-r1c8-r2c8-r3c8-r4c8
thermo-3: thermo r6c2-r7c2-r8c2-r9c2
thermo-4: thermo r6c5-r7c5-r8c5-r9c5
thermo-5: thermo r6c8-r7c8-r8c8-r9c8
kropki-1: kropki r2c1-r3c1 black
kropki-2: kropki r8c6-r8c7 black
quadruple r5c6-r5c7-r6c6-r6c7 digits [8]
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeat.
Digits on a thermometer must rise from the bulb end.
Cells separated by a black dot has a 1:2 ratio.
Digits in a circle must be in one of the cells it touches and may repeat.
