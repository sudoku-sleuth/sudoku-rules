---
format: open-rules
title: Progressive Flow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ztrb4zsbaz
case: https://sudoku-sleuth.com/cases/progressive-flow
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7b539c00ee138e674af8f346f1fe2ba6
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 3 connected true
cage-2: cage r2c1-r2c2 total 7 connected true
cage-3: cage r9c8-r9c9 total 17 connected true
cage-4: cage r8c8-r8c9 total 13 connected true
cage-5: cage r3c3-r3c4 total 7 connected true
cage-6: cage r7c6-r7c7 total 13 connected true
cage-7: cage r3c1-r4c1 total 7 connected true
cage-8: cage r3c2-r4c2 total 8 connected true
cage-9: cage r6c9-r7c9 total 13 connected true
cage-10: cage r6c8-r7c8 total 12 connected true
cage-11: cage r4c3-r4c4 total 8 connected true
cage-12: cage r6c6-r6c7 total 12 connected true
cage-13: cage r8c1-r9c1 total 16 connected true
cage-14: cage r1c9-r2c9 total 4 connected true
cage-15: cage r8c2-r9c2 total 9 connected true
cage-16: cage r1c8-r2c8 total 11 connected true
cage-17: cage r9c3-r9c4 total 9 connected true
cage-18: cage r1c6-r1c7 total 11 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
