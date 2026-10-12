---
format: open-rules
title: Wrestlers and Referee
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/wrestlers-and-referee
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c6-r6c7-r7c8-r8c8-r9c9
thermo-2: thermo r5c6-r6c7-r7c8-r8c7-r9c7
thermo-3: thermo r5c6-r6c7-r7c6-r7c5
kropki-1: kropki r2c8-r3c8 colour "white"
kropki-2: kropki r5c8-r5c9 colour "black"
kropki-3: kropki r1c5-r1c6 colour "black"
kropki-4: kropki r2c6-r3c6 colour "black"
kropki-5: kropki r4c2-r5c2 colour "black"
kropki-6: kropki r5c1-r5c2 colour "black"
kropki-7: kropki r8c5-r8c6 colour "black"
arrow-1: arrow r6c3-r7c2-r8c2-r9c1 bulb ["r5c4"]
arrow-2: arrow r6c3-r7c2-r8c3-r9c3 bulb ["r5c4"]
arrow-3: arrow r6c3-r7c4-r7c5 bulb ["r5c4"]
arrow-4: arrow r2c4-r1c3 bulb ["r2c5"]
arrow-5: arrow r2c6-r2c7-r3c6 bulb ["r2c5"]
arrow-6: arrow r3c6-r4c6 bulb ["r2c5"]
arrow-7: arrow r3c4-r4c4 bulb ["r2c5"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. THERMOMETERS- Numbers on thermometers increase from the bulb end. KROPKI PAIRS- Numbers with white dots between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are given.
