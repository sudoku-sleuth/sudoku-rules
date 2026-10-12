---
format: open-rules
title: Inward Focus
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/00i2hcd12n
case: https://sudoku-sleuth.com/cases/inward-focus
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2-r3c3 total 10 connected true
cage-2: cage r7c2-r7c3-r8c2-r8c3 total 23 connected true
cage-3: cage r7c7-r7c8-r8c7-r8c8 total 11 connected true
cage-4: cage r2c7-r2c8-r3c7-r3c8 total 20 connected true
cage-5: cage r9c3-r9c4 total 8 connected true
cage-6: cage r9c6-r9c7 total 8 connected true
cage-7: cage r3c9-r4c9 total 8 connected true
cage-8: cage r3c1-r4c1 total 14 connected true
cage-9: cage r6c1-r7c1 total 6 connected true
cage-10: cage r6c9-r7c9 total 7 connected true
cage-11: cage r4c2-r4c3 total 14 connected true
cage-12: cage r4c7-r4c8 total 16 connected true
cage-13: cage r6c2-r6c3 total 11 connected true
cage-14: cage r6c7-r6c8 total 14 connected true
cage-15: cage r6c4-r7c4 total 9 connected true
cage-16: cage r6c6-r7c6 total 12 connected true
cage-17: cage r3c4-r4c4 total 9 connected true
cage-18: cage r3c6-r4c6 total 9 connected true
cage-19: cage r6c5-r7c5 total 13 connected true
arrow-1: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-2: arrow r2c8-r3c7-r4c6 bulb ["r1c9"]
arrow-3: arrow r8c2-r7c3-r6c4 bulb ["r9c1"]
arrow-4: arrow r8c8-r7c7-r6c6 bulb ["r9c9"]
arrow-5: arrow r2c5-r3c5-r4c5 bulb ["r1c5"]
```

Inward Spiral
by FullDeck and Missing a Few Cards
**Standard Sudoku, Cages, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For a weekly digest of new puzzles, join our mailing list at missingdeck.net/mailing
