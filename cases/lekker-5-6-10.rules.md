---
format: open-rules
title: Lekker 5-6-10
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3kme369ebo
case: https://sudoku-sleuth.com/cases/lekker-5-6-10
library: https://rules.sudoku-sleuth.com/
status: read
exported: af625d9b021e9ee3d3ae30364633c238
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 6 connected true
cage-2: cage r1c6-r1c7 total 10 connected true
cage-3: cage r9c6-r9c7 total 6 connected true
cage-4: cage r9c3-r9c4 total 10 connected true
cage-5: cage r3c4-r3c5 total 5 connected true
cage-6: cage r4c7-r5c7 total 5 connected true
cage-7: cage r7c5-r7c6 total 5 connected true
cage-8: cage r5c3-r6c3 total 6 connected true
cage-9: cage r4c5-r4c6 total 6 connected true
cage-10: cage r6c5-r6c6 total 6 connected true
cage-11: cage r5c4-r5c5 total 10 connected true
cage-12: cage r6c8-r7c8 total 10 connected true
cage-13: cage r5c2-r6c2 total 10 connected true
little-killer-1: little-killer r2c1-r1c2 sum 5
little-killer-2: little-killer r2c9-r1c8 sum 6
little-killer-3: little-killer r8c9-r9c8 sum 5
little-killer-4: little-killer r8c1-r9c2 sum 6
little-killer-5: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-6: little-killer r3c9-r2c8-r1c7 sum 10
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-8: little-killer r7c1-r8c2-r9c3 sum 10
```

**Standard Sudoku, Cages, Little Killer**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more puzzles like these, please visit our website https://missingdeck.net
