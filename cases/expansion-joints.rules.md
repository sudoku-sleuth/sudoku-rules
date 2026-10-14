---
format: open-rules
title: Expansion Joints
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rafpicrwac
case: https://sudoku-sleuth.com/cases/expansion-joints
library: https://rules.sudoku-sleuth.com/
status: read
exported: b3ab7c74c092640ff3f29becd0f62ef9
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2-r4c3 total 8 connected true
cage-2: cage r3c3-r3c4-r4c4 total 22 connected true
cage-3: cage r3c6-r4c6-r4c7 total 22 connected true
cage-4: cage r3c7-r3c8-r4c8 total 8 connected true
cage-5: cage r6c4-r7c3-r7c4 total 8 connected true
cage-6: cage r6c2-r6c3-r7c2 total 22 connected true
cage-7: cage r6c6-r7c6-r7c7 total 8 connected true
cage-8: cage r6c7-r6c8-r7c8 total 22 connected true
cage-9: cage r5c3-r5c4 total 8 connected true
cage-10: cage r5c6-r5c7 total 8 connected true
cage-11: cage r3c5-r4c5 total 9 connected true
cage-12: cage r6c5-r7c5 total 9 connected true
cage-13: cage r5c8-r5c9 total 13 connected true
cage-14: cage r5c1-r5c2 total 8 connected true
cage-15: cage r8c5-r9c5 total 13 connected true
cage-16: cage r1c5-r2c5 total 6 connected true
cage-17: cage r1c8-r1c9 total 9 connected true
cage-18: cage r8c1-r9c1 total 9 connected true
kropki-1: kropki r5c2-r5c3 white
kropki-2: kropki r5c7-r5c8 white
kropki-3: kropki r7c2-r8c2 white
kropki-4: kropki r2c2-r3c2 white
kropki-5: kropki r7c8-r8c8 white
kropki-6: kropki r6c8-r6c9 white
```

**Standard Sudoku, Cages, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Consecutive Pairs: Digits separated by a white dot are consecutive. Not all dots are necessarily given.
