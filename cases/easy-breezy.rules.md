---
format: open-rules
title: Easy-Breezy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4908gmmy6a
case: https://sudoku-sleuth.com/cases/easy-breezy
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6ede3afcf0a5c8e2f2c7ad1bb5b05b65
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 4 connected true
cage-2: cage r1c3-r2c3 total 6 connected true
cage-3: cage r2c1-r2c2 total 11 connected true
cage-4: cage r2c4-r2c5 total 3 connected true
cage-5: cage r1c6-r2c6 total 11 connected true
cage-6: cage r1c4-r1c5 total 16 connected true
cage-7: cage r2c7-r2c8 total 17 connected true
cage-8: cage r1c9-r2c9 total 13 connected true
cage-9: cage r1c7-r1c8 total 9 connected true
cage-10: cage r3c1-r4c1 total 15 connected true
cage-11: cage r3c2-r4c2 total 11 connected true
cage-12: cage r3c7-r4c7 total 12 connected true
cage-13: cage r3c8-r4c8 total 5 connected true
cage-14: cage r3c4-r4c4 total 5 connected true
cage-15: cage r3c5-r4c5 total 13 connected true
cage-16: cage r9c2-r9c3 total 3 connected true
cage-17: cage r8c1-r9c1 total 7 connected true
cage-18: cage r8c2-r8c3 total 11 connected true
cage-19: cage r8c4-r8c5 total 5 connected true
cage-20: cage r8c6-r9c6 total 8 connected true
cage-21: cage r9c8-r9c9 total 11 connected true
cage-22: cage r8c7-r9c7 total 11 connected true
cage-23: cage r6c1-r7c1 total 15 connected true
cage-24: cage r6c2-r7c2 total 17 connected true
cage-25: cage r6c3-r7c3 total 12 connected true
cage-26: cage r6c9-r7c9 total 5 connected true
cage-27: cage r5c5-r6c5 total 7 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
