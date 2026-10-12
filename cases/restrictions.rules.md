---
format: open-rules
title: Restrictions
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kn8ltdupld
case: https://sudoku-sleuth.com/cases/restrictions
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 6 connected true
cage-2: cage r1c7-r1c8 total 5 connected true
cage-3: cage r9c2-r9c3 total 12 connected true
cage-4: cage r9c7-r9c8 total 11 connected true
cage-5: cage r5c1-r5c2 total 8 connected true
cage-6: cage r5c8-r5c9 total 10 connected true
cage-7: cage r6c8-r7c8-r7c9 total 15 connected true
cage-8: cage r3c1-r3c2-r4c2 total 16 connected true
cage-9: cage r4c5-r5c5-r6c5 total 14 connected true
renban-1: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-2: renban r1c7-r1c8-r1c9-r2c9-r3c9
renban-3: renban r7c1-r8c1-r9c1-r9c2-r9c3
renban-4: renban r9c7-r9c8-r9c9-r8c9-r7c9
renban-5: renban r9c4-r8c4-r7c4
renban-6: renban r5c4-r5c5-r5c6
renban-7: renban r6c8-r5c8-r4c8
renban-8: renban r6c2-r5c2-r4c2
renban-9: renban r1c6-r2c6-r3c6
```

**Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
