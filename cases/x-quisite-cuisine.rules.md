---
format: open-rules
title: X-quisite Cuisine
setter: sujoyku
source: https://tinyurl.com/49f5m85r
case: https://sudoku-sleuth.com/cases/x-quisite-cuisine
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
diagonal direction "main"
arrow r4c7-r3c8 bulb ["r5c6"]
sandwich-1: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 6
sandwich-2: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 8
sandwich-3: sandwich r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 9
sandwich-4: sandwich r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 7
sandwich-5: sandwich r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 18
sandwich-6: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 17
```

Normal sudoku rules apply. On the indicated diagonal digits do not repeat. All clues outside the grid are both X-sum and Sandwich clues. An X-sum clue indicates the sum of the first X digits in the respective row or column where X is the first digit seen from the clue. A Sandwich clue indicates the sum of all digits between 1 and 9 in the respective row or column. Digits on an arrow sum to the digit in the circle from which the arrow emerges.
