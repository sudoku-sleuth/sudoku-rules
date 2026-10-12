---
format: open-rules
title: Floral Arrangement
setter: Will Power
source: https://sudokupad.app/5nyitnv97u
case: https://sudoku-sleuth.com/cases/floral-arrangement
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c6-r8c6-r9c6 total 16 connected true
cage-2: cage r8c5-r9c5 total 17 connected true
kropki r7c6-r7c7 colour "white"
arrow-1: arrow r4c4-r5c5-r6c6 bulb ["r3c3"]
arrow-2: arrow r5c3-r6c4-r7c5 bulb ["r4c2"]
arrow-3: arrow r3c5-r4c6-r5c7 bulb ["r2c4"]
arrow-4: arrow r3c5-r4c4-r5c3 bulb ["r2c6"]
arrow-5: arrow r4c6-r5c5-r6c4 bulb ["r3c7"]
arrow-6: arrow r5c7-r6c6-r7c5 bulb ["r4c8"]
arrow-7: arrow r7c8-r8c7-r9c6 bulb ["r6c9"]
arrow-8: arrow r7c2-r8c3-r9c4 bulb ["r6c1"]
arrow-9: arrow r6c2-r7c3 bulb ["r5c2"]
arrow-10: arrow r8c8-r9c7 bulb ["r7c9"]
arrow-11: arrow r2c7-r3c6 bulb ["r1c8"]
arrow-12: arrow r5c8-r6c7 bulb ["r5c9"]
arrow-13: arrow r2c2-r2c3 bulb ["r1c1"]
parity-cells r4c5-r4c6-r5c6-r5c5 parity "even"
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. Arrows in the center of the grid are all straight. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. EVEN- Cells with a gray square are even. KROPKI PAIR- Numbers with a white dot between them are consecutive. Not all possible dots are given.
