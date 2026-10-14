---
format: open-rules
title: How do you cut your sandwich?
setter: EPH
source: https://tinyurl.com/32y8z2mu
case: https://sudoku-sleuth.com/cases/how-do-you-cut-your-sandwich
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c4=5 r9c7=6
exported: 651326fc36d0eb22d9a3011e7ede0c22
---

```rules
sudoku 9x9
sandwich-1: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 7
sandwich-2: sandwich r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 8
sandwich-3: sandwich r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 5
sandwich-4: sandwich r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 10
sandwich-5: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 0
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Clues outside the grid are sandwich clues with a twist:  in the appropriate row or column, digits between the 1 and the 9 must sum to the value of the clue.  In addition, for each diagonal from the clue (of length at least 2), the digits between the first instance of each of 9 and 1 (as seen from the clue) must sum to the value of the clue.
