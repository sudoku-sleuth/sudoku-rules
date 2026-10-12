---
format: open-rules
title: Target Practice
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uye8aay3pj
case: https://sudoku-sleuth.com/cases/target-practice
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=3 r2c2=6 r4c4=3 r5c9=1 r8c1=5
---

```rules
sudoku 9x9
arrow-1: arrow r2c3-r2c4-r2c5 bulb ["r2c2"]
arrow-2: arrow r3c2-r4c2-r5c2 bulb ["r2c2"]
arrow-3: arrow r3c3-r4c4 bulb ["r2c2"]
arrow-4: arrow r8c7-r8c6-r8c5 bulb ["r8c8"]
arrow-5: arrow r7c8-r6c8-r5c8 bulb ["r8c8"]
arrow-6: arrow r7c7-r6c6 bulb ["r8c8"]
arrow-7: arrow r2c7-r2c6 bulb ["r2c8"]
arrow-8: arrow r3c8-r4c8 bulb ["r2c8"]
arrow-9: arrow r3c7-r4c6 bulb ["r2c8"]
arrow-10: arrow r7c2-r6c2 bulb ["r8c2"]
arrow-11: arrow r8c3-r8c4 bulb ["r8c2"]
arrow-12: arrow r7c3-r6c4 bulb ["r8c2"]
```

**Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
