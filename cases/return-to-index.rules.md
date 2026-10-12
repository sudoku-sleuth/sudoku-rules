---
format: open-rules
title: Return to Index
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k411ul6t1b
case: https://sudoku-sleuth.com/cases/return-to-index
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c3 total 23 connected true
cage-2: cage r2c1-r3c1-r3c2 total 7 connected true
cage-3: cage r8c7-r9c7-r9c8 total 8 connected true
cage-4: cage r1c7-r1c8 total 10 connected true
cage-5: cage r2c9-r3c9 total 8 connected true
cage-6: cage r7c1-r8c1 total 11 connected true
cage-7: cage r9c2-r9c3 total 10 connected true
cage-8: cage r7c8-r7c9-r8c9 total 19 connected true
cage-9: cage r6c5-r6c6 total 13 connected true
cage-10: cage r4c4-r4c5 total 5 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
index r2c2-r1c1-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9-r6c4-r7c3-r8c2-r9c1-r4c6-r3c7-r2c8-r1c9 axis "row"
```

**Sudoku, Diagonals, Row Indexing, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonals: Digits may not repeat along either marked main diagonal.
- Row Indexing: Digits placed in green cells (all of the cells along the main diagonals) indicate the position of the corresponding row number in that column.
- Cages: Digits cannot repeat within cages and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
