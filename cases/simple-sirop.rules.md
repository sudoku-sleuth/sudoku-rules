---
format: open-rules
title: Simple Sirop
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0wezd3gc88
case: https://sudoku-sleuth.com/cases/simple-sirop
library: https://rules.sudoku-sleuth.com/
status: read
exported: 254b892a08cfa479e8231736682aa35a
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3-r3c3 total 7 connected true
cage-2: cage r4c3-r5c3-r6c3 total 17 connected true
cage-3: cage r7c3-r8c3 total 16 connected true
cage-4: cage r9c3-r9c4 total 9 connected true
cage-5: cage r9c5-r9c6 total 7 connected true
cage-6: cage r9c7-r9c8 total 11 connected true
cage-7: cage r6c8-r7c8-r8c8 total 6 connected true
cage-8: cage r4c8-r5c8 total 10 connected true
cage-9: cage r2c8-r3c8 total 12 connected true
cage-10: cage r2c6-r2c7 total 3 connected true
cage-11: cage r2c4-r2c5 total 8 connected true
cage-12: cage r2c1-r2c2 total 14 connected true
cage-13: cage r6c1-r7c1 total 15 connected true
cage-14: cage r8c1-r8c2 total 5 connected true
cage-15: cage r5c7-r6c7 total 10 connected true
cage-16: cage r7c6-r7c7 total 11 connected true
cage-17: cage r6c4-r7c4 total 17 connected true
cage-18: cage r3c4-r3c5 total 15 connected true
cage-19: cage r3c6-r4c6 total 12 connected true
cage-20: cage r4c5-r5c5 total 9 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
