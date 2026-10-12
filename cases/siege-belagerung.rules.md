---
format: open-rules
title: Siege (Belagerung)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/siege-belagerung
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6-r2c6-r2c7-r3c7-r3c8-r4c8-r4c9-r5c9 total 18 repeats true connected true
cage-2: cage r5c1-r6c1-r6c2-r7c2-r7c3-r8c3-r8c4-r9c4 total 63 repeats true connected true
cage-3: cage r1c4-r2c3-r2c4 total 21 repeats true connected true
cage-4: cage r3c2-r3c3-r4c1-r4c2 total 15 repeats true connected true
kropki-1: kropki r8c4-r9c4 colour "white"
kropki-2: kropki r8c3-r8c4 colour "white"
kropki-3: kropki r7c2-r7c3 colour "white"
kropki-4: kropki r6c2-r7c2 colour "white"
kropki-5: kropki r5c1-r6c1 colour "white"
kropki-6: kropki r2c3-r2c4 colour "white"
kropki-7: kropki r3c2-r3c3 colour "white"
kropki-8: kropki r3c2-r4c2 colour "white"
arrow-1: arrow r4c6-r3c7 bulb ["r5c5"]
arrow-2: arrow r6c6-r7c7 bulb ["r5c5"]
arrow-3: arrow r6c4-r7c3 bulb ["r5c5"]
arrow-4: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-5: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-6: arrow r5c4-r5c3-r5c2 bulb ["r5c5"]
arrow-7: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-8: arrow r9c8-r9c7 bulb ["r9c9"]
arrow-9: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-10: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-11: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-12: arrow r2c1-r3c2 bulb ["r1c1"]
```

Normal Sudoku rules apply. Numbers in dashed regions sum to the number in the top left corner of the region. Numbers may repeat in dashed regions. Numbers on arrows sum to the number in the circle at the base of the arrow. Numbers with a white dot between them are consecutive. Not all possible dots are shown.
