---
format: open-rules
title: Clusters
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/30gyygqxbj
case: https://sudoku-sleuth.com/cases/clusters
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c9=3
---

```rules
sudoku 9x9
arrow-1: arrow r4c2 bulb ["r3c1"]
arrow-2: arrow r2c4 bulb ["r1c3"]
arrow-3: arrow r3c3-r4c4 bulb ["r2c2"]
arrow-4: arrow r2c6 bulb ["r1c7"]
arrow-5: arrow r3c7-r4c6 bulb ["r2c8"]
arrow-6: arrow r4c8 bulb ["r3c9"]
arrow-7: arrow r7c3-r6c4 bulb ["r8c2"]
arrow-8: arrow r6c2 bulb ["r7c1"]
arrow-9: arrow r8c4 bulb ["r9c3"]
arrow-10: arrow r8c6 bulb ["r9c7"]
arrow-11: arrow r7c7-r6c6 bulb ["r8c8"]
arrow-12: arrow r6c8 bulb ["r7c9"]
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 8
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 9
little-killer-3: little-killer r7c1-r8c2-r9c3 sum 11
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 17
little-killer-5: little-killer r9c8-r8c9 sum 4
little-killer-6: little-killer r9c2-r8c1 sum 12
little-killer-7: little-killer r1c2-r2c1 sum 12
little-killer-8: little-killer r1c8-r2c9 sum 13
little-killer-9: little-killer r9c4-r8c3-r7c2-r6c1 sum 20
```

**Sudoku, Arrow, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
