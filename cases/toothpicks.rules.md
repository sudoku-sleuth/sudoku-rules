---
format: open-rules
title: Toothpicks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/h6j5ab8tvy
case: https://sudoku-sleuth.com/cases/toothpicks
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c4-r2c5 bulb ["r2c3"]
arrow-2: arrow r8c6-r8c5 bulb ["r8c7"]
arrow-3: arrow r6c2-r5c2 bulb ["r7c2"]
arrow-4: arrow r4c8-r5c8 bulb ["r3c8"]
arrow-5: arrow r3c7-r4c7 bulb ["r2c7"]
arrow-6: arrow r7c7-r7c6 bulb ["r7c8"]
arrow-7: arrow r7c3-r6c3 bulb ["r8c3"]
arrow-8: arrow r3c3-r3c4 bulb ["r3c2"]
arrow-9: arrow r5c5-r5c6 bulb ["r5c4"]
sandwich-1: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 33
sandwich-2: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 32
sandwich-3: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 32
sandwich-4: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 33
sandwich-5: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 0
sandwich-6: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 0
sandwich-7: sandwich r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 2
sandwich-8: sandwich r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 9
sandwich-9: sandwich r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 24
sandwich-10: sandwich r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 6
sandwich-11: sandwich r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 24
```

**Sudoku, Sandwiches, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sandwich sum: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing
