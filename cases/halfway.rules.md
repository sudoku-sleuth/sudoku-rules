---
format: open-rules
title: Halfway
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gr9sme8tfd
case: https://sudoku-sleuth.com/cases/halfway
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 colour "black"
kropki-2: kropki r6c4-r6c5 colour "black"
kropki-3: kropki r2c9-r3c9 colour "black"
kropki-4: kropki r7c1-r8c1 colour "black"
kropki-5: kropki r1c3-r1c4 colour "black"
kropki-6: kropki r1c7-r1c8 colour "black"
kropki-7: kropki r9c2-r9c3 colour "black"
kropki-8: kropki r6c5-r7c5 colour "black"
kropki-9: kropki r3c7-r4c7 colour "black"
arrow-1: arrow r5c3-r6c2-r6c1 bulb ["r4c4"]
arrow-2: arrow r3c5-r2c4-r1c4 bulb ["r4c6"]
arrow-3: arrow r5c7-r4c8-r4c9 bulb ["r6c6"]
arrow-4: arrow r7c5-r8c6-r9c6 bulb ["r6c4"]
arrow-5: arrow r8c1-r9c2-r9c3 bulb ["r7c1"]
arrow-6: arrow r2c9-r1c8-r1c7 bulb ["r3c9"]
arrow-7: arrow r9c8-r8c9-r7c9 bulb ["r9c7"]
arrow-8: arrow r1c2-r2c1-r3c1 bulb ["r1c3"]
```

**Sudoku, Arrows, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
 - Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
