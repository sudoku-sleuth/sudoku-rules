---
format: open-rules
title: Penrose Wickets
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/penrose-wickets
case: https://sudoku-sleuth.com/cases/penrose-wickets
library: https://rules.sudoku-sleuth.com/
status: read
exported: bc23c8d388e1754b6c1a7acb73f130c5
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3-r3c4-r4c3 total 16 connected true
cage-2: cage r6c7-r7c6-r7c7-r7c8-r8c7 total 28 connected true
cage-3: cage r2c7-r3c6-r3c7-r3c8-r4c7 total 28 connected true
cage-4: cage r6c3-r7c2-r7c3-r7c4-r8c3 total 35 connected true
cage-5: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 17 connected true
cage-6: cage r5c1-r5c2 total 12 connected true
cage-7: cage r8c5-r9c5 total 7 connected true
cage-8: cage r1c5-r2c5 total 15 connected true
entropic-1: entropic r9c8-r8c9-r7c8-r8c7-r9c6-r8c5-r7c4-r6c5-r5c6-r4c7-r3c6-r4c5-r5c4-r6c3-r5c2-r4c1-r3c2-r2c3-r1c2-r2c1
entropic-2: entropic r4c3-r3c4-r2c5-r1c6-r2c7-r3c8-r4c9-r5c8-r6c7-r7c6
entropic-3: entropic r6c2-r7c1-r8c2-r9c3-r8c4
```

**Sudoku, Entropic Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
