---
format: open-rules
title: Bugging Out
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/tim39apg38
case: https://sudoku-sleuth.com/cases/bugging-out
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6fc7595d55c8782b6626415a8e15696f
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 3 connected true
cage-2: cage r2c9-r3c9 total 17 connected true
cage-3: cage r6c7-r6c8 total 17 connected true
cage-4: cage r6c2-r6c3 total 3 connected true
cage-5: cage r4c2-r4c3 total 17 connected true
cage-6: cage r5c3-r5c4 total 8 connected true
cage-7: cage r5c6-r5c7 total 10 connected true
cage-8: cage r2c3-r2c4 total 8 connected true
cage-9: cage r2c6-r2c7 total 13 connected true
cage-10: cage r7c1-r7c2 total 11 connected true
cage-11: cage r7c8-r7c9 total 11 connected true
cage-12: cage r1c5-r2c5 total 9 connected true
renban-1: renban r3c1-r4c1-r5c1-r6c1-r6c2
renban-2: renban r3c9-r4c9-r5c9-r6c9-r6c8
renban-3: renban r1c1-r1c2-r1c3-r1c4-r2c4
renban-4: renban r2c6-r1c6-r1c7-r1c8-r1c9
renban-5: renban r4c4-r3c4-r3c5-r3c6-r4c6
renban-6: renban r6c4-r7c4-r7c5-r7c6-r6c6
renban-7: renban r7c2-r8c2-r9c2-r9c3-r9c4
renban-8: renban r9c6-r9c7-r9c8-r8c8-r7c8
```

**Standard Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
