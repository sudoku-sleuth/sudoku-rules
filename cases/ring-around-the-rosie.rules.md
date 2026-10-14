---
format: open-rules
title: Ring Around the Rosie
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/41k6re8o1q
case: https://sudoku-sleuth.com/cases/ring-around-the-rosie
library: https://rules.sudoku-sleuth.com/
status: read
exported: aa74f62c4a2a8b819bff35aea9e8fda4
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1 bulb ["r1c1"]
arrow-2: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-3: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-4: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-5: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-6: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-7: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-8: arrow r9c8-r9c7 bulb ["r9c9"]
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,9]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,8]
quadruple-3: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,8]
quadruple-4: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,9]
quadruple-5: quadruple r4c1-r4c2-r5c1-r5c2 digits [1,2,9]
quadruple-6: quadruple r5c1-r5c2-r6c1-r6c2 digits [4,5,6]
quadruple-7: quadruple r5c8-r5c9-r6c8-r6c9 digits [1,2,9]
quadruple-8: quadruple r4c8-r4c9-r5c8-r5c9 digits [4,5,6]
quadruple-9: quadruple r1c3-r1c4-r2c3-r2c4 digits [2,3]
quadruple-10: quadruple r1c6-r1c7-r2c6-r2c7 digits [5,6]
quadruple-11: quadruple r8c3-r8c4-r9c3-r9c4 digits [4,5]
quadruple-12: quadruple r8c6-r8c7-r9c6-r9c7 digits [7,9]
quadruple-13: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,7]
quadruple-14: quadruple r3c3-r3c4-r4c3-r4c4 digits [3,8]
quadruple-15: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,6]
quadruple-16: quadruple r6c6-r6c7-r7c6-r7c7 digits [3,4]
```

**Standard Sudoku, Arrows, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of the arrow sum to the value in the attached circle.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
