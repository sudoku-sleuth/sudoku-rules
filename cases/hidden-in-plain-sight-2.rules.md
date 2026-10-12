---
format: open-rules
title: Hidden in plain sight
setter: Chip Sounder
source: https://sudokupad.app/2923xwhx44
case: https://sudoku-sleuth.com/cases/hidden-in-plain-sight-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r4c3-r4c4-r5c1-r5c2-r5c3-r5c4-r5c5 total 45 connected true
cage-2: cage r6c7-r6c8-r6c9 total 14 connected true
cage-3: cage r1c5-r1c6-r2c5-r2c6-r3c5-r3c6-r4c5-r4c6-r5c6 total 45 connected true
cage-4: cage r7c4-r8c4-r9c4 total 18 connected true
cage-5: cage r1c8-r1c9-r2c8-r2c9-r3c8-r3c9-r4c8-r4c9-r5c9 total 45 connected true
cage-6: cage r8c9-r9c9 total 9 connected true
anti-knight
kropki-1: kropki r4c5-r4c6 colour "black"
kropki-2: kropki r4c6-r5c6 colour "black"
kropki-3: kropki r7c7-r8c7 colour "black"
kropki-4: kropki r8c7-r9c7 colour "black"
kropki-5: kropki r5c1-r6c1 colour "black"
kropki-6: kropki r2c1-r2c2 colour "black"
kropki-7: kropki r8c2-r9c2 colour "black"
kropki-8: kropki r5c5-r6c5 colour "white"
kropki-9: kropki r6c5-r6c6 colour "white"
kropki-10: kropki r4c7-r5c7 colour "white"
kropki-11: kropki r6c3-r7c3 colour "white"
kropki-12: kropki r4c1-r4c2 colour "white"
kropki-13: kropki r1c6-r2c6 colour "white"
kropki-14: kropki r3c1-r3c2 colour "white"
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a knight's move (in chess) cannot contain the same digit.
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeat.
Cells separated by a black dot has one digit double or half the other (1:2 ratio).
Cells separated by a white dot are consecutive.
Not all dots are necessarily given.
