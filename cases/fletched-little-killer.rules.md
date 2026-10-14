---
format: open-rules
title: Fletched Little Killer
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/q75a7k92t4
case: https://sudoku-sleuth.com/cases/fletched-little-killer
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=5 r5c3=8 r6c8=7 r9c5=6
exported: 345076fff58ca61a5a6a351375a5450c
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3-r2c4 bulb ["r2c1"]
arrow-2: arrow r1c8-r1c7-r2c6 bulb ["r2c9"]
arrow-3: arrow r9c2-r9c3-r8c4 bulb ["r8c1"]
arrow-4: arrow r9c8-r9c7-r8c6 bulb ["r8c9"]
arrow-5: arrow r4c2-r4c3 bulb ["r5c1"]
arrow-6: arrow r6c2-r6c3 bulb ["r5c1"]
arrow-7: arrow r5c7-r6c7 bulb ["r4c8"]
arrow-8: arrow r5c9-r6c9 bulb ["r4c8"]
little-killer-1: little-killer r2c1-r1c2 sum 7
little-killer-2: little-killer r2c9-r1c8 sum 9
little-killer-3: little-killer r8c1-r9c2 sum 8
little-killer-4: little-killer r8c9-r9c8 sum 12
little-killer-5: little-killer r5c9-r4c8-r3c7-r2c6-r1c5 sum 17
little-killer-6: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 23
little-killer-7: little-killer r1c4-r2c3-r3c2-r4c1 sum 26
little-killer-8: little-killer r9c6-r8c7-r7c8-r6c9 sum 29
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
