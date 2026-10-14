---
format: open-rules
title: Explosion
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6gcdy996j6
case: https://sudoku-sleuth.com/cases/explosion
library: https://rules.sudoku-sleuth.com/
status: read
exported: 44e0bcb61dc3426a24f40e8af4ac7355
---

```rules
sudoku 9x9
cage-1: cage r5c3-r6c3 total 15 connected true
cage-2: cage r4c7-r5c7 total 7 connected true
cage-3: cage r8c7-r8c8 total 14 connected true
cage-4: cage r3c1-r3c2 total 16 connected true
cage-5: cage r3c8-r3c9 total 14 connected true
cage-6: cage r3c4-r3c5 total 9 connected true
cage-7: cage r7c5-r7c6 total 13 connected true
renban-1: renban r2c1-r3c2-r4c3
renban-2: renban r1c1-r2c2-r3c3
renban-3: renban r1c2-r2c3-r3c4
renban-4: renban r3c1-r4c2-r5c3
renban-5: renban r1c3-r2c4-r3c5
renban-6: renban r9c9-r8c8-r7c7
renban-7: renban r9c8-r8c7-r7c6
renban-8: renban r8c9-r7c8-r6c7
renban-9: renban r7c9-r6c8-r5c7
renban-10: renban r9c7-r8c6-r7c5
renban-11: renban r4c6-r3c7-r2c8-r1c9
renban-12: renban r3c6-r2c7-r1c8
renban-13: renban r4c7-r3c8-r2c9
renban-14: renban r6c4-r7c3-r8c2-r9c1
renban-15: renban r9c2-r8c3-r7c4
renban-16: renban r8c1-r7c2-r6c3
```

**Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
