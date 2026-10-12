---
format: open-rules
title: Point to the Cage
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9snqmgn7q5
case: https://sudoku-sleuth.com/cases/point-to-the-cage
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6 total 6 connected true
cage-2: cage r5c9-r6c9 total 7 connected true
cage-3: cage r9c4-r9c5 total 6 connected true
cage-4: cage r4c1-r5c1 total 7 connected true
cage-5: cage r6c2-r7c2 total 8 connected true
cage-6: cage r3c8-r4c8 total 8 connected true
cage-7: cage r2c3-r2c4 total 7 connected true
cage-8: cage r8c6-r8c7 total 7 connected true
cage-9: cage r2c1-r3c1 total 13 connected true
cage-10: cage r7c9-r8c9 total 13 connected true
cage-11: cage r1c7-r1c8 total 13 connected true
cage-12: cage r9c2-r9c3 total 13 connected true
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r2c9-r3c9-r4c9 bulb ["r1c9"]
arrow-3: arrow r9c8-r9c7-r9c6 bulb ["r9c9"]
arrow-4: arrow r8c1-r7c1-r6c1 bulb ["r9c1"]
arrow-5: arrow r4c2-r5c2 bulb ["r3c2"]
arrow-6: arrow r8c4-r8c5 bulb ["r8c3"]
arrow-7: arrow r6c8-r5c8 bulb ["r7c8"]
arrow-8: arrow r2c6-r2c5 bulb ["r2c7"]
arrow-9: arrow r4c4-r4c5 bulb ["r4c3"]
arrow-10: arrow r6c6-r6c5 bulb ["r6c7"]
arrow-11: arrow r4c7 bulb ["r3c6"]
arrow-12: arrow r6c4 bulb ["r7c5"]
```

**Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
