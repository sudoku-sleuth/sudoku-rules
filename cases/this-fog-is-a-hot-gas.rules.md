---
fog:
  initiallyLit:
    - r1c4
    - r1c5
    - r1c6
    - r2c5
    - r4c5
    - r6c5
    - r8c5
    - r9c4
    - r9c5
    - r9c6
format: open-rules
title: This FOG is a Hot GAS
setter: Meggen033
source: https://sudokupad.app/w410x6653k
case: https://sudoku-sleuth.com/cases/this-fog-is-a-hot-gas
library: https://rules.sudoku-sleuth.com/
status: read
exported: 618752ebb477203e5b076d034b5fc17b
---

```rules
sudoku 9x9
thermo-1: thermo r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5
thermo-2: thermo r1c6-r1c5-r1c4
thermo-3: thermo r9c4-r9c5-r9c6
thermo-4: thermo r7c3-r6c3-r5c3-r4c3-r3c3
thermo-5: thermo r7c7-r6c7-r5c7-r4c7-r3c7
thermo-6: thermo r6c2-r5c2-r4c2
thermo-7: thermo r6c8-r5c8-r4c8
thermo-8: thermo r1c8-r1c9-r2c9
kropki-1: kropki r7c4-r7c5 white
kropki-2: kropki r7c5-r7c6 white
kropki-3: kropki r3c5-r3c6 white
kropki-4: kropki r3c4-r3c5 white
kropki-5: kropki r5c6-r6c6 white
kropki-6: kropki r2c6-r2c7 white
kropki-7: kropki r7c9-r8c9 white
kropki-8: kropki r4c4-r5c4 black
kropki-9: kropki r5c8-r5c9 black
kropki-10: kropki r8c2-r8c3 black
```

•    Normal Sudoku rules apply. 
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•    Digits along each thermometer must increase starting from the bulb end.
•    A black dot between cells indicates cell values with a 2:1 ratio.  A white dot between cells indicates cells with consecutive values. Not all dots are given.
