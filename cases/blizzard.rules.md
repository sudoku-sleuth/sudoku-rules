---
format: open-rules
title: Blizzard
setter: Will Power
source: https://f-puzzles.com/?id=y6wthm39
case: https://sudoku-sleuth.com/cases/blizzard
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c2=3 r7c5=6
---

```rules
sudoku 9x9
thermo-1: thermo r5c5-r6c6-r7c7-r8c8-r9c9
thermo-2: thermo r2c6-r3c7-r4c8-r5c9
thermo-3: thermo r8c3-r9c4
kropki-1: kropki r4c5-r5c5 colour "black"
kropki-2: kropki r4c4-r4c5 colour "black"
kropki-3: kropki r3c6-r4c6 colour "black"
arrow-1: arrow r3c2-r4c3 bulb ["r2c1"]
arrow-2: arrow r3c4-r4c5 bulb ["r2c3"]
arrow-3: arrow r3c6-r4c7 bulb ["r2c5"]
arrow-4: arrow r3c8-r4c9 bulb ["r2c7"]
arrow-5: arrow r6c3-r7c4 bulb ["r5c2"]
arrow-6: arrow r6c5-r7c6 bulb ["r5c4"]
arrow-7: arrow r6c7-r7c8 bulb ["r5c6"]
arrow-8: arrow r8c6-r9c7 bulb ["r7c5"]
```

Normal Sudoku rules apply. Numbers with a black dot between them are in a ratio of 1:2. Numbers on thermometers must increase from the bulb end. Numbers on arrows sum to the arrow's circle. All 8 arrow circles are different values. Arrow circles in the same row increase from left to right.
