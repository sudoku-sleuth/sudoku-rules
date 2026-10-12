---
format: open-rules
title: A bit of a stretch
setter: sujoyku
source: https://sudokupad.app/4d60jyvth1
case: https://sudoku-sleuth.com/cases/a-bit-of-a-stretch
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r5c1 total 12 connected true
cage-2: cage r2c6-r3c5-r3c6 total 12 connected true
cage-3: cage r4c7-r4c8-r5c7 total 19 connected true
cage-4: cage r8c6-r9c5-r9c6 total 19 connected true
cage-5: cage r4c5-r4c6-r5c6 total 13 connected true
cage-6: cage r6c9-r7c9 total 11 connected true
cage-7: cage r1c3-r1c4 total 11 connected true
arrow-1: arrow r5c3-r4c4 bulb ["r6c3"]
arrow-2: arrow r7c5-r6c6 bulb ["r7c4"]
arrow-3: arrow r6c4-r7c3-r8c2 bulb ["r5c5"]
arrow-4: arrow r8c7-r9c8 bulb ["r7c7"]
arrow-5: arrow r3c2-r3c1 bulb ["r3c3"]
little-killer-1: little-killer r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 sum 18
little-killer-2: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 40
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

 - Killer cages: Digits in a cage sum to the clue in the top left.

- Little killers: Digits on a marked diagonal sum to the clue outside the grid. (If there is no conflict with other rules, digits on such a diagonal may repeat.)

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.
