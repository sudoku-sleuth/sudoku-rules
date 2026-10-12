---
format: open-rules
title: Bushi
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ltv998pktm
case: https://sudoku-sleuth.com/cases/bushi
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 13 connected true
cage-2: cage r1c7-r1c8 total 12 connected true
cage-3: cage r7c5-r8c5 total 9 connected true
cage-4: cage r2c5-r3c5 total 12 connected true
cage-5: cage r1c1-r2c1 total 4 connected true
cage-6: cage r1c9-r2c9 total 3 connected true
cage-7: cage r6c1-r7c1 total 13 connected true
cage-8: cage r6c9-r7c9 total 13 connected true
cage-9: cage r5c2-r5c3 total 10 connected true
cage-10: cage r5c7-r5c8 total 10 connected true
cage-11: cage r9c3-r9c4 total 12 connected true
cage-12: cage r9c6-r9c7 total 12 connected true
arrow-1: arrow r2c3-r3c4-r4c3-r5c2 bulb ["r3c2"]
arrow-2: arrow r2c7-r3c6-r4c7-r5c8 bulb ["r3c8"]
arrow-3: arrow r8c2-r7c3-r6c4 bulb ["r7c1"]
arrow-4: arrow r8c8-r7c7-r6c6 bulb ["r7c9"]
arrow-5: arrow r1c6-r1c7 bulb ["r2c5"]
arrow-6: arrow r1c4-r1c3 bulb ["r2c5"]
arrow-7: arrow r8c4-r9c3-r9c2 bulb ["r7c5"]
arrow-8: arrow r8c6-r9c7-r9c8 bulb ["r7c5"]
```

**Standard Sudoku, Cages, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, visit https://missingdeck.net
