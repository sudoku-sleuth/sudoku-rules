---
format: open-rules
title: Nine Grain Bread
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4mpo53h5b1
case: https://sudoku-sleuth.com/cases/nine-grain-bread
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=3 r2c8=7 r3c6=4 r5c2=6 r6c4=2 r6c7=3 r8c7=8
---

```rules
sudoku 9x9
sandwich-1: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 9
sandwich-2: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 9
sandwich-3: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 9
sandwich-4: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 9
sandwich-5: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 9
sandwich-6: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 9
sandwich-7: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 9
index r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r1c9-r2c9-r3c9-r8c9-r9c9-r4c9-r5c9-r6c9-r7c9 axis "column"
```

**Sudoku, Sandwiches, 159 Indexing**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sandwich sum: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.
- 159 Indexing: Digits in red-shaded cells in column 1 indicate the position of 1 in the corresponding row. The same is true in columns 5 and 9 for 5's and 9's respectively.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
