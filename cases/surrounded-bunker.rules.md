---
format: open-rules
title: Surrounded Bunker
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/surrounded-bunker
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r3c3 bulb ["r1c1"]
arrow-2: arrow r8c2-r7c3 bulb ["r9c1"]
arrow-3: arrow r8c8-r7c7 bulb ["r9c9"]
arrow-4: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-5: arrow r5c8-r4c7 bulb ["r5c9"]
arrow-6: arrow r5c2-r6c3 bulb ["r5c1"]
whispers-1: whispers r4c3-r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r7c6-r7c5-r7c4-r6c3-r5c3 gap 5
whispers-2: whispers r5c6-r4c6-r4c5-r4c4-r5c4-r6c4-r6c5-r6c6 gap 5
pair-1: pair r5c1-r5c2 relation {"op":"sum","value":5}
pair-2: pair r5c8-r5c9 relation {"op":"sum","value":5}
pair-3: pair r7c1-r7c2 relation {"op":"sum","value":5}
pair-4: pair r9c5-r9c6 relation {"op":"sum","value":5}
pair-5: pair r2c4-r2c5 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on arrows sum to the number in the arrow's circle. Numbers with a V between them sum to 5. Not all Vs are given.
