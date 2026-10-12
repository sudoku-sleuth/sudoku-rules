---
format: open-rules
title: Corner Braces
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kfowwth2mh
case: https://sudoku-sleuth.com/cases/corner-braces
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1 total 5 connected true
cage-2: cage r6c9-r7c9 total 5 connected true
cage-3: cage r6c1-r7c1 total 11 connected true
cage-4: cage r3c9-r4c9 total 13 connected true
cage-5: cage r4c6-r4c7 total 16 connected true
cage-6: cage r6c3-r6c4 total 11 connected true
cage-7: cage r6c6-r6c7 total 11 connected true
cage-8: cage r4c3-r4c4 total 3 connected true
cage-9: cage r9c4-r9c5-r9c6 total 7 connected true
renban-1: renban r4c1-r4c2-r3c3-r2c4-r1c4
renban-2: renban r1c6-r2c6-r3c7-r4c8-r4c9
renban-3: renban r6c9-r6c8-r7c7-r8c6-r9c6
renban-4: renban r6c1-r6c2-r7c3-r8c4-r9c4
renban-5: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-6: renban r1c7-r1c8-r1c9-r2c9-r3c9
renban-7: renban r7c9-r8c9-r9c9-r9c8-r9c7
renban-8: renban r9c3-r9c2-r9c1-r8c1-r7c1
```

**Standard Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
