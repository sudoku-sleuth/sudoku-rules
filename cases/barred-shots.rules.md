---
format: open-rules
title: Barred Shots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/klq70ge7uh
case: https://sudoku-sleuth.com/cases/barred-shots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c2 total 17 connected true
cage-2: cage r2c8-r2c9-r3c9 total 16 connected true
cage-3: cage r8c8-r9c7-r9c8 total 15 connected true
cage-4: cage r7c1-r8c1-r8c2 total 13 connected true
cage-5: cage r4c3-r4c4-r5c3 total 12 connected true
cage-6: cage r5c7-r6c6-r6c7 total 14 connected true
cage-7: cage r4c5-r4c6-r5c6 total 16 connected true
cage-8: cage r8c5-r9c5-r9c6 total 12 connected true
cage-9: cage r5c1-r6c1-r6c2 total 15 connected true
arrow-1: arrow r3c1-r2c2-r1c3 bulb ["r4c1"]
arrow-2: arrow r1c7-r2c8-r3c9 bulb ["r1c6"]
arrow-3: arrow r7c9-r8c8-r9c7 bulb ["r6c9"]
arrow-4: arrow r9c3-r8c2-r7c1 bulb ["r9c4"]
arrow-5: arrow r4c3-r5c3 bulb ["r3c4"]
arrow-6: arrow r7c4-r7c5 bulb ["r6c3"]
arrow-7: arrow r6c7-r5c7 bulb ["r7c6"]
arrow-8: arrow r3c6-r3c5 bulb ["r4c7"]
```

**Standard Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
