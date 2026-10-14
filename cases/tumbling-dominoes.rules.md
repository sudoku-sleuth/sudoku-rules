---
format: open-rules
title: Tumbling Dominoes
setter: sujoyku
source: https://sudokupad.app/y0l5zsdss5
case: https://sudoku-sleuth.com/cases/tumbling-dominoes
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4c1f9d262b4c1f8df28258aa4def21ad
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2 total 8 connected true
cage-2: cage r2c4-r2c5 total 8 connected true
cage-3: cage r2c7-r2c8 total 7 connected true
cage-4: cage r1c2-r1c3 total 13 connected true
cage-5: cage r1c5-r1c6 total 9 connected true
cage-6: cage r1c8-r1c9 total 6 connected true
cage-7: cage r3c4-r4c4 total 10 connected true
cage-8: cage r3c1-r4c1 total 11 connected true
cage-9: cage r3c7-r4c7 total 9 connected true
cage-10: cage r5c2-r5c3 total 12 connected true
cage-11: cage r5c5-r5c6 total 12 connected true
cage-12: cage r5c8-r5c9 total 13 connected true
cage-13: cage r6c1-r6c2 total 14 connected true
cage-14: cage r6c4-r6c5 total 11 connected true
cage-15: cage r6c7-r6c8 total 10 connected true
cage-16: cage r9c4-r9c5 total 10 connected true
cage-17: cage r8c6-r8c7 total 10 connected true
cage-18: cage r7c9-r8c9 total 8 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage must sum to the clue in the top left.
