---
format: open-rules
title: Lake Tahoe Ski Resort
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/lake-tahoe-ski-resort
library: https://rules.sudoku-sleuth.com/
status: read
exported: bcae3642f3f53e319e3bd89b0bf5ea50
---

```rules
sudoku 9x9
arrow-1: arrow r8c8-r7c9 bulb ["r8c7"]
arrow-2: arrow r6c8-r7c9 bulb ["r5c8"]
arrow-3: arrow r4c9-r5c8 bulb ["r3c9"]
arrow-4: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-5: arrow r7c6-r8c7 bulb ["r7c5"]
arrow-6: arrow r6c4-r7c5 bulb ["r6c3"]
arrow-7: arrow r5c2-r6c3 bulb ["r4c2"]
arrow-8: arrow r3c3-r4c2 bulb ["r3c4"]
arrow-9: arrow r2c5-r3c4 bulb ["r2c6"]
arrow-10: arrow r1c7-r2c6 bulb ["r1c8"]
arrow-11: arrow r1c4-r1c5 bulb ["r2c3"]
arrow-12: arrow r2c2-r2c3 bulb ["r3c1"]
arrow-13: arrow r5c1-r4c1 bulb ["r6c1"]
arrow-14: arrow r8c3-r7c2 bulb ["r9c4"]
arrow-15: arrow r3c7-r4c7 bulb ["r2c8"]
arrow-16: arrow r5c6-r6c6 bulb ["r4c6"]
arrow-17: arrow r5c4-r5c5 bulb ["r4c4"]
arrow-18: arrow r8c1-r9c1-r9c2 bulb ["r7c1"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow.
