---
format: open-rules
title: Severely Limited
setter: sujoyku
source: https://sudokupad.app/1s223g5x48
case: https://sudoku-sleuth.com/cases/severely-limited
library: https://rules.sudoku-sleuth.com/
status: read
exported: 60d5d98b39d9bd92a33a2ce51475bc26
---

```rules
sudoku 9x9
arrow-1: arrow r3c2-r2c3 bulb ["r4c2"]
arrow-2: arrow r7c8-r8c7 bulb ["r6c8"]
arrow-3: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-4: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-5: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-6: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-7: arrow r3c6-r2c5 bulb ["r4c5"]
arrow-8: arrow r7c4-r8c5 bulb ["r6c5"]
little-killer-1: little-killer r4c1-r3c2-r2c3-r1c4 sum 8
little-killer-2: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 40
little-killer-3: little-killer r9c5-r8c6-r7c7-r6c8-r5c9 sum 10
little-killer-4: little-killer r6c9-r7c8-r8c7-r9c6 sum 22
little-killer-5: little-killer r8c9-r9c8 sum 16
little-killer-6: little-killer r2c1-r1c2 sum 16
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges. 

- Little killer: Digits on a marked diagonal must sum to the clue outside the grid. (If there is no conflict with other rules, digits on such a diagonal may repeat.)
