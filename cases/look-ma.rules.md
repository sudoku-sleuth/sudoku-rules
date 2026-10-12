---
format: open-rules
title: Look, Ma!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/px7ko8ynz3
case: https://sudoku-sleuth.com/cases/look-ma
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=5 r3c5=8 r5c8=3 r6c4=6 r7c7=2 r8c9=4 r9c1=8
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r3c1-r4c1 bulb ["r2c1"]
arrow-3: arrow r3c2-r4c2 bulb ["r2c2"]
arrow-4: arrow r3c3-r4c3 bulb ["r2c3"]
arrow-5: arrow r3c8-r3c7-r3c6 bulb ["r3c9"]
arrow-6: arrow r5c4-r6c4 bulb ["r4c4"]
arrow-7: arrow r5c5-r6c5 bulb ["r4c5"]
arrow-8: arrow r5c7-r5c8-r5c9 bulb ["r5c6"]
arrow-9: arrow r7c3-r7c4-r7c5 bulb ["r7c2"]
arrow-10: arrow r8c3-r8c4-r8c5 bulb ["r8c2"]
arrow-11: arrow r7c7-r6c7 bulb ["r8c7"]
arrow-12: arrow r2c6-r2c7-r2c8 bulb ["r2c5"]
```

**Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
