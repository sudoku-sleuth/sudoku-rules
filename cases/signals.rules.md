---
format: open-rules
title: Signals
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2rk0x52x35
case: https://sudoku-sleuth.com/cases/signals
library: https://rules.sudoku-sleuth.com/
status: read
exported: f050e048667215175c9b1f9eae9db034
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r3c2-r3c3-r4c2 total 17 connected true
cage-2: cage r2c6-r2c7-r3c7-r3c8-r4c8 total 17 connected true
cage-3: cage r6c2-r7c2-r7c3-r8c3-r8c4 total 17 connected true
cage-4: cage r6c8-r7c7-r7c8-r8c6-r8c7 total 17 connected true
cage-5: cage r1c4-r1c5-r1c6 total 22 connected true
cage-6: cage r4c1-r5c1-r6c1 total 22 connected true
cage-7: cage r4c9-r5c9-r6c9 total 21 connected true
cage-8: cage r9c4-r9c5-r9c6 total 12 connected true
cage-9: cage r1c1-r2c1 total 8 connected true
cage-10: cage r9c1-r9c2 total 8 connected true
cage-11: cage r8c9-r9c9 total 5 connected true
cage-12: cage r1c8-r1c9 total 8 connected true
renban-1: renban r5c3-r6c4-r7c5-r6c6-r5c7-r4c6-r3c5-r4c4
renban-2: renban r1c4-r2c5-r1c6
renban-3: renban r9c6-r9c5-r9c4-r8c5
renban-4: renban r7c9-r6c9
renban-5: renban r4c9-r3c9
renban-6: renban r5c5-r5c4
renban-7: renban r4c7-r4c8-r5c8-r6c8-r6c7
```

**Sudoku, Cages, Renban Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
