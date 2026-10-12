---
format: open-rules
title: Counterclockwise
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8r97sithd7
case: https://sudoku-sleuth.com/cases/counterclockwise
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=3 r2c5=7 r3c1=1 r5c2=9 r5c8=6 r7c9=2 r8c5=5 r9c3=4
---

```rules
sudoku 9x9
arrow-1: arrow r3c3-r4c3-r5c3 bulb ["r3c4"]
arrow-2: arrow r7c3-r7c4-r7c5 bulb ["r6c3"]
arrow-3: arrow r7c7-r6c7-r5c7 bulb ["r7c6"]
arrow-4: arrow r3c7-r3c6-r3c5 bulb ["r4c7"]
arrow-5: arrow r8c3-r9c4 bulb ["r7c2"]
arrow-6: arrow r2c7-r1c6 bulb ["r3c8"]
arrow-7: arrow r3c2-r4c1 bulb ["r2c3"]
arrow-8: arrow r7c8-r6c9 bulb ["r8c7"]
arrow-9: arrow r6c5-r6c6 bulb ["r5c4"]
arrow-10: arrow r4c5-r5c6 bulb ["r4c4"]
```

**Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
