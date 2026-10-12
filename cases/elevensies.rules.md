---
format: open-rules
title: Elevensies
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wwi9kbckqb
case: https://sudoku-sleuth.com/cases/elevensies
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 11 connected true
cage-2: cage r1c4-r1c5-r2c4 total 11 connected true
cage-3: cage r1c7-r1c8-r2c7 total 11 connected true
cage-4: cage r4c1-r4c2-r5c1 total 11 connected true
cage-5: cage r4c4-r4c5-r5c4 total 11 connected true
cage-6: cage r4c7-r4c8-r5c7 total 11 connected true
cage-7: cage r7c1-r7c2-r8c1 total 11 connected true
cage-8: cage r7c4-r7c5-r8c4 total 11 connected true
cage-9: cage r7c7-r7c8-r8c7 total 11 connected true
cage-10: cage r2c3-r3c2-r3c3 total 11 connected true
cage-11: cage r5c6-r6c5-r6c6 total 11 connected true
cage-12: cage r8c9-r9c8-r9c9 total 11 connected true
cage-13: cage r2c9-r3c8-r3c9 total 11 connected true
cage-14: cage r8c3-r9c3 total 11 connected true
cage-15: cage r9c1-r9c2 total 11 connected true
cage-16: cage r9c4-r9c5 total 11 connected true
cage-17: cage r5c8-r5c9 total 11 connected true
cage-18: cage r3c6-r4c6 total 11 connected true
cage-19: cage r1c6-r2c6 total 11 connected true
kropki-1: kropki r4c8-r4c9 colour "black"
kropki-2: kropki r5c4-r6c4 colour "black"
kropki-3: kropki r6c5-r6c6 colour "black"
kropki-4: kropki r6c9-r7c9 colour "black"
kropki-5: kropki r9c8-r9c9 colour "black"
kropki-6: kropki r2c6-r2c7 colour "black"
kropki-7: kropki r2c8-r3c8 colour "black"
kropki-8: kropki r2c3-r2c4 colour "black"
kropki-9: kropki r2c1-r3c1 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
