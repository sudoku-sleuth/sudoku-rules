---
format: open-rules
title: Clean And Jerk (weightlifting)
setter: Will Power
source: https://sudokupad.app/2nxmc3xgu8
case: https://sudoku-sleuth.com/cases/clean-and-jerk-weightlifting
library: https://rules.sudoku-sleuth.com/
status: read
exported: b4e6a98e3a836325340af6e2466d80cf
---

```rules
sudoku 9x9
cage-1: cage r8c5-r9c4-r9c5-r9c6 total 11 connected true
cage-2: cage r1c7-r1c8-r1c9 total 9 connected true
cage-3: cage r2c1-r2c2-r2c3 total 9 connected true
cage-4: cage r3c7-r3c8 total 13 connected true
cage-5: cage r3c3-r3c4 total 13 connected true
thermo-1: thermo r4c5-r5c5-r4c6-r3c7
thermo-2: thermo r4c5-r5c5-r4c4-r3c3
thermo-3: thermo r4c5-r5c5-r6c5
thermo-4: thermo r7c5-r8c4-r9c3
thermo-5: thermo r7c5-r8c6-r9c7
kropki-1: kropki r3c5-r4c5 white
kropki-2: kropki r5c3-r5c4 white
kropki-3: kropki r5c2-r5c3 white
kropki-4: kropki r5c6-r5c7 white
kropki-5: kropki r5c7-r5c8 white
kropki-6: kropki r5c8-r5c9 white
kropki-7: kropki r4c5-r5c5 black
kropki-8: kropki r5c5-r6c5 black
kropki-9: kropki r5c7-r6c7 black
kropki-10: kropki r6c7-r7c7 black
kropki-11: kropki r5c3-r6c3 black
kropki-12: kropki r4c3-r5c3 black
kropki-13: kropki r4c2-r4c3 black
arrow-1: arrow r3c2-r3c3-r3c4-r3c5 bulb ["r2c1","r3c1"]
arrow-2: arrow r3c8-r3c7-r3c6-r3c5 bulb ["r2c9","r3c9"]
```

Normal Sudoku rules apply. 

THERMOMETERS- Numbers on thermometers increase from the bulb end.

ARROWS- Numbers on arrows sum to the number in the arrow's pill. Pills are read from top to bottom.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
