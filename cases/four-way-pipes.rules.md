---
format: open-rules
title: Four-Way Pipes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/urxwacfey2
case: https://sudoku-sleuth.com/cases/four-way-pipes
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3 total 17 connected true
cage-2: cage r5c7-r5c8 total 13 connected true
cage-3: cage r2c5-r3c5 total 3 connected true
cage-4: cage r7c5-r8c5 total 7 connected true
cage-5: cage r1c4-r1c5-r1c6 total 21 connected true
cage-6: cage r2c3-r3c2-r3c3 total 9 connected true
cage-7: cage r2c7-r3c7-r3c8 total 21 connected true
cage-8: cage r7c7-r7c8-r8c7 total 9 connected true
cage-9: cage r7c2-r7c3-r8c3 total 21 connected true
cage-10: cage r8c1-r8c2-r9c1-r9c2 total 18 connected true
cage-11: cage r1c8-r1c9-r2c8-r2c9 total 12 connected true
cage-12: cage r1c1-r1c2-r2c1-r2c2 total 28 connected true
cage-13: cage r8c8-r8c9-r9c8-r9c9 total 25 connected true
cage-14: cage r8c4-r9c4 total 8 connected true
renban-1: renban r4c2-r4c3-r4c4-r3c4-r2c4
renban-2: renban r2c6-r3c6-r4c6-r4c7-r4c8
renban-3: renban r6c8-r6c7-r6c6-r7c6-r8c6
renban-4: renban r8c4-r7c4-r6c4-r6c3-r6c2
renban-5: renban r4c1-r5c1-r6c1
renban-6: renban r9c4-r9c5-r9c6
renban-7: renban r4c9-r5c9-r6c9
renban-8: renban r1c6-r1c5-r1c4
```

**Standard Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
