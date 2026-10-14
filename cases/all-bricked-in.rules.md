---
format: open-rules
title: All Bricked In
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jhi6t6ce5r
case: https://sudoku-sleuth.com/cases/all-bricked-in
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0e72cc4cafa4485fb31f289d3d486682
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4 total 5 connected true
cage-2: cage r4c3-r4c4 total 6 connected true
cage-3: cage r3c6-r4c6 total 7 connected true
cage-4: cage r3c7-r4c7 total 8 connected true
cage-5: cage r6c6-r6c7 total 15 connected true
cage-6: cage r7c6-r7c7 total 14 connected true
cage-7: cage r6c4-r7c4 total 13 connected true
cage-8: cage r6c3-r7c3 total 12 connected true
cage-9: cage r6c1-r6c2 total 8 connected true
cage-10: cage r7c1-r7c2 total 9 connected true
cage-11: cage r6c8-r6c9 total 7 connected true
cage-12: cage r7c8-r7c9 total 8 connected true
cage-13: cage r1c3-r2c3 total 12 connected true
cage-14: cage r1c4-r2c4 total 13 connected true
cage-15: cage r8c3-r9c3 total 10 connected true
cage-16: cage r8c4-r9c4 total 9 connected true
cage-17: cage r1c6-r2c6 total 10 connected true
cage-18: cage r1c7-r2c7 total 9 connected true
cage-19: cage r8c6-r9c6 total 9 connected true
cage-20: cage r8c7-r9c7 total 11 connected true
cage-21: cage r3c1-r3c2 total 12 connected true
cage-22: cage r4c1-r4c2 total 13 connected true
cage-23: cage r3c8-r3c9 total 10 connected true
cage-24: cage r4c8-r4c9 total 14 connected true
cage-25: cage r8c9-r9c9 total 8 connected true
cage-26: cage r1c1-r2c1 total 5 connected true
cage-27: cage r8c1-r9c1 total 7 connected true
cage-28: cage r1c9-r2c9 total 11 connected true
anti-king
```

- Normal sudoku rule apply.
- Antiking: Digits a chess king's move apart must be different.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
