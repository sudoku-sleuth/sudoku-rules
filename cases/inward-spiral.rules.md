---
format: open-rules
title: Inward Spiral
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ql7p8elfs5
case: https://sudoku-sleuth.com/cases/inward-spiral
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1a8d4f87a49509409861b224b7fb4dbb
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r2c1-r2c2-r3c1-r4c1 total 42 connected true
cage-2: cage r1c6-r1c7-r1c8-r2c8-r2c9-r3c9-r4c9 total 41 connected true
cage-3: cage r6c9-r7c9-r8c8-r8c9-r9c6-r9c7-r9c8 total 42 connected true
cage-4: cage r6c1-r7c1-r8c1-r8c2-r9c2-r9c3-r9c4 total 41 connected true
cage-5: cage r5c2-r6c2-r6c3-r7c2-r7c3-r8c3 total 30 connected true
cage-6: cage r2c3-r2c4-r2c5-r3c2-r3c3-r3c4 total 27 connected true
cage-7: cage r2c7-r3c7-r3c8-r4c7-r4c8-r5c8 total 32 connected true
cage-8: cage r7c6-r7c7-r7c8-r8c5-r8c6-r8c7 total 33 connected true
arrow-1: arrow r3c8-r2c7 bulb ["r4c9"]
arrow-2: arrow r2c3-r3c2 bulb ["r1c4"]
arrow-3: arrow r7c2-r8c3 bulb ["r6c1"]
arrow-4: arrow r8c7-r7c8 bulb ["r9c6"]
arrow-5: arrow r5c8-r4c7 bulb ["r6c9"]
arrow-6: arrow r2c5-r3c4 bulb ["r1c6"]
arrow-7: arrow r5c2-r6c3 bulb ["r4c1"]
arrow-8: arrow r8c5-r7c6 bulb ["r9c4"]
```

**Standard Sudoku, Cages, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For a weekly digest of new puzzles, join our mailing list at missingdeck.net/mailing
