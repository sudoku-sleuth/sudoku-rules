---
format: open-rules
title: Lekker 16-4-25
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/x00cihizi1
case: https://sudoku-sleuth.com/cases/lekker-16-4-25
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=2 r1c4=5 r3c5=1 r4c5=6 r7c4=4
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7 total 16 connected true
cage-2: cage r2c3-r2c4 total 16 connected true
cage-3: cage r9c2-r9c3 total 4 connected true
cage-4: cage r8c5-r8c6 total 4 connected true
cage-5: cage r7c8-r7c9 total 4 connected true
cage-6: cage r3c4-r4c4 total 4 connected true
cage-7: cage r6c6-r6c7 total 4 connected true
cage-8: cage r6c2-r7c2 total 16 connected true
cage-9: cage r3c8-r4c8 total 16 connected true
cage-10: cage r7c1-r8c1-r9c1 total 16 connected true
cage-11: cage r5c5-r5c6 total 16 connected true
cage-12: cage r7c7-r8c7-r8c8-r8c9 total 25 connected true
cage-13: cage r3c1-r4c1-r4c2 total 16 connected true
cage-14: cage r1c5-r2c5-r2c6 total 16 connected true
little-killer-1: little-killer r2c1-r1c2 sum 4
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 16
little-killer-3: little-killer r4c1-r3c2-r2c3-r1c4 sum 25
little-killer-4: little-killer r2c9-r1c8 sum 4
little-killer-5: little-killer r3c9-r2c8-r1c7 sum 16
little-killer-6: little-killer r4c9-r3c8-r2c7-r1c6 sum 25
little-killer-7: little-killer r7c1-r8c2-r9c3 sum 16
little-killer-8: little-killer r7c9-r8c8-r9c7 sum 16
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more puzzles like these, please visit our website https://missingdeck.net
