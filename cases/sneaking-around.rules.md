---
format: open-rules
title: Sneaking around
setter: EPH
source: https://tinyurl.com/45yex6ca
case: https://sudoku-sleuth.com/cases/sneaking-around
library: https://rules.sudoku-sleuth.com/
status: read
exported: e6c5d31aa8fad30efabd8c4614753f42
---

```rules
sudoku 9x9
cage-1: cage r1c8-r2c8-r3c8 total 8 connected true
cage-2: cage r7c2-r8c2-r9c2 total 17 connected true
cage-3: cage r8c8-r9c8 total 9 connected true
cage-4: cage r1c2-r2c2 total 7 connected true
kropki-1: kropki r6c6-r7c6 white
kropki-2: kropki r3c4-r4c4 white
whispers-1: whispers r4c9-r5c9-r6c9-r6c8-r6c7-r6c6-r6c5 gap 5
whispers-2: whispers r5c1-r4c1-r4c2-r4c3-r4c4-r4c5-r5c5-r6c5 gap 5
whispers-3: whispers r8c6-r8c5-r8c4-r8c3-r7c3-r6c3-r5c3 gap 5
whispers-4: whispers r5c7-r4c7-r3c7-r2c7-r2c6-r2c5-r2c4 gap 5
whispers-5: whispers r7c7-r7c8-r7c9-r8c9-r9c9 gap 5
whispers-6: whispers r3c3-r3c2-r3c1-r2c1-r1c1 gap 5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in cages sum to the number in the upper left corner of the cage.

Digits in cells separated by a white dot must be consecutive.  Not all possible dots are given.

The green lines are whispers lines: digits in consecutive cells along the line must differ by at least 5.
