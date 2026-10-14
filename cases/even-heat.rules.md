---
format: open-rules
title: Even Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8njpxee23o
case: https://sudoku-sleuth.com/cases/even-heat
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1097758e9d3f1e4b81082901ca55d33e
---

```rules
sudoku 9x9
thermo-1: thermo r2c2-r2c3-r2c4-r3c4-r4c4
thermo-2: thermo r2c8-r2c7-r2c6-r3c6-r4c6
thermo-3: thermo r8c2-r8c3-r8c4-r7c4-r6c4
thermo-4: thermo r8c8-r8c7-r8c6-r7c6-r6c6
thermo-5: thermo r4c1-r5c1-r5c2-r5c3
thermo-6: thermo r4c9-r5c9-r5c8-r5c7
thermo-7: thermo r7c8-r7c9-r8c9-r9c9
parity-cells r2c4-r2c6-r2c8-r8c4-r9c6-r1c4-r1c2-r1c9-r5c1-r5c9-r8c9-r7c7-r7c2-r4c3 parity "even"
```

**Sudoku, Thermometers, Even**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Even: Digits in cells marked with a blue square must be even.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
