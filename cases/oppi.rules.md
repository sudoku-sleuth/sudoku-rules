---
format: open-rules
title: Oppi
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/93tlwxk2xz
case: https://sudoku-sleuth.com/cases/oppi
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=2 r2c7=4 r4c3=6 r7c5=4 r7c8=8 r8c6=5 r8c8=1
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1 total 6 connected true
cage-2: cage r1c3-r1c4-r2c4 total 24 connected true
cage-3: cage r6c9-r7c9 total 6 connected true
cage-4: cage r3c7-r4c7 total 6 connected true
cage-5: cage r8c1-r9c1-r9c2 total 6 connected true
cage-6: cage r1c8-r1c9-r2c9 total 6 connected true
cage-7: cage r6c3-r7c3 total 6 connected true
cage-8: cage r4c5-r4c6-r5c5-r5c6 total 24 connected true
cage-9: cage r5c4-r6c4 total 6 connected true
cage-10: cage r6c1-r6c2-r7c1-r7c2 total 24 connected true
little-killer-1: little-killer r2c1-r1c2 sum 6
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 24
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 6
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 24
```

**Sudoku, Diagonal Sums, Cages**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
