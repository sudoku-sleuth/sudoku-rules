---
format: open-rules
title: Compass
setter: Jobo
source: https://tinyurl.com/s82htsx6
case: https://sudoku-sleuth.com/cases/compass-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=7 r5c4=8 r5c6=3 r6c5=9
---

```rules
sudoku 9x9
thermo-1: thermo r4c9-r4c8-r4c7-r5c7-r6c7-r6c8-r6c9
thermo-2: thermo r4c9-r4c8-r4c7-r5c7-r5c8
thermo-3: thermo r4c1-r5c1-r6c1-r6c2-r6c3-r5c3-r4c3
thermo-4: thermo r4c1-r5c1-r6c1-r6c2-r5c2
thermo-5: thermo r7c6-r7c5-r8c4-r8c5-r8c6-r9c5-r9c4
thermo-6: thermo r3c4-r2c4-r1c4-r2c5-r3c6-r2c6-r1c6
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r1c8-r2c8 colour "white"
kropki-3: kropki r8c8-r9c8 colour "white"
kropki-4: kropki r8c2-r9c2 colour "white"
arrow-1: arrow r2c8-r3c9 bulb ["r1c7"]
arrow-2: arrow r8c8-r9c7 bulb ["r7c9"]
arrow-3: arrow r8c2-r7c1 bulb ["r9c3"]
arrow-4: arrow r2c2-r1c3 bulb ["r3c1"]
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits along an arrow must sum to the digit in that arrow's circle.

Digits separated by a white dot must be consecutive.
