---
format: open-rules
title: Laughing GAS-B
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8287ulxzd8
case: https://sudoku-sleuth.com/cases/laughing-gas-b
library: https://rules.sudoku-sleuth.com/
status: read
exported: 839dc84f17f07e057d6d10a2d8ef0c38
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
thermo-2: thermo r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
thermo-3: thermo r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
thermo-4: thermo r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
thermo-5: thermo r9c1-r9c2-r9c3-r9c4-r9c5-r9c6
thermo-6: thermo r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
thermo-7: thermo r5c1-r6c1-r7c1
thermo-8: thermo r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
```

Standard sudoku rules: Each row, column, and box must contain a complete set of the digits 1-9.

Thermometers: Digits on a thermometer must increase from the bulb end to the tip. Digits on the thermometer do not have to be consecutive.
