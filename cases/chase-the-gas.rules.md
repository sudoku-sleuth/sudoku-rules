---
format: open-rules
title: Chase the Gas
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8b9n7mtome
case: https://sudoku-sleuth.com/cases/chase-the-gas
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5d387531c751adb4e974a234c5c22dae
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c2-r4c3 total 6 connected true
cage-2: cage r3c7-r3c8-r4c7 total 6 connected true
cage-3: cage r6c2-r6c3-r7c3 total 7 connected true
cage-4: cage r6c6-r6c7-r7c6 total 24 connected true
cage-5: cage r8c7-r9c6-r9c7 total 24 connected true
cage-6: cage r6c9-r7c8-r7c9 total 23 connected true
cage-7: cage r8c1-r9c1-r9c2 total 8 connected true
cage-8: cage r1c8-r1c9-r2c9 total 12 connected true
cage-9: cage r1c1-r1c2-r2c1 total 9 connected true
cage-10: cage r8c9-r9c8-r9c9 total 6 connected true
cage-11: cage r5c5-r5c6-r6c5 total 6 connected true
cage-12: cage r4c4-r4c5-r5c4 total 22 connected true
cage-13: cage r8c4-r9c4-r9c5 total 14 connected true
cage-14: cage r1c5-r1c6-r2c5 total 19 connected true
cage-15: cage r5c8-r5c9-r6c8 total 11 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
