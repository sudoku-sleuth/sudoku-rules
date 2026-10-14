---
format: open-rules
title: Nexus
setter: Will Power
source: https://sudokupad.app/z5g0fq2sr5
case: https://sudoku-sleuth.com/cases/nexus
library: https://rules.sudoku-sleuth.com/
status: read
exported: ddf67f057e0f3ae032f7c9641cf279ea
---

```rules
sudoku 9x9
cage-1: cage r3c5-r4c5 total 15 connected true
cage-2: cage r5c3-r5c4 total 15 connected true
cage-3: cage r5c6-r5c7 total 7 connected true
cage-4: cage r6c5-r7c5-r8c5 total 11 connected true
cage-5: cage r1c8-r2c7-r2c8-r3c7 total 30 connected true
cage-6: cage r1c2-r2c2-r3c2-r3c3 total 30 connected true
cage-7: cage r7c7-r8c7-r8c8-r8c9 total 30 connected true
cage-8: cage r7c2-r8c1-r8c2-r8c3-r9c2 total 15 connected true
cage-9: cage r8c6-r9c4-r9c5-r9c6 total 29 connected true
cage-10: cage r4c2-r4c3-r5c1-r5c2-r6c2-r6c3 total 21 connected true
arrow-1: arrow r2c5-r3c6-r4c6 bulb ["r1c4"]
arrow-2: arrow r2c5-r3c4-r4c4 bulb ["r1c6"]
arrow-3: arrow r5c8-r6c7-r6c6 bulb ["r4c9"]
arrow-4: arrow r5c8-r4c7-r4c6 bulb ["r6c9"]
arrow-5: arrow r8c5-r7c4-r6c4 bulb ["r9c6"]
arrow-6: arrow r8c5-r7c6-r6c6 bulb ["r9c4"]
arrow-7: arrow r5c2-r4c3-r4c4 bulb ["r6c1"]
arrow-8: arrow r5c2-r6c3-r6c4 bulb ["r4c1"]
arrow-9: arrow r8c3-r9c3 bulb ["r7c3"]
arrow-10: arrow r8c2-r8c1 bulb ["r7c3"]
arrow-11: arrow r2c7-r1c7 bulb ["r3c7"]
arrow-12: arrow r2c8-r1c9 bulb ["r3c7"]
arrow-13: arrow r3c8-r3c9 bulb ["r3c7"]
arrow-14: arrow r8c9-r7c9 bulb ["r8c8"]
arrow-15: arrow r8c7-r9c7 bulb ["r8c8"]
arrow-16: arrow r2c3-r1c3 bulb ["r2c2"]
arrow-17: arrow r2c1-r3c2 bulb ["r2c2"]
arrow-18: arrow r6c5-r7c5 bulb ["r5c5"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. In boxes 2, 4, 6 and 8, arrows cross one another. Numbers do not repeat on arrows. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
