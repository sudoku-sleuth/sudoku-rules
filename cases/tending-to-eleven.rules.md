---
format: open-rules
title: Tending to Eleven
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cl0ht1pvs8
case: https://sudoku-sleuth.com/cases/tending-to-eleven
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c3=1 r7c4=1
exported: 7701865f4b19f4956a3d85395cf20aa0
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5-r3c6 total 10 connected true
cage-2: cage r3c7-r4c7-r5c7-r6c7 total 11 connected true
cage-3: cage r7c4-r7c5-r7c6-r7c7 total 10 connected true
cage-4: cage r4c3-r5c3-r6c3-r7c3 total 11 connected true
cage-5: cage r4c4-r4c5-r4c6 total 10 connected true
cage-6: cage r5c5-r6c5 total 10 connected true
cage-7: cage r1c5-r2c5 total 11 connected true
cage-8: cage r5c1-r5c2 total 11 connected true
cage-9: cage r5c8-r5c9 total 11 connected true
cage-10: cage r8c2-r8c3 total 11 connected true
cage-11: cage r8c7-r8c8 total 11 connected true
cage-12: cage r2c2-r2c3 total 11 connected true
cage-13: cage r2c7-r2c8 total 11 connected true
cage-14: cage r6c1-r7c1 total 11 connected true
cage-15: cage r2c9-r3c9 total 10 connected true
cage-16: cage r6c8-r7c8 total 11 connected true
cage-17: cage r2c1-r3c1 total 10 connected true
cage-18: cage r9c6-r9c7 total 10 connected true
cage-19: cage r8c4-r8c5 total 11 connected true
```

**Sudoku, Cages**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
