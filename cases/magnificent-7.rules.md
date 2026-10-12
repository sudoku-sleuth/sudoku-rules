---
format: open-rules
title: Magnificent 7
setter: Will Power
source: https://sudokupad.app/0er9czbwjm
case: https://sudoku-sleuth.com/cases/magnificent-7
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c5-r3c6 total 7 connected true
cage-2: cage r3c3-r3c4 total 7 connected true
cage-3: cage r3c1-r3c2 total 7 connected true
cage-4: cage r4c5-r5c5 total 7 connected true
cage-5: cage r8c3-r9c3 total 7 connected true
cage-6: cage r6c4-r7c4 total 7 connected true
kropki-1: kropki r3c5-r3c6 colour "white"
kropki-2: kropki r2c5-r3c5 colour "white"
kropki-3: kropki r2c6-r3c6 colour "white"
kropki-4: kropki r8c7-r8c8 colour "white"
kropki-5: kropki r8c8-r8c9 colour "white"
kropki-6: kropki r7c2-r8c2 colour "white"
kropki-7: kropki r1c1-r2c1 colour "white"
kropki-8: kropki r4c1-r4c2 colour "white"
kropki-9: kropki r4c2-r5c2 colour "white"
kropki-10: kropki r3c7-r3c8 colour "white"
kropki-11: kropki r2c8-r3c8 colour "white"
arrow-1: arrow r1c3-r1c4 bulb ["r1c2"]
arrow-2: arrow r3c4-r4c4-r5c5 bulb ["r2c4"]
arrow-3: arrow r3c6-r2c7 bulb ["r4c6"]
arrow-4: arrow r2c9-r1c9-r1c8 bulb ["r3c8"]
arrow-5: arrow r7c9-r8c8-r8c7 bulb ["r6c9"]
arrow-6: arrow r6c3-r7c3 bulb ["r5c3"]
arrow-7: arrow r7c5-r6c6 bulb ["r8c5"]
arrow-8: arrow r8c6-r7c6 bulb ["r9c7"]
arrow-9: arrow r6c1-r5c1 bulb ["r7c1"]
```

Normal Sudoku rules apply. KILLER- Numbers in Cages sum to 7. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive.
