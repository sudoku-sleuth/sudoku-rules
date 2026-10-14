---
format: open-rules
title: Throughway
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/je6qmn8ar0
case: https://sudoku-sleuth.com/cases/throughway
library: https://rules.sudoku-sleuth.com/
status: read
exported: 792b56e686fa0ae1c1d63f3dac8339b2
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 12 connected true
cage-2: cage r3c6-r3c7-r4c6-r4c7 total 12 connected true
cage-3: cage r6c3-r6c4-r7c3-r7c4 total 12 connected true
cage-4: cage r6c6-r6c7-r7c6-r7c7 total 12 connected true
cage-5: cage r5c1-r5c2 total 7 connected true
cage-6: cage r2c5-r3c5 total 8 connected true
cage-7: cage r5c7-r5c8 total 10 connected true
cage-8: cage r1c8-r2c8 total 4 connected true
cage-9: cage r8c9-r9c9 total 7 connected true
cage-10: cage r1c9-r2c9 total 8 connected true
cage-11: cage r8c8-r9c8 total 8 connected true
arrow-1: arrow r8c8-r7c7 bulb ["r9c9"]
arrow-2: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-3: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-4: arrow r6c4-r7c3-r8c2 bulb ["r5c5"]
arrow-5: arrow r7c5-r8c6 bulb ["r8c4"]
arrow-6: arrow r5c9-r4c8 bulb ["r6c8"]
arrow-7: arrow r2c2-r1c1 bulb ["r3c3"]
arrow-8: arrow r4c2-r5c1 bulb ["r5c3"]
```

**Sudoku, Cages, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
