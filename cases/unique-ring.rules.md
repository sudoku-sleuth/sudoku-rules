---
format: open-rules
title: Unique Ring
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unique-ring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c1-r8c1 total 10 connected true
cage-2: cage r6c2-r7c2 total 10 connected true
cage-3: cage r8c3-r9c3 total 10 connected true
cage-4: cage r8c4-r8c5-r8c6 total 10 connected true
cage-5: cage r6c8-r7c8 total 10 connected true
cage-6: cage r5c9-r6c9 total 10 connected true
cage-7: cage r2c9-r3c9 total 10 connected true
cage-8: cage r5c6-r6c6 total 10 connected true
cage-9: cage r5c5-r6c5 total 10 connected true
cage-10: cage r2c6-r2c7 total 10 connected true
cage-11: cage r2c1-r3c1 total 15 connected true
kropki-1: kropki r6c3-r7c3 colour "white"
kropki-2: kropki r7c3-r7c4 colour "white"
kropki-3: kropki r7c5-r7c6 colour "white"
kropki-4: kropki r7c6-r7c7 colour "white"
kropki-5: kropki r6c7-r7c7 colour "white"
kropki-6: kropki r5c7-r6c7 colour "white"
kropki-7: kropki r3c7-r4c7 colour "white"
kropki-8: kropki r3c6-r3c7 colour "white"
kropki-9: kropki r3c4-r3c5 colour "white"
kropki-10: kropki r4c3-r5c3 colour "white"
kropki-11: kropki r3c4-r4c4 colour "white"
kropki-12: kropki r4c4-r4c5 colour "white"
kropki-13: kropki r4c5-r4c6 colour "white"
kropki-14: kropki r3c6-r4c6 colour "white"
kropki-15: kropki r5c3-r6c3 colour "black"
kropki-16: kropki r3c3-r4c3 colour "black"
kropki-17: kropki r3c3-r3c4 colour "black"
kropki-18: kropki r3c5-r3c6 colour "black"
kropki-19: kropki r4c7-r5c7 colour "black"
kropki-20: kropki r7c4-r7c5 colour "black"
```

Normal Sudoku rules apply. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Numbers in cages sum to the number in the top left corner of the cage.
