---
format: open-rules
title: Tuning the Thermostat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ef10mw7nxl
case: https://sudoku-sleuth.com/cases/tuning-the-thermostat
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c6=1
exported: ad282d6f31ee1d9845221e2822db956f
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r4c3-r5c3
thermo-2: thermo r7c8-r6c9-r5c9
thermo-3: thermo r1c5-r2c6-r3c6
thermo-4: thermo r9c5-r8c4-r7c4
thermo-5: thermo r3c2-r4c1-r5c1-r6c1-r7c1
thermo-6: thermo r1c5-r2c4-r3c4-r4c4-r5c4
thermo-7: thermo r9c5-r8c6-r7c6-r6c6-r5c6
thermo-8: thermo r7c8-r6c7-r5c7-r4c7-r3c7
thermo-9: thermo r7c3-r8c3-r9c2-r9c1
thermo-10: thermo r1c7-r1c8-r2c9-r3c9
thermo-11: thermo r6c4-r5c5-r4c6
skyscraper-1: skyscraper r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 visible 4
skyscraper-2: skyscraper r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 visible 4
skyscraper-3: skyscraper r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 visible 4
skyscraper-4: skyscraper r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 visible 4
skyscraper-5: skyscraper r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 visible 6
skyscraper-6: skyscraper r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 visible 4
```

**Sudoku, Thermometers, Skyscrapers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
