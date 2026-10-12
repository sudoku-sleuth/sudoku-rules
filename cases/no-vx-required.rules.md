---
format: open-rules
title: No VX Required
setter: EPH
source: https://tinyurl.com/2p93nw5k
case: https://sudoku-sleuth.com/cases/no-vx-required
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8 gap 5
whispers-2: whispers r6c2-r7c2 gap 5
whispers-3: whispers r3c2-r4c2 gap 5
whispers-4: whispers r3c8-r4c8 gap 5
renban-1: renban r2c5-r3c5-r4c5
renban-2: renban r6c5-r7c5-r8c5
renban-3: renban r1c4-r1c5-r1c6
renban-4: renban r9c4-r9c5-r9c6
renban-5: renban r4c9-r5c9-r6c9
negative relations [{"op":"sum","value":5},{"op":"sum","value":10}] except [["r2c2","r3c2"],["r7c2","r8c2"],["r4c7","r4c8"],["r6c7","r6c8"]]
pair-1: pair r3c2-r2c2 relation {"op":"less"}
pair-2: pair r7c2-r8c2 relation {"op":"less"}
pair-3: pair r4c7-r4c8 relation {"op":"less"}
pair-4: pair r6c8-r6c7 relation {"op":"less"}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in adjacent cells along a green line must have a difference of at least 5.

Cells along a purple line must contain a set of consecutive digits, in any order, without repetition.

Darts (<, >, etc) between cells point to the lower digit.

This in an anti-XV puzzle.  Digits in adjacent cells CANNOT sum to 5 or 10.  There are no X or V clues in the grid.
