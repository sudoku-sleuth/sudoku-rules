---
format: open-rules
title: Top Right Boi
setter: Timotab
source: https://sudokupad.app/sr509vollt
case: https://sudoku-sleuth.com/cases/top-right-boi-3
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c7-r2c6-r3c5-r4c4
thermo-2: thermo r2c7-r3c6-r4c5-r5c4-r6c3-r7c2
thermo-3: thermo r3c7-r4c6-r5c5
thermo-4: thermo r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2
thermo-5: thermo r3c9-r4c8-r5c7-r6c6
thermo-6: thermo r1c6-r2c5-r3c4-r4c3
thermo-7: thermo r4c9-r5c8-r6c7-r7c6-r8c5
thermo-8: thermo r6c9-r7c8-r8c7
thermo-9: thermo r5c3-r6c2
thermo-10: thermo r2c4-r3c3
```

• Normal sudoku rules apply. Place the digits 1-9 in every row, column, and box, without repetition.
• Along grey thermometers, digits strictly increase from the bulb end.
