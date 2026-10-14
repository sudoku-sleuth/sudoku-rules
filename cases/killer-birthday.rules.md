---
format: open-rules
title: Killer Birthday
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/tbde0obv24
case: https://sudoku-sleuth.com/cases/killer-birthday
library: https://rules.sudoku-sleuth.com/
status: read
givens: 52.............52............52...................52............52.............52
exported: 298863abee499d462131ba47a9e14d83
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2-r3c1-r3c2 total 14 connected true
cage-2: cage r3c3-r3c4-r4c3-r4c4 total 22 connected true
cage-3: cage r2c5-r3c5 total 11 connected true
cage-4: cage r2c6-r3c6 total 10 connected true
cage-5: cage r5c1-r5c2 total 8 connected true
cage-6: cage r7c1-r8c1 total 7 connected true
cage-7: cage r7c4-r7c5-r7c6 total 10 connected true
cage-8: cage r8c2-r9c2-r9c3 total 13 connected true
cage-9: cage r8c7-r9c7-r9c8 total 12 connected true
cage-10: cage r8c4-r9c4 total 7 connected true
cage-11: cage r8c6-r9c6 total 11 connected true
cage-12: cage r1c4-r1c5-r2c4 total 8 connected true
cage-13: cage r1c9-r2c9 total 10 connected true
cage-14: cage r2c7-r2c8-r3c7-r3c8 total 12 connected true
cage-15: cage r5c4-r5c5 total 11 connected true
cage-16: cage r4c8-r4c9 total 7 connected true
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9 without repetition.

Normal killer cage rules apply: digits inside a cage marked by a dashed line cannot repeat within the cage and must sum to the value shown in the upper left corner of the cage.
