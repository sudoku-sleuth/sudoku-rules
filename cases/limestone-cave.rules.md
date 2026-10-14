---
format: open-rules
title: Limestone Cave
setter: Blobz
source: https://sudokupad.app/blobz/limestone-cave
case: https://sudoku-sleuth.com/cases/limestone-cave
library: https://rules.sudoku-sleuth.com/
status: read
exported: a52cb0c0fc64936ae0eeaad478917d78
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r3c1-r4c1-r5c1
thermo-2: thermo r1c2-r2c2-r3c2
thermo-3: thermo r1c3-r2c3-r3c3-r4c3-r5c3
thermo-4: thermo r1c4-r2c4-r3c4
thermo-5: thermo r1c5-r2c5-r3c5-r4c5
thermo-6: thermo r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
thermo-7: thermo r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
thermo-8: thermo r1c8-r2c8
thermo-9: thermo r2c9-r3c9-r4c9
thermo-10: thermo r9c2-r8c2-r7c2-r6c2-r5c2
thermo-11: thermo r9c3-r8c3
thermo-12: thermo r9c5-r8c5-r7c5-r6c5
thermo-13: thermo r9c6-r8c6-r7c6
thermo-14: thermo r9c8-r8c8-r7c8-r6c8
thermo-15: thermo r9c1-r8c1-r7c1
thermo-16: thermo r9c9-r8c9
```

Normal sudoku rules apply.

Along thermometers, digits must increase as they move away from the bulb.
