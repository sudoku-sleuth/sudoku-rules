---
format: open-rules
title: Creepy Crawly
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nqjcm0tzy2
case: https://sudoku-sleuth.com/cases/creepy-crawly
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=5 r7c4=9 r8c9=7
---

```rules
sudoku 9x9
arrow-1: arrow r3c3-r2c2-r1c1 bulb ["r4c4"]
arrow-2: arrow r3c7-r2c8-r1c9 bulb ["r4c6"]
arrow-3: arrow r7c3-r8c2-r9c1 bulb ["r6c4"]
arrow-4: arrow r7c7-r8c8-r9c9 bulb ["r6c6"]
arrow-5: arrow r3c5-r2c4-r1c3 bulb ["r4c5"]
arrow-6: arrow r7c5-r8c6-r9c7 bulb ["r6c5"]
arrow-7: arrow r5c2-r5c1 bulb ["r5c3"]
arrow-8: arrow r4c2-r3c1 bulb ["r5c3"]
arrow-9: arrow r6c2-r7c1 bulb ["r5c3"]
arrow-10: arrow r4c8-r3c9 bulb ["r5c7"]
arrow-11: arrow r6c8-r7c9 bulb ["r5c7"]
```

**Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
