---
format: open-rules
title: Mask
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/91w7tz013n
case: https://sudoku-sleuth.com/cases/mask
library: https://rules.sudoku-sleuth.com/
status: read
exported: e0065cadb9d97df5f291045bb12bc180
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r3c5 white
kropki-2: kropki r4c2-r5c2 white
kropki-3: kropki r4c8-r5c8 white
kropki-4: kropki r5c3-r5c4 white
kropki-5: kropki r8c7-r9c7 white
kropki-6: kropki r6c9-r7c9 white
kropki-7: kropki r8c8-r9c8 white
kropki-8: kropki r5c1-r6c1 black
kropki-9: kropki r5c9-r6c9 black
kropki-10: kropki r6c3-r7c3 black
kropki-11: kropki r6c7-r7c7 black
kropki-12: kropki r8c5-r9c5 black
kropki-13: kropki r2c2-r3c2 black
kropki-14: kropki r4c6-r4c7 black
kropki-15: kropki r3c7-r3c8 black
kropki-16: kropki r1c5-r1c6 black
arrow-1: arrow r9c4-r8c3-r7c3 bulb ["r9c5"]
arrow-2: arrow r9c6-r8c7-r7c7 bulb ["r9c5"]
arrow-3: arrow r3c3-r3c2-r4c1-r5c1 bulb ["r3c4"]
arrow-4: arrow r2c4-r1c3 bulb ["r3c4"]
arrow-5: arrow r3c7-r3c8-r4c9-r5c9 bulb ["r3c6"]
arrow-6: arrow r2c6-r1c7 bulb ["r3c6"]
arrow-7: arrow r5c5-r4c5 bulb ["r6c5"]
```

**Standard Sudoku, Arrow, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
