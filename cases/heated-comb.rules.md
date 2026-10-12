---
format: open-rules
title: Heated Comb
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/c5n4yzcyda
case: https://sudoku-sleuth.com/cases/heated-comb
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=3
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9
thermo-2: thermo r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7
thermo-3: thermo r2c2-r3c3-r4c4-r5c5-r6c6-r7c7
thermo-4: thermo r5c1-r6c2-r7c3-r8c4-r9c5
thermo-5: thermo r1c5-r2c6-r3c7-r4c8-r5c9
thermo-6: thermo r7c1-r8c2-r9c3
thermo-7: thermo r1c7-r2c8-r3c9
kropki-1: kropki r8c3-r8c4 colour "white"
kropki-2: kropki r9c7-r9c8 colour "white"
kropki-3: kropki r6c9-r7c9 colour "white"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermos: Digits on Thermos are strictly increasing from bulb (grey circle) to tip (along the grey line).
- Consecutive Pairs: Digits in cells separated by a white dot are consecutive.
