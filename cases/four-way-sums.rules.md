---
format: open-rules
title: Four Way Sums
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dbu8ox0jhe
case: https://sudoku-sleuth.com/cases/four-way-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c4-r7c4 total 10 connected true
cage-2: cage r6c3-r7c3 total 10 connected true
cage-3: cage r3c6-r4c6 total 10 connected true
cage-4: cage r3c7-r4c7 total 10 connected true
cage-5: cage r7c6-r7c7 total 12 connected true
cage-6: cage r3c3-r3c4 total 9 connected true
cage-7: cage r4c2-r5c2 total 11 connected true
cage-8: cage r5c8-r6c8 total 11 connected true
cage-9: cage r2c3-r2c4 total 8 connected true
cage-10: cage r8c6-r8c7 total 7 connected true
cage-11: cage r3c1-r4c1 total 10 connected true
cage-12: cage r9c3-r9c4 total 14 connected true
cage-13: cage r6c1-r7c1 total 8 connected true
cage-14: cage r3c9-r4c9 total 14 connected true
cage-15: cage r6c9-r7c9 total 8 connected true
renban-1: renban r2c5-r3c6-r4c7-r5c8-r6c9
renban-2: renban r5c2-r6c3-r7c4-r8c5-r9c6
renban-3: renban r7c1-r7c2-r7c3-r8c3-r9c3
renban-4: renban r1c7-r2c7-r3c7-r3c8-r3c9
renban-5: renban r7c9-r7c8-r7c7-r8c7-r9c7
renban-6: renban r1c3-r2c3-r3c3-r3c2-r3c1
renban-7: renban r4c2-r4c3-r4c4-r3c4-r2c4
renban-8: renban r8c6-r7c6-r6c6-r6c7-r6c8
renban-9: renban r6c4-r6c5-r5c5-r4c5-r4c6
```

**Sudoku, Cages, Renban Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
