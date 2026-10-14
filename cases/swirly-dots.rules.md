---
format: open-rules
title: Swirly Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/96yw1dp05b
case: https://sudoku-sleuth.com/cases/swirly-dots
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1df8760205ed93aae05490267f4f0d5d
---

```rules
sudoku 9x9
kropki-1: kropki r4c8-r4c9 white
kropki-2: kropki r2c3-r3c3 white
kropki-3: kropki r5c4-r5c5 white
kropki-4: kropki r3c9-r4c9 black
kropki-5: kropki r6c5-r7c5 black
kropki-6: kropki r1c1-r2c1 black
kropki-7: kropki r2c6-r3c6 black
kropki-8: kropki r2c1-r3c1 black
kropki-9: kropki r4c9-r5c9 black
kropki-10: kropki r4c7-r4c8 black
kropki-11: kropki r5c6-r5c7 black
kropki-12: kropki r3c5-r4c5 black
kropki-13: kropki r9c3-r9c4 black
kropki-14: kropki r5c3-r5c4 black
kropki-15: kropki r6c3-r7c3 black
arrow-1: arrow r4c2-r5c2-r6c2 bulb ["r3c3"]
arrow-2: arrow r2c4-r2c5-r2c6 bulb ["r1c3"]
arrow-3: arrow r6c8-r5c8-r4c8 bulb ["r7c7"]
arrow-4: arrow r8c6-r8c5-r8c4 bulb ["r9c7"]
```

**Sudoku, Arrows, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
