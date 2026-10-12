---
format: open-rules
title: Cage Flight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1kk95qd5cp
case: https://sudoku-sleuth.com/cases/cage-flight
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=2 r1c4=4 r1c6=6 r1c8=8 r7c4=8 r7c6=1 r9c3=1 r9c7=8
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 3 connected true
cage-2: cage r1c3-r1c4 total 7 connected true
cage-3: cage r1c5-r1c6 total 11 connected true
cage-4: cage r1c7-r1c8 total 15 connected true
cage-5: cage r4c1-r4c2 total 3 connected true
cage-6: cage r4c3-r4c4 total 7 connected true
cage-7: cage r4c5-r4c6 total 11 connected true
cage-8: cage r4c8-r4c9 total 15 connected true
cage-9: cage r8c1-r9c1 total 7 connected true
cage-10: cage r6c1-r7c1 total 11 connected true
cage-11: cage r2c1-r3c1 total 15 connected true
cage-12: cage r8c9-r9c9 total 7 connected true
cage-13: cage r6c9-r7c9 total 11 connected true
cage-14: cage r2c9-r3c9 total 9 connected true
cage-15: cage r4c7-r5c7 total 11 connected true
cage-16: cage r5c8-r5c9 total 7 connected true
cage-17: cage r5c1-r5c2 total 12 connected true
cage-18: cage r3c3-r3c4 total 7 connected true
cage-19: cage r2c3-r2c4 total 11 connected true
cage-20: cage r3c6-r3c7 total 11 connected true
cage-21: cage r2c6-r2c7 total 4 connected true
cage-22: cage r8c3-r9c3-r9c4 total 15 connected true
cage-23: cage r8c7-r9c6-r9c7 total 15 connected true
cage-24: cage r6c6-r6c7-r7c6 total 8 connected true
cage-25: cage r6c3-r6c4-r7c4 total 24 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
