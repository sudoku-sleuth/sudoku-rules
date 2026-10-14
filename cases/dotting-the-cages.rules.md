---
format: open-rules
title: Dotting the Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4lcy56hq73
case: https://sudoku-sleuth.com/cases/dotting-the-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0b2ecc95aa9b900f341f792d6e2cb578
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 8 connected true
cage-2: cage r9c7-r9c8-r9c9 total 8 connected true
cage-3: cage r7c3-r8c3-r9c3 total 8 connected true
cage-4: cage r1c7-r2c7-r3c7 total 8 connected true
cage-5: cage r2c3-r2c4-r3c3-r3c4 total 16 connected true
cage-6: cage r3c8-r3c9-r4c8-r4c9 total 12 connected true
cage-7: cage r7c6-r7c7-r8c6-r8c7 total 16 connected true
cage-8: cage r6c1-r6c2-r7c1-r7c2 total 12 connected true
cage-9: cage r3c5-r3c6-r4c5-r4c6 total 14 connected true
cage-10: cage r6c4-r6c5-r7c4-r7c5 total 21 connected true
cage-11: cage r4c3-r4c4-r5c3-r5c4 total 28 connected true
cage-12: cage r5c6-r5c7-r6c6-r6c7 total 23 connected true
kropki-1: kropki r1c8-r2c8 white
kropki-2: kropki r8c2-r9c2 white
kropki-3: kropki r4c1-r4c2 white
kropki-4: kropki r6c8-r6c9 white
kropki-5: kropki r2c2-r2c3 black
kropki-6: kropki r8c7-r8c8 black
kropki-7: kropki r1c6-r1c7 black
kropki-8: kropki r9c3-r9c4 black
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
