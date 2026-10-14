---
format: open-rules
title: Acrobats
setter: Blobz
source: https://sudokupad.app/blobz/acrobats
case: https://sudoku-sleuth.com/cases/acrobats
library: https://rules.sudoku-sleuth.com/
status: read
exported: 28ffab087531ee182ae32709af4f9e5f
---

```rules
sudoku 9x9
cage-1: cage r5c8-r5c9-r6c9 total 10 connected true
cage-2: cage r5c1-r5c2-r6c1 total 14 connected true
cage-3: cage r9c4-r9c5-r9c6 total 14 connected true
cage-4: cage r3c1-r3c2 total 11 connected true
cage-5: cage r3c8-r3c9 total 11 connected true
thermo-1: thermo r1c4-r2c4-r3c4-r2c3-r3c2
thermo-2: thermo r1c6-r2c6-r3c6-r2c7-r3c8
thermo-3: thermo r7c3-r8c3-r9c3-r9c2-r8c2-r7c2
thermo-4: thermo r7c7-r8c7-r9c7-r9c8-r8c8-r7c8
thermo-5: thermo r6c8-r7c9-r8c9-r9c9
thermo-6: thermo r9c1-r8c1-r7c1-r6c2
thermo-7: thermo r4c5-r4c6-r4c7-r5c7-r6c7
thermo-8: thermo r6c5-r6c4-r6c3-r5c3-r4c3
thermo-9: thermo r8c5-r9c5-r8c4-r7c5-r8c6
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

In cages, digits sum to the given total.
