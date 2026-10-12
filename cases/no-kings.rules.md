---
format: open-rules
title: No Kings
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/n8pp3ikmhq
case: https://sudoku-sleuth.com/cases/no-kings
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=7 r4c1=4 r4c6=7 r4c9=6 r5c5=1 r5c8=7
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2 total 17 connected true
cage-2: cage r3c3-r4c3 total 7 connected true
cage-3: cage r3c4-r4c4 total 6 connected true
cage-4: cage r6c5-r7c5 total 17 connected true
cage-5: cage r6c6-r7c6 total 8 connected true
cage-6: cage r6c7-r7c7 total 9 connected true
cage-7: cage r7c2-r8c2-r8c3 total 7 connected true
cage-8: cage r2c7-r2c8-r3c8 total 7 connected true
cage-9: cage r2c6-r3c6 total 4 connected true
cage-10: cage r7c4-r8c4 total 4 connected true
anti-king
```

**Sudoku, Antiking, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-king: Cells that are a chess king's move apart cannot contain the same digit.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
