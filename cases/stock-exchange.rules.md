---
format: open-rules
title: Stock Exchange
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stock-exchange
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c4-r9c4 total 5 connected true
cage-2: cage r8c5-r9c5 total 5 connected true
cage-3: cage r7c6-r8c6-r9c6 total 19 connected true
cage-4: cage r6c5-r7c5 total 15 connected true
cage-5: cage r1c5-r2c5-r3c5-r4c5 total 24 connected true
cage-6: cage r5c8-r5c9 total 6 connected true
cage-7: cage r5c1-r5c2 total 8 connected true
cage-8: cage r5c3-r5c4 total 14 connected true
cage-9: cage r1c4-r2c4 total 15 connected true
cage-10: cage r3c4-r4c4 total 7 connected true
cage-11: cage r2c7-r2c8 total 15 connected true
cage-12: cage r6c7-r6c8-r7c8 total 12 connected true
arrow-1: arrow r8c8-r7c7-r6c6 bulb ["r9c9"]
arrow-2: arrow r3c7-r4c6 bulb ["r2c8"]
arrow-3: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-4: arrow r7c3-r6c4 bulb ["r8c2"]
arrow-5: arrow r6c3-r7c2 bulb ["r5c4"]
arrow-6: arrow r6c7-r7c8 bulb ["r5c6"]
arrow-7: arrow r4c7-r3c8 bulb ["r5c6"]
arrow-8: arrow r3c4-r2c3 bulb ["r4c5"]
arrow-9: arrow r3c6-r2c7 bulb ["r4c5"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers do not repeat on arrows. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages.
