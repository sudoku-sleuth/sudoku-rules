---
format: open-rules
title: Maximum Cooperation
setter: Will Power
source: https://sudokupad.app/7201yj394c
case: https://sudoku-sleuth.com/cases/maximum-cooperation
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c7-r7c6-r7c7 total 16 connected true
cage-2: cage r3c3-r3c4-r4c3 total 18 connected true
cage-3: cage r3c6-r3c7-r4c7 total 19 connected true
cage-4: cage r6c3-r7c3-r7c4 total 21 connected true
kropki-1: kropki r5c6-r5c7 colour "black"
kropki-2: kropki r5c3-r5c4 colour "black"
kropki-3: kropki r6c5-r7c5 colour "black"
kropki-4: kropki r1c2-r2c2 colour "black"
kropki-5: kropki r9c7-r9c8 colour "black"
kropki-6: kropki r8c1-r9c1 colour "black"
kropki-7: kropki r5c8-r5c9 colour "black"
kropki-8: kropki r8c7-r9c7 colour "black"
extremum r4c4-r4c6-r6c6-r6c4-r5c8-r5c2-r2c5-r8c5-r1c4 type "max" exhaustive false
```

Normal Sudoku rules apply.

MAXIMUMS- Gray cells with a greater than symbol are greater than all orthogonal neighbors. None of the maximums are the number 9.

KILLER CAGES- Numbers in cages sum to the nmber in the top left corner of the cage. Numbers do not repeat in cages.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
