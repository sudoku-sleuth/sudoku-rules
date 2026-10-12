---
format: open-rules
title: Acid Reflux
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vb73er4ebh
case: https://sudoku-sleuth.com/cases/acid-reflux
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=9 r5c5=5
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r1c2-r1c3
thermo-2: thermo r2c9-r1c8-r1c7
thermo-3: thermo r8c9-r9c8-r9c7
thermo-4: thermo r8c1-r9c2-r9c3
thermo-5: thermo r2c3-r2c2-r3c1
thermo-6: thermo r2c7-r2c8-r3c9
thermo-7: thermo r8c7-r8c8-r7c9
thermo-8: thermo r8c3-r8c2-r7c1
thermo-9: thermo r5c1-r4c2-r5c3-r6c2
thermo-10: thermo r6c8-r5c7-r4c8-r5c9
thermo-11: thermo r9c5-r8c4-r7c5-r8c6
thermo-12: thermo r6c5-r5c4-r4c5-r5c6
thermo-13: thermo r4c6-r3c5-r4c4
little-killer-1: little-killer r8c1-r9c2 sum 5
little-killer-2: little-killer r8c9-r9c8 sum 10
little-killer-3: little-killer r7c1-r8c2-r9c3 sum 19
little-killer-4: little-killer r3c1-r2c2-r1c3 sum 15
little-killer-5: little-killer r2c9-r1c8 sum 9
little-killer-6: little-killer r3c9-r2c8-r1c7 sum 21
little-killer-7: little-killer r2c1-r1c2 sum 13
little-killer-8: little-killer r7c9-r8c8-r9c7 sum 17
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
