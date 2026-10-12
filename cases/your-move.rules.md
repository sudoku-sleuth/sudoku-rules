---
format: open-rules
title: Your Move!
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/your-move
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c7-r4c8 total 6 connected true
cage-2: cage r5c8-r6c8 total 8 connected true
cage-3: cage r2c4-r2c5 total 6 connected true
cage-4: cage r6c9-r7c9 total 11 connected true
kropki-1: kropki r9c6-r9c7 colour "white"
kropki-2: kropki r6c6-r6c7 colour "white"
kropki-3: kropki r9c8-r9c9 colour "white"
kropki-4: kropki r5c7-r6c7 colour "white"
kropki-5: kropki r6c8-r7c8 colour "white"
kropki-6: kropki r8c3-r8c4 colour "white"
kropki-7: kropki r7c3-r8c3 colour "white"
kropki-8: kropki r8c1-r8c2 colour "white"
kropki-9: kropki r7c1-r8c1 colour "white"
kropki-10: kropki r6c3-r6c4 colour "white"
kropki-11: kropki r6c4-r7c4 colour "white"
kropki-12: kropki r4c8-r5c8 colour "white"
kropki-13: kropki r9c2-r9c3 colour "white"
kropki-14: kropki r9c3-r9c4 colour "white"
kropki-15: kropki r5c2-r6c2 colour "black"
kropki-16: kropki r2c2-r3c2 colour "black"
kropki-17: kropki r1c3-r2c3 colour "black"
kropki-18: kropki r3c4-r3c5 colour "black"
whispers-1: whispers r4c2-r3c2-r3c1-r2c1-r1c1-r1c2-r2c2-r2c3-r1c3-r1c4-r2c4-r2c5-r1c5-r1c6-r2c6-r3c6-r3c5-r4c5 gap 4
whispers-2: whispers r9c7-r8c7-r7c6-r6c6-r5c6-r4c7-r3c7-r3c8-r4c8-r5c9-r6c9-r7c9-r8c8-r9c8 gap 4
whispers-3: whispers r9c5-r8c5-r7c5-r6c4-r5c4-r6c3-r7c2-r8c1-r9c1-r9c2-r8c3-r9c3 gap 4
whispers-4: whispers r4c2-r5c2-r6c2 gap 4
whispers-5: whispers r7c6-r6c7-r5c8-r5c9 gap 4
```

Normal Sudoku rules apply. Dutch Whispers- Numbers on gray lines are at least 4 apart from their neighbors on the line. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Numbers in cages sum to the number in the top left corner of the cage.
