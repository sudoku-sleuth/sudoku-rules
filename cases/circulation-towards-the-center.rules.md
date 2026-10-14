---
format: open-rules
title: Circulation Towards the Center
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xiv4araw41
case: https://sudoku-sleuth.com/cases/circulation-towards-the-center
library: https://rules.sudoku-sleuth.com/
status: read
exported: cc95260ea2e498f61f42ea7a36de8b92
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r6c1 white
kropki-2: kropki r4c9-r5c9 white
kropki-3: kropki r5c5-r5c6 white
kropki-4: kropki r4c4-r4c5 white
kropki-5: kropki r6c3-r6c4 white
kropki-6: kropki r5c9-r6c9 white
kropki-7: kropki r4c6-r4c7 white
kropki-8: kropki r1c5-r1c6 black
kropki-9: kropki r9c4-r9c5 black
kropki-10: kropki r8c6-r9c6 black
kropki-11: kropki r2c4-r2c5 black
kropki-12: kropki r3c4-r3c5 black
kropki-13: kropki r1c3-r2c3 black
kropki-14: kropki r2c3-r3c3 black
kropki-15: kropki r5c1-r5c2 black
kropki-16: kropki r8c8-r9c8 black
kropki-17: kropki r3c7-r4c7 black
arrow-1: arrow r3c3-r4c4-r4c5 bulb ["r2c2"]
arrow-2: arrow r7c7-r6c6-r6c5 bulb ["r8c8"]
arrow-3: arrow r7c3-r6c4 bulb ["r8c2"]
arrow-4: arrow r3c7-r4c6 bulb ["r2c8"]
arrow-5: arrow r5c4 bulb ["r4c3"]
arrow-6: arrow r5c6 bulb ["r6c7"]
arrow-7: arrow r1c4-r1c5-r1c6 bulb ["r1c3"]
arrow-8: arrow r4c9-r5c9-r6c9 bulb ["r3c9"]
arrow-9: arrow r6c1-r5c1-r4c1 bulb ["r7c1"]
arrow-10: arrow r9c6-r9c5-r9c4 bulb ["r9c7"]
```

**Sudoku, Arrow, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
