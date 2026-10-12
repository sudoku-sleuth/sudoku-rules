---
format: open-rules
title: Intelligent Octopus
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/intelligent-octopus
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c5-r4c4-r3c3-r2c2
thermo-2: thermo r5c5-r5c6
thermo-3: thermo r5c5-r6c5-r7c5
thermo-4: thermo r5c5-r4c5-r3c5-r2c6-r2c7-r1c8
thermo-5: thermo r5c5-r5c4-r5c3-r4c2-r3c1-r2c1-r1c2
thermo-6: thermo r5c5-r6c4-r6c3-r7c2-r8c1
thermo-7: thermo r5c5-r6c6-r7c7-r8c8-r9c8-r9c7
thermo-8: thermo r5c5-r4c6-r3c7-r3c8-r4c9
kropki-1: kropki r2c4-r2c5 colour "black"
kropki-2: kropki r4c8-r5c8 colour "black"
```

This octopus helped me set a sudoku, using the shape of his tentacles and two drops of his black ink. Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers strictly increase from the bulb end. The bulb for all thermometers is in the center of the grid. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
