---
format: open-rules
title: Many Happy Returns, Timotab!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/m1gwizwtf4
case: https://sudoku-sleuth.com/cases/many-happy-returns-timotab
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=5 r2c7=3 r4c1=1 r4c2=9 r5c3=7 r5c4=1 r8c4=5 r9c4=3
exported: ab153f8262d298a935dc831dceb43b9e
---

```rules
sudoku 9x9
cage-1: cage r6c6-r7c6 total 10 connected true
cage-2: cage r6c4-r6c5 total 14 connected true
cage-3: cage r1c3-r1c4 total 10 connected true
cage-4: cage r2c3-r2c4 total 14 connected true
cage-5: cage r3c9-r4c9 total 10 connected true
cage-6: cage r2c8-r3c8 total 14 connected true
little-killer-1: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 71
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 19
little-killer-3: little-killer r7c1-r8c2-r9c3 sum 14
little-killer-4: little-killer r8c1-r9c2 sum 10
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-6: little-killer r8c9-r9c8 sum 14
little-killer-7: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 53
little-killer-8: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 53
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
