---
format: open-rules
title: Entangled
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1fznf333xr
case: https://sudoku-sleuth.com/cases/entangled
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r9c1 colour "white"
kropki-2: kropki r7c9-r8c9 colour "white"
kropki-3: kropki r7c8-r8c8 colour "white"
kropki-4: kropki r5c6-r5c7 colour "white"
kropki-5: kropki r1c2-r2c2 colour "black"
kropki-6: kropki r2c8-r3c8 colour "black"
kropki-7: kropki r7c2-r8c2 colour "black"
arrow-1: arrow r1c2-r2c2-r3c2 bulb ["r1c1"]
arrow-2: arrow r1c8-r2c8-r3c8 bulb ["r1c9"]
arrow-3: arrow r9c1-r8c1-r7c1 bulb ["r9c2"]
arrow-4: arrow r9c9-r8c9-r7c9 bulb ["r9c8"]
arrow-5: arrow r3c3-r2c3 bulb ["r4c3"]
arrow-6: arrow r3c7-r2c7 bulb ["r4c7"]
arrow-7: arrow r7c8-r8c8 bulb ["r6c8"]
arrow-8: arrow r7c2-r8c2 bulb ["r6c2"]
arrow-9: arrow r3c4-r3c5 bulb ["r4c4"]
arrow-10: arrow r7c6-r7c5 bulb ["r6c6"]
arrow-11: arrow r6c4-r6c5 bulb ["r7c4"]
arrow-12: arrow r4c6-r4c5 bulb ["r5c6"]
arrow-13: arrow r1c5-r1c4 bulb ["r2c5"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
