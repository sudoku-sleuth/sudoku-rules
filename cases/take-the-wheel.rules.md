---
format: open-rules
title: Take the Wheel
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/j3rrjmrwvx
case: https://sudoku-sleuth.com/cases/take-the-wheel
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=8
exported: 37d183eb8e609cdf4039ca6fba39523d
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c1-r2c2-r1c3-r1c4
thermo-2: thermo r1c6-r1c7-r2c8-r3c9-r4c9
thermo-3: thermo r6c9-r7c9-r8c8-r9c7-r9c6
thermo-4: thermo r9c4-r9c3-r8c2-r7c1-r6c1
thermo-5: thermo r5c1-r5c2-r5c3-r5c4
thermo-6: thermo r5c9-r5c8-r5c7-r5c6
thermo-7: thermo r6c5-r7c5-r8c5-r9c5
thermo-8: thermo r4c5-r3c5-r2c5-r1c5
little-killer-1: little-killer r3c9-r2c8-r1c7 sum 15
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 17
little-killer-3: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-4: little-killer r7c1-r8c2-r9c3 sum 12
little-killer-5: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 29
little-killer-6: little-killer r9c6-r8c5-r7c4-r6c3-r5c2-r4c1 sum 25
little-killer-7: little-killer r9c4-r8c5-r7c6-r6c7-r5c8-r4c9 sum 29
little-killer-8: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 29
```

Normal sudoku rules apply.

On thermometers, digits must increase from bulb to tip.

Numbers outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat along the diagonal.
