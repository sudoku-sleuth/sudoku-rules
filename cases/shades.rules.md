---
format: open-rules
title: Shades
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hs1w938s15
case: https://sudoku-sleuth.com/cases/shades
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4 total 10 connected true
cage-2: cage r1c6-r1c7-r1c8 total 13 connected true
cage-3: cage r9c2-r9c3-r9c4 total 13 connected true
cage-4: cage r9c6-r9c7-r9c8 total 10 connected true
cage-5: cage r3c4-r3c5-r3c6 total 12 connected true
cage-6: cage r2c1-r3c1 total 10 connected true
cage-7: cage r2c9-r3c9 total 8 connected true
cage-8: cage r6c1-r7c1-r8c1 total 11 connected true
cage-9: cage r6c9-r7c9-r8c9 total 9 connected true
cage-10: cage r7c3-r7c4 total 7 connected true
cage-11: cage r7c6-r7c7 total 10 connected true
cage-12: cage r5c7-r6c7 total 11 connected true
cage-13: cage r4c3-r5c3 total 11 connected true
cage-14: cage r4c5-r4c6 total 15 connected true
cage-15: cage r6c4-r6c5 total 7 connected true
arrow-1: arrow r1c3-r1c2-r2c1 bulb ["r1c4"]
arrow-2: arrow r1c7-r1c8-r2c9 bulb ["r1c6"]
arrow-3: arrow r9c7-r9c8-r8c9 bulb ["r9c6"]
arrow-4: arrow r9c3-r9c2-r8c1 bulb ["r9c4"]
arrow-5: arrow r4c2-r4c3-r3c4 bulb ["r3c1"]
arrow-6: arrow r4c8-r4c7-r3c6 bulb ["r3c9"]
arrow-7: arrow r6c6-r7c6 bulb ["r5c6"]
arrow-8: arrow r5c4-r5c5 bulb ["r5c3"]
```

**Sudoku, Cages, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
