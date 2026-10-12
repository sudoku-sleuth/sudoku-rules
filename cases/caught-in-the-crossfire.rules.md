---
format: open-rules
title: Caught in the Crossfire
setter: Will Power
source: https://f-puzzles.com/?id=y2d72nla
case: https://sudoku-sleuth.com/cases/caught-in-the-crossfire
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 colour "white"
kropki-2: kropki r4c3-r4c4 colour "white"
kropki-3: kropki r3c4-r4c4 colour "white"
kropki-4: kropki r2c8-r3c8 colour "white"
kropki-5: kropki r6c7-r7c7 colour "white"
kropki-6: kropki r7c6-r7c7 colour "white"
kropki-7: kropki r6c6-r7c6 colour "white"
kropki-8: kropki r6c6-r6c7 colour "white"
kropki-9: kropki r6c2-r7c2 colour "white"
arrow-1: arrow r3c3-r4c3-r5c3 bulb ["r2c3"]
arrow-2: arrow r3c4-r4c4-r5c4 bulb ["r2c4"]
arrow-3: arrow r3c3-r3c4-r3c5 bulb ["r3c2"]
arrow-4: arrow r4c3-r4c4-r4c5 bulb ["r4c2"]
arrow-5: arrow r7c7-r6c7-r5c7 bulb ["r8c7"]
arrow-6: arrow r7c6-r6c6-r5c6 bulb ["r8c6"]
arrow-7: arrow r7c7-r7c6-r7c5 bulb ["r7c8"]
arrow-8: arrow r6c7-r6c6-r6c5 bulb ["r6c8"]
arrow-9: arrow r3c8-r3c9 bulb ["r3c7"]
arrow-10: arrow r3c8-r2c8 bulb ["r4c8"]
arrow-11: arrow r7c2-r7c1 bulb ["r7c3"]
arrow-12: arrow r7c2-r8c2 bulb ["r6c2"]
pair-1: pair r3c3-r3c4 relation {"op":"sum","value":5}
pair-2: pair r1c8-r2c8 relation {"op":"sum","value":5}
pair-3: pair r5c7-r6c7 relation {"op":"sum","value":5}
pair-4: pair r8c4-r8c5 relation {"op":"sum","value":5}
pair-5: pair r8c2-r8c3 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. Numbers with a white dot between them are consecutive. Numbers with a V between them sum to 5. Not all possible dots and Vs are given.
