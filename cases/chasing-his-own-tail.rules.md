---
format: open-rules
title: Chasing His Own Tail
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/79qeosonv7
case: https://sudoku-sleuth.com/cases/chasing-his-own-tail
library: https://rules.sudoku-sleuth.com/
status: read
exported: 213173c2e670963d78675a80f43876e2
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4 total 3 connected true
cage-2: cage r3c7-r4c7 total 4 connected true
cage-3: cage r7c6-r7c7 total 3 connected true
cage-4: cage r6c3-r7c3 total 4 connected true
cage-5: cage r2c2-r2c3 total 6 connected true
cage-6: cage r2c8-r3c8 total 6 connected true
cage-7: cage r8c7-r8c8 total 6 connected true
cage-8: cage r7c2-r8c2 total 6 connected true
cage-9: cage r1c1-r1c2 total 7 connected true
cage-10: cage r9c8-r9c9 total 7 connected true
cage-11: cage r8c1-r9c1 total 7 connected true
cage-12: cage r1c9-r2c9 total 7 connected true
cage-13: cage r2c6-r2c7 total 10 connected true
cage-14: cage r8c3-r8c4 total 13 connected true
cage-15: cage r4c4-r5c4 total 11 connected true
cage-16: cage r6c4-r6c5 total 11 connected true
cage-17: cage r4c5-r4c6 total 11 connected true
cage-18: cage r5c6-r6c6 total 11 connected true
cage-19: cage r6c1-r7c1 total 7 connected true
cage-20: cage r3c9-r4c9 total 7 connected true
cage-21: cage r9c6-r9c7 total 11 connected true
cage-22: cage r1c3-r1c4 total 11 connected true
cage-23: cage r3c2-r4c2 total 13 connected true
cage-24: cage r6c8-r7c8 total 13 connected true
cage-25: cage r4c8-r5c8 total 13 connected true
cage-26: cage r5c2-r6c2 total 14 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.

For more of our puzzles, visit https://missingdeck.net
