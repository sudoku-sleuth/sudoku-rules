---
format: open-rules
title: Plan B Path
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/plan-b-path
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c1-r6c2-r7c3-r8c4-r9c5
thermo-2: thermo r5c2-r6c3-r7c4-r8c5-r9c6
thermo-3: thermo r4c9-r3c8-r2c7-r1c6
thermo-4: thermo r4c8-r3c7-r2c6-r1c5
thermo-5: thermo r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8
kropki-1: kropki r2c6-r3c6 colour "white"
kropki-2: kropki r9c7-r9c8 colour "white"
kropki-3: kropki r5c2-r6c2 colour "black"
kropki-4: kropki r7c4-r8c4 colour "black"
kropki-5: kropki r2c6-r2c7 colour "black"
kropki-6: kropki r3c7-r3c8 colour "black"
kropki-7: kropki r4c8-r4c9 colour "black"
kropki-8: kropki r8c2-r9c2 colour "black"
kropki-9: kropki r1c9-r2c9 colour "black"
```

Requested by Fisherman. Normal Sudoku rules apply.  Numbers on thermometers increase from the bulb end. Numbers with a black dot between them are in a ratio of 2:1.  Numbers with a white dot between them are consecutive. Not all dots are given.
