---
fog:
  initiallyLit:
    - r1c9
    - r2c5
    - r2c7
    - r3c3
    - r4c7
    - r5c1
    - r5c9
    - r6c4
    - r6c6
    - r7c8
    - r8c2
format: open-rules
title: One Knight's Excursion
setter: Meggen033
source: https://sudokupad.app/eu4i2mokkc
case: https://sudoku-sleuth.com/cases/one-knight-s-excursion
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0e754a7ae6a16b40dee9030af6192567
---

```rules
sudoku 9x9
anti-knight stated true
thermo-1: thermo r6c5-r5c5
thermo-2: thermo r1c6-r1c5
kropki-1: kropki r8c2-r9c2 white
kropki-2: kropki r5c3-r6c3 white
kropki-3: kropki r3c3-r4c3 black
kropki-4: kropki r2c3-r3c3 black
kropki-5: kropki r2c5-r3c5 black
kropki-6: kropki r2c4-r2c5 black
kropki-7: kropki r2c7-r2c8 black
kropki-8: kropki r3c7-r4c7 black
kropki-9: kropki r6c3-r6c4 black
kropki-10: kropki r6c6-r6c7 black
kropki-11: kropki r6c8-r7c8 black
kropki-12: kropki r1c8-r1c9 black
kropki-13: kropki r5c8-r5c9 black
kropki-14: kropki r5c1-r6c1 black
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.  No guessing is required.
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Digits along each thermometer must increase starting from the bulb end.
