---
format: open-rules
title: Heater Cells
setter: Jobo
source: https://sudokupad.app/2q2nojsqca
case: https://sudoku-sleuth.com/cases/heater-cells
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=1 r4c5=2 r7c7=4
exported: b44665d773d41a014090ece1896c0483
---

```rules
sudoku 9x9
thermo-1: thermo r1c2-r2c2-r3c2-r4c1-r5c1
thermo-2: thermo r1c5-r2c5-r3c5-r4c4-r5c4
thermo-3: thermo r1c8-r2c8-r3c8-r4c7-r5c7
thermo-4: thermo r5c3-r6c3-r7c2-r8c2-r9c2
thermo-5: thermo r5c6-r6c6-r7c5-r8c5-r9c5
thermo-6: thermo r5c9-r6c9-r7c8-r8c8-r9c8
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.
