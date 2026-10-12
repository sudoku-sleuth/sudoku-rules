---
format: open-rules
title: Centering Practice
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/coqkbex7db
case: https://sudoku-sleuth.com/cases/centering-practice
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 6 connected true
cage-2: cage r1c7-r1c8-r1c9 total 17 connected true
cage-3: cage r1c4-r2c4 total 7 connected true
cage-4: cage r1c6-r2c6 total 9 connected true
cage-5: cage r3c4-r3c5-r3c6 total 12 connected true
cage-6: cage r3c1-r4c1-r4c2 total 9 connected true
cage-7: cage r3c9-r4c8-r4c9 total 9 connected true
cage-8: cage r5c2-r5c3-r5c4 total 11 connected true
cage-9: cage r5c6-r5c7-r5c8 total 22 connected true
cage-10: cage r5c5-r6c5-r7c4-r7c5-r7c6 total 20 connected true
cage-11: cage r6c1-r6c2-r6c3-r7c2 total 24 connected true
cage-12: cage r6c7-r6c8-r6c9-r7c8 total 16 connected true
cage-13: cage r8c3-r9c3-r9c4 total 12 connected true
cage-14: cage r8c7-r9c6-r9c7 total 12 connected true
kropki-1: kropki r1c1-r1c2 colour "black"
kropki-2: kropki r1c8-r1c9 colour "black"
kropki-3: kropki r3c4-r4c4 colour "black"
kropki-4: kropki r3c6-r4c6 colour "black"
kropki-5: kropki r4c2-r5c2 colour "black"
kropki-6: kropki r4c8-r5c8 colour "black"
kropki-7: kropki r6c5-r7c5 colour "black"
kropki-8: kropki r7c2-r8c2 colour "black"
kropki-9: kropki r7c8-r8c8 colour "black"
```

- Normal sudoku rules apply.
- Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Digits separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
