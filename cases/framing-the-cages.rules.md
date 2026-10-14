---
format: open-rules
title: Framing the Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/spjpd3v0v2
case: https://sudoku-sleuth.com/cases/framing-the-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4bc28d0695c6bfa6070e93e479bc0d52
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1-r3c1 total 15 connected true
cage-2: cage r1c7-r1c8-r1c9-r2c9-r3c9 total 35 connected true
cage-3: cage r7c9-r8c9-r9c7-r9c8-r9c9 total 18 connected true
cage-4: cage r7c1-r8c1-r9c1-r9c2-r9c3 total 31 connected true
cage-5: cage r1c4-r1c5-r1c6 total 14 connected true
cage-6: cage r9c4-r9c5-r9c6 total 16 connected true
cage-7: cage r4c3-r5c3-r6c3 total 12 connected true
cage-8: cage r4c7-r5c7-r6c7 total 16 connected true
cage-9: cage r3c3-r3c4 total 8 connected true
cage-10: cage r3c6-r3c7 total 11 connected true
cage-11: cage r7c3-r7c4 total 11 connected true
cage-12: cage r7c6-r7c7 total 10 connected true
cage-13: cage r6c4-r6c5 total 10 connected true
cage-14: cage r4c5-r4c6 total 9 connected true
cage-15: cage r5c6-r6c6 total 13 connected true
cage-16: cage r4c4-r5c4 total 6 connected true
renban-1: renban r4c2-r3c2-r2c2-r2c3-r2c4
renban-2: renban r2c6-r2c7-r2c8-r3c8-r4c8
renban-3: renban r6c8-r7c8-r8c8-r8c7-r8c6
renban-4: renban r6c2-r7c2-r8c2-r8c3-r8c4
renban-5: renban r1c3-r1c4-r1c5-r1c6-r1c7
renban-6: renban r9c7-r9c6-r9c5-r9c4-r9c3
renban-7: renban r3c9-r4c9-r5c9-r6c9-r7c9
renban-8: renban r3c1-r4c1-r5c1-r6c1-r7c1
```

**Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
