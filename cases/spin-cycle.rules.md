---
format: open-rules
title: Spin Cycle
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bxfwykobdz
case: https://sudoku-sleuth.com/cases/spin-cycle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 13 connected true
cage-2: cage r9c6-r9c7 total 12 connected true
cage-3: cage r3c1-r4c1 total 13 connected true
cage-4: cage r6c1-r7c1 total 7 connected true
cage-5: cage r9c3-r9c4 total 7 connected true
cage-6: cage r6c9-r7c9 total 10 connected true
cage-7: cage r3c9-r4c9 total 14 connected true
cage-8: cage r1c6-r1c7 total 6 connected true
cage-9: cage r6c6-r6c7-r7c6 total 23 connected true
cage-10: cage r1c2-r2c1-r2c2 total 11 connected true
renban-1: renban r1c2-r1c3-r1c4-r2c4-r3c4
renban-2: renban r3c6-r2c6-r1c6-r1c7-r1c8
renban-3: renban r7c4-r8c4-r9c4-r9c3-r9c2
renban-4: renban r7c6-r8c6-r9c6-r9c7-r9c8
renban-5: renban r4c3-r4c2-r4c1-r3c1-r2c1
renban-6: renban r6c3-r6c2-r6c1-r7c1-r8c1
renban-7: renban r4c7-r4c8-r4c9-r3c9-r2c9
renban-8: renban r6c7-r6c8-r6c9-r7c9-r8c9
```

**Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
