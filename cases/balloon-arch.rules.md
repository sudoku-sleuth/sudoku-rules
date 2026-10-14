---
format: open-rules
title: Balloon Arch
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ran57ue3ie
case: https://sudoku-sleuth.com/cases/balloon-arch
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c5=8
exported: e2ad36936f495035f551524bcc6b837a
---

```rules
sudoku 9x9
thermo-1: thermo r8c1-r7c1-r6c1-r5c2-r4c2-r3c3-r2c3
thermo-2: thermo r8c9-r7c9-r6c9-r5c8-r4c8-r3c7-r2c7
thermo-3: thermo r3c4-r4c3-r5c3-r6c2-r7c2
thermo-4: thermo r3c6-r4c7-r5c7-r6c8-r7c8
thermo-5: thermo r1c2-r2c2-r3c2-r4c1
thermo-6: thermo r1c8-r2c8-r3c8-r4c9
thermo-7: thermo r4c5-r3c5-r2c6
thermo-8: thermo r4c5-r3c5-r2c4
thermo-9: thermo r4c5-r3c5-r2c4-r1c4
thermo-10: thermo r4c5-r3c5-r2c6-r1c6
thermo-11: thermo r9c2-r8c2-r7c3
thermo-12: thermo r7c7-r8c8-r9c8
```

**Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
