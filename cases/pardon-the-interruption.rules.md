---
format: open-rules
title: Pardon the Interruption....
setter: Will Power
source: https://sudokupad.app/x8sylgpl92
case: https://sudoku-sleuth.com/cases/pardon-the-interruption
library: https://rules.sudoku-sleuth.com/
status: read
exported: bc5ef0fa3e16be2ace54ff0b4802d17a
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c2 total 24 connected true
cage-2: cage r2c8-r2c9-r3c9 total 24 connected true
cage-3: cage r8c7-r9c7-r9c8 total 22 connected true
cage-4: cage r7c1-r7c2-r8c1 total 23 connected true
cage-5: cage r5c7-r6c7 total 15 connected true
thermo-1: thermo r6c3-r6c4-r7c5
thermo-2: thermo r8c3-r8c2-r7c1
thermo-3: thermo r3c2-r2c2-r1c3
thermo-4: thermo r3c4-r4c4-r5c3
thermo-5: thermo r2c7-r2c8-r3c9
thermo-6: thermo r4c7-r4c6-r3c5
thermo-7: thermo r7c8-r8c8-r9c7
thermo-8: thermo r7c6-r6c6-r5c7
arrow-1: arrow r2c4-r3c4 bulb ["r1c3"]
arrow-2: arrow r4c2-r3c2 bulb ["r5c3"]
arrow-3: arrow r4c8-r4c7 bulb ["r3c9"]
arrow-4: arrow r2c6-r2c7 bulb ["r3c5"]
arrow-5: arrow r8c6-r7c6 bulb ["r9c7"]
arrow-6: arrow r6c8-r7c8 bulb ["r5c7"]
arrow-7: arrow r6c2-r6c3 bulb ["r7c1"]
arrow-8: arrow r8c4-r8c3 bulb ["r7c5"]
arrow-9: arrow r5c6-r5c5-r5c4 bulb ["r6c5"]
whispers-1: whispers r5c2-r5c3-r5c4 gap 5
whispers-2: whispers r5c8-r5c9 gap 5
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. THERMOMETER- Numbers on thermometers increase from the bulb end. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line.
