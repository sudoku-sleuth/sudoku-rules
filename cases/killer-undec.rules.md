---
format: open-rules
title: Killer Undec
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hr03rm0rdq
case: https://sudoku-sleuth.com/cases/killer-undec
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c4=2 r2c8=6 r4c2=2 r5c5=4 r6c8=3 r8c2=6 r8c6=3
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7-r1c8 total 11 connected true
cage-2: cage r2c9-r3c9-r4c9 total 11 connected true
cage-3: cage r1c2-r1c3-r1c4 total 11 connected true
cage-4: cage r2c1-r3c1-r4c1 total 11 connected true
cage-5: cage r6c1-r7c1-r8c1 total 11 connected true
cage-6: cage r9c2-r9c3-r9c4 total 11 connected true
cage-7: cage r6c9-r7c9-r8c9 total 11 connected true
cage-8: cage r9c6-r9c7-r9c8 total 12 connected true
cage-9: cage r3c3-r3c4-r4c3 total 19 connected true
cage-10: cage r3c6-r3c7-r4c7 total 18 connected true
cage-11: cage r6c7-r7c6-r7c7 total 20 connected true
cage-12: cage r6c3-r7c3-r7c4 total 19 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 11
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 11
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 11
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 11
little-killer-5: little-killer r2c1-r1c2 sum 11
little-killer-6: little-killer r8c9-r9c8 sum 11
little-killer-7: little-killer r1c8-r2c9 sum 11
little-killer-8: little-killer r9c2-r8c1 sum 11
```

- Normal sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
