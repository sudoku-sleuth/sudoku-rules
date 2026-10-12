---
format: open-rules
title: Seventeen
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vocsj2iyhi
case: https://sudoku-sleuth.com/cases/seventeen
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r2c2=7 r5c7=1 r6c9=7 r8c4=1 r9c5=7
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 17 connected true
cage-2: cage r2c9-r3c9 total 17 connected true
cage-3: cage r9c7-r9c8 total 17 connected true
cage-4: cage r7c1-r8c1 total 17 connected true
cage-5: cage r1c4-r1c5-r1c6 total 17 connected true
cage-6: cage r4c9-r5c9-r6c9 total 17 connected true
cage-7: cage r9c4-r9c5-r9c6 total 17 connected true
cage-8: cage r4c1-r5c1-r6c1 total 17 connected true
cage-9: cage r3c3-r3c4-r4c3-r4c4 total 17 connected true
cage-10: cage r3c6-r3c7-r4c6-r4c7 total 17 connected true
cage-11: cage r6c6-r6c7-r7c6-r7c7 total 17 connected true
cage-12: cage r6c3-r6c4-r7c3-r7c4 total 17 connected true
cage-13: cage r5c3-r5c4 total 17 connected true
cage-14: cage r3c5-r4c5 total 17 connected true
cage-15: cage r2c2-r2c3-r3c2 total 17 connected true
cage-16: cage r7c8-r8c7-r8c8 total 17 connected true
cage-17: cage r7c5-r8c4-r8c5-r8c6 total 17 connected true
cage-18: cage r1c7-r1c8-r2c6-r2c7-r2c8 total 17 connected true
cage-19: cage r8c2-r8c3-r9c1-r9c2-r9c3 total 17 connected true
```

**Standard Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
