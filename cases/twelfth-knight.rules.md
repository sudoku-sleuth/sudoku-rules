---
format: open-rules
title: Twelfth Knight
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/twelfth-knight
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 7 connected true
cage-2: cage r2c3-r2c4-r3c2-r3c3-r4c2 total 31 connected true
cage-3: cage r5c1-r5c2-r6c2 total 23 connected true
cage-4: cage r1c5-r2c5-r2c6 total 21 connected true
cage-5: cage r1c8-r2c8-r2c9 total 19 connected true
cage-6: cage r8c1-r8c2-r9c2 total 21 connected true
cage-7: cage r6c3-r7c3-r7c4 total 16 connected true
cage-8: cage r8c8-r8c9-r9c8 total 8 connected true
cage-9: cage r5c9-r6c8-r6c9 total 23 connected true
cage-10: cage r8c6-r9c5-r9c6 total 24 connected true
cage-11: cage r4c5-r5c4-r5c5 total 18 connected true
cage-12: cage r6c6-r6c7-r7c6 total 6 connected true
anti-knight
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Digits in cages marked by dashed lines cannot repeat and must sum to the number shown in the upper left corner of the cage. 

Cells separated by a chess knight's move cannot contain the same digit.
