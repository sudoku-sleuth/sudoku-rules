---
format: open-rules
title: Hamilton, Take a Walk!
setter: George Washington (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/u2ws5wld24
case: https://sudoku-sleuth.com/cases/hamilton-take-a-walk
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 5 connected true
cage-2: cage r1c8-r1c9 total 5 connected true
cage-3: cage r5c1-r6c1 total 4 connected true
cage-4: cage r4c9-r5c9 total 4 connected true
cage-5: cage r9c8-r9c9 total 8 connected true
cage-6: cage r9c1-r9c2 total 6 connected true
cage-7: cage r4c4-r4c5-r4c6 total 7 connected true
cage-8: cage r6c4-r6c5-r6c6 total 14 connected true
cage-9: cage r1c5-r2c5-r3c5 total 9 connected true
cage-10: cage r7c5-r8c5-r9c5 total 21 connected true
cage-11: cage r5c3-r5c4 total 12 connected true
cage-12: cage r5c6-r5c7 total 15 connected true
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r2c1-r3c1 colour "white"
kropki-3: kropki r3c8-r4c8 colour "white"
kropki-4: kropki r4c5-r4c6 colour "white"
kropki-5: kropki r6c2-r7c2 colour "white"
kropki-6: kropki r8c5-r8c6 colour "white"
kropki-7: kropki r8c8-r8c9 colour "white"
kropki-8: kropki r8c9-r9c9 colour "white"
kropki-9: kropki r3c2-r4c2 colour "black"
kropki-10: kropki r2c4-r2c5 colour "black"
kropki-11: kropki r1c9-r2c9 colour "black"
kropki-12: kropki r6c4-r6c5 colour "black"
kropki-13: kropki r6c8-r7c8 colour "black"
kropki-14: kropki r9c1-r9c2 colour "black"
```

- Normal sudoku rules apply.
- Digits in cages must sum to the number in the top left corner of the cage.
- Cells separated by a black dot have a 1:2 ratio. Cells separated by a white dot must be consecutive. Not all dots are necessarily given.
