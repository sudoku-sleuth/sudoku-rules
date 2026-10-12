---
format: open-rules
title: Pressure Points
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7on9cbpxof
case: https://sudoku-sleuth.com/cases/pressure-points
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c9-r5c9 colour "black"
kropki-2: kropki r8c6-r9c6 colour "black"
kropki-3: kropki r3c4-r3c5 colour "black"
kropki-4: kropki r2c2-r3c2 colour "black"
kropki-5: kropki r1c8-r2c8 colour "black"
kropki-6: kropki r5c5-r5c6 colour "black"
kropki-7: kropki r7c7-r7c8 colour "black"
kropki-8: kropki r5c2-r6c2 colour "black"
arrow-1: arrow r3c2-r4c3-r5c2-r6c1 bulb ["r2c1"]
arrow-2: arrow r3c8-r4c7-r5c8-r6c9 bulb ["r2c9"]
arrow-3: arrow r6c3-r5c4-r4c5-r3c6-r2c7 bulb ["r7c2"]
arrow-4: arrow r6c7-r7c6-r8c5 bulb ["r7c8"]
arrow-5: arrow r6c5-r5c6 bulb ["r7c4"]
arrow-6: arrow r3c4-r2c5 bulb ["r2c3"]
arrow-7: arrow r9c2-r8c1 bulb ["r8c3"]
arrow-8: arrow r9c8-r8c9 bulb ["r8c7"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
