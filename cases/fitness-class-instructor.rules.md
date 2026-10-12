---
format: open-rules
title: Fitness Class Instructor
setter: Will Power
source: https://sudokupad.app/7ppy0g21fi
case: https://sudoku-sleuth.com/cases/fitness-class-instructor
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r7c4-r8c4-r9c4
thermo-2: thermo r7c4-r8c4-r8c5-r9c5
thermo-3: thermo r7c4-r8c4-r8c3-r7c2
kropki-1: kropki r6c4-r7c4 colour "white"
kropki-2: kropki r3c7-r4c7 colour "white"
kropki-3: kropki r2c5-r2c6 colour "white"
kropki-4: kropki r6c1-r7c1 colour "white"
kropki-5: kropki r8c1-r8c2 colour "white"
kropki-6: kropki r8c7-r9c7 colour "white"
kropki-7: kropki r8c7-r8c8 colour "white"
arrow-1: arrow r2c3-r3c3-r4c3-r5c2-r6c2 bulb ["r1c3"]
arrow-2: arrow r2c3-r3c3-r4c3-r3c4-r4c4 bulb ["r1c3"]
arrow-3: arrow r2c3-r2c4-r3c4 bulb ["r1c3"]
arrow-4: arrow r2c3-r2c2-r1c1 bulb ["r1c3"]
arrow-5: arrow r5c7-r6c7-r7c7-r6c8-r7c8 bulb ["r4c7"]
arrow-6: arrow r5c7-r5c8-r6c8 bulb ["r4c7"]
arrow-7: arrow r5c7-r5c6-r4c5 bulb ["r4c7"]
arrow-8: arrow r5c7-r6c7-r7c7-r8c6-r9c6 bulb ["r4c7"]
```

Normal Sudpoku rules apply.

ARROWS (Students)- Numbers on arrows sum to the number in the arrow's circle.

THERMOMETERS (Instructor)- Numbers on thermometers increase from the bulb end.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
