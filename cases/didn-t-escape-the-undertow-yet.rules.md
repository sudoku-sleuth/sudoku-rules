---
format: open-rules
title: Didn't Escape the Undertow Yet
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/didn-t-escape-the-undertow-yet
library: https://rules.sudoku-sleuth.com/
status: read
exported: ebc2ccc334129f7597a3cf4cf93e2916
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c9 total 23 connected true
cage-2: cage r5c7-r6c7-r6c8 total 23 connected true
cage-3: cage r2c4-r3c4-r3c5 total 23 connected true
cage-4: cage r3c1-r4c1-r4c2 total 23 connected true
cage-5: cage r1c2-r1c3-r2c3 total 22 connected true
cage-6: cage r4c5-r4c6-r5c6 total 22 connected true
cage-7: cage r7c8-r7c9-r8c9 total 22 connected true
cage-8: cage r7c2-r7c3-r8c3 total 22 connected true
thermo-1: thermo r9c3-r8c2-r7c1
thermo-2: thermo r1c5-r2c6-r3c7-r4c8-r5c9
thermo-3: thermo r3c3-r4c4-r5c5-r6c6-r7c7
thermo-4: thermo r5c1-r6c2-r7c3-r8c4-r9c5
thermo-5: thermo r7c6-r7c5-r7c4-r6c3-r5c2-r4c1
kropki r3c6-r4c6 black
```

Beware when you swim in the ocean. If you temporarily escape the undertow (my puzzle from 30 January 2023), pulling you away from the beach, you may find a second current that is relentless. I hope you are a strong swimmer....  Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers on thermometers increase from the bulb end. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Good luck.
