---
format: open-rules
title: Lost In The Forest
setter: Will Power
source: https://sudokupad.app/pnyn7m1944
case: https://sudoku-sleuth.com/cases/lost-in-the-forest
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2 total 3 connected true
cage-2: cage r7c5-r7c6 total 6 connected true
cage-3: cage r6c4-r6c5 total 9 connected true
cage-4: cage r4c8-r5c8 total 12 connected true
cage-5: cage r2c7-r2c8 total 6 connected true
cage-6: cage r3c1-r3c2 total 3 connected true
thermo-1: thermo r5c2-r6c1-r7c1-r8c1-r9c1
thermo-2: thermo r8c4-r7c5-r6c5-r6c6
thermo-3: thermo r2c9-r2c8-r2c7-r3c6
thermo-4: thermo r1c5-r1c4-r2c3-r3c3
thermo-5: thermo r9c7-r9c8-r8c9-r8c8-r7c9-r6c9-r5c8
thermo-6: thermo r3c2-r3c1-r2c2-r2c1
kropki r4c4-r5c4 colour "black"
arrow-1: arrow r5c4-r5c3-r5c2 bulb ["r5c5"]
arrow-2: arrow r9c2-r8c3-r8c4 bulb ["r9c1"]
arrow-3: arrow r7c6-r8c6-r9c7 bulb ["r6c6"]
arrow-4: arrow r4c8-r3c9-r2c9 bulb ["r5c8"]
arrow-5: arrow r2c6-r2c5-r1c5 bulb ["r3c6"]
arrow-6: arrow r4c2-r3c2 bulb ["r3c3"]
thermo-7: thermo r5c2-r5c3-r5c4-r5c5
thermo-8: thermo r8c4-r8c3-r9c2-r9c1
thermo-9: thermo r9c7-r8c6-r7c6-r6c6
thermo-10: thermo r2c9-r3c9-r4c8-r5c8
thermo-11: thermo r1c5-r2c5-r2c6-r3c6
thermo-12: thermo r3c2-r4c2-r3c3
```

After hiking, you are at the center of the grid. You decide to return to your vehicle. You encounter a bear. When you run, you drop your compass by mistake and wander around the woods until you find the way out.

ARROWS(+) (Point downhill)- Numbers on arrows sum to the number in the arrow's circle. ALSO, NUMBERS ON ARROWS DECREASE AS YOU MOVE AWAY FROM THE CIRCLE.

THERMOMETERS (Point uphill)- Numbers on thermometers increase from the bulb end.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

BEAR- Numbers with a black dot (bear) between them are in a ratio of 2:1. Not all possible dots are shown.
