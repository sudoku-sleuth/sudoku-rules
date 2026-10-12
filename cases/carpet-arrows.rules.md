---
format: open-rules
title: Carpet Arrows
setter: Jobo
source: https://tinyurl.com/nhestytv
case: https://sudoku-sleuth.com/cases/carpet-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r5c5-r5c6 colour "white"
arrow-1: arrow r3c7-r2c7-r1c7-r1c8-r1c9-r2c9-r2c8 bulb ["r3c8","r3c9"]
arrow-2: arrow r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r8c2 bulb ["r7c1","r7c2"]
arrow-3: arrow r3c3-r3c2-r3c1-r2c1-r2c2-r1c2-r1c1 bulb ["r1c3","r2c3"]
arrow-4: arrow r7c7-r7c8-r7c9-r8c9-r8c8-r9c8-r9c9 bulb ["r8c7","r9c7"]
```

Normal sudoku rules apply.

Digits along an arrow must sum to the 2-digit number in that arrow's pill (read from left to right or top to bottom).

Arrows also act as carpets, digits must repeat in the same order when unrolled (straightened) starting from the arrow pill.

Adjacent digits along an arrow (including the pill) must differ by at most 4.

Digits separated by a white dot must be consecutive. Not all dots are given.

One of the main diagonals contains a set of the digits 1-9, the solver must determine which one.
