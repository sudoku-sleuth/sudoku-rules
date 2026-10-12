---
format: open-rules
title: Slightly Off Balance
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/sx33sk0m17
case: https://sudoku-sleuth.com/cases/slightly-off-balance
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c1=3
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r6c3 colour "white"
kropki-2: kropki r4c3-r5c3 colour "black"
kropki-3: kropki r6c3-r7c3 colour "black"
arrow-1: arrow r2c3-r3c4-r4c3-r5c2 bulb ["r1c2"]
arrow-2: arrow r2c7-r3c6-r4c7-r5c8 bulb ["r1c8"]
arrow-3: arrow r6c7-r7c7-r8c8 bulb ["r5c6"]
arrow-4: arrow r6c3-r7c3-r8c2 bulb ["r5c4"]
arrow-5: arrow r8c4-r7c4 bulb ["r9c3"]
arrow-6: arrow r8c6-r7c6 bulb ["r9c7"]
arrow-7: arrow r7c9-r8c9-r9c9 bulb ["r6c9"]
```

**Sudoku, Arrow, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Kropki pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. 


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
