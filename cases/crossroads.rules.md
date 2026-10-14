---
format: open-rules
title: Crossroads
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/60zonrc1dt
case: https://sudoku-sleuth.com/cases/crossroads
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c6=2
exported: 83b7b30c32a3e2c4ef143d77d14b4d45
---

```rules
sudoku 9x9
arrow-1: arrow r4c2-r5c3 bulb ["r3c1"]
arrow-2: arrow r2c4-r3c5 bulb ["r1c3"]
arrow-3: arrow r8c6-r7c5 bulb ["r9c7"]
arrow-4: arrow r6c8-r5c7 bulb ["r7c9"]
arrow-5: arrow r6c2-r5c3 bulb ["r7c1"]
arrow-6: arrow r8c4-r7c5 bulb ["r9c3"]
arrow-7: arrow r2c6-r3c5 bulb ["r1c7"]
arrow-8: arrow r4c8-r5c7 bulb ["r3c9"]
arrow-9: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-10: arrow r7c3 bulb ["r6c4"]
arrow-11: arrow r7c7-r8c8-r9c9 bulb ["r6c6"]
arrow-12: arrow r2c8-r1c9 bulb ["r3c7"]
little-killer-1: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 22
little-killer-3: little-killer r9c3-r8c2-r7c1 sum 21
little-killer-4: little-killer r4c1-r3c2-r2c3-r1c4 sum 20
little-killer-5: little-killer r8c9-r9c8 sum 11
little-killer-6: little-killer r3c1-r2c2-r1c3 sum 8
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
