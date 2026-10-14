---
format: open-rules
title: Grocery Shopping
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/grocery-shopping
library: https://rules.sudoku-sleuth.com/
status: read
exported: 251a0187bb8f58ab66cfe96cac5c3c82
---

```rules
sudoku 9x9
cage-1: cage r5c1-r6c1 total 10 connected true
cage-2: cage r8c1-r8c2 total 10 connected true
cage-3: cage r8c3-r8c4 total 10 connected true
cage-4: cage r8c5-r8c6 total 10 connected true
cage-5: cage r8c7-r8c8 total 10 connected true
cage-6: cage r7c8-r7c9 total 10 connected true
cage-7: cage r9c8-r9c9 total 10 connected true
cage-8: cage r3c5-r3c6 total 10 connected true
cage-9: cage r1c4-r1c5 total 10 connected true
cage-10: cage r7c4-r7c5 total 10 connected true
kropki-1: kropki r3c6-r4c6 white
kropki-2: kropki r4c5-r4c6 white
kropki-3: kropki r3c3-r3c4 white
kropki-4: kropki r2c4-r3c4 white
kropki-5: kropki r6c5-r6c6 black
kropki-6: kropki r2c9-r3c9 black
kropki-7: kropki r3c9-r4c9 black
kropki-8: kropki r5c8-r5c9 black
kropki-9: kropki r3c2-r3c3 black
kropki-10: kropki r6c3-r6c4 black
whispers-1: whispers r8c2-r9c2-r9c1-r8c1 gap 4
whispers-2: whispers r8c1-r8c2 gap 4
whispers-3: whispers r8c2-r8c3-r8c4-r8c5-r8c6-r8c7 gap 4
whispers-4: whispers r8c7-r9c7-r9c6 gap 4
whispers-5: whispers r8c6-r9c6 gap 4
whispers-6: whispers r7c1-r7c2-r7c3-r7c4-r7c5-r7c6 gap 4
whispers-7: whispers r7c1-r6c1-r5c1-r5c2-r5c3-r5c4-r5c5 gap 4
whispers-8: whispers r5c7-r5c6-r6c6 gap 4
whispers-9: whispers r7c2-r8c3 gap 4
whispers-10: whispers r7c5-r8c6 gap 4
renban-1: renban r3c5-r4c5-r4c6-r3c6-r5c5-r6c5-r6c6-r7c6-r5c6
renban-2: renban r2c8-r3c8-r3c9-r2c9-r4c9-r5c8-r5c7
renban-3: renban r6c9-r7c8-r8c8-r9c8-r9c9-r8c9-r7c9-r5c9
```

Normal Sudoku rules apply. Dutch Whispers- Numbers on the two gray lines are at least 4 apart from their neighbors on the line. Numbers may repeat on gray lines. RENBAN- Numbers on the three purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to 10. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
