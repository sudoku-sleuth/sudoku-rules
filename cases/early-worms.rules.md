---
format: open-rules
title: Early Worms
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5f2kf0ksyj
case: https://sudoku-sleuth.com/cases/early-worms
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=8 r1c5=4 r1c9=2 r5c1=2 r5c9=8 r9c1=9 r9c5=3 r9c9=7
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c2-r3c3-r2c4-r3c5
thermo-2: thermo r1c7-r2c8-r3c7-r4c8-r5c7
thermo-3: thermo r7c9-r8c8-r7c7-r8c6-r7c5
thermo-4: thermo r9c3-r8c2-r7c3-r6c2-r5c3
thermo-5: thermo r5c4-r6c4-r7c4
thermo-6: thermo r4c5-r4c4-r4c3
thermo-7: thermo r5c6-r4c6-r3c6
thermo-8: thermo r6c5-r6c6-r6c7
thermo-9: thermo r1c2-r1c3-r1c4-r2c5
thermo-10: thermo r5c8-r4c9-r3c9-r2c9
thermo-11: thermo r9c8-r9c7-r9c6-r8c5
thermo-12: thermo r5c2-r6c1-r7c1
```

**Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermometers are strictly increasing from bulb (grey circle) to tip (along the grey line).

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
