---
format: open-rules
title: Kraken
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/kraken
library: https://rules.sudoku-sleuth.com/
status: read
exported: ae343f2fcbb21ba13010227dd1840af1
---

```rules
sudoku 9x9
kropki-1: kropki r3c5-r3c6 white
kropki-2: kropki r3c6-r4c6 white
kropki-3: kropki r5c2-r6c2 white
kropki-4: kropki r5c7-r5c8 black
kropki-5: kropki r2c5-r3c5 black
kropki-6: kropki r6c5-r6c6 black
kropki-7: kropki r5c2-r5c3 black
kropki-8: kropki r6c4-r7c4 black
kropki-9: kropki r4c4-r4c5 black
kropki-10: kropki r6c7-r7c7 black
kropki-11: kropki r2c6-r3c6 black
kropki-12: kropki r1c3-r1c4 black
kropki-13: kropki r1c2-r1c3 black
kropki-14: kropki r1c2-r2c2 black
kropki-15: kropki r1c8-r2c8 black
kropki-16: kropki r2c9-r3c9 black
arrow-1: arrow r6c4-r7c3-r8c2 bulb ["r5c5"]
arrow-2: arrow r6c4-r7c4-r8c5-r7c6 bulb ["r5c5"]
arrow-3: arrow r6c4-r6c3-r5c2-r4c3 bulb ["r5c5"]
arrow-4: arrow r6c4-r6c3-r6c2 bulb ["r5c5"]
arrow-5: arrow r6c4-r7c4-r8c4 bulb ["r5c5"]
arrow-6: arrow r4c6-r3c7-r2c8 bulb ["r5c5"]
arrow-7: arrow r4c6-r4c7-r5c8 bulb ["r5c5"]
arrow-8: arrow r4c6-r3c6-r2c5 bulb ["r5c5"]
arrow-9: arrow r4c6-r5c7-r6c7 bulb ["r5c5"]
arrow-10: arrow r4c6-r3c5-r3c4 bulb ["r5c5"]
arrow-11: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-12: arrow r6c6-r7c7-r8c7 bulb ["r5c5"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the circle. All arrows originate at the center of the grid. Numbers may repeat on arrows, if other rules allow. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all dots are given.
