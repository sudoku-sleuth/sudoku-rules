---
format: open-rules
title: Close Neighbors
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/close-neighbors
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8912df0ca0e6bd5181606501b17f15c8
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r4c3 white
kropki-2: kropki r4c3-r4c4 white
kropki-3: kropki r4c4-r4c5 white
kropki-4: kropki r4c5-r4c6 white
kropki-5: kropki r4c6-r4c7 white
kropki-6: kropki r4c1-r4c2 white
kropki-7: kropki r9c3-r9c4 white
kropki-8: kropki r9c4-r9c5 white
kropki-9: kropki r9c5-r9c6 white
kropki-10: kropki r9c6-r9c7 white
kropki-11: kropki r7c3-r7c4 white
kropki-12: kropki r7c4-r7c5 white
kropki-13: kropki r1c5-r2c5 white
kropki-14: kropki r1c7-r1c8 white
kropki-15: kropki r1c8-r1c9 white
kropki-16: kropki r1c9-r2c9 white
kropki-17: kropki r2c8-r2c9 white
kropki-18: kropki r9c7-r9c8 white
kropki-19: kropki r4c7-r4c8 white
arrow-1: arrow r2c2-r2c1-r1c1-r1c2 bulb ["r3c2","r4c2"]
arrow-2: arrow r5c1-r6c1 bulb ["r3c1","r4c1"]
arrow-3: arrow r2c6-r2c7-r2c8-r2c9-r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r2c3-r2c4-r2c5 bulb ["r3c6","r4c6"]
arrow-4: arrow r5c3-r5c2-r6c2-r7c2-r7c1 bulb ["r3c3","r4c3"]
arrow-5: arrow r5c4-r6c4-r6c3-r7c3-r8c3-r8c2-r8c1-r9c1-r9c2-r9c3 bulb ["r3c4","r4c4"]
arrow-6: arrow r5c5-r6c5-r7c4-r8c4-r9c4-r9c5-r9c6-r8c6-r7c6-r7c5-r8c5 bulb ["r3c5","r4c5"]
arrow-7: arrow r5c7-r5c6-r6c6-r6c7-r7c7-r8c7-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9-r5c9-r5c8-r6c8-r7c8-r8c8 bulb ["r3c7","r4c7"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's pill. Pills are read from top to bottom. Numbers may repeat on arrows, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given.
