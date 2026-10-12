---
format: open-rules
title: Getting warm with diagonal sums
setter: Chip Sounder
source: https://sudokupad.app/0spknnnji2
case: https://sudoku-sleuth.com/cases/getting-warm-with-diagonal-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r7c1-r8c1-r9c1-r9c2-r9c3
thermo-2: thermo r7c9-r8c9-r9c9-r9c8-r9c7
thermo-3: thermo r5c4-r6c4-r7c4-r7c5-r7c6
thermo-4: thermo r1c3-r2c3-r3c3-r3c2-r3c1
thermo-5: thermo r4c8-r3c8-r2c8-r2c7-r2c6
thermo-6: thermo r1c7-r1c8-r1c9-r2c9
thermo-7: thermo r6c6-r5c6-r4c6-r4c5-r4c4
little-killer-1: little-killer r7c1-r8c2-r9c3 sum 21
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 19
little-killer-3: little-killer r1c3-r2c2-r3c1 sum 19
little-killer-4: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-5: little-killer r2c9-r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2 sum 37
little-killer-6: little-killer r1c8-r2c9 sum 15
little-killer-7: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 50
```

Unique constraints puzzle 2.
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along a thermometer must rise from the bulb end.
Clues outside the grid sum the digits on the indicated diagonal, digits may repeat if other rules allow.
