---
format: open-rules
title: Unblock Me-Sliding Blocks Game
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/unblock-me-sliding-blocks-game
library: https://rules.sudoku-sleuth.com/
status: read
exported: c3a8df269cc07407a96867424c155449
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 connected true
cage-2: cage r1c3-r1c4 connected true
cage-3: cage r1c5-r1c6 connected true
cage-4: cage r1c8-r1c9 connected true
cage-5: cage r2c3-r2c4-r2c5 connected true
cage-6: cage r3c4-r3c5 connected true
cage-7: cage r3c7-r3c8-r3c9 connected true
cage-8: cage r4c8-r4c9 connected true
cage-9: cage r4c1-r4c2 connected true
cage-10: cage r4c4-r4c5 connected true
cage-11: cage r4c6-r4c7 connected true
cage-12: cage r5c7-r5c8-r5c9 connected true
cage-13: cage r6c6-r6c7-r6c8 connected true
cage-14: cage r6c2-r6c3-r6c4 connected true
cage-15: cage r7c1-r7c2 connected true
cage-16: cage r7c3-r7c4 connected true
cage-17: cage r7c6-r7c7 connected true
cage-18: cage r7c8-r7c9 connected true
cage-19: cage r9c7-r9c8-r9c9 connected true
cage-20: cage r9c1-r9c2-r9c3 connected true
cage-21: cage r5c5-r5c6 connected true
kropki-1: kropki r6c2-r7c2 black
kropki-2: kropki r6c4-r7c4 black
kropki-3: kropki r6c6-r7c6 black
kropki-4: kropki r6c8-r7c8 black
kropki-5: kropki r4c4-r5c4 black
kropki-6: kropki r4c6-r5c6 black
kropki-7: kropki r8c2-r9c2 black
kropki-8: kropki r8c8-r9c8 black
```

Normal Sudoku rules apply. KILLER CAGES- The sum of the numbers in all cages are the same. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
