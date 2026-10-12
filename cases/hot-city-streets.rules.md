---
format: open-rules
title: Hot City Streets
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/t4a62zjm8v
case: https://sudoku-sleuth.com/cases/hot-city-streets
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r3c1-r4c1-r5c1
thermo-2: thermo r8c1-r7c1-r6c1
thermo-3: thermo r2c3-r3c3-r4c3-r5c3
thermo-4: thermo r3c8-r3c7-r3c6-r3c5-r3c4
thermo-5: thermo r1c8-r1c7-r1c6-r1c5
thermo-6: thermo r7c5-r7c6-r7c7-r7c8
thermo-7: thermo r9c5-r9c6-r9c7-r9c8
thermo-8: thermo r7c9-r6c9-r5c9-r4c9
thermo-9: thermo r4c5-r5c5-r6c5
thermo-10: thermo r2c6-r2c5-r2c4
skyscraper-1: skyscraper r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 visible 2
skyscraper-2: skyscraper r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 visible 4
skyscraper-3: skyscraper r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 visible 6
skyscraper-4: skyscraper r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 visible 4
skyscraper-5: skyscraper r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 visible 3
skyscraper-6: skyscraper r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 visible 3
skyscraper-7: skyscraper r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 visible 4
skyscraper-8: skyscraper r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 visible 4
skyscraper-9: skyscraper r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 visible 4
skyscraper-10: skyscraper r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 visible 4
skyscraper-11: skyscraper r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 visible 3
skyscraper-12: skyscraper r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 visible 3
```

**Sudoku, Thermometers, Skyscrapers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
