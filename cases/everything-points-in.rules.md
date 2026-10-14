---
format: open-rules
title: Everything Points In
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/e2vwqh7yqi
case: https://sudoku-sleuth.com/cases/everything-points-in
library: https://rules.sudoku-sleuth.com/
status: read
exported: f90ee156a7d3c92c37e61073dcc4004b
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 8 connected true
cage-2: cage r7c7-r7c8-r8c7 total 8 connected true
cage-3: cage r2c7-r3c7-r3c8 total 21 connected true
cage-4: cage r7c2-r7c3-r8c3 total 21 connected true
cage-5: cage r3c4-r4c3-r4c4 total 21 connected true
cage-6: cage r6c6-r6c7-r7c6 total 21 connected true
cage-7: cage r6c3-r6c4-r7c4 total 8 connected true
cage-8: cage r3c6-r4c6-r4c7 total 8 connected true
cage-9: cage r1c8-r2c8-r2c9 total 9 connected true
cage-10: cage r1c2-r2c1-r2c2 total 22 connected true
cage-11: cage r8c1-r8c2-r9c2 total 9 connected true
cage-12: cage r8c8-r8c9-r9c8 total 22 connected true
cage-13: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 25 connected true
kropki-1: kropki r1c2-r2c2 white
kropki-2: kropki r8c8-r9c8 white
kropki-3: kropki r3c7-r3c8 white
kropki-4: kropki r7c2-r7c3 white
kropki-5: kropki r6c3-r6c4 white
kropki-6: kropki r3c6-r4c6 white
kropki-7: kropki r4c3-r4c4 white
kropki-8: kropki r6c6-r7c6 white
kropki-9: kropki r6c6-r6c7 white
kropki-10: kropki r5c5-r6c5 white
kropki-11: kropki r4c5-r4c6 white
kropki-12: kropki r4c7-r4c8 white
kropki-13: kropki r2c3-r3c3 black
kropki-14: kropki r7c7-r8c7 black
kropki-15: kropki r5c4-r5c5 black
```

- Normal sudoku rules apply.
- Digits in cages cannot repeat and sum to the total given 
in the top left corner of the cage.
- Digits separated by a white dot are consecutive.  Digits separated by a black dot are in a 1:2 ratio.
