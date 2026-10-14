---
format: open-rules
title: Warming Up
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/83jix5jsrb
case: https://sudoku-sleuth.com/cases/warming-up
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c8=6
exported: 09e6324fa6266d1065c2078590560449
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
thermo-2: thermo r8c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8
thermo-3: thermo r6c1-r5c1-r4c1-r3c1
thermo-4: thermo r7c4-r8c5-r8c6-r8c7-r8c8
thermo-5: thermo r3c8-r4c7-r4c6-r4c5
thermo-6: thermo r7c9-r6c8-r6c7-r6c6-r6c5
thermo-7: thermo r1c8-r2c9-r3c9-r4c9-r5c9-r6c9
thermo-8: thermo r3c7-r2c6-r1c5-r1c4-r2c3
```

**Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
