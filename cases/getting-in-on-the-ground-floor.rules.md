---
format: open-rules
title: Getting In on the Ground Floor
setter: Will Power
source: https://sudokupad.app/x9ol856g46
case: https://sudoku-sleuth.com/cases/getting-in-on-the-ground-floor
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c1-r7c2 total 10 connected true
cage-2: cage r8c1-r9c1 total 10 connected true
cage-3: cage r8c2-r9c2 total 10 connected true
cage-4: cage r8c3-r9c3 total 10 connected true
cage-5: cage r1c7-r1c8 total 10 connected true
cage-6: cage r8c9-r9c9 total 10 connected true
kropki-1: kropki r2c4-r3c4 colour "white"
kropki-2: kropki r3c4-r4c4 colour "white"
kropki-3: kropki r4c4-r5c4 colour "white"
kropki-4: kropki r1c4-r2c4 colour "white"
kropki-5: kropki r6c5-r6c6 colour "white"
kropki-6: kropki r6c6-r6c7 colour "white"
kropki-7: kropki r6c7-r6c8 colour "white"
kropki-8: kropki r6c8-r6c9 colour "white"
kropki-9: kropki r9c8-r9c9 colour "black"
arrow-1: arrow r3c2-r2c3-r1c4 bulb ["r4c1"]
arrow-2: arrow r2c3-r3c4-r4c5 bulb ["r1c2"]
arrow-3: arrow r3c4-r4c3-r5c2 bulb ["r2c5"]
arrow-4: arrow r4c3-r3c2-r2c1 bulb ["r5c4"]
arrow-5: arrow r6c7-r7c8-r8c9 bulb ["r5c6"]
arrow-6: arrow r7c8-r8c7-r9c6 bulb ["r6c9"]
arrow-7: arrow r8c7-r7c6-r6c5 bulb ["r9c8"]
arrow-8: arrow r7c6-r6c7-r5c8 bulb ["r8c5"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows if other rules allow. KROPKI PAIRS- Numbers with white dots between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are given. KILLER- Numbers in cages sum to 10.
