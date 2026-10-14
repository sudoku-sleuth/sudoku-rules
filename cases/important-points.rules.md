---
format: open-rules
title: Important Points
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/531y3806su
case: https://sudoku-sleuth.com/cases/important-points
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7d90054b7119d0a494518d5aeab2f67f
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r2c9 white
kropki-2: kropki r3c1-r4c1 white
kropki-3: kropki r9c3-r9c4 white
kropki-4: kropki r4c2-r5c2 white
kropki-5: kropki r6c3-r6c4 black
kropki-6: kropki r2c4-r3c4 black
kropki-7: kropki r8c1-r9c1 black
kropki-8: kropki r7c2-r8c2 black
kropki-9: kropki r4c7-r5c7 black
kropki-10: kropki r9c8-r9c9 black
kropki-11: kropki r1c8-r2c8 black
kropki-12: kropki r2c2-r3c2 black
arrow-1: arrow r3c6-r2c6-r1c6 bulb ["r4c6"]
arrow-2: arrow r3c7-r2c8-r1c9 bulb ["r4c6"]
arrow-3: arrow r4c7-r4c8-r4c9 bulb ["r4c6"]
arrow-4: arrow r6c3-r6c2-r6c1 bulb ["r6c4"]
arrow-5: arrow r7c3-r8c2-r9c1 bulb ["r6c4"]
arrow-6: arrow r7c4-r8c4-r9c4 bulb ["r6c4"]
arrow-7: arrow r7c7-r8c8-r9c9 bulb ["r6c6"]
arrow-8: arrow r3c3-r2c2-r1c1 bulb ["r4c4"]
arrow-9: arrow r3c4-r2c4 bulb ["r4c4"]
```

**Standard Sudoku, Arrow, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, visit https://missingdeck.net
