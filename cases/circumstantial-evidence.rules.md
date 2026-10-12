---
format: open-rules
title: Circumstantial Evidence
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/circumstantial-evidence
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c3-r3c2-r4c1 bulb ["r1c4"]
arrow-2: arrow r4c3-r5c2-r6c1 bulb ["r3c4"]
arrow-3: arrow r7c2-r8c1 bulb ["r6c3"]
arrow-4: arrow r7c3-r8c2 bulb ["r6c4"]
arrow-5: arrow r8c7-r9c8 bulb ["r7c6"]
arrow-6: arrow r6c7-r7c8-r8c9 bulb ["r5c6"]
arrow-7: arrow r4c7-r5c8-r6c9 bulb ["r3c6"]
arrow-8: arrow r5c4-r5c5 bulb ["r5c3"]
arrow-9: arrow r9c4-r9c5 bulb ["r8c3"]
arrow-10: arrow r2c8-r3c7-r4c6 bulb ["r1c9"]
arrow-11: arrow r3c9-r4c9 bulb ["r2c9"]
thermo-1: thermo r4c1-r3c2-r2c3-r1c4
thermo-2: thermo r6c1-r5c2-r4c3-r3c4
thermo-3: thermo r8c1-r7c2-r6c3
thermo-4: thermo r8c2-r7c3-r6c4
thermo-5: thermo r9c8-r8c7-r7c6
thermo-6: thermo r8c9-r7c8-r6c7-r5c6
thermo-7: thermo r6c9-r5c8-r4c7-r3c6
thermo-8: thermo r5c5-r5c4-r5c3
thermo-9: thermo r9c5-r9c4-r8c3
thermo-10: thermo r4c6-r3c7-r2c8-r1c9
thermo-11: thermo r4c9-r3c9-r2c9
```

Normal Sudoku rules apply. ARROWS(+)- Numbers on arrows sum to the number in the arrow's circle. ALSO, numbers on arrows strictly DECREASE toward the arrow tip.
