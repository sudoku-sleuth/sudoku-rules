---
format: open-rules
title: Directions
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ruf0cqxqnx
case: https://sudoku-sleuth.com/cases/directions
library: https://rules.sudoku-sleuth.com/
status: read
exported: e850e950dbc3b92aeb11acd361e6d735
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 white
kropki-2: kropki r6c8-r6c9 white
kropki-3: kropki r6c1-r6c2 white
kropki-4: kropki r3c4-r3c5 white
kropki-5: kropki r8c1-r8c2 black
kropki-6: kropki r8c8-r8c9 black
kropki-7: kropki r7c5-r8c5 black
kropki-8: kropki r3c2-r3c3 black
kropki-9: kropki r5c5-r6c5 black
kropki-10: kropki r2c6-r2c7 black
kropki-11: kropki r1c1-r1c2 black
kropki-12: kropki r1c9-r2c9 black
kropki-13: kropki r4c8-r4c9 black
kropki-14: kropki r4c2-r5c2 black
arrow-1: arrow r7c4-r8c3-r8c2 bulb ["r6c5"]
arrow-2: arrow r7c6-r8c7-r8c8 bulb ["r6c5"]
arrow-3: arrow r3c6-r2c6 bulb ["r4c5"]
arrow-4: arrow r3c4-r2c4 bulb ["r4c5"]
arrow-5: arrow r4c3-r5c3-r6c2 bulb ["r3c3"]
arrow-6: arrow r4c7-r5c7-r6c8 bulb ["r3c7"]
```

**Sudoku, Arrows, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
