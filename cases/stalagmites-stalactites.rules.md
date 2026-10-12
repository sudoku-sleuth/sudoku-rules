---
format: open-rules
title: Stalagmites & Stalactites
setter: Jobo
source: https://tinyurl.com/yjnn2xns
case: https://sudoku-sleuth.com/cases/stalagmites-stalactites
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2
thermo-2: thermo r7c3-r6c3-r5c3-r4c3-r3c3
thermo-3: thermo r6c4-r5c4-r4c4
thermo-4: thermo r6c6-r5c6-r4c6
thermo-5: thermo r7c7-r6c7-r5c7-r4c7-r3c7
thermo-6: thermo r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8
whispers r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2 gap 4
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Adjacent digits along the orange line must differ by at least 4.

Cells separated by a knight's move cannot contain the same digit.
