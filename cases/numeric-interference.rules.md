---
format: open-rules
title: Numeric Interference
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/numeric-interference
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6662b0bbba67f51c405bb6aaeae93591
---

```rules
sudoku 9x9
cage-1: cage r8c2-r8c3 total 15 connected true
cage-2: cage r8c7-r8c8 total 14 connected true
cage-3: cage r4c9-r5c9 total 16 connected true
cage-4: cage r1c5-r2c5 total 15 connected true
cage-5: cage r7c5-r8c5 total 10 connected true
cage-6: cage r4c2-r5c2 total 12 connected true
cage-7: cage r2c2-r2c3 total 5 connected true
cage-8: cage r2c7-r2c8 total 6 connected true
cage-9: cage r7c2-r7c3 total 5 connected true
cage-10: cage r7c7-r7c8 total 5 connected true
cage-11: cage r3c2-r3c3 total 14 connected true
cage-12: cage r3c7-r3c8 total 15 connected true
cage-13: cage r5c5-r6c5 total 14 connected true
cage-14: cage r1c2-r1c3 total 14 connected true
kropki-1: kropki r6c2-r6c3 black
kropki-2: kropki r5c3-r6c3 black
kropki-3: kropki r5c7-r6c7 black
kropki-4: kropki r4c7-r5c7 black
kropki-5: kropki r5c6-r5c7 black
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a black dot between them are in a ratio of 2:1. Not all dots are given.
