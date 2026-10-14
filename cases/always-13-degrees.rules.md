---
format: open-rules
title: Always 13 Degrees
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/always-13-degrees
library: https://rules.sudoku-sleuth.com/
status: read
exported: 70f94193f80c46ad6991c76f60ba26ee
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c1-r3c1-r4c1
thermo-2: thermo r5c2-r4c2-r3c2-r2c2
thermo-3: thermo r7c3-r6c3-r5c3-r4c3
thermo-4: thermo r7c1-r6c1
thermo-5: thermo r9c1-r8c1
thermo-6: thermo r9c3-r9c2
thermo-7: thermo r5c6-r5c5-r5c4
thermo-8: thermo r6c9-r7c9-r8c9
thermo-9: thermo r9c7-r8c7-r7c7
thermo-10: thermo r1c8-r2c8-r3c8
thermo-11: thermo r3c7-r3c6-r3c5
thermo-12: thermo r2c5-r2c4-r2c3
thermo-13: thermo r1c5-r1c4-r1c3
```

Normal Sudoku rules apply.

THERMOMETERS(+)- Numbers on thermometers increase from the bulb end. The numbers on each thermometer sum to 13. Each thermometer has a unique set of numbers.
