---
format: open-rules
title: Ripples
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ont5c8ex3f
case: https://sudoku-sleuth.com/cases/ripples
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=3
exported: eab687b05d10eba2691a04a2f165da78
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2 total 7 connected true
cage-2: cage r8c8-r8c9 total 7 connected true
cage-3: cage r8c2-r9c2 total 7 connected true
cage-4: cage r1c8-r2c8 total 7 connected true
cage-5: cage r1c4-r2c4 total 11 connected true
cage-6: cage r8c6-r9c6 total 7 connected true
cage-7: cage r6c5-r7c5 total 10 connected true
cage-8: cage r5c1-r6c1 total 11 connected true
cage-9: cage r4c9-r5c9 total 6 connected true
cage-10: cage r1c5-r1c6 total 4 connected true
cage-11: cage r9c4-r9c5 total 17 connected true
cage-12: cage r7c4-r8c4 total 9 connected true
cage-13: cage r2c6-r3c6 total 15 connected true
cage-14: cage r3c5-r4c5 total 10 connected true
cage-15: cage r4c7-r4c8 total 11 connected true
cage-16: cage r6c2-r6c3 total 9 connected true
renban-1: renban r6c2-r5c2-r4c2-r3c3-r2c4-r2c5-r2c6
renban-2: renban r8c4-r8c5-r8c6-r7c7-r6c8-r5c8-r4c8
renban-3: renban r6c1-r7c1-r8c2-r9c3-r9c4
renban-4: renban r1c6-r1c7-r2c8-r3c9-r4c9
renban-5: renban r4c1-r3c1-r2c2-r1c3-r1c4
renban-6: renban r9c6-r9c7-r8c8-r7c9-r6c9
renban-7: renban r5c3-r6c3-r7c4-r7c5
renban-8: renban r3c5-r3c6-r4c7-r5c7
```

**Standard Sudoku, Renban, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
