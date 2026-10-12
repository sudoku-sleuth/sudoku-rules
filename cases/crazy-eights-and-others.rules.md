---
format: open-rules
title: Crazy Eights and Others
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1cbfr84g8d
case: https://sudoku-sleuth.com/cases/crazy-eights-and-others
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r3c4 total 8 connected true
cage-2: cage r2c7-r3c7-r4c7 total 8 connected true
cage-3: cage r7c6-r7c7-r7c8 total 8 connected true
cage-4: cage r6c3-r7c3-r8c3 total 8 connected true
cage-5: cage r4c1-r4c2-r4c3 total 8 connected true
cage-6: cage r6c7-r6c8-r6c9 total 8 connected true
cage-7: cage r7c4-r8c4-r9c4 total 8 connected true
cage-8: cage r1c6-r2c6-r3c6 total 8 connected true
cage-9: cage r8c8-r8c9-r9c8 total 9 connected true
cage-10: cage r1c2-r2c1-r2c2 total 14 connected true
cage-11: cage r1c8-r2c8-r2c9 total 11 connected true
cage-12: cage r8c1-r8c2-r9c2 total 16 connected true
cage-13: cage r7c5-r8c5 total 15 connected true
cage-14: cage r2c5-r3c5 total 15 connected true
cage-15: cage r5c3-r5c4 total 10 connected true
cage-16: cage r5c6-r5c7 total 11 connected true
cage-17: cage r5c2-r6c2 total 15 connected true
cage-18: cage r4c8-r5c8 total 15 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
