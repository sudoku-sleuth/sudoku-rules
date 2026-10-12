---
format: open-rules
title: Clock
setter: Jobo
source: ""
case: https://sudoku-sleuth.com/cases/clock
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=1 r1c5=2 r5c1=9 r5c9=3 r9c5=6
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6 connected true
cage-2: cage r4c1-r5c1-r6c1 connected true
cage-3: cage r9c4-r9c5-r9c6 connected true
cage-4: cage r4c9-r5c9-r6c9 connected true
cage-5: cage r7c4-r7c5-r7c6 connected true
thermo-1: thermo r5c5-r4c4-r3c3
thermo-2: thermo r5c5-r4c6-r3c7-r2c8
arrow r6c5-r7c5 bulb ["r5c5"]
whispers-1: whispers r4c1-r3c1-r2c2-r1c3-r1c4 gap 5
whispers-2: whispers r1c6-r1c7-r2c8-r3c9-r4c9 gap 5
whispers-3: whispers r6c9-r7c9-r8c8-r9c7-r9c6 gap 5
whispers-4: whispers r9c4-r9c3-r8c2-r7c1-r6c1 gap 5
equal-sums groups [["r1c4","r1c5","r1c6"],["r4c1","r5c1","r6c1"],["r9c4","r9c5","r9c6"],["r4c9","r5c9","r6c9"],["r7c4","r7c5","r7c6"]]
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits along an arrow must sum to the digit in that arrow's circle.

Adjacent digits along a green line must differ by at least 5.

All cages sum to the same value.
