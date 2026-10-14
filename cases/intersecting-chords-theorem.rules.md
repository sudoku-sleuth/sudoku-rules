---
format: open-rules
title: Intersecting Chords Theorem
setter: Will Power
source: https://sudokupad.app/strgs9idl2
case: https://sudoku-sleuth.com/cases/intersecting-chords-theorem
library: https://rules.sudoku-sleuth.com/
status: read
exported: d97994cdf6c8c462d655b10a7e7e9256
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4 total 11 connected true
cage-2: cage r3c2-r4c2-r5c2 total 13 connected true
cage-3: cage r5c3-r5c4-r5c5 total 15 connected true
cage-4: cage r2c5-r3c5-r4c5 total 13 connected true
cage-5: cage r1c1-r1c2-r2c1 total 24 connected true
kropki-1: kropki r3c2-r3c3 white
kropki-2: kropki r2c3-r3c3 white
kropki-3: kropki r2c2-r2c3 white
arrow-1: arrow r2c3-r3c2-r4c1 bulb ["r1c4"]
arrow-2: arrow r3c2-r4c2 bulb ["r2c2"]
arrow-3: arrow r4c2-r5c3-r6c4 bulb ["r3c1"]
arrow-4: arrow r5c3-r5c4 bulb ["r5c2"]
arrow-5: arrow r5c4-r4c5-r3c6 bulb ["r6c3"]
arrow-6: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-7: arrow r3c5-r2c4-r1c3 bulb ["r4c6"]
arrow-8: arrow r2c4-r2c3 bulb ["r2c5"]
arrow-9: arrow r4c8-r5c7 bulb ["r3c9"]
arrow-10: arrow r4c8-r5c9 bulb ["r3c7"]
arrow-11: arrow r8c4-r7c5 bulb ["r9c3"]
arrow-12: arrow r8c2-r7c1 bulb ["r9c3"]
arrow-13: arrow r7c4-r6c5 bulb ["r8c3"]
arrow-14: arrow r7c8-r8c7-r9c6 bulb ["r6c9"]
arrow-15: arrow r8c8-r9c7 bulb ["r9c9"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
