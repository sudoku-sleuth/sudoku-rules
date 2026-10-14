---
fog:
  initiallyLit:
    - r4c4
    - r4c5
    - r4c6
    - r5c4
    - r5c5
    - r5c6
    - r6c4
    - r6c5
    - r6c6
format: open-rules
title: Cruella de Fog
setter: Meggen033
source: https://sudokupad.app/5jojmknskj
case: https://sudoku-sleuth.com/cases/cruella-de-fog
library: https://rules.sudoku-sleuth.com/
status: read
exported: 101f2870f63abb96e8af3914c206c0fd
---

```rules
sudoku 9x9
thermo-1: thermo r4c6-r4c5
thermo-2: thermo r4c4-r5c4
thermo-3: thermo r6c4-r6c5
thermo-4: thermo r6c6-r5c6
thermo-5: thermo r7c4-r7c5-r7c6
thermo-6: thermo r8c8-r8c7-r8c6-r8c5-r8c4
thermo-7: thermo r8c3-r7c3-r6c3
thermo-8: thermo r9c2-r9c3-r9c4
thermo-9: thermo r5c2-r4c2-r4c3
thermo-10: thermo r2c7-r2c8-r2c9
thermo-11: thermo r5c8-r4c8-r4c7
kropki-1: kropki r6c5-r6c6 white
kropki-2: kropki r4c5-r5c5 white
kropki-3: kropki r5c4-r5c5 white
kropki-4: kropki r7c6-r7c7 white
kropki-5: kropki r5c3-r6c3 white
kropki-6: kropki r2c5-r3c5 white
kropki-7: kropki r1c6-r1c7 white
kropki-8: kropki r1c3-r1c4 white
kropki-9: kropki r5c2-r6c2 white
kropki-10: kropki r2c1-r2c2 white
kropki-11: kropki r2c2-r3c2 white
kropki-12: kropki r4c8-r4c9 white
kropki-13: kropki r4c6-r5c6 black
kropki-14: kropki r5c5-r6c5 black
kropki-15: kropki r6c7-r7c7 black
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Digits along each thermometer must increase starting from the bulb end.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
