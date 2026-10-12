---
format: open-rules
title: Pocket Full of Posies
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/q1ohh6dos9
case: https://sudoku-sleuth.com/cases/pocket-full-of-posies
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r9c2-r9c3 bulb ["r8c1"]
arrow-2: arrow r7c1-r6c1 bulb ["r8c1"]
arrow-3: arrow r9c8-r9c7 bulb ["r8c9"]
arrow-4: arrow r7c9-r6c9 bulb ["r8c9"]
arrow-5: arrow r3c1-r4c1 bulb ["r2c1"]
arrow-6: arrow r1c2-r1c3 bulb ["r2c1"]
arrow-7: arrow r3c9-r4c9 bulb ["r2c9"]
arrow-8: arrow r1c8-r1c7 bulb ["r2c9"]
quadruple-1: quadruple r4c1-r4c2-r5c1-r5c2 digits [1,7,8]
quadruple-2: quadruple r5c1-r5c2-r6c1-r6c2 digits [2,6,9]
quadruple-3: quadruple r4c8-r4c9-r5c8-r5c9 digits [2,6,9]
quadruple-4: quadruple r5c8-r5c9-r6c8-r6c9 digits [1,7,8]
quadruple-5: quadruple r2c2-r2c3-r3c2-r3c3 digits [2,8]
quadruple-6: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,8]
quadruple-7: quadruple r2c7-r2c8-r3c7-r3c8 digits [6,9]
quadruple-8: quadruple r1c4-r1c5-r2c4-r2c5 digits [1,2]
quadruple-9: quadruple r1c5-r1c6-r2c5-r2c6 digits [3,4]
quadruple-10: quadruple r8c4-r8c5-r9c4-r9c5 digits [3,4]
quadruple-11: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,6]
quadruple-12: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,9]
quadruple-13: quadruple r5c5-r5c6-r6c5-r6c6 digits [8]
quadruple-14: quadruple r4c4-r4c5-r5c4-r5c5 digits [6]
quadruple-15: quadruple r3c5-r3c6-r4c5-r4c6 digits [3]
quadruple-16: quadruple r5c3-r5c4-r6c3-r6c4 digits [5,5]
quadruple-17: quadruple r4c6-r4c7-r5c6-r5c7 digits [3,3]
quadruple-18: quadruple r6c4-r6c5-r7c4-r7c5 digits [2,7]
```

**Standard Sudoku, Arrows, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of the arrow sum to the value in the attached circle.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
