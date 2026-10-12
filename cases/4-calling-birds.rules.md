---
format: open-rules
title: 4 Calling Birds
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/4-calling-birds
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 15 connected true
cage-2: cage r3c6-r3c7 total 15 connected true
cage-3: cage r3c8-r4c8 total 15 connected true
cage-4: cage r4c9-r5c9 total 15 connected true
cage-5: cage r6c9-r7c9 total 15 connected true
cage-6: cage r8c5-r8c6 total 15 connected true
cage-7: cage r9c4-r9c5 total 15 connected true
cage-8: cage r5c1-r5c2 total 15 connected true
cage-9: cage r6c1-r6c2 total 15 connected true
cage-10: cage r7c3-r8c3 total 15 connected true
cage-11: cage r1c5-r2c5 total 8 connected true
cage-12: cage r3c5-r4c5 total 8 connected true
cage-13: cage r6c5-r7c5 total 8 connected true
kropki-1: kropki r2c6-r2c7 colour "black"
kropki-2: kropki r3c1-r3c2 colour "black"
kropki-3: kropki r6c6-r6c7 colour "black"
kropki-4: kropki r8c4-r8c5 colour "black"
whispers-1: whispers r2c2-r2c3-r2c4-r3c3-r4c4-r4c3 gap 4
whispers-2: whispers r1c7-r1c8-r1c9-r2c8-r3c9-r3c8 gap 4
whispers-3: whispers r5c7-r5c8-r5c9-r6c8-r7c9-r7c8 gap 4
whispers-4: whispers r9c2-r9c3-r8c2-r8c3 gap 4
entropic r9c6-r8c6-r7c5-r7c4-r8c3
renban-1: renban r6c5-r5c6-r5c7-r6c8-r7c8-r8c7
renban-2: renban r2c1-r2c2-r3c3-r4c3-r5c2-r6c1
renban-3: renban r3c4-r2c5-r1c6-r1c7-r2c8-r3c8-r4c7
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,2.5]],"color":"#D4D4D4","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. RENBAN (3 birds' bodies)- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. DUTCH WHISPERS (birds' beaks)- Numbers on red lines are at least 4 apart from their neighbors on the line. ENTROPY LINE (1 bird's body)- Each continuous set of three numbers on a blue line contains one low digit (1-3), one middle digit (4-6) and one high digit (7-9). Numbers do not repeat on red or blue lines. KILLER- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
