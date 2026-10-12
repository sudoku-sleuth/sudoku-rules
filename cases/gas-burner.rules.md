---
format: open-rules
title: Gas Burner
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pley909my5
case: https://sudoku-sleuth.com/cases/gas-burner
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c1=7 r6c6=2 r8c5=8
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r2c2-r1c2-r1c3
thermo-2: thermo r3c9-r2c9-r2c8-r1c8-r1c7
thermo-3: thermo r7c1-r8c1-r8c2-r9c2-r9c3
thermo-4: thermo r7c9-r8c9-r8c8-r9c8-r9c7
thermo-5: thermo r4c2-r5c2-r5c3-r6c3-r6c4
thermo-6: thermo r6c8-r5c8-r5c7-r4c7-r4c6
thermo-7: thermo r2c7-r3c6-r3c5-r3c4
thermo-8: thermo r8c3-r7c4-r7c5-r7c6
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 14
little-killer-2: little-killer r2c1-r1c2 sum 8
little-killer-3: little-killer r8c9-r9c8 sum 8
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 14
little-killer-5: little-killer r9c2-r8c1 sum 12
little-killer-6: little-killer r9c3-r8c2-r7c1 sum 16
little-killer-7: little-killer r1c8-r2c9 sum 12
little-killer-8: little-killer r1c7-r2c8-r3c9 sum 18
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
