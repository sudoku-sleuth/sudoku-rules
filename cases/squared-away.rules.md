---
format: open-rules
title: Squared Away
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/squared-away
library: https://rules.sudoku-sleuth.com/
status: read
exported: feba1c5c3186da0e8f3e61810b6209f9
---

```rules
sudoku 9x9
kropki r3c2-r4c2 white
arrow-1: arrow r9c1-r9c2-r9c3-r8c3-r8c2-r7c2-r7c3-r6c3-r6c2 bulb ["r7c1","r8c1"]
arrow-2: arrow r4c7 bulb ["r3c8"]
arrow-3: arrow r5c2-r4c2-r4c1 bulb ["r5c1","r6c1"]
arrow-4: arrow r5c5-r5c4-r4c4-r4c3-r5c3 bulb ["r6c4","r6c5"]
arrow-5: arrow r2c4 bulb ["r1c3"]
arrow-6: arrow r2c7 bulb ["r1c6"]
arrow-7: arrow r6c8-r5c7-r4c6-r3c6-r2c5-r1c4-r2c3-r2c2-r3c1 bulb ["r4c8","r5c8"]
arrow-8: arrow r9c7-r9c8-r9c9-r8c9-r8c8-r7c8-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r2c8-r1c8-r1c7-r2c6 bulb ["r7c7","r8c7"]
arrow-9: arrow r9c6-r8c6-r8c5-r8c4-r7c4-r7c5-r7c6-r6c6-r5c6-r4c5-r3c4-r3c3-r3c2 bulb ["r9c4","r9c5"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the circle or pill attached to the arrow. Pills are read from left to right or top to bottom. The nine circles and pills are the nine perfect squares lower than 100. Numbers may repeat on arrows, if other rules allow. The pink cells are the only ones not on arrows. Pink cells can only include 2, 6, 7, or 9. Numbers with a white dot between them are consecutive. Not all possible dots are shown.
