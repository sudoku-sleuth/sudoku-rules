---
format: open-rules
title: Everywhere an X-Sum
setter: EPH
source: https://tinyurl.com/yc36hzra
case: https://sudoku-sleuth.com/cases/everywhere-an-x-sum
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
x-sum-1: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 8
x-sum-2: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 23
x-sum-3: x-sum r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 20
x-sum-4: x-sum r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 35
x-sum-5: x-sum r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 16
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"25","textColor":"#000000","fontSize":26}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Clues outside the grid are omnidirectional x-sums.  In all vertical, horizontal, and diagonal directions which are available, the clue is an x-sum clue.  The sum of the first N digits along a direction must sum to the value of the clue; N is the first digit in that direction from the clue.
