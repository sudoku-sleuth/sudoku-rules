---
format: open-rules
title: Lekker 9/21
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7jr60ycdse
case: https://sudoku-sleuth.com/cases/lekker-9-21
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=1
exported: 3d7340489f46ec539314ec2c91a88158
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1-r9c2 total 21 connected true
cage-2: cage r1c8-r1c9-r2c9 total 21 connected true
cage-3: cage r2c2-r2c3-r3c2 total 9 connected true
cage-4: cage r7c8-r8c7-r8c8 total 9 connected true
cage-5: cage r3c6-r4c6-r4c7 total 9 connected true
cage-6: cage r6c3-r6c4-r7c4 total 9 connected true
cage-7: cage r3c4-r4c3-r4c4 total 21 connected true
cage-8: cage r6c6-r6c7-r7c6 total 21 connected true
cage-9: cage r7c1-r7c2 total 9 connected true
cage-10: cage r3c8-r3c9 total 9 connected true
cage-11: cage r3c1-r4c1 total 9 connected true
cage-12: cage r6c9-r7c9 total 9 connected true
cage-13: cage r6c5-r7c5-r8c5 total 9 connected true
cage-14: cage r1c3-r1c4-r1c5 total 21 connected true
cage-15: cage r9c5-r9c6-r9c7 total 21 connected true
little-killer-1: little-killer r2c1-r1c2 sum 9
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 21
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 9
little-killer-4: little-killer r4c9-r3c8-r2c7-r1c6 sum 21
little-killer-5: little-killer r6c1-r7c2-r8c3-r9c4 sum 21
little-killer-6: little-killer r7c1-r8c2-r9c3 sum 9
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 21
little-killer-8: little-killer r8c9-r9c8 sum 9
```

**Standard Sudoku, Cages, Little Killer**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more puzzles like these, please visit our website https://missingdeck.net
