---
format: open-rules
title: Construction Zone
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/72oi64g3u1
case: https://sudoku-sleuth.com/cases/construction-zone
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
thermo-2: thermo r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
thermo-3: thermo r6c9-r6c8-r6c7-r6c6
thermo-4: thermo r2c9-r3c9-r4c9-r5c9
thermo-5: thermo r9c9-r8c9-r7c9
thermo-6: thermo r9c9-r9c8-r9c7-r9c6-r9c5-r9c4
thermo-7: thermo r2c4-r3c4-r4c4-r5c4
thermo-8: thermo r2c8-r2c7-r2c6
thermo-9: thermo r4c5-r4c6-r4c7
skyscraper-1: skyscraper r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 visible 8
skyscraper-2: skyscraper r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 visible 3
skyscraper-3: skyscraper r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 visible 6
skyscraper-4: skyscraper r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 visible 6
skyscraper-5: skyscraper r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 visible 5
skyscraper-6: skyscraper r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 visible 7
skyscraper-7: skyscraper r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 visible 4
```

**Sudoku, Thermometers, Skyscrapers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Skyscrapers: Each cell represents a ‘skyscraper’ whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
