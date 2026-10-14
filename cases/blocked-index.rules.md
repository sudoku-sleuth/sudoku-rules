---
format: open-rules
title: Blocked Index
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5y1ee5sbbd
case: https://sudoku-sleuth.com/cases/blocked-index
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=4 r6c7=7
exported: 4ee2e5c1d5cc46c25411b2af83960bd6
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5-r3c4-r3c5 total 12 connected true
cage-2: cage r4c5-r4c6-r5c5-r5c6 total 11 connected true
cage-3: cage r8c5-r8c6-r9c5-r9c6 total 28 connected true
cage-4: cage r6c4-r6c5-r7c4-r7c5 total 26 connected true
cage-5: cage r1c1-r1c2-r2c1-r2c2 total 28 connected true
cage-6: cage r6c1-r6c2-r7c1-r7c2 total 20 connected true
cage-7: cage r5c8-r5c9-r6c8-r6c9 total 17 connected true
cage-8: cage r7c8-r7c9-r8c8-r8c9 total 20 connected true
index r1c1-r1c5-r1c9-r2c1-r2c5-r2c9-r3c1-r3c5-r3c9-r4c1-r4c5-r4c9-r5c1-r5c5-r5c9-r6c1-r6c5-r6c9-r7c1-r7c5-r7c9-r8c1-r8c5-r8c9-r9c1-r9c5-r9c9 axis "column"
```

**Sudoku, 159 Indexing, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- 159 Indexing: Digits in red-shaded cells in column 1 indicate the position of 1 in the corresponding row. The same is true in columns 5 and 9 for 5's and 9's respectively.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
 
For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
