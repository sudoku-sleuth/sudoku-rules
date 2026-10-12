---
format: open-rules
title: Dots and Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rqd2h8jifu
case: https://sudoku-sleuth.com/cases/dots-and-cages
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 30 connected true
cage-2: cage r6c6-r6c7-r7c6-r7c7 total 30 connected true
cage-3: cage r1c2-r2c2-r2c3 total 7 connected true
cage-4: cage r1c8-r2c7-r2c8-r2c9-r3c8 total 35 connected true
cage-5: cage r7c2-r8c1-r8c2-r8c3-r9c2 total 35 connected true
cage-6: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 15 connected true
cage-7: cage r8c7-r8c8-r9c8 total 16 connected true
kropki-1: kropki r2c1-r2c2 colour "white"
kropki-2: kropki r2c2-r2c3 colour "white"
kropki-3: kropki r2c8-r3c8 colour "white"
kropki-4: kropki r2c8-r2c9 colour "white"
kropki-5: kropki r8c1-r8c2 colour "white"
kropki-6: kropki r7c2-r8c2 colour "white"
kropki-7: kropki r9c1-r9c2 colour "white"
kropki-8: kropki r5c6-r5c7 colour "white"
kropki-9: kropki r5c7-r6c7 colour "white"
kropki-10: kropki r8c8-r9c8 colour "white"
kropki-11: kropki r3c6-r3c7 colour "white"
kropki-12: kropki r4c3-r5c3 colour "black"
kropki-13: kropki r5c3-r5c4 colour "black"
kropki-14: kropki r4c4-r4c5 colour "black"
kropki-15: kropki r2c6-r2c7 colour "black"
kropki-16: kropki r2c7-r3c7 colour "black"
kropki-17: kropki r7c3-r8c3 colour "black"
kropki-18: kropki r8c3-r8c4 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
