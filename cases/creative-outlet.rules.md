---
format: open-rules
title: Creative Outlet
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0ejew96avl
case: https://sudoku-sleuth.com/cases/creative-outlet
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c1-r2c2-r1c3-r1c4
thermo-2: thermo r1c6-r1c7-r2c8-r3c9-r4c9
thermo-3: thermo r9c6-r9c7-r8c8-r7c9-r6c9
thermo-4: thermo r9c4-r9c3-r8c2-r7c1-r6c1
thermo-5: thermo r3c7-r4c6-r5c6-r6c6
thermo-6: thermo r6c4-r5c4-r4c4-r3c3
thermo-7: thermo r7c2-r6c2-r5c2
thermo-8: thermo r5c8-r6c8-r7c8
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 11
little-killer-2: little-killer r2c1-r1c2 sum 8
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 15
little-killer-4: little-killer r1c8-r2c9 sum 7
little-killer-5: little-killer r9c8-r8c9 sum 9
little-killer-6: little-killer r9c6-r8c7-r7c8-r6c9 sum 20
little-killer-7: little-killer r9c3-r8c2-r7c1 sum 20
little-killer-8: little-killer r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 sum 26
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
