---
format: open-rules
title: Sleet and Snow
setter: Blobz
source: https://sudokupad.app/blobz/sleet-and-snow
case: https://sudoku-sleuth.com/cases/sleet-and-snow
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1d06ac9e95860ed01f4441a857175786
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 white
kropki-2: kropki r5c1-r6c1 white
kropki-3: kropki r7c2-r7c3 white
kropki-4: kropki r7c5-r8c5 white
kropki-5: kropki r9c8-r9c9 white
kropki-6: kropki r5c2-r5c3 white
kropki-7: kropki r5c8-r6c8 white
kropki-8: kropki r6c7-r7c7 white
slow-thermo-1: slow-thermo r1c1-r2c2-r3c3-r4c4-r5c5-r6c6
slow-thermo-2: slow-thermo r2c1-r3c2-r4c3-r5c4-r6c5
slow-thermo-3: slow-thermo r1c2-r2c3-r3c4-r4c5-r5c6-r6c7
slow-thermo-4: slow-thermo r3c1-r4c2
slow-thermo-5: slow-thermo r1c3-r2c4-r3c5
slow-thermo-6: slow-thermo r1c4-r2c5-r3c6-r4c7
slow-thermo-7: slow-thermo r1c8-r2c9
slow-thermo-8: slow-thermo r1c7-r2c8
slow-thermo-9: slow-thermo r1c6-r2c7-r3c8-r4c9
slow-thermo-10: slow-thermo r2c6-r3c7-r4c8-r5c9
```

Normal sudoku rules apply.

Along SLOW thermometers digits stay the same or increase as they move away from the bulb.

White dots separate consecutive digits.
