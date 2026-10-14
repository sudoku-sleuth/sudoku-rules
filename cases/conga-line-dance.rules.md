---
format: open-rules
title: Conga Line Dance
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/conga-line-dance
library: https://rules.sudoku-sleuth.com/
status: read
exported: 91ba6c9a6a9bec5d3b16c6653f3eee9b
---

```rules
sudoku 9x9
arrow-1: arrow r7c7-r6c8 bulb ["r8c6"]
arrow-2: arrow r8c5-r8c6 bulb ["r8c4"]
arrow-3: arrow r7c3-r8c4 bulb ["r6c2"]
arrow-4: arrow r5c2-r6c2 bulb ["r4c2"]
arrow-5: arrow r3c3-r4c2 bulb ["r2c4"]
arrow-6: arrow r2c5-r2c4 bulb ["r2c6"]
arrow-7: arrow r4c4-r5c3 bulb ["r3c5"]
arrow-8: arrow r4c6-r3c5 bulb ["r5c7"]
arrow-9: arrow r6c6-r5c7 bulb ["r7c5"]
arrow-10: arrow r1c2-r1c3-r2c2 bulb ["r1c1"]
arrow-11: arrow r2c9-r3c9-r2c8 bulb ["r1c9"]
arrow-12: arrow r7c1-r8c1-r9c1 bulb ["r8c2"]
arrow-13: arrow r9c8-r9c7-r8c7 bulb ["r9c9"]
arrow-14: arrow r5c5-r5c6 bulb ["r5c4"]
arrow-15: arrow r3c7-r3c6 bulb ["r3c8"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's circle. Numbers may repeat on arrows, if other rules allow.
