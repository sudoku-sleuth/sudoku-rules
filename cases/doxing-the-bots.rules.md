---
format: open-rules
title: Doxing the Bots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mxxvrqex14
case: https://sudoku-sleuth.com/cases/doxing-the-bots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c9 total 3 connected true
cage-2: cage r8c1-r9c1 total 3 connected true
cage-3: cage r1c1-r2c1 total 14 connected true
cage-4: cage r8c9-r9c9 total 12 connected true
cage-5: cage r9c3-r9c4 total 10 connected true
cage-6: cage r1c6-r1c7 total 10 connected true
kropki-1: kropki r6c7-r7c7 colour "white"
kropki-2: kropki r4c7-r5c7 colour "white"
kropki-3: kropki r3c3-r4c3 colour "white"
kropki-4: kropki r6c2-r7c2 colour "white"
kropki-5: kropki r4c3-r5c3 colour "white"
kropki-6: kropki r6c1-r6c2 colour "white"
kropki-7: kropki r8c5-r9c5 colour "white"
kropki-8: kropki r1c3-r1c4 colour "black"
kropki-9: kropki r1c4-r1c5 colour "black"
kropki-10: kropki r9c6-r9c7 colour "black"
kropki-11: kropki r9c5-r9c6 colour "black"
kropki-12: kropki r3c1-r4c1 colour "black"
kropki-13: kropki r5c1-r6c1 colour "black"
kropki-14: kropki r4c9-r5c9 colour "black"
kropki-15: kropki r6c9-r7c9 colour "black"
kropki-16: kropki r8c3-r9c3 colour "black"
kropki-17: kropki r2c7-r3c7 colour "black"
kropki-18: kropki r8c8-r9c8 colour "black"
kropki-19: kropki r1c2-r2c2 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
