---
format: open-rules
title: Round Them Up
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d73jhz41tv
case: https://sudoku-sleuth.com/cases/round-them-up
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r2c5 total 6 connected true
cage-2: cage r3c8-r4c8-r5c8 total 6 connected true
cage-3: cage r8c5-r8c6-r8c7 total 6 connected true
cage-4: cage r5c2-r6c2-r7c2 total 6 connected true
cage-5: cage r3c2-r3c3-r3c4 total 24 connected true
cage-6: cage r7c6-r7c7-r7c8 total 24 connected true
cage-7: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 25 connected true
cage-8: cage r6c3-r7c3-r8c3 total 23 connected true
cage-9: cage r2c7-r3c7-r4c7 total 23 connected true
cage-10: cage r8c1-r9c1-r9c2 total 12 connected true
cage-11: cage r1c8-r1c9-r2c9 total 13 connected true
cage-12: cage r8c9-r9c8-r9c9 total 16 connected true
cage-13: cage r1c1-r1c2-r2c1 total 17 connected true
cage-14: cage r9c3-r9c4 total 14 connected true
cage-15: cage r6c9-r7c9 total 11 connected true
cage-16: cage r1c6-r1c7 total 9 connected true
cage-17: cage r3c1-r4c1 total 11 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
