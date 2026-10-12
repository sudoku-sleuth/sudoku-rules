---
format: open-rules
title: Turn Up the Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/conxi91qge
case: https://sudoku-sleuth.com/cases/turn-up-the-heat
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=2 r3c6=7 r4c1=5 r4c4=1 r5c2=4 r5c5=6 r5c8=1 r6c6=2 r6c9=4 r7c4=3 r9c5=8
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r1c2
thermo-2: thermo r3c1-r2c2-r1c3
thermo-3: thermo r1c7-r2c8-r3c9
thermo-4: thermo r1c8-r2c9
thermo-5: thermo r7c9-r8c8-r9c7
thermo-6: thermo r8c9-r9c8
thermo-7: thermo r9c2-r8c1
thermo-8: thermo r9c3-r8c2-r7c1
little-killer-1: little-killer r2c1-r1c2 sum 6
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 6
little-killer-4: little-killer r1c8-r2c9 sum 14
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 9
little-killer-6: little-killer r8c9-r9c8 sum 11
little-killer-7: little-killer r9c2-r8c1 sum 5
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 21
```

Normal sudoku rules apply. Each row, column, and box must contain a complete set of the digits 1-9.

Digits along a thermometer must strictly increase from bulb to top. Digits along the thermometer do not have to be consecutive.

Numbers outside the grid give the sum of the digits along the indicated diagonal.
