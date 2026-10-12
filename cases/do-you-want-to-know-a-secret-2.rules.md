---
format: open-rules
title: Do You Want to Know a Secret?2
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dlsbir3zel
case: https://sudoku-sleuth.com/cases/do-you-want-to-know-a-secret-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 9 connected true
cage-2: cage r1c2-r1c3 total 9 connected true
cage-3: cage r2c3-r3c3 total 9 connected true
cage-4: cage r3c1-r3c2 total 9 connected true
cage-5: cage r1c4-r1c5 total 8 connected true
cage-6: cage r1c6-r2c6 total 8 connected true
cage-7: cage r3c5-r3c6 total 8 connected true
cage-8: cage r2c4-r3c4 total 13 connected true
cage-9: cage r1c7-r1c8 total 7 connected true
cage-10: cage r2c7-r3c7 total 7 connected true
cage-11: cage r2c9-r3c9 total 7 connected true
cage-12: cage r3c8-r4c8 total 17 connected true
cage-13: cage r4c9-r5c9 total 15 connected true
cage-14: cage r6c8-r6c9 total 5 connected true
cage-15: cage r5c7-r6c7 total 5 connected true
cage-16: cage r4c6-r4c7 total 12 connected true
cage-17: cage r5c6-r6c6 total 10 connected true
cage-18: cage r6c4-r6c5 total 12 connected true
cage-19: cage r4c4-r4c5 total 10 connected true
cage-20: cage r5c3-r5c4 total 10 connected true
cage-21: cage r4c2-r4c3 total 3 connected true
cage-22: cage r5c1-r6c1 total 13 connected true
cage-23: cage r6c3-r7c3 total 12 connected true
cage-24: cage r7c1-r7c2 total 8 connected true
cage-25: cage r9c1-r9c2 total 8 connected true
cage-26: cage r9c3-r9c4 total 11 connected true
cage-27: cage r8c6-r9c6 total 13 connected true
cage-28: cage r7c6-r7c7 total 15 connected true
cage-29: cage r8c9-r9c9 total 9 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
