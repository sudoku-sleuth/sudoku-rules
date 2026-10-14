---
format: open-rules
title: Corner Gas
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/22xq0lqxcv
case: https://sudoku-sleuth.com/cases/corner-gas
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=1 r2c5=9 r3c3=1 r5c2=7 r6c6=2 r7c3=8 r9c5=5 r9c9=3
exported: d4bd3e514cc2cf5062bb82eb4d738617
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 9 connected true
cage-2: cage r1c4-r1c5-r2c4 total 9 connected true
cage-3: cage r1c7-r1c8-r2c7 total 9 connected true
cage-4: cage r4c1-r4c2-r5c1 total 9 connected true
cage-5: cage r7c1-r7c2-r8c1 total 9 connected true
cage-6: cage r4c4-r4c5-r5c4 total 9 connected true
cage-7: cage r4c7-r4c8-r5c7 total 9 connected true
cage-8: cage r7c4-r7c5-r8c4 total 9 connected true
cage-9: cage r7c7-r7c8-r8c7 total 9 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
