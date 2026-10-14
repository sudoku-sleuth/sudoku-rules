---
format: open-rules
title: Xylophone
setter: Will Power
source: https://sudokupad.app/zn7c6ya4za
case: https://sudoku-sleuth.com/cases/xylophone
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0bdf944cd6467d62a2ce80d29ef517b0
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c2-r1c3
thermo-2: thermo r7c9-r8c8-r9c7
thermo-3: thermo r5c3-r4c4-r3c5-r2c6-r1c7
thermo-4: thermo r4c2-r3c3-r2c4-r1c5
thermo-5: thermo r6c8-r7c7-r8c6-r9c5
thermo-6: thermo r5c7-r6c6-r7c5-r8c4-r9c3
thermo-7: thermo r6c4-r5c5-r4c6-r3c7-r2c8
kropki-1: kropki r1c4-r1c5 white
kropki-2: kropki r3c8-r3c9 white
kropki-3: kropki r7c1-r8c1 white
arrow-1: arrow r3c3-r4c4-r5c5 bulb ["r2c2"]
arrow-2: arrow r7c7-r6c6-r5c5 bulb ["r8c8"]
arrow-3: arrow r2c4-r3c5 bulb ["r1c3"]
arrow-4: arrow r8c6-r7c5 bulb ["r9c7"]
arrow-5: arrow r7c9-r6c8-r5c7 bulb ["r8c9"]
arrow-6: arrow r3c1-r4c2-r5c3 bulb ["r2c1"]
```

Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers increase from the bulb end. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
