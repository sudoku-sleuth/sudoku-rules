---
format: open-rules
title: That's Sum Puzzle
setter: EPH
source: https://tinyurl.com/4fxyyy7n
case: https://sudoku-sleuth.com/cases/that-s-sum-puzzle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c5-r8c5-r9c5 total 7 connected true
cage-2: cage r4c4-r4c5-r4c6 total 15 connected true
cage-3: cage r9c1-r9c2-r9c3 total 11 connected true
x-sum-1: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 11
x-sum-2: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 10
x-sum-3: x-sum r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 19
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Clues outside the grid are omni-directional X-sums. In all vertical, horizontal, and diagonal directions which are available, the clue is an X-sum clue. The sum of the first X digits along a direction must sum to the value of the clue; X is the first digit in that direction from the clue. 

Digits in cages must sum to the number in the top left corner of the cage.
