---
format: open-rules
title: Typique de la region
setter: sujoyku
source: https://tinyurl.com/yzrukz6s
case: https://sudoku-sleuth.com/cases/typique-de-la-region
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r1c5-r2c6-r3c6-r4c6-r4c7-r4c8-r5c9 segments [["r1c5","r2c6","r3c6"],["r4c6"],["r4c7","r4c8","r5c9"]]
region-sum-2: region-sum r5c4-r6c5-r7c4-r8c4-r8c3-r7c3-r7c2-r6c3-r5c3-r4c2-r3c2 segments [["r5c4","r6c5"],["r7c4","r8c4"],["r8c3","r7c3","r7c2"],["r6c3","r5c3","r4c2"],["r3c2"]]
sandwich-1: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 19
sandwich-2: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 20
sandwich-3: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 21
sandwich-4: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 22
sandwich-5: sandwich r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 8
sandwich-6: sandwich r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 13
sandwich-7: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 11
```

Normal sudoku rules apply. Blue lines are region sum lines, i.e. the digits on a blue line sum to the same value in each 3x3 region the line passes through. Different region sum lines can sum to different totals.All clues outside the grid are both X-sum and Sandwich clues. An X-sum clue indicates the sum of the first X digits in the respective row or column where X is the first digit seen from the clue. A Sandwich clue indicates the sum of all digits between 1 and 9 in the respective row or column.
