---
format: open-rules
title: Concentric Steering
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/im2ux365zf
case: https://sudoku-sleuth.com/cases/concentric-steering
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c4-r1c3-r1c2-r2c1-r3c1-r4c1
thermo-2: thermo r4c9-r3c9-r2c9-r1c8-r1c7-r1c6
thermo-3: thermo r9c6-r9c7-r9c8-r8c9-r7c9-r6c9
thermo-4: thermo r6c1-r7c1-r8c1-r9c2-r9c3-r9c4
thermo-5: thermo r7c4-r6c3-r5c3
thermo-6: thermo r3c6-r4c7-r5c7
thermo-7: thermo r4c3-r3c4-r3c5
thermo-8: thermo r6c7-r7c6-r7c5
thermo-9: thermo r2c4-r2c5-r2c6
little-killer-1: little-killer r1c7-r2c8-r3c9 sum 11
little-killer-2: little-killer r9c3-r8c2-r7c1 sum 11
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 12
little-killer-4: little-killer r3c1-r2c2-r1c3 sum 12
little-killer-5: little-killer r1c2-r2c1 sum 10
little-killer-6: little-killer r9c8-r8c9 sum 9
little-killer-7: little-killer r2c9-r1c8 sum 9
little-killer-8: little-killer r8c1-r9c2 sum 10
little-killer-9: little-killer r1c4-r2c3-r3c2-r4c1 sum 16
little-killer-10: little-killer r4c9-r3c8-r2c7-r1c6 sum 16
little-killer-11: little-killer r9c6-r8c7-r7c8-r6c9 sum 27
little-killer-12: little-killer r6c1-r7c2-r8c3-r9c4 sum 23
```

**Sudoku, Diagonal Sums, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
