---
format: open-rules
title: Integers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/v5j3w35at5
case: https://sudoku-sleuth.com/cases/integers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c7=7 r5c1=4
---

```rules
sudoku 9x9
thermo-1: thermo r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9
thermo-2: thermo r9c8-r8c7-r7c6-r6c5-r5c4-r4c3-r3c2
thermo-3: thermo r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
thermo-4: thermo r9c2-r9c3-r9c4-r9c5-r9c6-r9c7
thermo-5: thermo r8c6-r8c5-r8c4-r8c3
thermo-6: thermo r2c4-r2c5-r2c6
thermo-7: thermo r2c9-r2c8-r2c7
```

**Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
