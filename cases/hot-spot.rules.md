---
format: open-rules
title: Hot Spot
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/driv2u2osa
case: https://sudoku-sleuth.com/cases/hot-spot
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r1c9=4 r9c1=3 r9c9=6
exported: 6ca6f3d4ead102425bb465d58b9e79f7
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r1c4-r1c5-r1c6-r2c7-r3c8-r4c9
thermo-2: thermo r9c7-r9c6-r9c5-r9c4-r8c3-r7c2-r6c1
thermo-3: thermo r3c2-r3c3-r3c4-r4c5-r5c6
thermo-4: thermo r7c8-r7c7-r7c6-r6c5-r5c4
thermo-5: thermo r7c5-r6c4-r5c3
thermo-6: thermo r5c7-r4c6-r3c5
thermo-7: thermo r4c4-r5c5-r6c6
thermo-8: thermo r6c3-r5c2-r4c1
thermo-9: thermo r6c9-r5c8-r4c7
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermometers increase from bulb to tip.
