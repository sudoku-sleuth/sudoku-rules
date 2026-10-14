---
format: open-rules
title: Stacking the Deck
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9ngrunve1d
case: https://sudoku-sleuth.com/cases/stacking-the-deck
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=4
exported: 8668527daf004b217c7c91edf8265957
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c4 total 7 connected true
cage-2: cage r3c6-r3c7-r4c6 total 8 connected true
cage-3: cage r6c6-r6c7-r7c6 total 7 connected true
cage-4: cage r6c3-r6c4-r7c4 total 8 connected true
cage-5: cage r1c3-r1c4-r2c4 total 13 connected true
cage-6: cage r1c6-r1c7-r2c6 total 18 connected true
cage-7: cage r8c3-r9c2-r9c3 total 9 connected true
cage-8: cage r8c6-r9c6-r9c7 total 13 connected true
cage-9: cage r6c2-r7c2-r8c2 total 21 connected true
cage-10: cage r6c8-r7c8-r8c8 total 21 connected true
cage-11: cage r3c8-r4c8-r5c8 total 12 connected true
cage-12: cage r3c2-r4c2-r5c2 total 12 connected true
cage-13: cage r1c2-r2c2-r2c3 total 18 connected true
cage-14: cage r1c8-r2c7-r2c8 total 17 connected true
cage-15: cage r5c9-r6c9 total 8 connected true
cage-16: cage r5c1-r6c1 total 10 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
