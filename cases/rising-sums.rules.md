---
format: open-rules
title: Rising Sums
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/rising-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c7-r8c8-r8c9 connected true
cage-2: cage r2c7-r2c8-r2c9 connected true
cage-3: cage r4c7-r4c8-r4c9 connected true
cage-4: cage r6c7-r6c8-r6c9 connected true
cage-5: cage r8c4-r8c5 connected true
cage-6: cage r8c2-r8c3 connected true
cage-7: cage r6c1-r6c2 connected true
cage-8: cage r6c4-r6c5 connected true
cage-9: cage r4c4-r4c5 connected true
cage-10: cage r4c1-r4c2 connected true
cage-11: cage r2c2-r2c3 connected true
cage-12: cage r2c4-r2c5 connected true
kropki-1: kropki r4c7-r4c8 colour "white"
kropki-2: kropki r4c8-r4c9 colour "white"
kropki-3: kropki r2c7-r2c8 colour "white"
kropki-4: kropki r4c4-r4c5 colour "white"
kropki-5: kropki r6c8-r6c9 colour "white"
kropki-6: kropki r8c7-r8c8 colour "white"
kropki-7: kropki r8c8-r8c9 colour "white"
kropki-8: kropki r8c2-r8c3 colour "white"
kropki-9: kropki r8c2-r9c2 colour "black"
kropki-10: kropki r2c8-r3c8 colour "black"
kropki-11: kropki r2c3-r3c3 colour "black"
kropki-12: kropki r8c9-r9c9 colour "black"
kropki-13: kropki r8c6-r9c6 colour "black"
kropki-14: kropki r2c2-r3c2 colour "black"
kropki-15: kropki r3c6-r4c6 colour "black"
kropki-16: kropki r7c7-r7c8 colour "black"
```

Normal Sudoku rules apply. Inside ALL CAGES, the numbers always rise from left to right. The sum of all numbers in the left and center cages in a row is the same as the sum of all numbers in the right cage in the same row. The cage totals in boxes 3, 6 and 9 increase from top to bottom. Numbers with a white dot between them are consecutive.  All possible white dots WITHIN A CAGE are given. Numbers with black dots between them are in a ratio of 2:1.  Not all black dots are given.
