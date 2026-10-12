---
format: open-rules
title: Square Drain
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yxo5bfjpzg
case: https://sudoku-sleuth.com/cases/square-drain
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5 total 6 connected true
cage-2: cage r3c7-r4c7-r5c7 total 24 connected true
cage-3: cage r7c5-r7c6-r7c7 total 6 connected true
cage-4: cage r5c3-r6c3-r7c3 total 24 connected true
cage-5: cage r2c5-r2c6-r2c7 total 7 connected true
cage-6: cage r3c2-r4c2-r5c2 total 23 connected true
cage-7: cage r8c3-r8c4-r8c5 total 7 connected true
cage-8: cage r5c8-r6c8-r7c8 total 23 connected true
cage-9: cage r4c3-r4c4-r4c5 total 10 connected true
cage-10: cage r6c5-r6c6-r6c7 total 18 connected true
cage-11: cage r5c4-r6c4-r7c4 total 18 connected true
cage-12: cage r3c6-r4c6-r5c6 total 15 connected true
cage-13: cage r8c9-r9c8-r9c9 total 18 connected true
cage-14: cage r1c1-r1c2-r2c1 total 14 connected true
cage-15: cage r8c1-r9c1-r9c2 total 12 connected true
cage-16: cage r1c8-r1c9-r2c9 total 15 connected true
```

**Standard Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more puzzles like these, please visit our website https://missingdeck.net
