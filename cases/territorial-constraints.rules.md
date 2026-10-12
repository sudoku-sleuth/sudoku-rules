---
format: open-rules
title: Territorial Constraints
setter: Will Power
source: https://f-puzzles.com/?id=y9m4d7z5
case: https://sudoku-sleuth.com/cases/territorial-constraints
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3 total 14 connected true
cage-2: cage r4c2-r4c3 total 13 connected true
cage-3: cage r1c1-r2c1 total 14 connected true
cage-4: cage r1c2-r2c2 total 10 connected true
thermo-1: thermo r5c1-r5c2-r5c3-r5c4
thermo-2: thermo r5c6-r5c7-r5c8-r5c9
kropki-1: kropki r6c2-r7c2 colour "white"
kropki-2: kropki r9c1-r9c2 colour "white"
kropki-3: kropki r7c2-r7c3 colour "white"
kropki-4: kropki r6c1-r7c1 colour "white"
kropki-5: kropki r7c3-r8c3 colour "black"
kropki-6: kropki r8c2-r8c3 colour "black"
kropki-7: kropki r7c1-r8c1 colour "black"
arrow-1: arrow r3c5-r4c4 bulb ["r2c6"]
arrow-2: arrow r3c8-r2c9 bulb ["r4c7"]
arrow-3: arrow r3c8-r2c7-r1c6 bulb ["r4c9"]
arrow-4: arrow r7c7-r8c6-r9c5 bulb ["r6c8"]
arrow-5: arrow r8c6-r7c5-r6c4 bulb ["r9c7"]
arrow-6: arrow r7c7-r8c8 bulb ["r6c6"]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in that arrow's circle. Numbers may repeat on arrows, if other rules allow. Numbers in cages sum to the number in the top left corner of the cage. Thermometer plus : Numbers on thermometer plus must increase from the bulb end AND ARE CONSECUTIVE. Kropki dots: Numbers on either side of a white dot are consecutive. Numbers on either side of a black dot are in a ratio of 2:1.
