---
format: open-rules
title: A River Runs Through It
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/a-river-runs-through-it
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r2c2-r3c3-r4c4-r5c4-r5c5-r6c6-r7c7
arrow-1: arrow r6c7-r5c7-r4c6-r4c5-r3c4-r2c4 bulb ["r7c7"]
arrow-2: arrow r5c3-r6c4-r6c5-r7c6 bulb ["r4c3"]
arrow-3: arrow r2c6-r2c7-r3c8 bulb ["r2c5"]
arrow-4: arrow r8c4-r8c3-r7c2 bulb ["r8c5"]
arrow-5: arrow r4c1-r3c1-r2c2 bulb ["r5c1"]
arrow-6: arrow r7c9-r8c9-r9c8 bulb ["r6c9"]
arrow-7: arrow r1c8-r2c9 bulb ["r1c7"]
arrow-8: arrow r7c1-r6c1 bulb ["r8c1"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number on that arrow's circle. Numbers may repeat on arrows. Numbers on a thermometer increase from the bulb end.
