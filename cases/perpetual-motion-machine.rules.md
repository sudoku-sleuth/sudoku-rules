---
format: open-rules
title: Perpetual Motion Machine
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/perpetual-motion-machine
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8a2ffef271e65bac8c88173e231037e0
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7-r3c7 total 18 connected true
cage-2: cage r2c1-r3c1 total 14 connected true
thermo-1: thermo r1c3-r1c4-r1c5-r1c6-r1c7
thermo-2: thermo r3c9-r4c9-r5c9-r6c9-r7c9
thermo-3: thermo r9c7-r9c6-r9c5-r9c4-r9c3
thermo-4: thermo r7c1-r6c1-r5c1-r4c1-r3c1
thermo-5: thermo r6c3-r5c3-r4c3
thermo-6: thermo r3c4-r3c5-r3c6
thermo-7: thermo r4c7-r5c7-r6c7
arrow-1: arrow r2c2-r1c3 bulb ["r3c1"]
arrow-2: arrow r2c8-r3c9 bulb ["r1c7"]
arrow-3: arrow r8c8-r9c7 bulb ["r7c9"]
arrow-4: arrow r8c2-r7c1 bulb ["r9c3"]
arrow-5: arrow r3c4 bulb ["r4c3"]
arrow-6: arrow r4c7 bulb ["r3c6"]
arrow-7: arrow r6c3 bulb ["r7c4"]
arrow-8: arrow r7c7-r8c7-r9c7 bulb ["r6c7"]
arrow-9: arrow r6c5-r6c6 bulb ["r6c4"]
arrow-10: arrow r5c6-r4c6 bulb ["r5c5"]
```

Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers increase from the bulb end. ARROWS-Numbers on arrows sum to the number in the arrow's circle. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
