---
format: open-rules
title: "Solver Series: Will Power"
setter: Tingo
source: https://sudokupad.app/4b9ork099b
case: https://sudoku-sleuth.com/cases/solver-series-will-power
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c5-r7c5 connected true
cage-2: cage r2c6-r3c6-r4c6-r5c6-r6c6 connected true
cage-3: cage r4c9-r5c9-r6c9-r7c9 connected true
cage-4: cage r4c7-r4c8-r5c7-r6c7 connected true
cage-5: cage r7c4-r8c4-r9c2-r9c3-r9c4 connected true
cage-6: cage r4c3-r5c1-r5c2-r5c3-r6c1-r6c3 connected true
thermo-1: thermo r2c3-r3c2-r2c1-r1c1
thermo-2: thermo r2c3-r3c4-r2c5-r1c5
thermo-3: thermo r8c3-r8c2-r7c2-r6c2
thermo-4: thermo r9c8-r9c7-r8c7-r7c7
thermo-5: thermo r3c8-r2c8-r1c8
kropki-1: kropki r5c6-r6c6 colour "white"
kropki-2: kropki r6c2-r7c2 colour "white"
kropki-3: kropki r8c2-r8c3 colour "white"
kropki-4: kropki r7c7-r8c7 colour "white"
kropki-5: kropki r9c7-r9c8 colour "white"
kropki-6: kropki r3c6-r4c6 colour "white"
kropki-7: kropki r2c6-r3c6 colour "white"
kropki-8: kropki r1c1-r2c1 colour "white"
kropki-9: kropki r3c2-r4c2 colour "white"
```

Normal Sudoku Rules Apply
Digits along thermometers strictly increase from the bulb end. Additionally, digits along each distinct thermo sum to the total equal to the length of the thermo to the second power. i.e. If a thermo is a length of 3, the digits along the thermo sum 3^2, or 9.
Digits in a killer cage do not repeat. Additionally, the total the digits in the cage sum to is equal to the total number of cells within the cage, to the second power. i.e. If a cage contains 3 cells, the sum of the digits within the cage is 3^2, or 9.
Cells joined by white dots have consecutive values. Not all white dots are given.
