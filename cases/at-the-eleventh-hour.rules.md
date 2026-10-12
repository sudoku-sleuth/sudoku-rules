---
format: open-rules
title: At the Eleventh Hour
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/at-the-eleventh-hour
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c8-r6c9 total 11 connected true
cage-2: cage r6c1-r7c1 total 11 connected true
cage-3: cage r6c2-r7c2 total 11 connected true
cage-4: cage r1c7-r2c7 total 11 connected true
cage-5: cage r2c2-r3c2 total 11 connected true
cage-6: cage r9c4-r9c5 total 11 connected true
cage-7: cage r2c8-r3c8 total 11 connected true
cage-8: cage r8c3-r9c3 total 11 connected true
thermo-1: thermo r5c3-r4c3-r3c4-r3c5-r3c6-r4c7-r5c7
thermo-2: thermo r5c6-r4c6-r4c5-r4c4
kropki r2c7-r2c8 colour "white"
arrow-1: arrow r6c4-r6c5-r6c6 bulb ["r5c4"]
arrow-2: arrow r7c4-r7c5-r7c6-r6c7 bulb ["r6c3"]
arrow-3: arrow r3c7-r2c6-r2c5-r2c4-r3c3 bulb ["r4c8"]
```

Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers strictly increase from the bulb end. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows if other rules allow. KILLER CAGES- Numbers in cages sum to 11. KROPKI PAIR- Numbers with a white dot between them are consecutive. Not all possible dots are given.
