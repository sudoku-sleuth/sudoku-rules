---
format: open-rules
title: Pushy Pushy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/anjmga98jr
case: https://sudoku-sleuth.com/cases/pushy-pushy
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4 total 8 connected true
cage-2: cage r2c8-r3c8-r4c8 total 8 connected true
cage-3: cage r8c6-r8c7-r8c8 total 8 connected true
cage-4: cage r6c2-r7c2-r8c2 total 8 connected true
cage-5: cage r4c3-r4c4 total 5 connected true
cage-6: cage r3c6-r4c6 total 5 connected true
cage-7: cage r6c6-r6c7 total 5 connected true
cage-8: cage r6c4-r7c4 total 5 connected true
cage-9: cage r3c3-r3c4-r3c5 total 21 connected true
cage-10: cage r3c7-r4c7-r5c7 total 22 connected true
cage-11: cage r7c5-r7c6-r7c7 total 19 connected true
cage-12: cage r5c3-r6c3-r7c3 total 17 connected true
cage-13: cage r1c1-r1c2-r2c1 total 17 connected true
cage-14: cage r1c8-r1c9-r2c9 total 21 connected true
cage-15: cage r8c9-r9c8-r9c9 total 23 connected true
cage-16: cage r8c1-r9c1-r9c2 total 17 connected true
cage-17: cage r4c1-r5c1 total 10 connected true
cage-18: cage r1c5-r1c6 total 10 connected true
cage-19: cage r5c9-r6c9 total 3 connected true
cage-20: cage r9c4-r9c5 total 8 connected true
```

**Standard Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
