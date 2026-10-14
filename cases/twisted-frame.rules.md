---
format: open-rules
title: Twisted Frame
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0gbn19cgs1
case: https://sudoku-sleuth.com/cases/twisted-frame
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r3c5=2 r7c5=8
exported: a3a208802400a7f90405191a3e64954e
---

```rules
sudoku 9x9
thermo-1: thermo r5c1-r6c2-r7c3-r8c4-r9c5
thermo-2: thermo r9c6-r8c7-r7c8-r6c9
thermo-3: thermo r5c9-r4c8-r3c7-r2c6-r1c5
thermo-4: thermo r1c4-r2c3-r3c2-r4c1
thermo-5: thermo r1c6-r2c7-r3c8
thermo-6: thermo r9c4-r8c3-r7c2
thermo-7: thermo r3c1-r2c2-r1c3
thermo-8: thermo r7c9-r8c8-r9c7
little-killer-1: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 20
little-killer-2: little-killer r9c6-r8c7-r7c8-r6c9 sum 16
little-killer-3: little-killer r5c9-r4c8-r3c7-r2c6-r1c5 sum 30
little-killer-4: little-killer r1c4-r2c3-r3c2-r4c1 sum 24
little-killer-5: little-killer r6c1-r7c2-r8c3-r9c4 sum 13
little-killer-6: little-killer r1c3-r2c2-r3c1 sum 13
little-killer-7: little-killer r9c7-r8c8-r7c9 sum 15
```

Normal sudoku rules apply. Each row, column, and box must contain a complete set of the digits 1-9.

Numbers outside the grid give the sum of the digits along the indicated diagonal. Digits can repeat along the little killer diagonal if allowed by the other rules.

Digits along a thermometer must strictly increase from bulb to top. Digits along the thermometer do not have to be consecutive.
