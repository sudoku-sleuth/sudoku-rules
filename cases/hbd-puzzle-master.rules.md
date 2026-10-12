---
format: open-rules
title: HBD, Puzzle Master!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bu12w7kq6v
case: https://sudoku-sleuth.com/cases/hbd-puzzle-master
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=1 r2c4=9 r2c5=5 r2c6=2 r6c3=8 r6c7=2 r6c8=6 r9c2=7 r9c3=2
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7-r2c8 total 8 connected true
cage-2: cage r6c6-r7c4-r7c5-r7c6 total 26 connected true
cage-3: cage r4c1-r4c2-r5c1 total 8 connected true
cage-4: cage r8c3-r8c4 total 8 connected true
cage-5: cage r8c5-r8c6 total 8 connected true
little-killer-1: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 19
little-killer-2: little-killer r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 sum 52
little-killer-3: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 72
little-killer-4: little-killer r7c1-r8c2-r9c3 sum 8
little-killer-5: little-killer r6c1-r7c2-r8c3-r9c4 sum 26
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
