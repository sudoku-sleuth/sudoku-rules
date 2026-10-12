---
format: open-rules
title: A Dot to a Kill
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gv27dpvucw
case: https://sudoku-sleuth.com/cases/a-dot-to-a-kill
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 8 connected true
cage-2: cage r1c7-r2c7-r3c7 total 6 connected true
cage-3: cage r9c5-r9c6-r9c7 total 7 connected true
cage-4: cage r7c3-r8c3-r9c3 total 9 connected true
cage-5: cage r6c1-r6c2-r6c3 total 6 connected true
cage-6: cage r4c5-r5c5-r6c5 total 8 connected true
cage-7: cage r7c7-r7c8-r7c9 total 8 connected true
cage-8: cage r4c9-r5c9-r6c9 total 9 connected true
cage-9: cage r4c2-r4c3-r4c4 total 13 connected true
cage-10: cage r3c2-r3c3-r3c4 total 24 connected true
cage-11: cage r1c8-r2c8-r3c8 total 22 connected true
cage-12: cage r8c2-r9c1-r9c2 total 13 connected true
cage-13: cage r5c3-r5c4 total 13 connected true
cage-14: cage r4c7-r5c7 total 15 connected true
kropki r3c5-r4c5 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
