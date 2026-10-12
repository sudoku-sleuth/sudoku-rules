---
format: open-rules
title: Thermometers and cages.
setter: Chip Sounder
source: https://sudokupad.app/xv1t8i4ltc
case: https://sudoku-sleuth.com/cases/thermometers-and-cages
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=3 r2c9=5 r4c9=9
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3-r5c4-r5c5-r5c6-r6c2-r6c4-r6c5-r6c6 connected true
cage-2: cage r5c7-r5c8-r6c7-r6c8 total 11 connected true
cage-3: cage r2c1-r2c2 total 11 connected true
cage-4: cage r5c1-r6c1 total 10 connected true
cage-5: cage r2c3-r2c4 total 3 connected true
cage-6: cage r2c5-r2c6 total 10 connected true
cage-7: cage r7c6-r8c6-r9c6 total 19 connected true
cage-8: cage r9c1-r9c2-r9c3 total 12 connected true
cage-9: cage r7c1-r8c1 total 17 connected true
thermo-1: thermo r4c4-r4c5-r4c6-r3c7-r3c8
thermo-2: thermo r7c8-r8c8-r8c7-r9c7
thermo-3: thermo r7c2-r8c2-r8c3-r8c4-r8c5
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage cannot repeat and sum to the total in the top left corner of the cage (if given).
Digits on a thermometer must rise from the bulb end.
