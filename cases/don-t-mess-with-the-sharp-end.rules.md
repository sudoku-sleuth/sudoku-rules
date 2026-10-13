---
format: open-rules
title: Don't Mess With The Sharp End!
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/don-t-mess-with-the-sharp-end
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c8-r3c9 total 13 connected true
cage-2: cage r5c7-r6c7 total 13 connected true
cage-3: cage r7c8-r7c9 total 13 connected true
cage-4: cage r4c5-r5c5 total 13 connected true
cage-5: cage r5c9-r6c9 total 13 connected true
cage-6: cage r1c8-r1c9 total 13 connected true
cage-7: cage r4c7-r4c8 total 13 connected true
cage-8: cage r9c4-r9c5 total 13 connected true
cage-9: cage r5c2-r6c2 total 13 connected true
cage-10: cage r5c6-r6c6 total 13 connected true
kropki-1: kropki r5c5-r5c6 colour "white"
kropki-2: kropki r3c8-r4c8 colour "white"
kropki-3: kropki r3c5-r3c6 colour "white"
kropki-4: kropki r3c4-r3c5 colour "white"
kropki-5: kropki r1c5-r2c5 colour "white"
kropki-6: kropki r2c4-r2c5 colour "white"
kropki-7: kropki r4c1-r5c1 colour "white"
kropki-8: kropki r7c5-r7c6 colour "white"
kropki-9: kropki r8c4-r8c5 colour "black"
kropki-10: kropki r6c3-r7c3 colour "black"
kropki-11: kropki r2c6-r2c7 colour "black"
kropki-12: kropki r6c4-r6c5 colour "black"
kropki-13: kropki r8c2-r9c2 colour "black"
kropki-14: kropki r1c7-r2c7 colour "black"
kropki-15: kropki r1c7-r1c8 colour "black"
kropki-16: kropki r2c1-r3c1 colour "black"
kropki-17: kropki r6c2-r6c3 colour "black"
palindrome r2c6-r2c7-r3c8-r2c8-r1c7-r1c6-r2c5-r3c4-r4c3-r5c3-r6c3-r7c3-r8c4-r8c5-r8c6-r7c7-r7c6-r7c5-r6c4-r6c5-r6c6-r6c7-r6c8-r7c9-r8c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r8c2-r7c1-r6c1-r5c1-r4c1
pair-1: pair r8c2-r8c3 sum 5
pair-2: pair r9c8-r9c9 sum 5
pair-3: pair r5c8-r5c9 sum 5
```

Normal Sudoku rules apply. The snake is a palindrome (The  nth cell away from both ends are the same as one another). Numbers in cages sum to 13. Numbers with white dots between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Numbers with a V between them sum to 5. Not all possible V are given. Are you feeling lucky?
