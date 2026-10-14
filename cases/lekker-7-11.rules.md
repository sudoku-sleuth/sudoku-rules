---
format: open-rules
title: Lekker 7/11
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zt33qk4wn4
case: https://sudoku-sleuth.com/cases/lekker-7-11
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4324087f1ae49d97f41a1d02a031dfba
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 11 connected true
cage-2: cage r1c6-r1c7 total 11 connected true
cage-3: cage r3c1-r4c1 total 11 connected true
cage-4: cage r6c9-r7c9 total 11 connected true
cage-5: cage r3c9-r4c9 total 7 connected true
cage-6: cage r6c1-r7c1 total 11 connected true
cage-7: cage r3c3-r3c4 total 11 connected true
cage-8: cage r3c6-r3c7 total 11 connected true
cage-9: cage r6c4-r6c5-r6c6 total 7 connected true
cage-10: cage r5c7-r5c8 total 7 connected true
cage-11: cage r5c2-r5c3 total 11 connected true
cage-12: cage r2c7-r2c8 total 11 connected true
cage-13: cage r2c3-r2c4 total 11 connected true
cage-14: cage r9c5-r9c6 total 11 connected true
cage-15: cage r4c5-r5c5 total 11 connected true
cage-16: cage r8c4-r8c5 total 11 connected true
cage-17: cage r7c3-r8c3-r9c3 total 11 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-2: little-killer r2c1-r1c2 sum 11
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 7
little-killer-4: little-killer r2c9-r1c8 sum 11
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 7
little-killer-6: little-killer r8c9-r9c8 sum 11
little-killer-7: little-killer r7c1-r8c2-r9c3 sum 7
little-killer-8: little-killer r8c1-r9c2 sum 11
```

**Sudoku, cages, little killers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
