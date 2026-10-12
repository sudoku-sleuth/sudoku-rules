---
format: open-rules
title: Little Killer Tango
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7rv0xx0wno
case: https://sudoku-sleuth.com/cases/little-killer-tango
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3-r8c3 total 12 connected true
cage-2: cage r2c3-r3c2-r3c3 total 11 connected true
cage-3: cage r7c7-r7c8-r8c7 total 11 connected true
cage-4: cage r2c7-r3c7-r3c8 total 10 connected true
kropki-1: kropki r8c7-r9c7 colour "white"
kropki-2: kropki r2c8-r3c8 colour "white"
kropki-3: kropki r7c2-r8c2 colour "white"
kropki-4: kropki r1c5-r1c6 colour "white"
little-killer-1: little-killer r6c1-r7c2-r8c3-r9c4 sum 6
little-killer-2: little-killer r1c4-r2c3-r3c2-r4c1 sum 7
little-killer-3: little-killer r4c9-r3c8-r2c7-r1c6 sum 6
little-killer-4: little-killer r9c6-r8c7-r7c8-r6c9 sum 8
little-killer-5: little-killer r7c1-r8c2-r9c3 sum 16
little-killer-6: little-killer r3c9-r2c8-r1c7 sum 18
little-killer-7: little-killer r1c3-r2c2-r3c1 sum 12
little-killer-8: little-killer r9c7-r8c8-r7c9 sum 13
little-killer-9: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 22
little-killer-10: little-killer r6c9-r5c8-r4c7-r3c6-r2c5-r1c4 sum 36
little-killer-11: little-killer r9c4-r8c5-r7c6-r6c7-r5c8-r4c9 sum 25
little-killer-12: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 21
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

- Difference dots; cells separated by a white dot contain consecutive digits.
