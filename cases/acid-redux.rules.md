---
format: open-rules
title: Acid Redux
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ucmln27r1d
case: https://sudoku-sleuth.com/cases/acid-redux
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=3
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r3c2-r2c3-r1c3
thermo-2: thermo r3c9-r3c8-r2c7-r1c7
thermo-3: thermo r7c1-r7c2-r8c3-r9c3
thermo-4: thermo r7c9-r7c8-r8c7-r9c7
thermo-5: thermo r5c3-r4c3-r3c4-r3c5
thermo-6: thermo r5c7-r6c7-r7c6-r7c5
thermo-7: thermo r9c6-r9c5-r8c4
thermo-8: thermo r1c4-r1c5-r2c6
thermo-9: thermo r6c8-r5c9-r4c9
thermo-10: thermo r4c1-r5c1-r6c2
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 8
little-killer-3: little-killer r7c1-r8c2-r9c3 sum 10
little-killer-4: little-killer r3c9-r2c8-r1c7 sum 12
little-killer-5: little-killer r8c1-r9c2 sum 7
little-killer-6: little-killer r2c1-r1c2 sum 13
little-killer-7: little-killer r8c9-r9c8 sum 13
little-killer-8: little-killer r2c9-r1c8 sum 11
little-killer-9: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 28
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
