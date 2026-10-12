---
format: open-rules
title: Passing Through
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1xkbqdvjo0
case: https://sudoku-sleuth.com/cases/passing-through
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c8=7 r7c2=3
---

```rules
sudoku 9x9
thermo-1: thermo r1c2-r1c3-r1c4-r2c5-r2c6-r2c7
thermo-2: thermo r2c3-r2c4-r3c5-r3c6-r3c7-r4c8
thermo-3: thermo r3c4-r4c5-r4c6-r4c7-r5c8-r6c9
thermo-4: thermo r5c7-r5c6-r5c5-r5c4-r5c3-r6c2
thermo-5: thermo r6c6-r6c5-r6c4-r7c3
thermo-6: thermo r7c7-r7c6-r7c5-r7c4-r8c3
thermo-7: thermo r9c3-r8c4-r8c5-r8c6
```

**Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
