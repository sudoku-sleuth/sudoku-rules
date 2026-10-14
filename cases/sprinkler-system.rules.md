---
format: open-rules
title: Sprinkler System
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/sprinkler-system
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3a251232712d5d2b8b32fc23a8840e78
---

```rules
sudoku 9x9
cage-1: cage r5c4-r6c4 total 9 connected true
cage-2: cage r4c4-r4c5 total 9 connected true
cage-3: cage r4c6-r5c6 total 9 connected true
cage-4: cage r6c5-r6c6 total 9 connected true
cage-5: cage r5c7-r5c8 total 13 connected true
cage-6: cage r5c2-r5c3 total 13 connected true
cage-7: cage r7c5-r8c5 total 14 connected true
cage-8: cage r2c5-r3c5 total 12 connected true
cage-9: cage r3c6-r3c7 total 7 connected true
cage-10: cage r9c3-r9c4 total 13 connected true
cage-11: cage r3c1-r4c1 total 9 connected true
cage-12: cage r5c9-r6c9 total 5 connected true
cage-13: cage r2c9-r3c9 total 14 connected true
thermo-1: thermo r5c9-r6c9-r7c9-r8c9-r9c8
thermo-2: thermo r9c5-r9c4-r9c3
thermo-3: thermo r5c1-r4c1-r3c1
thermo-4: thermo r1c7-r1c8-r2c9-r3c9
thermo-5: thermo r1c5-r1c6
thermo-6: thermo r6c5-r7c4-r7c3-r6c2-r6c1
thermo-7: thermo r5c4-r4c3-r3c3-r2c4-r1c4
thermo-8: thermo r4c5-r3c6-r3c7-r4c8-r4c9
thermo-9: thermo r5c6-r6c7-r7c7-r8c6-r9c6
```

Normal Sudoku rules apply. Numbers on thermometers increase from the bulb end. Numbers in cages sum to the number in the top left corner of the cage.
