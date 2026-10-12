---
format: open-rules
title: Eddies
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f6br23ndpp
case: https://sudoku-sleuth.com/cases/eddies
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c4-r6c4 total 11 connected true
cage-2: cage r4c4-r4c5 total 11 connected true
cage-3: cage r4c6-r5c6 total 11 connected true
cage-4: cage r6c5-r6c6 total 11 connected true
cage-5: cage r9c3-r9c4 total 12 connected true
cage-6: cage r7c7-r8c7 total 12 connected true
cage-7: cage r3c1-r4c1 total 12 connected true
cage-8: cage r2c3-r3c3 total 12 connected true
cage-9: cage r3c7-r3c8 total 12 connected true
cage-10: cage r8c1-r9c1 total 12 connected true
cage-11: cage r1c1-r2c1 total 12 connected true
cage-12: cage r6c9-r7c9 total 8 connected true
arrow-1: arrow r1c4-r1c5-r1c6 bulb ["r2c3"]
arrow-2: arrow r3c4-r4c4 bulb ["r2c3"]
arrow-3: arrow r4c9-r5c9-r6c9 bulb ["r3c8"]
arrow-4: arrow r4c7-r4c6 bulb ["r3c8"]
arrow-5: arrow r9c6-r9c5-r9c4 bulb ["r8c7"]
arrow-6: arrow r7c6-r6c6 bulb ["r8c7"]
arrow-7: arrow r6c1-r5c1-r4c1 bulb ["r7c2"]
arrow-8: arrow r6c3-r6c4 bulb ["r7c2"]
```

**Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
