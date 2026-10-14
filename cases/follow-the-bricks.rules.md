---
format: open-rules
title: Follow the Bricks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0cw2bl7f29
case: https://sudoku-sleuth.com/cases/follow-the-bricks
library: https://rules.sudoku-sleuth.com/
status: read
exported: d87af3ae4a225d63cfdfd4a292a8a03d
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3 total 5 connected true
cage-2: cage r1c3-r2c3 total 6 connected true
cage-3: cage r3c8-r3c9 total 5 connected true
cage-4: cage r2c7-r3c7 total 7 connected true
cage-5: cage r8c7-r9c7 total 5 connected true
cage-6: cage r7c7-r7c8 total 5 connected true
cage-7: cage r7c1-r7c2 total 5 connected true
cage-8: cage r7c3-r8c3 total 8 connected true
cage-9: cage r5c3-r5c4 total 5 connected true
cage-10: cage r6c5-r7c5 total 7 connected true
cage-11: cage r5c6-r5c7 total 9 connected true
cage-12: cage r3c5-r4c5 total 10 connected true
cage-13: cage r8c9-r9c9 total 13 connected true
cage-14: cage r1c8-r1c9 total 13 connected true
cage-15: cage r1c1-r2c1 total 11 connected true
cage-16: cage r9c1-r9c2 total 11 connected true
cage-17: cage r7c4-r8c4 total 11 connected true
cage-18: cage r2c6-r3c6 total 9 connected true
cage-19: cage r6c6-r6c7 total 12 connected true
cage-20: cage r4c3-r4c4 total 15 connected true
```

Standard sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
