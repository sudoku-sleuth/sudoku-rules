---
format: open-rules
title: Lekker 8-9-10
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gj3myei68a
case: https://sudoku-sleuth.com/cases/lekker-8-9-10
library: https://rules.sudoku-sleuth.com/
status: read
exported: dbd0f511c5dfb48bf9e245f763eaaabe
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c2-r2c3 total 8 connected true
cage-2: cage r1c7-r2c7-r2c8 total 10 connected true
cage-3: cage r8c2-r8c3-r9c3 total 10 connected true
cage-4: cage r8c7-r8c8-r9c7 total 10 connected true
cage-5: cage r3c4-r4c3-r4c4 total 10 connected true
cage-6: cage r6c6-r6c7-r7c6 total 8 connected true
cage-7: cage r3c6-r4c6-r4c7 total 10 connected true
cage-8: cage r5c7-r5c8 total 10 connected true
cage-9: cage r6c2-r6c3 total 10 connected true
cage-10: cage r7c4-r8c4 total 10 connected true
cage-11: cage r2c5-r3c5 total 10 connected true
cage-12: cage r2c1-r3c1 total 9 connected true
cage-13: cage r2c9-r3c9 total 9 connected true
cage-14: cage r4c9-r5c9-r6c9 total 10 connected true
cage-15: cage r4c1-r5c1 total 9 connected true
cage-16: cage r6c1-r7c1 total 9 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 9
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 9
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 9
little-killer-5: little-killer r2c1-r1c2 sum 10
little-killer-6: little-killer r1c8-r2c9 sum 8
little-killer-7: little-killer r8c9-r9c8 sum 10
little-killer-8: little-killer r9c2-r8c1 sum 8
```

**Standard Sudoku, Cages, Little Killer**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more puzzles like these, please visit our website https://missingdeck.net
