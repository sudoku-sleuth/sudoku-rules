---
format: open-rules
title: Leftovers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hpbo9xy4gv
case: https://sudoku-sleuth.com/cases/leftovers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=3 r7c1=7
exported: 6befb994406a5cf0f6e4b8ddfad89ff5
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 9 connected true
cage-2: cage r2c2-r3c1-r3c2 total 12 connected true
cage-3: cage r7c1-r7c2-r8c1 total 20 connected true
cage-4: cage r8c2-r9c1-r9c2 total 19 connected true
cage-5: cage r4c2-r4c3 total 12 connected true
cage-6: cage r5c2-r5c3 total 12 connected true
cage-7: cage r6c2-r6c3 total 9 connected true
cage-8: cage r8c7-r9c7-r9c8 total 20 connected true
cage-9: cage r8c8-r8c9-r9c9 total 18 connected true
cage-10: cage r7c4-r8c4 total 15 connected true
cage-11: cage r7c6-r8c6 total 15 connected true
cage-12: cage r9c4-r9c5-r9c6 total 9 connected true
cage-13: cage r4c7-r4c8 total 17 connected true
cage-14: cage r5c7-r5c8 total 13 connected true
cage-15: cage r6c7-r6c8 total 7 connected true
cage-16: cage r1c8-r1c9-r2c9 total 23 connected true
cage-17: cage r2c8-r3c8-r3c9 total 16 connected true
cage-18: cage r3c4-r3c5-r3c6 total 20 connected true
cage-19: cage r1c4-r1c5 total 6 connected true
cage-20: cage r5c4-r6c4 total 9 connected true
cage-21: cage r5c6-r6c6 total 9 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: A complete set of the digits 1 through 9 appears in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
