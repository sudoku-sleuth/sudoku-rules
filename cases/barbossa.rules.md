---
format: open-rules
title: Barbossa
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8304qpoqys
case: https://sudoku-sleuth.com/cases/barbossa
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=8 r4c6=4 r8c1=8 r9c5=1
---

```rules
sudoku 9x9
arrow-1: arrow r2c7-r3c7-r4c8-r5c8 bulb ["r1c7"]
arrow-2: arrow r6c9-r5c9-r4c9 bulb ["r7c9"]
arrow-3: arrow r8c3-r7c3-r6c2-r5c2 bulb ["r9c3"]
arrow-4: arrow r4c1-r5c1-r6c1 bulb ["r3c1"]
arrow-5: arrow r2c5-r2c6 bulb ["r2c4"]
arrow-6: arrow r8c5-r8c4 bulb ["r8c6"]
arrow-7: arrow r4c3-r3c4 bulb ["r5c3"]
arrow-8: arrow r6c7-r7c6 bulb ["r5c7"]
arrow-9: arrow r3c2-r2c2 bulb ["r4c2"]
arrow-10: arrow r7c8-r8c8 bulb ["r6c8"]
arrow-11: arrow r2c3-r3c3 bulb ["r1c4"]
arrow-12: arrow r8c7-r7c7 bulb ["r9c6"]
```

**Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
