---
format: open-rules
title: No friends on a hot day
setter: Chip Sounder
source: https://sudokupad.app/nuc8a78ayh
case: https://sudoku-sleuth.com/cases/no-friends-on-a-hot-day
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2 total 9 connected true
cage-2: cage r8c1-r8c2 total 6 connected true
cage-3: cage r7c3-r7c4 total 9 connected true
cage-4: cage r6c8-r6c9 total 10 connected true
cage-5: cage r2c8-r2c9 total 7 connected true
thermo-1: thermo r8c1-r7c1-r6c1-r5c1-r4c1
thermo-2: thermo r5c3-r6c3-r7c3-r8c3-r9c3
thermo-3: thermo r2c9-r3c9-r4c9-r5c9-r6c9
thermo-4: thermo r5c7-r4c7-r3c7-r2c7-r1c7
thermo-5: thermo r6c8-r6c7-r6c6-r7c5
thermo-6: thermo r5c4-r5c5
negative relations [{"op":"ratio","value":2}] except []
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits on a thermometer must rise from the bulb end.
Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage.
Cells separated by a black dot has one digit double the other (1:2 ratio) ALL dots are given.
