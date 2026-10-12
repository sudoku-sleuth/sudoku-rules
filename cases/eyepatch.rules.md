---
format: open-rules
title: Eyepatch
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zv48rayyv5
case: https://sudoku-sleuth.com/cases/eyepatch
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=8
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2 total 14 connected true
cage-2: cage r2c8-r2c9 total 13 connected true
cage-3: cage r7c1-r7c2 total 7 connected true
cage-4: cage r3c3-r3c4-r4c3 total 10 connected true
cage-5: cage r5c6-r6c5-r6c6 total 7 connected true
cage-6: cage r4c8-r5c8-r6c8 total 15 connected true
cage-7: cage r8c4-r8c5-r8c6 total 15 connected true
cage-8: cage r4c2-r5c2-r6c2 total 15 connected true
cage-9: cage r2c4-r2c5-r2c6 total 15 connected true
cage-10: cage r7c7-r7c8 total 13 connected true
arrow-1: arrow r2c3-r2c4-r3c3-r4c2 bulb ["r2c2"]
arrow-2: arrow r2c7-r2c6-r3c7-r4c8 bulb ["r2c8"]
arrow-3: arrow r7c7-r8c6-r8c7 bulb ["r6c8"]
arrow-4: arrow r7c3-r6c2-r7c2 bulb ["r8c4"]
arrow-5: arrow r5c5-r6c6 bulb ["r4c4"]
```

**Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
