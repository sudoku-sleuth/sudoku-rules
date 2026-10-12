---
format: open-rules
title: Entropic Horizons
setter: Sir Moose
source: https://sudokupad.app/ahcx5ec5c6
case: https://sudoku-sleuth.com/cases/entropic-horizons
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c4-r2c5 bulb ["r2c3"]
arrow-2: arrow r6c8-r6c7 bulb ["r6c9"]
arrow-3: arrow r6c3-r5c4 bulb ["r7c2"]
arrow-4: arrow r8c4-r7c5 bulb ["r9c3"]
arrow-5: arrow r8c7-r9c6 bulb ["r7c8"]
arrow-6: arrow r2c7-r3c6 bulb ["r1c8"]
arrow-7: arrow r3c1-r2c1 bulb ["r4c1"]
arrow-8: arrow r4c3-r4c2 bulb ["r3c4"]
arrow-9: arrow r6c1-r5c1 bulb ["r7c1"]
entropic-1: entropic r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
entropic-2: entropic r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
entropic-3: entropic r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
entropic-4: entropic r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
entropic-5: entropic r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
entropic-6: entropic r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
entropic-7: entropic r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
entropic-8: entropic r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
entropic-9: entropic r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
```

Normal sudoku rules apply.

Entropy Rows:  Every 3 consecutive cells along each row must contain a low digit (1,2,3), middle digit (4,5,6) and high digit (7,8,9).

Arrows:  Digits along an arrow must sum to the digit in that arrow's circle.
