---
format: open-rules
title: Top Heavy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uzjglxvlrf
case: https://sudoku-sleuth.com/cases/top-heavy
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c7=1 r4c7=6 r5c3=9 r7c8=4
exported: 4dedfd5883fcd77dbe85f0ea30a7a708
---

```rules
sudoku 9x9
x-sum-1: x-sum r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 9
x-sum-2: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 10
x-sum-3: x-sum r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 11
x-sum-4: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 12
x-sum-5: x-sum r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 10
x-sum-6: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 30
x-sum-7: x-sum r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 24
x-sum-8: x-sum r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 35
x-sum-9: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 25
x-sum-10: x-sum r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 36
x-sum-11: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 10
```

**Sudoku, X-sums**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- X-Sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing.html
