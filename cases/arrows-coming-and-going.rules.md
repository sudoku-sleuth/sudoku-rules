---
format: open-rules
title: Arrows Coming and Going
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vgbyui9ufl
case: https://sudoku-sleuth.com/cases/arrows-coming-and-going
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=5 r5c2=7
---

```rules
sudoku 9x9
arrow-1: arrow r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9 bulb ["r1c2"]
arrow-2: arrow r8c6-r7c5-r6c4-r5c3-r4c2 bulb ["r9c7"]
arrow-3: arrow r2c6-r3c7-r4c8 bulb ["r1c5"]
arrow-4: arrow r2c8-r1c7 bulb ["r3c9"]
arrow-5: arrow r8c2-r9c3 bulb ["r7c1"]
arrow-6: arrow r7c3-r6c2 bulb ["r8c4"]
arrow-7: arrow r4c6-r3c5 bulb ["r5c7"]
arrow-8: arrow r3c3-r2c2 bulb ["r4c4"]
arrow-9: arrow r2c4 bulb ["r1c3"]
arrow-10: arrow r7c6 bulb ["r6c5"]
```

**Sudoku, Arrow**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
