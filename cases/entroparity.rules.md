---
format: open-rules
title: Entroparity
setter: EPH
source: https://sudokupad.app/w6zhdxpuyy
case: https://sudoku-sleuth.com/cases/entroparity
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
exported: 74c2eb2ceebe8d1a0f06c5855c5ea243
---

```rules
sudoku 9x9
cage-1: cage r5c5-r6c5 total 10 connected true
cage-2: cage r5c7-r5c8-r5c9 total 17 connected true
cage-3: cage r5c1-r5c2-r5c3 total 16 connected true
cage-4: cage r8c9-r9c9 total 15 connected true
cage-5: cage r8c1-r9c1 total 15 connected true
thermo-1: thermo r7c3-r7c4-r7c5-r7c6-r7c7
thermo-2: thermo r9c6-r9c5-r9c4-r9c3
parity-1: parity r3c9-r4c9-r5c9-r6c9-r7c9
parity-2: parity r1c7-r1c6-r1c5-r1c4-r1c3
parity-3: parity r3c1-r4c1-r5c1-r6c1-r7c1
parity-4: parity r7c4-r6c3-r5c4-r4c3-r3c4-r4c5-r3c6-r4c7-r5c6-r6c7-r7c6
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Killer cages: digits must not repeat within a cage, and must sum to the value in the corner of the cage.

Thermometer: digits along a grey thermometer must strictly increase from the bulb to the tip.

Entroparity lines: the lavender lines act as entropic lines: each group of three consecutive cells along a line must contain a low digit (1,2,3), a medium digit (4,5,6), and a high digit (7,8,9).  In addition, digits along a line must alternate between even and odd digits.
