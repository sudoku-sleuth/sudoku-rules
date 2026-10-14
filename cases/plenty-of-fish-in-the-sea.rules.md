---
format: open-rules
title: Plenty of Fish in the Sea
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/plenty-of-fish-in-the-sea
library: https://rules.sudoku-sleuth.com/
status: read
exported: 09864a48407e20a6727a5b662f104cbc
---

```rules
sudoku 9x9
cage-1: cage r5c3-r5c4 total 12 connected true
cage-2: cage r8c8-r8c9 total 4 connected true
cage-3: cage r4c2-r4c3 total 14 connected true
cage-4: cage r6c8-r7c8 total 14 connected true
cage-5: cage r7c5-r7c6 total 10 connected true
kropki-1: kropki r4c5-r4c6 white
kropki-2: kropki r7c6-r7c7 white
kropki-3: kropki r9c1-r9c2 black
kropki-4: kropki r3c4-r4c4 black
kropki-5: kropki r4c8-r5c8 black
kropki-6: kropki r1c8-r2c8 black
kropki-7: kropki r5c9-r6c9 black
kropki-8: kropki r3c3-r3c4 black
kropki-9: kropki r2c6-r2c7 black
whispers-1: whispers r5c8-r6c7-r7c6-r8c7-r9c8 gap 5
whispers-2: whispers r6c7-r7c8-r8c7 gap 5
whispers-3: whispers r6c9-r7c8-r8c9 gap 5
whispers-4: whispers r1c4-r2c5-r3c6-r4c7-r5c6-r6c5-r7c4 gap 5
whispers-5: whispers r2c5-r3c4-r4c3-r5c4-r6c5 gap 5
whispers-6: whispers r5c2-r4c3-r3c2 gap 5
renban-1: renban r1c9-r2c8-r3c7-r4c8-r5c9-r3c9
renban-2: renban r7c2-r8c3-r9c2-r8c1-r8c2
renban-3: renban r3c1-r2c2-r1c1
pair r1c4-r1c5 sum 5
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line, Numbers may repeat on green lines, if other rules allow. Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible V and dots are given.
