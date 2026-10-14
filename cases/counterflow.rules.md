---
format: open-rules
title: Counterflow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/sx2lqmz312
case: https://sudoku-sleuth.com/cases/counterflow
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9cacfed3c648dffb32694a52af0f8022
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5-r2c6 total 22 connected true
cage-2: cage r5c8-r5c9-r6c8 total 22 connected true
cage-3: cage r8c4-r8c5-r9c5 total 13 connected true
cage-4: cage r4c2-r5c1-r5c2 total 13 connected true
cage-5: cage r7c2-r8c2-r8c3 total 10 connected true
cage-6: cage r2c7-r2c8-r3c8 total 8 connected true
cage-7: cage r7c8-r8c7-r8c8 total 11 connected true
cage-8: cage r2c2-r2c3-r3c2 total 10 connected true
arrow-1: arrow r3c2-r2c3-r1c4-r1c5 bulb ["r4c2"]
arrow-2: arrow r2c7-r3c8-r4c9-r5c9 bulb ["r2c6"]
arrow-3: arrow r7c8-r8c7-r9c6-r9c5 bulb ["r6c8"]
arrow-4: arrow r8c3-r7c2-r6c1-r5c1 bulb ["r8c4"]
arrow-5: arrow r3c4-r4c3 bulb ["r3c5"]
arrow-6: arrow r6c3-r7c4 bulb ["r5c3"]
arrow-7: arrow r7c6-r6c7 bulb ["r7c5"]
arrow-8: arrow r4c7-r3c6 bulb ["r5c7"]
arrow-9: arrow r2c1-r3c1 bulb ["r1c2"]
arrow-10: arrow r8c9-r9c8 bulb ["r7c9"]
```

**Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
