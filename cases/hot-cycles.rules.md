---
format: open-rules
title: Hot Cycles
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/hot-cycles
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c7=9
exported: e5a9d218c84ebfe7837f5a9873681f54
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r1c1-r1c2-r1c3
thermo-2: thermo r1c7-r1c8-r1c9-r2c9-r3c9
thermo-3: thermo r7c9-r8c9-r9c9-r9c8-r9c7
thermo-4: thermo r9c3-r9c2-r9c1-r8c1-r7c1
thermo-5: thermo r4c2-r5c2-r6c2-r6c1-r5c1-r4c1
thermo-6: thermo r2c6-r2c5-r2c4-r1c4-r1c5
thermo-7: thermo r6c8-r5c8-r4c8-r4c9-r5c9
thermo-8: thermo r8c6-r8c5-r8c4-r9c4-r9c5-r9c6
```

Normal sudoku rules apply: every row, column and box must contain a complete set of the digits 1-9.

Normal thermo rules apply: the digits on a thermo must strictly increase from the bulb to the tip.
