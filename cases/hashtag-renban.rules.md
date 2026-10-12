---
format: open-rules
title: Hashtag Renban
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/u3nwwr7onq
case: https://sudoku-sleuth.com/cases/hashtag-renban
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 14 connected true
cage-2: cage r8c9-r9c8-r9c9 total 14 connected true
cage-3: cage r3c3-r3c4-r4c3 total 8 connected true
cage-4: cage r6c7-r7c6-r7c7 total 9 connected true
cage-5: cage r3c6-r3c7-r4c7 total 14 connected true
cage-6: cage r6c3-r7c3-r7c4 total 13 connected true
cage-7: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 25 connected true
cage-8: cage r7c5-r8c5 total 8 connected true
cage-9: cage r2c5-r3c5 total 8 connected true
cage-10: cage r7c1-r8c1-r9c1 total 8 connected true
cage-11: cage r1c9-r2c9-r3c9 total 12 connected true
cage-12: cage r1c5-r1c6-r2c6 total 20 connected true
cage-13: cage r8c4-r9c4-r9c5 total 18 connected true
cage-14: cage r2c2-r2c3-r3c2 total 12 connected true
cage-15: cage r7c8-r8c7-r8c8 total 15 connected true
cage-16: cage r4c9-r5c9 total 9 connected true
cage-17: cage r5c1-r6c1 total 12 connected true
renban-1: renban r3c1-r3c2-r3c3-r2c3-r1c3
renban-2: renban r4c3-r5c3-r6c3
renban-3: renban r3c4-r3c5-r3c6
renban-4: renban r4c7-r5c7-r6c7
renban-5: renban r7c4-r7c5-r7c6
renban-6: renban r1c7-r2c7-r3c7-r3c8-r3c9
renban-7: renban r9c7-r8c7-r7c7-r7c8-r7c9
renban-8: renban r7c1-r7c2-r7c3-r8c3-r9c3
```

- Normal sudoku rules apply.
- Digits in cages cannot repeat and must sum to the total given in the upper left corner of the cage.
- Digits along a pink renban line form a non-repeating set of consecutive digits in an order to be determined by the solver.
