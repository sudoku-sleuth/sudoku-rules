---
format: open-rules
title: Humidity
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/humidity
library: https://rules.sudoku-sleuth.com/
status: read
exported: 068b81dd33ed9427dd33f4ddf2e7656d
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c1-r3c1-r3c2-r3c3-r2c3-r1c3
thermo-2: thermo r3c7-r3c8-r3c9-r2c9-r1c9-r1c8-r1c7
thermo-3: thermo r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r7c1
thermo-4: thermo r4c6-r5c6-r6c6-r6c5-r6c4-r5c4-r4c4
thermo-5: thermo r9c6-r9c5-r9c4-r8c4-r7c4-r7c5-r7c6
thermo-6: thermo r6c9-r6c8-r6c7-r5c7-r4c7-r4c8-r4c9
thermo-7: thermo r5c3-r6c3-r6c2-r6c1
```

Normal sudoku rules: every row, column, and box must contain a complete set of the digits 1-9.

Normal thermometers rules: digits on thermometers must increase from bulb to tip, not necessarily consecutively.
