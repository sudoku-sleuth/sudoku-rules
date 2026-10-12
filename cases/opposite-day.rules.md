---
format: open-rules
title: Opposite Day
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/opposite-day
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3 total 11 connected true
cage-2: cage r4c2-r5c2 total 10 connected true
cage-3: cage r5c1-r6c1 total 8 connected true
cage-4: cage r6c8-r6c9 total 9 connected true
cage-5: cage r6c7-r7c7 total 12 connected true
cage-6: cage r7c6-r8c6-r9c6 total 11 connected true
cage-7: cage r7c5-r8c5-r9c5 total 18 connected true
cage-8: cage r2c8-r3c8-r3c9 total 19 connected true
cage-9: cage r2c7-r3c7-r4c7 total 11 connected true
cage-10: cage r3c6-r4c6-r5c6 total 16 connected true
cage-11: cage r4c5-r5c5-r6c5 total 13 connected true
cage-12: cage r5c4-r6c4-r7c4 total 18 connected true
cage-13: cage r5c3-r6c3-r7c3 total 15 connected true
cage-14: cage r8c2-r8c3-r9c2 total 17 connected true
cage-15: cage r7c1-r8c1-r9c1 total 11 connected true
cage-16: cage r1c4-r2c4-r3c4 total 12 connected true
cage-17: cage r1c5-r1c6-r2c5 total 18 connected true
cage-18: cage r4c8-r5c8-r5c9 total 16 connected true
cage-19: cage r1c3-r2c2-r2c3-r3c1-r3c2 total 19 connected true
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r1c1-r2c1 colour "white"
kropki-3: kropki r7c7-r8c7 colour "white"
kropki-4: kropki r7c8-r7c9 colour "white"
kropki-5: kropki r8c9-r9c9 colour "white"
kropki-6: kropki r8c8-r9c8 colour "white"
whispers-1: whispers r1c5-r2c4-r3c3-r4c2-r5c1 gap 5
whispers-2: whispers r5c9-r6c8-r7c7-r8c6-r9c5 gap 5
whispers-3: whispers r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 gap 5
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. One of the numbers (from 1-9) appears in only one cage, in box 1. No other cages contain this number. There are no other negative constraints. Expect the unexpected.
