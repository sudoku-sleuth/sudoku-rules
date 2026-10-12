---
format: open-rules
title: Tidal Flow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/avk21tzyd0
case: https://sudoku-sleuth.com/cases/tidal-flow
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r1c5 total 10 connected true
cage-2: cage r2c9-r3c9-r4c9-r5c9 total 10 connected true
cage-3: cage r9c5-r9c6-r9c7-r9c8 total 10 connected true
cage-4: cage r5c1-r6c1-r7c1-r8c1 total 10 connected true
cage-5: cage r2c3-r2c4-r2c5-r2c6 total 30 connected true
cage-6: cage r3c8-r4c8-r5c8-r6c8 total 30 connected true
cage-7: cage r8c4-r8c5-r8c6-r8c7 total 30 connected true
cage-8: cage r4c2-r5c2-r6c2-r7c2 total 30 connected true
cage-9: cage r3c4-r3c5-r3c6-r3c7 total 15 connected true
cage-10: cage r4c7-r5c7-r6c7-r7c7 total 15 connected true
cage-11: cage r7c3-r7c4-r7c5-r7c6 total 15 connected true
cage-12: cage r3c3-r4c3-r5c3-r6c3 total 15 connected true
cage-13: cage r1c7-r1c8-r1c9 total 20 connected true
cage-14: cage r9c1-r9c2-r9c3 total 20 connected true
cage-15: cage r1c1-r2c1-r3c1 total 21 connected true
cage-16: cage r7c9-r8c9-r9c9 total 21 connected true
kropki-1: kropki r8c5-r8c6 colour "white"
kropki-2: kropki r8c6-r8c7 colour "white"
kropki-3: kropki r3c4-r4c4 colour "black"
kropki-4: kropki r6c6-r7c6 colour "black"
kropki-5: kropki r4c1-r5c1 colour "black"
kropki-6: kropki r4c7-r4c8 colour "black"
kropki-7: kropki r4c3-r4c4 colour "black"
kropki-8: kropki r5c3-r5c4 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
