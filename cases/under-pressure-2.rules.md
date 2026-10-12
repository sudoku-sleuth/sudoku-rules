---
format: open-rules
title: Under Pressure
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/under-pressure-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3 total 15 connected true
cage-2: cage r3c7-r3c8 total 14 connected true
cage-3: cage r7c3-r8c3 total 14 connected true
cage-4: cage r5c2-r6c2 total 14 connected true
cage-5: cage r7c5-r8c5 total 15 connected true
cage-6: cage r7c7-r8c7 total 15 connected true
cage-7: cage r5c8-r6c8 total 15 connected true
cage-8: cage r5c5-r6c5 total 14 connected true
cage-9: cage r1c2-r2c2 total 10 connected true
cage-10: cage r6c6-r7c6 total 5 connected true
cage-11: cage r3c5-r4c5 total 5 connected true
cage-12: cage r4c4-r5c4 total 5 connected true
kropki-1: kropki r3c2-r4c2 colour "white"
kropki-2: kropki r4c2-r5c2 colour "white"
kropki-3: kropki r3c8-r4c8 colour "white"
kropki-4: kropki r4c8-r5c8 colour "white"
kropki-5: kropki r2c4-r2c5 colour "white"
kropki-6: kropki r2c5-r2c6 colour "white"
kropki-7: kropki r1c4-r2c4 colour "white"
kropki-8: kropki r2c6-r3c6 colour "white"
kropki-9: kropki r5c9-r6c9 colour "white"
kropki-10: kropki r6c9-r7c9 colour "white"
kropki-11: kropki r7c9-r8c9 colour "white"
kropki-12: kropki r7c4-r7c5 colour "white"
```

Normal Sudoku rules apply. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
