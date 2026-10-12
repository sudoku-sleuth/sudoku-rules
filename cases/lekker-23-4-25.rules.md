---
format: open-rules
title: Lekker 23-4-25
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdvcs33byo
case: https://sudoku-sleuth.com/cases/lekker-23-4-25
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=4 r4c2=2 r5c2=5 r5c9=3 r6c8=2
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3 total 4 connected true
cage-2: cage r8c1-r8c2-r8c3 total 23 connected true
cage-3: cage r9c7-r9c8 total 4 connected true
cage-4: cage r9c4-r9c5-r9c6 total 23 connected true
cage-5: cage r7c6-r7c7-r7c8-r7c9 total 25 connected true
cage-6: cage r3c4-r3c5 total 4 connected true
cage-7: cage r8c5-r8c6 total 4 connected true
cage-8: cage r4c4-r4c5-r5c4 total 23 connected true
cage-9: cage r4c7-r4c8-r5c7-r5c8 total 25 connected true
cage-10: cage r6c1-r6c2-r6c3-r7c1 total 23 connected true
cage-11: cage r1c5-r1c6-r1c7-r1c8 total 25 connected true
cage-12: cage r3c1-r3c2-r3c3-r4c1 total 23 connected true
little-killer-1: little-killer r2c1-r1c2 sum 4
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 23
little-killer-3: little-killer r4c1-r3c2-r2c3-r1c4 sum 25
little-killer-4: little-killer r2c9-r1c8 sum 4
little-killer-5: little-killer r3c9-r2c8-r1c7 sum 23
little-killer-6: little-killer r4c9-r3c8-r2c7-r1c6 sum 25
```

**Standard Sudoku, Cages, Little Killer**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more puzzles like these, please visit our website https://missingdeck.net
