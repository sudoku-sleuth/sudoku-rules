---
format: open-rules
title: Circling the Drain
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1lwycdhbq6
case: https://sudoku-sleuth.com/cases/circling-the-drain
library: https://rules.sudoku-sleuth.com/
status: read
exported: 458368802abc12695fc105657fb99785
---

```rules
sudoku 9x9
kropki-1: kropki r2c6-r3c6 black
kropki-2: kropki r7c4-r8c4 black
kropki-3: kropki r6c3-r7c3 black
kropki-4: kropki r8c3-r9c3 black
kropki-5: kropki r4c1-r5c1 black
kropki-6: kropki r1c5-r2c5 black
kropki-7: kropki r3c7-r4c7 black
kropki-8: kropki r5c7-r5c8 black
kropki-9: kropki r6c4-r6c5 black
kropki-10: kropki r3c2-r4c2 black
arrow-1: arrow r8c1-r7c1-r6c2 bulb ["r9c1"]
arrow-2: arrow r5c1-r4c1-r3c2 bulb ["r6c1"]
arrow-3: arrow r1c2-r1c3-r2c4 bulb ["r1c1"]
arrow-4: arrow r1c5-r1c6-r2c7 bulb ["r1c4"]
arrow-5: arrow r2c9-r3c9-r4c8 bulb ["r1c9"]
arrow-6: arrow r5c9-r6c9-r7c8 bulb ["r4c9"]
arrow-7: arrow r9c8-r9c7-r8c6 bulb ["r9c9"]
arrow-8: arrow r9c5-r9c4-r8c3 bulb ["r9c6"]
arrow-9: arrow r4c7-r5c6 bulb ["r3c7"]
arrow-10: arrow r7c6-r6c5 bulb ["r7c7"]
arrow-11: arrow r3c4-r4c5 bulb ["r3c3"]
arrow-12: arrow r6c3-r5c4 bulb ["r7c3"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
