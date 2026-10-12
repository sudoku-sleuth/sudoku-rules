---
format: open-rules
title: Square Dance
setter: EPH
source: https://tinyurl.com/3wmybjsd
case: https://sudoku-sleuth.com/cases/square-dance-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r4c2-r5c3 bulb ["r3c2"]
arrow-2: arrow r6c2-r5c1 bulb ["r7c2"]
arrow-3: arrow r8c4-r7c5 bulb ["r8c3"]
arrow-4: arrow r8c6-r9c5 bulb ["r8c7"]
arrow-5: arrow r6c8-r5c7 bulb ["r7c8"]
arrow-6: arrow r4c8-r5c9 bulb ["r3c8"]
arrow-7: arrow r2c6-r3c5 bulb ["r2c7"]
arrow-8: arrow r2c4-r1c5 bulb ["r2c3"]
little-killer-1: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 46
little-killer-2: little-killer r1c6-r2c7-r3c8-r4c9 sum 21
little-killer-3: little-killer r9c4-r8c3-r7c2-r6c1 sum 34
little-killer-4: little-killer r4c1-r3c2-r2c3-r1c4 sum 32
little-killer-5: little-killer r6c9-r7c8-r8c7-r9c6 sum 34
little-killer-6: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 35
little-killer-7: little-killer r9c6-r8c5-r7c4-r6c3-r5c2-r4c1 sum 35
little-killer-8: little-killer r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 sum 39
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits on an arrow must sum to the digit in the attached circle.  Digits may repeat on an arrow if allowed by the other rules.

Clues outside the grid show the sum of the digits along the indicated diagonal.  Digits may repeat along the diagonal if allowed by the other rules.
