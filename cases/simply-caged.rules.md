---
format: open-rules
title: Simply Caged
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/sn2go3rexq
case: https://sudoku-sleuth.com/cases/simply-caged
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c3-r4c3 total 8 connected true
cage-2: cage r7c2-r7c3-r7c4 total 8 connected true
cage-3: cage r6c7-r7c7-r8c7 total 8 connected true
cage-4: cage r3c6-r3c7-r3c8 total 8 connected true
cage-5: cage r4c4-r4c5-r5c4 total 8 connected true
cage-6: cage r5c6-r6c5-r6c6 total 13 connected true
cage-7: cage r8c3-r9c3 total 9 connected true
cage-8: cage r1c7-r2c7 total 17 connected true
cage-9: cage r7c8-r7c9 total 8 connected true
cage-10: cage r3c1-r3c2 total 10 connected true
cage-11: cage r7c6-r8c6 total 12 connected true
cage-12: cage r4c2-r5c2 total 15 connected true
cage-13: cage r2c4-r3c4 total 16 connected true
cage-14: cage r9c5-r9c6-r9c7 total 9 connected true
cage-15: cage r1c3-r1c4-r1c5 total 15 connected true
cage-16: cage r3c9-r4c9-r5c9 total 11 connected true
cage-17: cage r5c1-r6c1-r7c1 total 12 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- In cages digits cannot repeat and must sum to the value given in the upper left corner of the cage.
