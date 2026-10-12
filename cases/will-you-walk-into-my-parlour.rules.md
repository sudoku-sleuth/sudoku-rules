---
format: open-rules
title: Will You Walk Into My Parlour?
setter: Will Power
source: https://sudokupad.app/c6h3nzvdec
case: https://sudoku-sleuth.com/cases/will-you-walk-into-my-parlour
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5 total 8 connected true
cage-2: cage r8c1-r9c1-r9c2 total 19 connected true
cage-3: cage r8c9-r9c8-r9c9 total 13 connected true
cage-4: cage r1c8-r1c9-r2c9 total 17 connected true
cage-5: cage r1c1-r1c2-r2c1 total 11 connected true
cage-6: cage r7c2-r7c3-r8c3 total 20 connected true
cage-7: cage r7c7-r7c8-r8c7 total 15 connected true
thermo-1: thermo r4c5-r3c5-r2c5-r1c5
thermo-2: thermo r1c8-r2c8-r3c7-r4c6
thermo-3: thermo r1c2-r2c2-r3c3-r4c4
thermo-4: thermo r8c2-r7c3-r6c4
thermo-5: thermo r8c8-r7c7-r6c6
thermo-6: thermo r5c4-r5c3-r4c2-r3c1
thermo-7: thermo r5c6-r5c7-r4c8-r3c9
thermo-8: thermo r6c5-r7c5-r8c5
kropki-1: kropki r6c4-r6c5 colour "white"
kropki-2: kropki r6c5-r6c6 colour "white"
kropki-3: kropki r6c3-r6c4 colour "white"
kropki-4: kropki r6c6-r6c7 colour "white"
kropki-5: kropki r1c3-r1c4 colour "white"
kropki-6: kropki r1c4-r1c5 colour "white"
kropki-7: kropki r1c5-r1c6 colour "white"
kropki-8: kropki r1c6-r1c7 colour "white"
kropki-9: kropki r6c7-r7c7 colour "black"
kropki-10: kropki r6c3-r7c3 colour "black"
kropki-11: kropki r9c8-r9c9 colour "black"
```

said the spider to the fly... Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers strictly increase from the bulb end. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a rtio of 2:1. Not all possible dots are shown.
