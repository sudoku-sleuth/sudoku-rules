---
format: open-rules
title: Burning Ring of Five
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ixsahrr2li
case: https://sudoku-sleuth.com/cases/burning-ring-of-five
library: https://rules.sudoku-sleuth.com/
status: read
exported: 047f62cacf93c8aac90dd7d59a282d0e
---

```rules
sudoku 9x9
cage-1: cage r6c2-r6c3 total 13 connected true
cage-2: cage r4c7-r4c8 total 9 connected true
cage-3: cage r8c6-r9c6 total 9 connected true
cage-4: cage r2c4-r3c4 total 9 connected true
cage-5: cage r4c1-r4c2 total 9 connected true
cage-6: cage r5c2-r5c3 total 9 connected true
cage-7: cage r5c7-r5c8 total 9 connected true
cage-8: cage r2c5-r3c5 total 9 connected true
cage-9: cage r7c5-r8c5 total 9 connected true
cage-10: cage r1c7-r1c8 total 9 connected true
cage-11: cage r2c1-r3c1 total 8 connected true
cage-12: cage r9c7-r9c8 total 9 connected true
cage-13: cage r6c8-r6c9 total 10 connected true
renban-1: renban r1c4-r2c4-r3c4-r4c3-r4c2-r4c1
renban-2: renban r1c7-r2c7-r3c7-r3c8-r3c9
renban-3: renban r6c9-r6c8-r6c7-r7c6-r8c6-r9c6
renban-4: renban r7c1-r7c2-r7c3-r8c3-r9c3
renban-5: renban r1c3-r2c3-r3c3-r3c2-r3c1
renban-6: renban r7c9-r7c8-r7c7-r8c7-r9c7
renban-7: renban r4c8-r4c7-r4c6-r5c6-r6c6
renban-8: renban r6c2-r6c3-r6c4-r5c4-r4c4
renban-9: renban r3c5-r4c5-r5c5-r6c5-r7c5
```

**Standard Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
