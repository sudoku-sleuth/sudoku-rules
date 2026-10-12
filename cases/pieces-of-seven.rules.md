---
format: open-rules
title: Pieces of Seven
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zjaodaglg8
case: https://sudoku-sleuth.com/cases/pieces-of-seven
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c8-r2c9 total 7 connected true
cage-2: cage r2c6-r3c5-r3c6 total 7 connected true
cage-3: cage r3c3-r4c2-r4c3 total 7 connected true
cage-4: cage r6c2-r7c1-r7c2 total 7 connected true
cage-5: cage r4c8-r5c7-r5c8 total 7 connected true
cage-6: cage r7c7-r8c6-r8c7 total 7 connected true
cage-7: cage r9c1-r9c2 total 6 connected true
cage-8: cage r8c5-r9c5 total 7 connected true
cage-9: cage r7c9-r8c9 total 9 connected true
cage-10: cage r7c5-r7c6 total 8 connected true
cage-11: cage r5c4-r5c5 total 6 connected true
cage-12: cage r9c3-r9c4 total 5 connected true
cage-13: cage r1c1-r2c1 total 5 connected true
cage-14: cage r6c8-r7c8 total 10 connected true
cage-15: cage r1c3-r1c4 total 7 connected true
cage-16: cage r3c4-r4c4 total 12 connected true
cage-17: cage r1c7-r1c8 total 14 connected true
cage-18: cage r3c1-r4c1-r5c1 total 18 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
