---
format: open-rules
title: Happy Birthday, JP!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k1ov2v7zwv
case: https://sudoku-sleuth.com/cases/happy-birthday-jp
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=8 r2c2=2 r6c9=4 r7c9=3
---

```rules
sudoku 9x9
cage-1: cage r4c6-r4c7-r4c8-r5c6-r5c8-r6c6-r6c7-r6c8 total 43 connected true
cage-2: cage r7c6-r8c6 total 10 connected true
cage-3: cage r4c3-r5c1-r5c2-r5c3-r6c2 total 30 connected true
cage-4: cage r2c3-r3c3 total 10 connected true
cage-5: cage r8c7-r8c8-r8c9-r9c8 total 30 connected true
cage-6: cage r7c2-r7c3-r7c4-r8c2-r8c4-r9c2-r9c3-r9c4 total 43 connected true
cage-7: cage r4c5-r5c5-r6c5 total 19 connected true
cage-8: cage r5c9-r6c9-r7c8-r7c9 total 10 connected true
cage-9: cage r1c6-r1c7-r1c8 total 10 connected true
cage-10: cage r6c1-r7c1-r8c1 total 19 connected true
cage-11: cage r2c4-r2c5-r2c6-r2c7-r3c5 total 30 connected true
renban-1: renban r5c1-r6c2-r5c3-r4c3-r3c3-r2c3
renban-2: renban r8c6-r7c6-r6c6-r5c6-r4c6-r4c7-r5c8-r6c7
renban-3: renban r1c8-r1c9-r2c9
renban-4: renban r8c1-r9c1-r9c2
```

**Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
