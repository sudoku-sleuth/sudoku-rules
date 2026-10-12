---
format: open-rules
title: Storm Season
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/44non28fjm
case: https://sudoku-sleuth.com/cases/storm-season
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c9=5
---

```rules
sudoku 9x9
arrow-1: arrow r1c3-r1c4-r1c5 bulb ["r2c2"]
arrow-2: arrow r3c9-r4c9-r5c9 bulb ["r2c8"]
arrow-3: arrow r9c7-r9c6-r9c5 bulb ["r8c8"]
arrow-4: arrow r7c1-r6c1-r5c1 bulb ["r8c2"]
arrow-5: arrow r2c4-r2c5-r2c6 bulb ["r3c3"]
arrow-6: arrow r8c6-r8c5-r8c4 bulb ["r7c7"]
arrow-7: arrow r5c3-r4c3 bulb ["r6c4"]
arrow-8: arrow r5c7-r6c7 bulb ["r4c6"]
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 16
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 13
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 18
little-killer-5: little-killer r8c9-r9c8 sum 5
little-killer-6: little-killer r9c4-r8c3-r7c2-r6c1 sum 19
little-killer-7: little-killer r1c6-r2c7-r3c8-r4c9 sum 21
little-killer-8: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 23
little-killer-9: little-killer r6c9-r7c8-r8c7-r9c6 sum 25
```

**Sudoku, Arrows, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
 - Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
