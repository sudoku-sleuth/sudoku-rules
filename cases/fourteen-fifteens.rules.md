---
format: open-rules
title: Fourteen Fifteens
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bcp2kwbsyp
case: https://sudoku-sleuth.com/cases/fourteen-fifteens
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=3 r3c7=1 r5c5=1 r7c3=8 r7c7=2
exported: afb1b51dcbe5c22703a0d4a46700b249
---

```rules
sudoku 9x9
cage-1: cage r3c6-r4c6-r4c7 total 15 connected true
cage-2: cage r6c3-r6c4-r7c4 total 15 connected true
cage-3: cage r3c4-r4c3-r4c4 total 15 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 15
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 15
little-killer-3: little-killer r7c1-r8c2-r9c3 sum 15
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 15
x-sum-1: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 15
x-sum-2: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 15
x-sum-3: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 15
x-sum-4: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 15
x-sum-5: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 15
x-sum-6: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 15
x-sum-7: x-sum r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 15
```

- Normal sudoku rules apply.
- X-Sums: Clues without arrows outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.
- Little Killers: Clues with arrows outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
