---
format: open-rules
title: First One Out the Door
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/first-one-out-the-door
case: https://sudoku-sleuth.com/cases/first-one-out-the-door
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c6=6 r8c3=9
---

```rules
sudoku 9x9
x-sum-1: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 3
x-sum-2: x-sum r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 18
x-sum-3: x-sum r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 6
x-sum-4: x-sum r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 14
x-sum-5: x-sum r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 10
x-sum-6: x-sum r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 3
x-sum-7: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 10
x-sum-8: x-sum r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 41
x-sum-9: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 5
x-sum-10: x-sum r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 36
x-sum-11: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 12
x-sum-12: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 12
```

**Sudoku, X-Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box without repetition.
- X-sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
