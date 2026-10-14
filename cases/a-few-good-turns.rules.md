---
format: open-rules
title: A Few Good Turns
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bfgl8jnyz4
case: https://sudoku-sleuth.com/cases/a-few-good-turns
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0c37b8b039d9e9013dce2e95195607af
---

```rules
sudoku 9x9
cage r5c3-r5c4-r5c5 total 15 connected true
thermo-1: thermo r5c3-r4c3-r3c3-r3c4-r3c5-r4c5-r5c5
thermo-2: thermo r5c4-r6c4-r7c4-r7c5-r7c6
thermo-3: thermo r6c6-r6c7-r6c8-r5c8-r4c8-r4c7-r4c6
thermo-4: thermo r7c1-r8c1-r8c2-r8c3-r7c3-r6c3-r6c2
thermo-5: thermo r1c6-r1c7-r1c8-r2c8-r3c8
thermo-6: thermo r7c8-r7c9-r8c9-r8c8-r8c7
thermo-7: thermo r1c2-r2c2-r2c3-r2c4-r1c4
```

**Sudoku, Thermometers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
