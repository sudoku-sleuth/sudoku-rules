---
format: open-rules
title: Temperature Cycle
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vcftgqcy3f
case: https://sudoku-sleuth.com/cases/temperature-cycle
library: https://rules.sudoku-sleuth.com/
status: read
exported: 050287b0bfa73341bdabc438545317c0
---

```rules
sudoku 9x9
thermo-1: thermo r8c2-r7c1-r6c1-r5c1-r4c1-r3c1
thermo-2: thermo r3c9-r4c9-r5c9-r6c9-r7c9-r8c8
thermo-3: thermo r1c5-r1c4-r1c3-r2c2
thermo-4: thermo r1c6-r1c7-r2c8
thermo-5: thermo r9c7-r9c6-r9c5-r9c4-r9c3
thermo-6: thermo r4c3-r3c4-r3c5
thermo-7: thermo r3c6-r4c7-r5c7-r6c7
thermo-8: thermo r5c3-r6c3-r7c4
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 15
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 15
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 15
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 15
little-killer-5: little-killer r9c6-r8c5-r7c4-r6c3-r5c2-r4c1 sum 38
little-killer-6: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 19
```

**Sudoku, Diagonal Sums, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
