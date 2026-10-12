---
format: open-rules
title: Zig Zags and Polka Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wp44qfp43b
case: https://sudoku-sleuth.com/cases/zig-zags-and-polka-dots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c6-r6c7 colour "black"
kropki-2: kropki r8c3-r9c3 colour "black"
kropki-3: kropki r3c4-r4c4 colour "black"
arrow-1: arrow r3c4-r4c3-r5c4-r6c3-r7c4 bulb ["r2c3"]
arrow-2: arrow r7c6-r6c7-r5c6-r4c7-r3c6 bulb ["r8c7"]
arrow-3: arrow r7c1-r6c2-r5c1 bulb ["r8c2"]
arrow-4: arrow r2c9-r3c8-r4c9 bulb ["r1c8"]
arrow-5: arrow r6c9-r5c8 bulb ["r7c8"]
arrow-6: arrow r1c6-r2c5 bulb ["r2c7"]
arrow-7: arrow r9c4-r8c5 bulb ["r8c3"]
arrow-8: arrow r2c2-r3c1 bulb ["r1c1"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
