---
format: open-rules
title: Spring Has Sprung
setter: Blobz
source: https://sudokupad.app/blobz/spring-has-sprung
case: https://sudoku-sleuth.com/cases/spring-has-sprung
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
slow-thermo-1: slow-thermo r5c6-r6c7-r7c7-r8c6-r8c5-r8c4-r7c3-r6c2-r5c2-r4c2-r3c2-r2c3-r1c4
slow-thermo-2: slow-thermo r5c4-r4c3-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8-r5c8-r6c8-r7c8-r8c7-r9c6
slow-thermo-3: slow-thermo r8c8-r9c8-r9c9-r8c9
slow-thermo-4: slow-thermo r2c2-r1c2-r1c1-r2c1
slow-thermo-5: slow-thermo r8c2-r9c2-r9c1-r8c1
slow-thermo-6: slow-thermo r1c9-r1c8-r2c8-r2c9
```

Normal sudoku rules apply.

Along SLOW thermometers digits stay the same or increase as they move away from the bulb.
