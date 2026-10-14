---
format: open-rules
title: Torquage
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r7dpn0esqs
case: https://sudoku-sleuth.com/cases/torquage
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4cc5a31b931c4f42b5c0a467f0884563
---

```rules
sudoku 9x9
arrow-1: arrow r3c1-r2c2-r1c3-r1c4 bulb ["r4c1"]
arrow-2: arrow r7c9-r8c8-r9c7-r9c6 bulb ["r6c9"]
arrow-3: arrow r9c3-r8c2-r7c1-r6c1 bulb ["r9c4"]
arrow-4: arrow r1c7-r2c8-r3c9-r4c9 bulb ["r1c6"]
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 6
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 6
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 6
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 6
little-killer-5: little-killer r1c8-r2c9 sum 9
little-killer-6: little-killer r9c2-r8c1 sum 9
little-killer-7: little-killer r9c4-r8c3-r7c2-r6c1 sum 22
little-killer-8: little-killer r1c6-r2c7-r3c8-r4c9 sum 24
little-killer-9: little-killer r4c1-r3c2-r2c3-r1c4 sum 24
little-killer-10: little-killer r2c1-r1c2 sum 9
little-killer-11: little-killer r8c9-r9c8 sum 12
little-killer-12: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 33
little-killer-13: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 52
little-killer-14: little-killer r6c9-r7c8-r8c7-r9c6 sum 28
```

**Sudoku, Arrow, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
