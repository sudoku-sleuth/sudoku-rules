---
format: open-rules
title: Slow Stairs
setter: Chip Sounder
source: https://sudokupad.app/msm44llr2n
case: https://sudoku-sleuth.com/cases/slow-stairs
library: https://rules.sudoku-sleuth.com/
status: read
exported: b9c25613553905c7c318c0c7f84d5d4a
---

```rules
sudoku 9x9
cage-1: cage r3c9-r4c9-r5c9 total 19 connected true
cage-2: cage r5c1-r6c1-r7c1 total 19 connected true
cage-3: cage r9c2-r9c3 total 9 connected true
kropki-1: kropki r5c4-r5c5 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r1c1-r1c2 white
kropki-4: kropki r1c2-r1c3 white
kropki-5: kropki r2c2-r2c3 black
slow-thermo-1: slow-thermo r7c8-r6c9-r5c9-r4c9-r3c8
slow-thermo-2: slow-thermo r3c2-r4c1-r5c1-r6c1-r7c2
slow-thermo-3: slow-thermo r1c6-r2c7-r3c6-r4c7-r5c6-r6c7-r7c6-r8c7-r9c6-r9c5-r8c4
slow-thermo-4: slow-thermo r9c4-r8c3-r7c4-r6c3-r5c4-r4c3-r3c4-r2c3-r1c4-r1c5-r2c6
```

Normal sudoku rules apply.
Digits on a slow thermometer must never decrease from the bulb end.
Digits in a dotted cage must sum to the total given in the top left corner of the cage without repetition.
Cells separated by a black dot has one digit double the other.
Cells separated by a white dot are consecutive.
Not all dots are given.
