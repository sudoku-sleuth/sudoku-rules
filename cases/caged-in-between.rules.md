---
format: open-rules
title: Caged in Between
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ph26kcph81
case: https://sudoku-sleuth.com/cases/caged-in-between
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 6 connected true
cage-2: cage r1c3-r1c4 total 15 connected true
cage-3: cage r4c3-r4c4 total 7 connected true
cage-4: cage r4c5-r4c6 total 11 connected true
cage-5: cage r2c7-r2c8 total 6 connected true
cage-6: cage r3c8-r4c8 total 15 connected true
cage-7: cage r6c9-r7c9 total 8 connected true
cage-8: cage r2c9-r3c9 total 10 connected true
cage-9: cage r5c7-r5c8 total 7 connected true
cage-10: cage r8c7-r8c8 total 7 connected true
cage-11: cage r7c5-r7c6 total 6 connected true
cage-12: cage r5c2-r5c3 total 11 connected true
cage-13: cage r8c1-r9c1 total 11 connected true
between-1: between r2c1-r1c1-r1c2-r1c3-r1c4 ends ["r3c1","r2c4"]
between-2: between r3c3-r4c3-r4c4-r4c5-r4c6 ends ["r2c3","r3c6"]
between-3: between r2c7-r2c8-r3c8-r4c8-r5c8-r5c7 ends ["r2c6","r5c6"]
between-4: between r6c9-r7c9-r8c9-r8c8-r8c7 ends ["r5c9","r8c6"]
between-5: between r1c9-r2c9-r3c9 ends ["r1c8","r4c9"]
between-6: between r7c6-r7c5-r7c4 ends ["r7c7","r6c4"]
between-7: between r5c2-r5c3-r5c4 ends ["r6c2","r6c4"]
between-8: between r7c1-r8c1-r9c1 ends ["r6c1","r9c2"]
```

**Sudoku, Between Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Cages: Digits in cages sum to the total in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net
