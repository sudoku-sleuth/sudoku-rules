---
format: open-rules
title: Borderline
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gyjhcdo746
case: https://sudoku-sleuth.com/cases/borderline
library: https://rules.sudoku-sleuth.com/
status: read
exported: 88cdd7a276d370089f752abcb708af7c
---

```rules
sudoku 9x9
kropki-1: kropki r1c7-r1c8 white
kropki-2: kropki r9c2-r9c3 white
kropki-3: kropki r7c9-r8c9 white
kropki-4: kropki r2c1-r3c1 white
kropki-5: kropki r1c7-r2c7 white
kropki-6: kropki r2c2-r3c2 white
kropki-7: kropki r7c8-r8c8 white
kropki-8: kropki r5c1-r6c1 black
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r2c9-r3c9-r4c9 bulb ["r1c9"]
arrow-3: arrow r9c8-r9c7-r9c6 bulb ["r9c9"]
arrow-4: arrow r8c1-r7c1-r6c1 bulb ["r9c1"]
arrow-5: arrow r1c6-r1c7 bulb ["r1c5"]
arrow-6: arrow r9c4-r9c3 bulb ["r9c5"]
arrow-7: arrow r6c9-r7c9 bulb ["r5c9"]
arrow-8: arrow r4c1-r3c1 bulb ["r5c1"]
arrow-9: arrow r2c3-r2c4-r2c5 bulb ["r2c2"]
arrow-10: arrow r3c8-r4c8-r5c8 bulb ["r2c8"]
arrow-11: arrow r8c7-r8c6-r8c5 bulb ["r8c8"]
arrow-12: arrow r7c2-r6c2-r5c2 bulb ["r8c2"]
arrow-13: arrow r5c6-r4c6 bulb ["r6c6"]
arrow-14: arrow r5c4-r6c4 bulb ["r4c4"]
```

**Sudoku, Arrows, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
