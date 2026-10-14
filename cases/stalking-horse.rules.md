---
format: open-rules
title: Stalking Horse
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/q30igqmf81
case: https://sudoku-sleuth.com/cases/stalking-horse
library: https://rules.sudoku-sleuth.com/
status: read
exported: ace0a1ffa6113f41b8da08ee56bd6c8f
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5 total 8 connected true
cage-2: cage r7c5-r7c6-r7c7 total 8 connected true
cage-3: cage r3c7-r4c7-r5c7 total 9 connected true
cage-4: cage r5c3-r6c3-r7c3 total 9 connected true
cage-5: cage r8c1-r8c2-r9c1-r9c2 total 12 connected true
cage-6: cage r1c1-r1c2-r2c1-r2c2 total 12 connected true
cage-7: cage r1c8-r1c9-r2c8-r2c9 total 15 connected true
cage-8: cage r8c8-r8c9-r9c8-r9c9 total 20 connected true
cage-9: cage r6c6-r6c7 total 9 connected true
cage-10: cage r6c4-r7c4 total 11 connected true
cage-11: cage r4c3-r4c4 total 12 connected true
cage-12: cage r3c6-r4c6 total 6 connected true
cage-13: cage r9c4-r9c5 total 3 connected true
cage-14: cage r4c9-r5c9 total 7 connected true
anti-knight
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
