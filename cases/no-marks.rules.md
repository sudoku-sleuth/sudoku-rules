---
format: open-rules
title: No Marks
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/no-marks
library: https://rules.sudoku-sleuth.com/
status: read
givens: 8.......3..7.1.6...........1.83.45.2.5..9..3.4.35.68.9...........1.4.2..9.......6
exported: 6ce694a1d80524b4680c91b58ebfbcf0
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2 total 3 connected true
cage-2: cage r2c2-r2c3 total 10 connected true
cage-3: cage r1c3-r1c4 total 16 connected true
cage-4: cage r1c6-r1c7 total 3 connected true
cage-5: cage r2c7-r2c8 total 8 connected true
cage-6: cage r3c8-r3c9 total 17 connected true
cage-7: cage r3c4-r4c4 total 7 connected true
cage-8: cage r3c6-r4c6 total 9 connected true
cage-9: cage r7c1-r7c2 total 5 connected true
cage-10: cage r7c8-r7c9 total 5 connected true
cage-11: cage r8c2-r8c3 total 7 connected true
cage-12: cage r8c7-r8c8 total 10 connected true
cage-13: cage r9c3-r9c4 total 6 connected true
cage-14: cage r9c6-r9c7 total 4 connected true
cage-15: cage r6c4-r7c4 total 11 connected true
cage-16: cage r6c6-r7c6 total 13 connected true
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Inside cages marked by dashed lines, digits must sum to the number shown in the upper left corner of the cage.
