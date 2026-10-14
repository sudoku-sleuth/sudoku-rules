---
format: open-rules
title: Clowning Around
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0mjrcepd2s
case: https://sudoku-sleuth.com/cases/clowning-around
library: https://rules.sudoku-sleuth.com/
status: read
exported: 28ad6f6a1ef3041fef55a02a90387e48
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2-r4c3 total 7 connected true
cage-2: cage r3c8-r4c7-r4c8 total 9 connected true
cage-3: cage r6c1-r7c1-r7c2 total 20 connected true
cage-4: cage r6c9-r7c8-r7c9 total 20 connected true
cage-5: cage r2c7-r2c8-r3c7 total 18 connected true
cage-6: cage r2c2-r2c3-r3c3 total 12 connected true
cage-7: cage r8c4-r9c4 total 12 connected true
cage-8: cage r8c5-r9c5 total 11 connected true
cage-9: cage r8c6-r9c6 total 14 connected true
renban-1: renban r4c3-r4c4-r3c4-r2c4-r1c4
renban-2: renban r1c6-r2c6-r3c6-r4c6-r4c7
renban-3: renban r7c4-r6c4-r6c3-r6c2-r6c1
renban-4: renban r7c6-r6c6-r6c7-r6c8-r6c9
renban-5: renban r2c3-r2c2-r3c2
renban-6: renban r2c7-r2c8-r3c8
renban-7: renban r9c4-r9c5-r9c6
renban-8: renban r7c2-r8c3-r8c4-r8c5-r8c6-r8c7-r7c8
```

**Standard Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
