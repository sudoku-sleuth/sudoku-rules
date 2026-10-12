---
format: open-rules
title: Fifteens and Sixteens
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ajucb7ttpp
case: https://sudoku-sleuth.com/cases/fifteens-and-sixteens
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c4=4 r8c1=3
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r3c4-r3c5-r3c6 total 15 connected true
cage-2: cage r2c7-r3c7-r4c7-r5c7-r6c7 total 16 connected true
cage-3: cage r7c4-r7c5-r7c6-r7c7-r7c8 total 15 connected true
cage-4: cage r4c3-r5c3-r6c3-r7c3-r8c3 total 16 connected true
cage-5: cage r2c1-r3c1 total 15 connected true
cage-6: cage r6c9-r7c9 total 15 connected true
cage-7: cage r9c3-r9c4 total 16 connected true
cage-8: cage r1c6-r1c7 total 16 connected true
cage-9: cage r1c1-r1c2-r1c3 total 15 connected true
cage-10: cage r9c7-r9c8-r9c9 total 15 connected true
cage-11: cage r3c9-r4c9 total 15 connected true
cage-12: cage r6c2-r7c2 total 16 connected true
cage-13: cage r1c8-r2c8-r3c8 total 16 connected true
cage-14: cage r8c6-r8c7 total 16 connected true
cage-15: cage r4c4-r4c5 total 15 connected true
cage-16: cage r6c4-r6c5-r6c6 total 15 connected true
cage-17: cage r5c1-r5c2-r6c1 total 15 connected true
cage-18: cage r1c4-r1c5-r2c5 total 15 connected true
```

**Sudoku, cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.
