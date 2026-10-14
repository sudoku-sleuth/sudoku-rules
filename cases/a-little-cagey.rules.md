---
format: open-rules
title: A Little Cagey
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vmwl2wcedr
case: https://sudoku-sleuth.com/cases/a-little-cagey
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=3 r5c1=5 r9c5=6
exported: 686a2077353797720f15f8f58d7e037d
---

```rules
sudoku 9x9
cage-1: cage r3c4-r4c3-r4c4 total 6 connected true
cage-2: cage r3c6-r3c7-r4c7 total 7 connected true
cage-3: cage r6c6-r6c7-r7c6 total 6 connected true
cage-4: cage r6c3-r7c3-r7c4 total 7 connected true
cage-5: cage r2c3-r3c2-r3c3 total 12 connected true
cage-6: cage r2c7-r2c8-r3c8 total 10 connected true
cage-7: cage r7c7-r7c8-r8c7 total 14 connected true
cage-8: cage r7c2-r8c2-r8c3 total 12 connected true
cage-9: cage r5c4-r6c4-r6c5 total 15 connected true
cage-10: cage r4c5-r4c6-r5c6 total 24 connected true
cage-11: cage r1c2-r2c1-r2c2 total 15 connected true
cage-12: cage r1c8-r1c9-r2c9 total 15 connected true
cage-13: cage r8c8-r8c9-r9c8 total 13 connected true
cage-14: cage r8c1-r9c1-r9c2 total 16 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
