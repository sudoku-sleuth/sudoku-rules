---
format: open-rules
title: Squid Game
setter: Will Power
source: https://sudokupad.app/pkq5e4pa5m
case: https://sudoku-sleuth.com/cases/squid-game
library: https://rules.sudoku-sleuth.com/
status: read
exported: ba5c06882e49275c2773a2820022e4b0
---

```rules
sudoku 9x9
cage-1: cage r1c8-r2c7-r2c8 total 21 connected true
cage-2: cage r4c4-r4c5-r5c5-r6c5 total 26 connected true
cage-3: cage r1c5-r1c6 total 14 connected true
cage-4: cage r7c9-r8c9-r9c9 total 15 connected true
cage-5: cage r5c1-r6c1 total 5 connected true
cage-6: cage r3c2-r3c3 total 12 connected true
cage-7: cage r2c1-r3c1-r4c1 total 19 connected true
kropki-1: kropki r7c5-r8c5 white
kropki-2: kropki r8c4-r8c5 white
kropki-3: kropki r1c2-r1c3 black
kropki-4: kropki r5c9-r6c9 black
kropki-5: kropki r9c3-r9c4 black
kropki-6: kropki r3c6-r4c6 black
kropki-7: kropki r3c6-r3c7 black
whispers-1: whispers r3c8-r3c7-r3c6-r4c6-r5c6-r6c6-r6c7-r6c8-r6c9-r5c9-r4c9-r3c9 gap 4
whispers-2: whispers r3c9-r3c8 gap 4
whispers-3: whispers r1c2-r1c3-r1c4-r2c5-r3c5-r4c5-r5c4-r5c3-r5c2-r4c1-r3c1-r2c1 gap 4
whispers-4: whispers r2c1-r1c2 gap 4
whispers-5: whispers r7c6-r8c7-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r8c3-r7c4-r6c5 gap 4
whispers-6: whispers r6c5-r7c6 gap 4
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines if other rules allow. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
