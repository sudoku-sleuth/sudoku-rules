---
format: open-rules
title: Stepdown
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/l0rmczphs1
case: https://sudoku-sleuth.com/cases/stepdown
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c1-r2c2-r1c3-r1c4
thermo-2: thermo r4c9-r3c9-r2c8-r1c7-r1c6
thermo-3: thermo r6c9-r7c9-r8c8-r9c7-r9c6
thermo-4: thermo r6c1-r7c1-r8c2-r9c3-r9c4
thermo-5: thermo r2c3-r2c4-r2c5-r2c6
thermo-6: thermo r3c7-r4c7-r5c7-r6c7
thermo-7: thermo r7c7-r7c6-r7c5
thermo-8: thermo r6c3-r5c3-r4c3
thermo-9: thermo r8c6-r8c5-r8c4
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 13
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 17
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 12
little-killer-4: little-killer r7c1-r8c2-r9c3 sum 21
little-killer-5: little-killer r2c1-r1c2 sum 12
little-killer-6: little-killer r2c9-r1c8 sum 11
little-killer-7: little-killer r8c9-r9c8 sum 9
little-killer-8: little-killer r8c1-r9c2 sum 12
```

**Sudoku, Thermometers, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermometers are strictly increasing from bulb to tip.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
