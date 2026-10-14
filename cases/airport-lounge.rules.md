---
format: open-rules
title: Airport Lounge
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ygdpwfc35n
case: https://sudoku-sleuth.com/cases/airport-lounge
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=7
exported: e0c3d696fc34f106995bd0ae6460644b
---

```rules
sudoku 9x9
thermo-1: thermo r3c3-r2c3-r2c4-r3c4-r4c4-r4c3-r4c2
thermo-2: thermo r3c7-r4c7-r4c8-r3c8-r2c8-r2c7-r2c6
thermo-3: thermo r7c7-r7c8-r8c8-r8c7-r8c6-r7c6-r6c6
thermo-4: thermo r7c3-r6c3-r6c2-r7c2-r8c2-r8c3-r8c4
thermo-5: thermo r5c7-r5c6-r5c5-r5c4-r5c3
thermo-6: thermo r4c1-r5c1-r6c1
thermo-7: thermo r6c9-r5c9-r4c9
thermo-8: thermo r9c6-r9c5-r9c4
thermo-9: thermo r1c8-r1c9
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
