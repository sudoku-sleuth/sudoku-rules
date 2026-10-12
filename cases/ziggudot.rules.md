---
format: open-rules
title: Ziggudot
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hd6iie8h00
case: https://sudoku-sleuth.com/cases/ziggudot
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3-r5c3-r6c3 total 12 connected true
cage-2: cage r3c4-r3c5-r3c6-r3c7 total 13 connected true
cage-3: cage r4c7-r5c7-r6c7-r7c7 total 12 connected true
cage-4: cage r8c8-r8c9-r9c8-r9c9 total 14 connected true
cage-5: cage r1c8-r1c9-r2c8-r2c9 total 11 connected true
cage-6: cage r8c1-r8c2-r9c1-r9c2 total 11 connected true
cage-7: cage r7c3-r7c4-r7c5-r7c6 total 13 connected true
cage-8: cage r1c1-r1c2-r2c1-r2c2 total 14 connected true
cage-9: cage r6c1-r7c1 total 13 connected true
cage-10: cage r5c2-r6c2 total 13 connected true
cage-11: cage r5c8-r6c8 total 13 connected true
cage-12: cage r6c9-r7c9 total 13 connected true
cage-13: cage r2c3-r2c4 total 12 connected true
cage-14: cage r2c6-r2c7 total 12 connected true
cage-15: cage r1c4-r1c5-r1c6 total 20 connected true
cage-16: cage r9c3-r9c4 total 13 connected true
cage-17: cage r9c6-r9c7 total 13 connected true
cage-18: cage r8c4-r8c5-r8c6 total 18 connected true
kropki-1: kropki r1c3-r2c3 colour "black"
kropki-2: kropki r8c6-r8c7 colour "black"
kropki-3: kropki r5c8-r5c9 colour "black"
kropki-4: kropki r6c2-r6c3 colour "black"
kropki-5: kropki r2c5-r3c5 colour "black"
kropki-6: kropki r7c5-r8c5 colour "black"
kropki-7: kropki r1c1-r1c2 colour "black"
kropki-8: kropki r9c8-r9c9 colour "black"
kropki-9: kropki r5c3-r6c3 colour "black"
```

-Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
-Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
-Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
