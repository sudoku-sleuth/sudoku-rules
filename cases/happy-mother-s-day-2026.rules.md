---
format: open-rules
title: Happy Mother's Day 2026
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/srbn9tt8b2
case: https://sudoku-sleuth.com/cases/happy-mother-s-day-2026
library: https://rules.sudoku-sleuth.com/
status: read
exported: e2b4eb1f8259cef986d44cce25597ac4
---

```rules
sudoku 9x9
cage-1: cage r6c8-r7c8 total 10 connected true
cage-2: cage r8c6-r8c7 total 10 connected true
cage-3: cage r3c2-r4c2 total 10 connected true
cage-4: cage r2c3-r2c4 total 10 connected true
cage-5: cage r8c2-r9c2 total 5 connected true
cage-6: cage r2c8-r2c9 total 5 connected true
cage-7: cage r3c4-r4c3-r4c4 total 20 connected true
cage-8: cage r5c5-r5c6-r5c7-r6c5 total 26 connected true
cage-9: cage r4c8-r5c8-r5c9 total 10 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-2: little-killer r2c1-r1c2 sum 5
little-killer-3: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 20
little-killer-4: little-killer r1c6-r2c7-r3c8-r4c9 sum 26
little-killer-5: little-killer r9c3-r8c2-r7c1 sum 20
little-killer-6: little-killer r9c4-r8c3-r7c2-r6c1 sum 26
little-killer-7: little-killer r6c9-r7c8-r8c7-r9c6 sum 5
little-killer-8: little-killer r8c9-r9c8 sum 10
```

**Sudoku, Diagonal Sums, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. 
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
