---
format: open-rules
title: Firing Wildly
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7i10ret7j6
case: https://sudoku-sleuth.com/cases/firing-wildly
library: https://rules.sudoku-sleuth.com/
status: read
exported: 129e9a53e4c07eb8471f3f91d7a0c65a
---

```rules
sudoku 9x9
arrow-1: arrow r1c3-r1c4-r1c5 bulb ["r2c2"]
arrow-2: arrow r3c5-r3c6 bulb ["r4c4"]
arrow-3: arrow r2c7-r2c6-r2c5 bulb ["r3c8"]
arrow-4: arrow r6c2-r6c3-r7c4 bulb ["r6c1"]
arrow-5: arrow r5c6-r5c7-r4c8 bulb ["r5c5"]
arrow-6: arrow r7c9-r8c9 bulb ["r6c8"]
arrow-7: arrow r1c8-r1c7 bulb ["r2c9"]
arrow-8: arrow r8c8-r7c7-r7c6 bulb ["r9c9"]
arrow-9: arrow r8c4-r7c3 bulb ["r9c5"]
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,2,3]
quadruple-2: quadruple r2c5-r2c6-r3c5-r3c6 digits [4,5,6]
quadruple-3: quadruple r2c8-r2c9-r3c8-r3c9 digits [7,8,9]
quadruple-4: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,2,3]
quadruple-5: quadruple r5c4-r5c5-r6c4-r6c5 digits [4,5,6]
quadruple-6: quadruple r5c7-r5c8-r6c7-r6c8 digits [7,8,9]
quadruple-7: quadruple r8c3-r8c4-r9c3-r9c4 digits [2,4,5,8]
quadruple-8: quadruple r7c6-r7c7-r8c6-r8c7 digits [3,4,5,7]
```

**Sudoku, Arrows, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
