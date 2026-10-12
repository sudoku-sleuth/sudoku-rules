---
format: open-rules
title: Triscuit
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cues5j0avn
case: https://sudoku-sleuth.com/cases/triscuit
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r3c1-r4c1-r5c1
thermo-2: thermo r5c2-r4c2-r3c2-r2c2
thermo-3: thermo r2c3-r3c3-r4c3-r5c3
thermo-4: thermo r5c9-r6c9-r7c9-r8c9
thermo-5: thermo r8c8-r7c8-r6c8-r5c8
thermo-6: thermo r5c7-r6c7-r7c7-r8c7
thermo-7: thermo r1c5-r1c6-r1c7-r1c8
thermo-8: thermo r2c8-r2c7-r2c6-r2c5
thermo-9: thermo r8c2-r8c3-r8c4-r8c5
thermo-10: thermo r9c5-r9c4-r9c3-r9c2
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 17
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 9
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 13
little-killer-5: little-killer r9c2-r8c1 sum 11
little-killer-6: little-killer r1c8-r2c9 sum 15
little-killer-7: little-killer r8c9-r9c8 sum 8
little-killer-8: little-killer r2c1-r1c2 sum 10
```

**Standard Sudoku, Thermometer, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
