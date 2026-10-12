---
format: open-rules
title: Chasing the Killers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5z0na7x7c0
case: https://sudoku-sleuth.com/cases/chasing-the-killers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 12 connected true
cage-2: cage r1c8-r1c9-r2c9 total 11 connected true
cage-3: cage r8c1-r9c1-r9c2 total 11 connected true
cage-4: cage r8c9-r9c8-r9c9 total 12 connected true
cage-5: cage r6c3-r6c4-r7c4 total 7 connected true
cage-6: cage r3c4-r4c3-r4c4 total 6 connected true
cage-7: cage r3c6-r4c6-r4c7 total 7 connected true
cage-8: cage r6c6-r6c7-r7c6 total 9 connected true
cage-9: cage r8c3-r8c4 total 13 connected true
cage-10: cage r6c8-r7c8 total 15 connected true
cage-11: cage r2c6-r2c7 total 12 connected true
cage-12: cage r3c2-r4c2 total 13 connected true
cage-13: cage r3c1-r4c1 total 12 connected true
cage-14: cage r9c3-r9c4 total 12 connected true
cage-15: cage r6c9-r7c9 total 5 connected true
cage-16: cage r1c6-r1c7 total 9 connected true
little-killer-1: little-killer r3c9-r2c8-r1c7 sum 10
little-killer-2: little-killer r7c1-r8c2-r9c3 sum 10
little-killer-3: little-killer r1c3-r2c2-r3c1 sum 10
little-killer-4: little-killer r9c7-r8c8-r7c9 sum 10
little-killer-5: little-killer r6c1-r7c2-r8c3-r9c4 sum 35
```

**Standard Sudoku, Cages, Little Killer**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more puzzles like these, please visit our website https://missingdeck.net
