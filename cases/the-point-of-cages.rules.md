---
format: open-rules
title: The Point of Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6x5p22xuhx
case: https://sudoku-sleuth.com/cases/the-point-of-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: 207e39e35d57430505bf568c2d56ff55
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 4 connected true
cage-2: cage r1c8-r1c9 total 6 connected true
cage-3: cage r8c1-r9c1 total 7 connected true
cage-4: cage r8c9-r9c9 total 11 connected true
cage-5: cage r5c4-r5c5 total 10 connected true
cage-6: cage r5c6-r5c7 total 12 connected true
cage-7: cage r3c5-r4c5 total 12 connected true
cage-8: cage r3c1-r4c1 total 9 connected true
cage-9: cage r1c6-r2c6 total 8 connected true
cage-10: cage r6c4-r6c5 total 4 connected true
cage-11: cage r6c8-r6c9 total 8 connected true
cage-12: cage r6c3-r7c3 total 6 connected true
arrow-1: arrow r1c2-r2c1-r3c1 bulb ["r1c3"]
arrow-2: arrow r1c8-r1c7-r2c6 bulb ["r2c9"]
arrow-3: arrow r7c1-r8c1 bulb ["r6c2"]
arrow-4: arrow r8c9-r7c9-r6c9 bulb ["r9c8"]
arrow-5: arrow r8c5-r7c5-r6c5 bulb ["r9c5"]
arrow-6: arrow r2c5-r3c5 bulb ["r1c5"]
arrow-7: arrow r5c8-r5c7 bulb ["r5c9"]
arrow-8: arrow r5c2-r5c3-r5c4 bulb ["r5c1"]
arrow-9: arrow r8c3-r7c3 bulb ["r9c3"]
arrow-10: arrow r7c7-r8c8-r9c7 bulb ["r6c7"]
```

**Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
