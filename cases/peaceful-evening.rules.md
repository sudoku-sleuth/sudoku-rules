---
format: open-rules
title: Peaceful Evening
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mp95k3o8au
case: https://sudoku-sleuth.com/cases/peaceful-evening
library: https://rules.sudoku-sleuth.com/
status: read
exported: 21ac58b3b8ed95b3dbcb665ad5a09031
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 9 connected true
cage-2: cage r8c9-r9c8-r9c9 total 8 connected true
cage-3: cage r1c8-r1c9-r2c9 total 9 connected true
cage-4: cage r8c1-r9c1-r9c2 total 8 connected true
cage-5: cage r7c7-r8c7 total 8 connected true
cage-6: cage r2c7-r3c7 total 7 connected true
cage-7: cage r2c3-r3c3 total 8 connected true
cage-8: cage r7c3-r8c3 total 7 connected true
cage-9: cage r4c3-r4c4-r5c3-r5c4 total 11 connected true
cage-10: cage r5c6-r5c7-r6c6-r6c7 total 12 connected true
cage-11: cage r7c5-r8c5-r9c5 total 8 connected true
parity-cells r1c1-r9c1-r9c9-r1c9-r7c3-r3c8-r3c2-r9c7-r5c3-r4c9-r6c5-r4c5-r5c2 parity "even"
```

**Sudoku, Cages, Evens**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits cannot repeat within cages and must sum to the value shown in the upper left corner of the cage.
- Evens: Digits in cells marked with a grey square must be even.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
