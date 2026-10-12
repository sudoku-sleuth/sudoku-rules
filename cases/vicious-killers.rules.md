---
format: open-rules
title: Vicious Killers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ru6qyedk6q
case: https://sudoku-sleuth.com/cases/vicious-killers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=4
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2 total 15 connected true
cage-2: cage r2c7-r2c8-r3c8 total 16 connected true
cage-3: cage r7c2-r8c2-r8c3 total 16 connected true
cage-4: cage r6c3-r6c4-r7c4 total 15 connected true
cage-5: cage r3c6-r4c6-r4c7 total 15 connected true
cage-6: cage r3c4-r4c3-r4c4 total 16 connected true
cage-7: cage r8c9-r9c8-r9c9 total 16 connected true
cage-8: cage r8c6-r8c7 total 15 connected true
cage-9: cage r7c5-r8c5-r9c5 total 15 connected true
cage-10: cage r5c6-r5c7-r5c8 total 15 connected true
cage-11: cage r5c2-r5c3-r5c4 total 15 connected true
cage-12: cage r1c1-r1c2-r2c1 total 16 connected true
cage-13: cage r4c9-r5c9-r6c9 total 16 connected true
little-killer-1: little-killer r2c1-r1c2 sum 15
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 16
little-killer-3: little-killer r1c8-r2c9 sum 16
little-killer-4: little-killer r1c7-r2c8-r3c9 sum 15
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 16
little-killer-6: little-killer r8c9-r9c8 sum 15
little-killer-7: little-killer r9c2-r8c1 sum 16
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 15
little-killer-9: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 15
```

**Standard Sudoku, Cages, Little Killer**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more puzzles like these, please visit our website https://missingdeck.net
