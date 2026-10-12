---
format: open-rules
title: Caged Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f5sljogb7j
case: https://sudoku-sleuth.com/cases/caged-dots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1 total 15 connected true
cage-2: cage r1c7-r1c8-r1c9-r2c9 total 14 connected true
cage-3: cage r8c1-r9c1-r9c2-r9c3 total 23 connected true
cage-4: cage r8c9-r9c7-r9c8-r9c9 total 26 connected true
cage-5: cage r3c9-r4c7-r4c8-r4c9 total 22 connected true
cage-6: cage r3c1-r4c1-r4c2-r4c3 total 15 connected true
cage-7: cage r6c1-r6c2-r6c3-r7c1 total 18 connected true
cage-8: cage r6c4-r7c2-r7c3-r7c4 total 18 connected true
cage-9: cage r3c2-r3c3-r3c4-r4c4 total 21 connected true
cage-10: cage r3c6-r3c7-r3c8-r4c6 total 22 connected true
cage-11: cage r6c7-r6c8-r6c9-r7c9 total 15 connected true
cage-12: cage r6c6-r7c6-r7c7-r7c8 total 24 connected true
kropki-1: kropki r1c9-r2c9 colour "white"
kropki-2: kropki r8c1-r9c1 colour "white"
kropki-3: kropki r3c9-r4c9 colour "white"
kropki-4: kropki r8c8-r8c9 colour "white"
kropki-5: kropki r7c2-r7c3 colour "white"
kropki-6: kropki r3c2-r3c3 colour "white"
kropki-7: kropki r1c2-r1c3 colour "black"
kropki-8: kropki r1c7-r1c8 colour "black"
kropki-9: kropki r1c1-r2c1 colour "black"
kropki-10: kropki r9c2-r9c3 colour "black"
kropki-11: kropki r9c7-r9c8 colour "black"
kropki-12: kropki r6c9-r7c9 colour "black"
kropki-13: kropki r4c2-r4c3 colour "black"
kropki-14: kropki r6c7-r6c8 colour "black"
kropki-15: kropki r8c3-r8c4 colour "black"
kropki-16: kropki r8c6-r8c7 colour "black"
kropki-17: kropki r2c6-r3c6 colour "black"
kropki-18: kropki r3c6-r3c7 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
