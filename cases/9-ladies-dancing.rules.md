---
format: open-rules
title: 9 Ladies Dancing
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/9-ladies-dancing
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6fd658acb16f60267a1696a938482974
---

```rules
sudoku 9x9
cage-1: cage r2c6-r3c6 total 10 connected true
cage-2: cage r8c3-r9c3 total 10 connected true
cage-3: cage r2c7-r3c7 total 10 connected true
cage-4: cage r2c8-r2c9 total 10 connected true
cage-5: cage r1c4-r2c4 total 10 connected true
cage-6: cage r2c1-r2c2 total 10 connected true
cage-7: cage r2c3-r3c3 total 10 connected true
cage-8: cage r9c1-r9c2 total 10 connected true
kropki-1: kropki r3c7-r4c7 black
kropki-2: kropki r6c4-r6c5 black
kropki-3: kropki r7c6-r8c6 black
kropki-4: kropki r7c9-r8c9 black
kropki-5: kropki r1c8-r1c9 black
kropki-6: kropki r8c5-r9c5 black
kropki-7: kropki r2c6-r2c7 black
kropki-8: kropki r6c8-r7c8 black
kropki-9: kropki r5c4-r5c5 black
kropki-10: kropki r9c6-r9c7 black
kropki-11: kropki r1c7-r2c7 black
kropki-12: kropki r4c5-r5c5 black
kropki-13: kropki r7c8-r8c8 black
whispers-1: whispers r7c6-r7c5-r6c6-r5c7-r6c8-r7c9 gap 4
whispers-2: whispers r2c6-r3c6-r4c7-r4c8-r5c9 gap 4
whispers-3: whispers r9c2-r8c2-r7c2-r7c1-r8c1 gap 5
whispers-4: whispers r8c1-r8c2 gap 5
whispers-5: whispers r4c7-r5c7 gap 4
renban-1: renban r9c4-r9c3-r8c3-r7c3-r6c3-r7c4
renban-2: renban r6c2-r6c1-r5c2-r4c3-r5c4-r6c5-r6c4
renban-3: renban r1c1-r2c1-r3c2-r3c3-r2c4-r1c4
renban-4: renban r1c2-r1c3-r2c3-r2c2
renban-5: renban r2c8-r2c7-r3c7-r3c8
renban-6: renban r8c5-r8c6-r7c7-r7c8-r8c9-r9c9
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on the green line are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on green and red lines. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Number in cages each sum to 10. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
