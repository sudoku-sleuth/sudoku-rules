---
format: open-rules
title: "Novak Djokovic 400 Weeks at #1"
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/novak-djokovic-400-weeks-at-1
library: https://rules.sudoku-sleuth.com/
status: read
exported: f0f256ec2815dc39858259fc9137af26
---

```rules
sudoku 9x9
cage-1: cage r2c8-r2c9 total 10 connected true
cage-2: cage r1c5-r2c5 total 10 connected true
cage-3: cage r3c5-r3c6 total 10 connected true
cage-4: cage r4c7-r4c8 total 10 connected true
cage-5: cage r6c2-r6c3 total 10 connected true
cage-6: cage r5c1-r5c2 total 10 connected true
cage-7: cage r8c8-r8c9 total 10 connected true
cage-8: cage r1c2-r1c3 total 10 connected true
cage-9: cage r2c2-r2c3 total 10 connected true
cage-10: cage r9c1-r9c2 total 10 connected true
cage-11: cage r8c4-r8c5 total 5 connected true
cage-12: cage r9c7-r9c8 total 5 connected true
kropki-1: kropki r5c6-r6c6 white
kropki-2: kropki r6c5-r6c6 white
kropki-3: kropki r6c4-r6c5 white
kropki-4: kropki r4c4-r5c4 white
kropki-5: kropki r5c4-r5c5 white
kropki-6: kropki r5c6-r5c7 white
kropki-7: kropki r5c7-r5c8 white
kropki-8: kropki r4c5-r4c6 black
kropki-9: kropki r3c5-r4c5 black
whispers-1: whispers r2c1-r1c1-r2c2-r1c2 gap 4
whispers-2: whispers r1c5-r2c5-r1c6 gap 4
whispers-3: whispers r1c8-r2c8-r3c8 gap 4
whispers-4: whispers r2c8-r1c9 gap 4
whispers-5: whispers r2c8-r3c9 gap 4
whispers-6: whispers r7c9-r7c8-r8c8-r8c9-r9c9-r9c8 gap 4
whispers-7: whispers r7c5-r8c5-r9c5 gap 4
whispers-8: whispers r7c6-r8c5-r9c6 gap 4
whispers-9: whispers r7c3-r8c3-r9c3-r8c2-r9c1-r8c1-r7c1 gap 4
renban-1: renban r4c1-r5c1-r5c2-r5c3-r4c3-r6c3
renban-2: renban r4c4-r4c5-r4c6-r5c6-r6c6-r6c5-r6c4-r5c4
renban-3: renban r4c7-r4c8-r4c9-r5c9-r6c9-r6c8-r6c7-r5c7
renban-4: renban r2c4-r2c3-r3c3-r3c4
renban-5: renban r2c6-r1c7-r2c7
```

Normal Sudoku rules apply. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown. Numbers in cages each sum to the number in the top left corner of the cage.
