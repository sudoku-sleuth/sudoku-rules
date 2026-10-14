---
format: open-rules
title: Rising Temperatures
setter: Blobz
source: https://sudokupad.app/blobz/rising-temperatures
case: https://sudoku-sleuth.com/cases/rising-temperatures
library: https://rules.sudoku-sleuth.com/
status: read
exported: bb0ae903bc03993a4c14552864694278
---

```rules
sudoku 9x9
cage-1: cage r7c2-r8c2-r9c2 total 9 connected true
cage-2: cage r6c3-r7c3-r8c3 total 11 connected true
cage-3: cage r5c4-r6c4-r7c4 total 13 connected true
cage-4: cage r4c5-r5c5-r6c5 total 15 connected true
cage-5: cage r3c6-r4c6-r5c6 total 17 connected true
cage-6: cage r2c7-r3c7-r4c7 total 19 connected true
cage-7: cage r1c8-r2c8-r3c8 total 21 connected true
thermo-1: thermo r6c5-r5c5-r4c5
thermo-2: thermo r7c4-r6c4-r5c4
thermo-3: thermo r5c6-r4c6-r3c6
thermo-4: thermo r8c3-r7c3-r6c3
thermo-5: thermo r4c7-r3c7-r2c7
thermo-6: thermo r9c2-r8c2-r7c2
thermo-7: thermo r3c8-r2c8-r1c8
renban-1: renban r4c4-r5c3-r6c2-r7c1
renban-2: renban r9c3-r8c4-r7c5
renban-3: renban r6c6-r5c7-r4c8-r3c9
renban-4: renban r1c7-r2c6-r3c5
renban-5: renban r1c6-r1c5-r1c4-r2c4
renban-6: renban r9c4-r9c5-r9c6-r8c6
renban-7: renban r8c7-r7c7-r7c8
renban-8: renban r3c2-r3c3-r2c3
renban-9: renban r4c3-r4c2-r4c1
renban-10: renban r6c7-r6c8-r6c9
```

Normal sudoku rules apply.

Digits in cages sum to the given value.

Along thermometers digits increase as they move away from the bulb.

Pink lines contain a non-repeating, consecutive sequence in any order.
