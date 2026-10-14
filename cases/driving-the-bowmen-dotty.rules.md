---
format: open-rules
title: Driving the Bowmen Dotty
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/b4cew5auig
case: https://sudoku-sleuth.com/cases/driving-the-bowmen-dotty
library: https://rules.sudoku-sleuth.com/
status: read
exported: 327410c1c88f0c4c0d4f2eafa700e75f
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r3c2 black
kropki-2: kropki r4c3-r4c4 black
kropki-3: kropki r5c3-r5c4 black
kropki-4: kropki r8c6-r9c6 black
kropki-5: kropki r5c6-r6c6 black
kropki-6: kropki r6c7-r7c7 black
kropki-7: kropki r5c6-r5c7 black
kropki-8: kropki r6c7-r6c8 black
kropki-9: kropki r1c9-r2c9 black
kropki-10: kropki r1c8-r1c9 black
kropki-11: kropki r1c8-r2c8 black
kropki-12: kropki r5c2-r5c3 black
kropki-13: kropki r6c3-r6c4 black
arrow-1: arrow r3c2-r4c3-r5c4 bulb ["r2c1"]
arrow-2: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-3: arrow r4c2-r5c3-r6c4 bulb ["r3c1"]
arrow-4: arrow r8c8-r7c7-r6c6 bulb ["r9c9"]
arrow-5: arrow r7c8-r6c7-r5c6 bulb ["r8c9"]
arrow-6: arrow r6c8-r5c7 bulb ["r7c9"]
arrow-7: arrow r8c7-r7c6 bulb ["r9c8"]
arrow-8: arrow r8c6 bulb ["r9c7"]
arrow-9: arrow r2c5-r3c6 bulb ["r1c4"]
arrow-10: arrow r2c4 bulb ["r1c3"]
arrow-11: arrow r2c7 bulb ["r1c6"]
arrow-12: arrow r8c3 bulb ["r9c4"]
arrow-13: arrow r3c7 bulb ["r4c8"]
arrow-14: arrow r7c3 bulb ["r6c2"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
