---
format: open-rules
title: Diminishing Returns
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qpb0hg9nmf
case: https://sudoku-sleuth.com/cases/diminishing-returns
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 colour "white"
kropki-2: kropki r2c7-r3c7 colour "white"
kropki-3: kropki r6c2-r6c3 colour "white"
kropki-4: kropki r6c6-r7c6 colour "white"
kropki-5: kropki r3c9-r4c9 colour "white"
kropki-6: kropki r8c6-r9c6 colour "white"
kropki-7: kropki r9c3-r9c4 colour "white"
kropki-8: kropki r4c8-r5c8 colour "white"
kropki-9: kropki r6c9-r7c9 colour "white"
kropki-10: kropki r6c5-r6c6 colour "white"
kropki-11: kropki r6c1-r7c1 colour "white"
kropki-12: kropki r4c6-r5c6 colour "white"
kropki-13: kropki r3c6-r4c6 colour "white"
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r2c5-r2c6-r2c7 bulb ["r2c4"]
arrow-3: arrow r3c8-r3c9 bulb ["r3c7"]
arrow-4: arrow r8c2-r7c2-r6c2 bulb ["r9c2"]
arrow-5: arrow r6c4-r6c5-r6c6 bulb ["r6c3"]
arrow-6: arrow r8c8-r8c7-r8c6 bulb ["r8c9"]
arrow-7: arrow r9c5-r9c4 bulb ["r9c6"]
arrow-8: arrow r4c7-r4c8 bulb ["r4c6"]
arrow-9: arrow r5c9-r6c9 bulb ["r5c8"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Consecutive Pairs: Digits separated by a white dot are consecutive. Not all possible dots are given.
