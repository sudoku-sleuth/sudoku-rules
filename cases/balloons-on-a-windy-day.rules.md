---
format: open-rules
title: Balloons on a Windy Day
setter: Will Power
source: https://sudokupad.app/wuye116vm2
case: https://sudoku-sleuth.com/cases/balloons-on-a-windy-day
library: https://rules.sudoku-sleuth.com/
status: read
exported: 748cd59004cac42db5b5e171818a3deb
---

```rules
sudoku 9x9
thermo-1: thermo r6c6-r7c6-r8c6-r9c6
thermo-2: thermo r6c6-r7c6-r8c5-r8c4
thermo-3: thermo r6c6-r7c6-r8c7-r9c7
kropki-1: kropki r8c9-r9c9 white
kropki-2: kropki r5c8-r6c8 white
kropki-3: kropki r4c9-r5c9 white
kropki-4: kropki r8c8-r9c8 white
kropki-5: kropki r4c2-r5c2 black
kropki-6: kropki r2c2-r2c3 black
kropki-7: kropki r7c7-r8c7 black
kropki-8: kropki r9c8-r9c9 black
kropki-9: kropki r7c9-r8c9 black
kropki-10: kropki r9c2-r9c3 black
kropki-11: kropki r5c1-r6c1 black
kropki-12: kropki r3c5-r4c5 black
kropki-13: kropki r2c7-r2c8 black
kropki-14: kropki r6c4-r7c4 black
kropki-15: kropki r4c7-r4c8 black
kropki-16: kropki r5c3-r5c4 black
kropki-17: kropki r7c3-r7c4 black
kropki-18: kropki r6c6-r7c6 black
kropki-19: kropki r3c5-r3c6 black
kropki-20: kropki r1c4-r1c5 black
arrow-1: arrow r5c4-r6c4-r7c4-r8c4 bulb ["r3c4","r4c4"]
arrow-2: arrow r3c4-r4c4 bulb ["r2c4"]
arrow-3: arrow r4c5-r5c5-r6c4-r7c4-r8c4 bulb ["r2c5","r3c5"]
arrow-4: arrow r3c6-r4c6 bulb ["r2c6"]
arrow-5: arrow r3c7-r4c6 bulb ["r2c7"]
arrow-6: arrow r2c8-r3c7-r4c6 bulb ["r1c9"]
arrow-7: arrow r4c8-r4c7-r4c6 bulb ["r4c9"]
arrow-8: arrow r6c7-r6c6-r6c5 bulb ["r6c8"]
arrow-9: arrow r3c3-r4c3-r5c3-r6c3-r7c3-r8c4 bulb ["r1c3","r2c3"]
arrow-10: arrow r2c5-r3c5 bulb ["r1c5"]
```

Normal Sudoku rules apply. 

ARROWS- Numbers on arrows sum to the number in the arrow's circle or pill. Pills are read from top to bottom.

THERMOMETERS- Numbers on thermometers increase from the bulb end.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
