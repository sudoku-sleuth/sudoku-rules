---
format: open-rules
title: A Killer in the Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/lxgv0nky54
case: https://sudoku-sleuth.com/cases/a-killer-in-the-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: b0ae125263b30360f74168a7f50067f2
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 7 connected true
cage-2: cage r2c7-r3c7-r3c8 total 23 connected true
cage-3: cage r7c7-r7c8-r8c7 total 7 connected true
cage-4: cage r7c2-r7c3-r8c3 total 23 connected true
cage-5: cage r8c1-r8c2-r9c2 total 6 connected true
cage-6: cage r1c2-r2c1-r2c2 total 24 connected true
cage-7: cage r1c8-r2c8-r2c9 total 7 connected true
cage-8: cage r8c8-r8c9-r9c8 total 14 connected true
cage-9: cage r5c1-r5c2-r5c3 total 10 connected true
cage-10: cage r5c7-r5c8-r5c9 total 14 connected true
cage-11: cage r1c5-r2c5-r3c5 total 20 connected true
cage-12: cage r7c5-r8c5-r9c5 total 6 connected true
cage-13: cage r3c4-r4c3-r4c4 total 7 connected true
cage-14: cage r6c6-r6c7-r7c6 total 8 connected true
cage-15: cage r8c4-r9c3-r9c4 total 18 connected true
cage-16: cage r1c6-r1c7-r2c6 total 10 connected true
anti-knight
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
