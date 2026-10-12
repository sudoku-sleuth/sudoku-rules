---
format: open-rules
title: Circulatory System
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/340elmj6qr
case: https://sudoku-sleuth.com/cases/circulatory-system
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=6 r2c8=2 r5c5=9 r8c2=2 r8c8=6
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 9 connected true
cage-2: cage r8c9-r9c8-r9c9 total 9 connected true
cage-3: cage r1c8-r1c9-r2c9 total 24 connected true
cage-4: cage r8c1-r9c1-r9c2 total 24 connected true
cage-5: cage r5c4-r6c4 total 10 connected true
cage-6: cage r4c6-r5c6 total 12 connected true
cage-7: cage r8c6-r9c6 total 7 connected true
cage-8: cage r1c4-r2c4 total 7 connected true
cage-9: cage r4c8-r4c9 total 12 connected true
cage-10: cage r6c1-r6c2 total 11 connected true
cage-11: cage r3c5-r4c5 total 14 connected true
cage-12: cage r6c5-r7c5 total 8 connected true
cage-13: cage r2c3-r3c2-r3c3 total 18 connected true
cage-14: cage r2c7-r3c7-r3c8 total 9 connected true
cage-15: cage r7c7-r7c8-r8c7 total 17 connected true
cage-16: cage r7c2-r7c3-r8c3 total 10 connected true
arrow-1: arrow r3c3-r2c4-r1c5-r1c6 bulb ["r4c2"]
arrow-2: arrow r3c7-r4c8-r5c9-r6c9 bulb ["r2c6"]
arrow-3: arrow r7c7-r8c6-r9c5-r9c4 bulb ["r6c8"]
arrow-4: arrow r7c3-r6c2-r5c1-r4c1 bulb ["r8c4"]
arrow-5: arrow r3c4-r2c5 bulb ["r4c3"]
arrow-6: arrow r4c7-r5c8 bulb ["r3c6"]
arrow-7: arrow r7c6-r8c5 bulb ["r6c7"]
arrow-8: arrow r6c3-r5c2 bulb ["r7c4"]
```

**Sudoku, Cages, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Within a cage, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
