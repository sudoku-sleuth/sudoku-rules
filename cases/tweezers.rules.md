---
format: open-rules
title: Tweezers
setter: Jobo
source: https://sudokupad.app/6qk73k6waq
case: https://sudoku-sleuth.com/cases/tweezers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r2c1-r1c2-r1c3-r1c4-r1c5
thermo-2: thermo r2c1-r3c2-r3c3-r3c4-r3c5
thermo-3: thermo r2c7-r3c6-r4c6-r5c6-r6c6
thermo-4: thermo r2c7-r3c8-r4c8-r5c8-r6c8
thermo-5: thermo r7c1-r6c2-r6c3-r6c4-r6c5
thermo-6: thermo r7c1-r8c2-r8c3-r8c4-r8c5
thermo-7: thermo r8c9-r7c8-r7c7
thermo-8: thermo r8c9-r9c8-r9c7
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Cells separated by a king's move cannot contain the same digit.
