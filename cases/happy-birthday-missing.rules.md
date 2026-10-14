---
format: open-rules
title: Happy Birthday, Missing!
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/happy-birthday-missing
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=2 r1c4=9 r1c6=6 r1c7=1 r4c8=6 r5c2=3 r5c8=1
exported: f85022030d44354d7cc2c906c9cdc9f8
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 7 connected true
cage-2: cage r3c5-r4c5 total 7 connected true
cage-3: cage r7c5-r7c6 total 11 connected true
cage-4: cage r4c2-r4c3 total 11 connected true
little-killer-1: little-killer r4c1-r3c2-r2c3-r1c4 sum 29
little-killer-2: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 62
little-killer-3: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 62
little-killer-4: little-killer r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7-r9c8 sum 61
little-killer-5: little-killer r6c9-r7c8-r8c7-r9c6 sum 29
little-killer-6: little-killer r8c1-r9c2 sum 3
little-killer-7: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 19
```

- Normal sudoku rules apply.

- Clues outside the grid are the sum of the digits along the indicated diagonal. Digits can repeat if allowed by other rules.

- Digits in cages must sum to the number in the top left corner of the cage.
