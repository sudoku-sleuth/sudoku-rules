---
format: open-rules
title: Saggy Baggy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/22jbjiwu04
case: https://sudoku-sleuth.com/cases/saggy-baggy
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=3 r4c2=1 r4c8=9
---

```rules
sudoku 9x9
thermo-1: thermo r2c3-r3c2-r4c1-r5c2-r4c3-r3c4
thermo-2: thermo r2c7-r3c8-r4c9-r5c8-r4c7-r3c6
thermo-3: thermo r1c5-r2c5-r3c5-r4c5-r5c5
thermo-4: thermo r1c6-r1c7-r1c8-r1c9-r2c9
thermo-5: thermo r2c1-r1c1-r1c2-r1c3-r1c4
thermo-6: thermo r6c9-r7c9-r8c9-r9c9-r9c8
thermo-7: thermo r9c2-r9c1-r8c1-r7c1-r6c1
thermo-8: thermo r9c4-r8c3-r7c2
thermo-9: thermo r9c6-r8c7-r7c8
```

**Standard Sudoku, Thermometer**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
