---
format: open-rules
title: Hunting Wabbits
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/t3bp2znhtm
case: https://sudoku-sleuth.com/cases/hunting-wabbits
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=6 r9c8=5
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c3-r2c4-r3c2-r3c3-r4c1-r4c2 connected true
cage-2: cage r1c6-r2c6-r2c7-r3c7-r3c8-r4c8-r4c9 connected true
cage-3: cage r6c8-r6c9-r7c7-r7c8-r8c6-r8c7-r9c6 connected true
cage-4: cage r6c1-r6c2-r7c2-r7c3-r8c3-r8c4-r9c4 connected true
arrow-1: arrow r4c3-r5c2-r5c1 bulb ["r3c3"]
arrow-2: arrow r3c4-r2c5-r1c5 bulb ["r3c3"]
arrow-3: arrow r7c6-r8c5-r9c5 bulb ["r7c7"]
arrow-4: arrow r6c7-r5c8-r5c9 bulb ["r7c7"]
arrow-5: arrow r6c3-r5c3-r4c4 bulb ["r7c3"]
arrow-6: arrow r3c7-r3c6 bulb ["r4c8"]
arrow-7: arrow r6c6-r6c5 bulb ["r5c7"]
arrow-8: arrow r7c9-r6c9 bulb ["r8c8"]
arrow-9: arrow r4c6-r5c6 bulb ["r3c5"]
```

**Sudoku, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Cages: Digits cannot repeat within a cage.
