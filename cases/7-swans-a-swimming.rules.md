---
format: open-rules
title: 7 Swans 'a Swimming
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/7-swans-a-swimming
library: https://rules.sudoku-sleuth.com/
status: read
exported: 508a0bcdf4662b9075633d6abe6a412a
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 13 connected true
cage-2: cage r2c2-r2c3 total 12 connected true
cage-3: cage r3c2-r3c3 total 11 connected true
cage-4: cage r5c6-r6c6 total 8 connected true
cage-5: cage r7c4-r7c5 total 10 connected true
cage-6: cage r9c1-r9c2 total 12 connected true
cage-7: cage r8c6-r8c7 total 9 connected true
cage-8: cage r7c8-r8c8 total 14 connected true
cage-9: cage r1c7-r1c8 total 15 connected true
cage-10: cage r2c7-r2c8-r2c9 total 9 connected true
cage-11: cage r9c7-r9c8-r9c9 total 10 connected true
cage-12: cage r2c4-r2c5 total 14 connected true
kropki-1: kropki r5c3-r6c3 white
kropki-2: kropki r4c3-r5c3 white
kropki-3: kropki r4c2-r5c2 white
kropki-4: kropki r5c2-r6c2 white
kropki-5: kropki r5c1-r6c1 white
kropki-6: kropki r4c1-r5c1 white
kropki-7: kropki r4c8-r4c9 white
kropki-8: kropki r3c8-r4c8 black
kropki-9: kropki r6c2-r6c3 black
kropki-10: kropki r6c2-r7c2 black
whispers-1: whispers r4c9-r3c8-r3c7-r4c6 gap 4
whispers-2: whispers r4c6-r5c6-r6c6-r7c7 gap 4
whispers-3: whispers r7c7-r8c7-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r8c1 gap 4
whispers-4: whispers r1c2-r1c3-r1c4-r2c3-r3c3 gap 4
whispers-5: whispers r6c6-r7c5-r7c4-r7c3-r7c2 gap 4
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on blue lines are at least 4 apart from their neighbors on the line. The number 5 does not appear on any blue line. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER- Numbers in cages sum to the number in the top left corner of the cage.
