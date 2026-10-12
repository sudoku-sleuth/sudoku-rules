---
format: open-rules
title: Giving Directions
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/abnnjd9iwy
case: https://sudoku-sleuth.com/cases/giving-directions
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 13 connected true
cage-2: cage r2c9-r3c9 total 17 connected true
cage-3: cage r9c2-r9c3 total 17 connected true
cage-4: cage r8c8-r8c9-r9c8-r9c9 total 27 connected true
cage-5: cage r7c1-r8c1 total 3 connected true
cage-6: cage r1c7-r1c8 total 3 connected true
cage-7: cage r9c5-r9c6 total 11 connected true
cage-8: cage r4c1-r5c1 total 13 connected true
cage-9: cage r1c4-r1c5 total 11 connected true
cage-10: cage r5c9-r6c9 total 7 connected true
cage-11: cage r4c5-r4c6 total 13 connected true
cage-12: cage r5c4-r6c4 total 13 connected true
arrow-1: arrow r2c3-r3c4 bulb ["r1c2"]
arrow-2: arrow r8c7-r7c6 bulb ["r9c8"]
arrow-3: arrow r3c7-r2c8 bulb ["r4c6"]
arrow-4: arrow r7c3-r8c2 bulb ["r6c4"]
```

**Sudoku, Cages, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
