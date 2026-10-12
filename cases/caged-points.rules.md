---
format: open-rules
title: Caged Points
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/caged-points
case: https://sudoku-sleuth.com/cases/caged-points
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c4 total 4 connected true
cage-2: cage r7c5-r8c5 total 4 connected true
cage-3: cage r4c6-r5c6 total 4 connected true
cage-4: cage r6c7-r6c8 total 4 connected true
cage-5: cage r4c2-r4c3 total 5 connected true
cage-6: cage r1c8-r1c9 total 12 connected true
cage-7: cage r6c1-r6c2 total 12 connected true
cage-8: cage r4c5-r5c5 total 7 connected true
cage-9: cage r1c1-r2c1 total 11 connected true
arrow-1: arrow r1c2-r1c3-r1c4-r2c4 bulb ["r1c1"]
arrow-2: arrow r9c3-r9c4-r9c5-r8c5 bulb ["r9c2"]
arrow-3: arrow r3c8-r3c7-r3c6-r4c6 bulb ["r3c9"]
arrow-4: arrow r8c9-r7c9-r6c9-r6c8 bulb ["r9c9"]
arrow-5: arrow r5c1-r4c1-r4c2 bulb ["r6c1"]
arrow-6: arrow r5c4-r5c5 bulb ["r5c3"]
arrow-7: arrow r1c7-r2c7 bulb ["r1c8"]
arrow-8: arrow r7c2-r8c2 bulb ["r7c3"]
```

**Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
