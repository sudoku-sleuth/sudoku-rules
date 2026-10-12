---
format: open-rules
title: Baking Sheet Comes to Life
setter: Will Power
source: https://sudokupad.app/p4b39js1g2
case: https://sudoku-sleuth.com/cases/baking-sheet-comes-to-life
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c5-r2c5-r3c5-r4c6
thermo-2: thermo r1c5-r2c5-r3c5-r4c4
thermo-3: thermo r1c5-r2c5-r2c4
thermo-4: thermo r1c5-r2c5-r2c6
thermo-5: thermo r3c4-r3c3-r3c2-r2c1
thermo-6: thermo r3c4-r3c3-r3c2-r4c1
thermo-7: thermo r3c4-r3c3-r2c3
thermo-8: thermo r3c4-r3c3-r4c3
thermo-9: thermo r5c5-r6c5-r7c5-r8c6
thermo-10: thermo r5c5-r6c5-r7c5-r8c4
thermo-11: thermo r5c5-r6c5-r6c4
thermo-12: thermo r5c5-r6c5-r6c6
thermo-13: thermo r7c4-r7c3-r7c2-r6c1
thermo-14: thermo r7c4-r7c3-r7c2-r8c1
thermo-15: thermo r7c4-r7c3-r6c3
thermo-16: thermo r7c4-r7c3-r8c3
thermo-17: thermo r8c8-r7c8-r6c8-r5c7
thermo-18: thermo r8c8-r7c8-r6c8-r5c9
thermo-19: thermo r8c8-r7c8-r7c7
thermo-20: thermo r8c8-r7c8-r7c9
thermo-21: thermo r4c9-r4c8-r4c7-r3c6
thermo-22: thermo r4c9-r4c8-r4c7-r5c6
thermo-23: thermo r4c9-r4c8-r3c8
thermo-24: thermo r4c9-r4c8-r5c8
thermo-25: thermo r2c8-r1c8-r1c7
thermo-26: thermo r2c8-r1c8-r1c9
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r2c5-r3c5 colour "white"
kropki-3: kropki r1c5-r2c5 colour "white"
kropki-4: kropki r3c2-r3c3 colour "white"
kropki-5: kropki r3c3-r3c4 colour "white"
kropki-6: kropki r5c5-r6c5 colour "white"
kropki-7: kropki r7c3-r7c4 colour "white"
kropki-8: kropki r7c2-r7c3 colour "white"
kropki-9: kropki r6c8-r7c8 colour "white"
kropki-10: kropki r7c8-r8c8 colour "white"
kropki-11: kropki r4c7-r4c8 colour "white"
kropki-12: kropki r4c8-r4c9 colour "white"
kropki-13: kropki r5c3-r6c3 colour "white"
kropki-14: kropki r6c9-r7c9 colour "white"
kropki-15: kropki r5c9-r6c9 colour "white"
kropki-16: kropki r4c4-r4c5 colour "white"
kropki-17: kropki r7c5-r7c6 colour "white"
kropki-18: kropki r8c5-r9c5 colour "white"
kropki-19: kropki r4c4-r5c4 colour "black"
```

Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers increase from the bulb end. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
