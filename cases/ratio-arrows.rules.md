---
format: open-rules
title: Ratio Arrows
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/ratio-arrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: f5ba33d1ff8a3106b62328d9e2e6fbd7
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 white
kropki-2: kropki r9c3-r9c4 black
kropki-3: kropki r8c2-r8c3 black
kropki-4: kropki r6c1-r6c2 black
kropki-5: kropki r3c1-r3c2 black
kropki-6: kropki r1c4-r1c5 black
kropki-7: kropki r4c3-r4c4 black
kropki-8: kropki r7c5-r8c5 black
kropki-9: kropki r5c6-r5c7 black
kropki-10: kropki r9c6-r9c7 black
kropki-11: kropki r2c9-r3c9 black
kropki-12: kropki r4c8-r4c9 black
arrow-1: arrow r9c2-r9c3-r9c4 bulb ["r9c1"]
arrow-2: arrow r8c2-r8c3 bulb ["r8c1"]
arrow-3: arrow r6c1-r5c1-r4c1 bulb ["r6c2"]
arrow-4: arrow r3c2-r3c1 bulb ["r4c2"]
arrow-5: arrow r1c4-r1c5 bulb ["r1c3"]
arrow-6: arrow r3c4-r4c4-r4c3 bulb ["r2c4"]
arrow-7: arrow r7c5-r7c6-r8c6 bulb ["r8c5"]
arrow-8: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-9: arrow r9c7-r8c7-r7c8 bulb ["r9c6"]
arrow-10: arrow r2c9-r3c9-r3c8 bulb ["r1c9"]
arrow-11: arrow r4c8-r5c9-r6c8 bulb ["r4c9"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers do not repeat on arrows. KROPKI PAIRS- Numbers with black dots between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible dots are given.
