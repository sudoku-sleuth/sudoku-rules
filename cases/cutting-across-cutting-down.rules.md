---
format: open-rules
title: Cutting Across, Cutting Down
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/n89gqtwmvz
case: https://sudoku-sleuth.com/cases/cutting-across-cutting-down
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c9=1 r3c1=5 r4c3=6 r7c5=9 r9c8=3
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
thermo-2: thermo r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
thermo-3: thermo r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9
thermo-4: thermo r5c1-r6c1-r7c1-r8c1-r9c1
thermo-5: thermo r1c5-r1c6-r1c7-r1c8-r1c9
thermo-6: thermo r9c3-r8c3-r7c3-r6c3
thermo-7: thermo r3c9-r3c8-r3c7-r3c6
thermo-8: thermo r5c4-r6c5-r7c6
thermo-9: thermo r6c7-r5c6-r4c5
```

**Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
