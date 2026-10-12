---
format: open-rules
title: Shots and Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/41dwh64tt6
case: https://sudoku-sleuth.com/cases/shots-and-dots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 colour "black"
kropki-2: kropki r5c9-r6c9 colour "black"
kropki-3: kropki r6c3-r7c3 colour "black"
kropki-4: kropki r3c7-r4c7 colour "black"
kropki-5: kropki r9c3-r9c4 colour "black"
kropki-6: kropki r1c1-r2c1 colour "black"
kropki-7: kropki r8c9-r9c9 colour "black"
kropki-8: kropki r3c2-r3c3 colour "black"
kropki-9: kropki r7c7-r7c8 colour "black"
kropki-10: kropki r3c5-r4c5 colour "black"
arrow-1: arrow r2c2-r3c2-r3c3-r3c4-r4c3 bulb ["r1c2"]
arrow-2: arrow r8c8-r7c8-r7c7-r7c6-r6c7 bulb ["r9c8"]
arrow-3: arrow r7c2-r6c3-r5c4 bulb ["r8c1"]
arrow-4: arrow r3c8-r4c7-r5c6 bulb ["r2c9"]
arrow-5: arrow r8c4-r9c4-r9c5 bulb ["r7c4"]
arrow-6: arrow r2c6-r1c6-r1c5 bulb ["r3c6"]
arrow-7: arrow r6c8-r6c9 bulb ["r5c7"]
arrow-8: arrow r4c2-r4c1 bulb ["r5c3"]
```

**Sudoku, Arrows, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
 - Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
