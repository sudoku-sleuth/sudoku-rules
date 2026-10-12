---
format: open-rules
title: Look Both Ways
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/msikbo6ibc
case: https://sudoku-sleuth.com/cases/look-both-ways
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2 total 16 connected true
cage-2: cage r3c7-r4c7 total 17 connected true
cage-3: cage r7c7-r7c8 total 9 connected true
cage-4: cage r7c2-r7c3 total 7 connected true
cage-5: cage r2c4-r3c4 total 12 connected true
x-sum-1: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 10
x-sum-2: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 15
x-sum-3: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 20
x-sum-4: x-sum r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 30
x-sum-5: x-sum r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 15
x-sum-6: x-sum r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 27
x-sum-7: x-sum r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 sum 5
x-sum-8: x-sum r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 30
x-sum-9: x-sum r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 25
x-sum-10: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 21
x-sum-11: x-sum r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 10
x-sum-12: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 36
x-sum-13: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 18
x-sum-14: x-sum r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 40
```

**Sudoku, X-sums, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
