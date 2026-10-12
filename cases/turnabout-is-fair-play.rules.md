---
format: open-rules
title: Turnabout Is Fair Play
setter: EPH
source: https://tinyurl.com/3dprv2t6
case: https://sudoku-sleuth.com/cases/turnabout-is-fair-play
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r4c5-r5c4-r6c3 bulb ["r3c6"]
arrow-2: arrow r6c5-r5c6-r4c7 bulb ["r7c4"]
arrow-3: arrow r6c1-r5c1-r4c1 bulb ["r7c2"]
arrow-4: arrow r4c9-r5c9-r6c9 bulb ["r3c8"]
renban-1: renban r1c1-r2c1-r3c1-r4c2-r5c2-r6c2
renban-2: renban r9c9-r8c9-r7c9-r6c8-r5c8-r4c8
renban-3: renban r2c3-r1c4-r1c5-r1c6-r2c7
renban-4: renban r8c3-r9c4-r9c5-r9c6-r8c7
little-killer-1: little-killer r1c4-r2c3-r3c2-r4c1 sum 9
little-killer-2: little-killer r9c6-r8c7-r7c8-r6c9 sum 10
little-killer-3: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 44
little-killer-4: little-killer r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9 sum 41
```

Standard sudoku rules apply.

Clues outside the grid show the totals of the digits along the indicated diagonals.

Digits along an arrow must sum to the value in the circle.

The purple lines are Renban lines and contain a set of non-repeating consecutive digits in any order.
