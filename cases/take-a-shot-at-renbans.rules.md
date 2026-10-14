---
format: open-rules
title: Take a Shot at Renbans
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/id3ihkauav
case: https://sudoku-sleuth.com/cases/take-a-shot-at-renbans
library: https://rules.sudoku-sleuth.com/
status: read
exported: ecf0c0bdc8a6b5a6409c700d6758c85c
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r9c8-r9c7-r9c6 bulb ["r9c9"]
arrow-3: arrow r2c7-r2c6-r2c5 bulb ["r2c8"]
arrow-4: arrow r8c3-r8c4-r8c5 bulb ["r8c2"]
arrow-5: arrow r3c2-r4c2-r5c2 bulb ["r2c2"]
arrow-6: arrow r6c8-r7c8 bulb ["r5c8"]
arrow-7: arrow r5c1-r4c1-r3c1 bulb ["r6c1"]
arrow-8: arrow r5c6-r6c6 bulb ["r4c6"]
arrow-9: arrow r6c4-r5c4 bulb ["r7c4"]
arrow-10: arrow r6c9-r5c9 bulb ["r7c9"]
renban-1: renban r9c9-r9c8-r9c7-r9c6-r9c5-r9c4
renban-2: renban r1c6-r1c5-r1c4-r1c3-r1c2-r1c1
renban-3: renban r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
renban-4: renban r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7
renban-5: renban r3c3-r3c4-r3c5-r3c6-r3c7
renban-6: renban r5c3-r5c4-r5c5-r5c6-r5c7
renban-7: renban r4c4-r4c5-r4c6
renban-8: renban r6c4-r6c5-r6c6
renban-9: renban r3c1-r4c1-r5c1
renban-10: renban r3c9-r4c9-r5c9
```

**Sudoku, Arrows, Renban Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
