---
format: open-rules
title: Who Says 13 Is Unlucky?
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/c3bivalqj6
case: https://sudoku-sleuth.com/cases/who-says-13-is-unlucky
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=1 r4c6=3 r8c7=1 r9c8=3
---

```rules
sudoku 9x9
cage-1: cage r7c7-r7c8 total 13 connected true
cage-2: cage r3c4-r3c5-r4c4 total 13 connected true
cage-3: cage r2c1-r3c1-r3c2 total 13 connected true
cage-4: cage r7c2-r8c1-r8c2 total 13 connected true
cage-5: cage r7c4-r8c4 total 13 connected true
cage-6: cage r4c3-r5c3-r6c2-r6c3 total 13 connected true
little-killer-1: little-killer r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7-r9c8 sum 13
little-killer-2: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 13
little-killer-3: little-killer r1c6-r2c7-r3c8-r4c9 sum 13
little-killer-4: little-killer r1c8-r2c9 sum 13
little-killer-5: little-killer r6c9-r7c8-r8c7-r9c6 sum 13
little-killer-6: little-killer r7c9-r8c8-r9c7 sum 13
little-killer-7: little-killer r7c1-r8c2-r9c3 sum 13
```

- Normal sudoku rules apply.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
