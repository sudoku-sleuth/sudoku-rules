---
format: open-rules
title: Happy 65th, MaFC!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wb018nf010
case: https://sudoku-sleuth.com/cases/happy-65th-mafc
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=3 r6c6=9
---

```rules
sudoku 9x9
renban-1: renban r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
renban-2: renban r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
renban-3: renban r4c2-r3c2-r2c3-r2c4
renban-4: renban r9c1-r8c2-r7c3
renban-5: renban r3c7-r2c8-r1c9
renban-6: renban r6c4-r6c5-r5c6-r4c6
renban-7: renban r8c9-r7c9-r6c9-r5c8-r4c8
renban-8: renban r9c8-r9c7-r9c6-r8c5-r8c4
renban-9: renban r4c3-r3c4
little-killer-1: little-killer r2c1-r1c2 sum 3
little-killer-2: little-killer r4c1-r3c2-r2c3-r1c4 sum 29
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 19
little-killer-4: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 61
little-killer-5: little-killer r8c9-r9c8 sum 3
little-killer-6: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 29
```

**Sudoku, Renban, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.
- Diagonal Sums: Clues outside the grid give the sum of the digits along the indicated diagonal.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
