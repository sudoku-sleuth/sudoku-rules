---
format: open-rules
title: 12 Drummers Drumming
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/12-drummers-drumming
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r6c6-r7c6 total 9 connected true
cage-2: cage r5c9-r6c9 total 8 connected true
kropki-1: kropki r7c3-r8c3 colour "white"
kropki-2: kropki r3c4-r3c5 colour "black"
kropki-3: kropki r2c4-r2c5 colour "black"
kropki-4: kropki r2c3-r3c3 colour "black"
kropki-5: kropki r2c1-r3c1 colour "black"
kropki-6: kropki r1c8-r1c9 colour "black"
kropki-7: kropki r5c1-r6c1 colour "black"
kropki-8: kropki r7c5-r7c6 colour "black"
kropki-9: kropki r8c5-r8c6 colour "black"
kropki-10: kropki r1c5-r2c5 colour "black"
whispers-1: whispers r6c2-r7c3-r7c4-r7c5-r7c6-r7c7-r6c8 gap 4
whispers-2: whispers r6c2-r5c3-r5c4-r5c5-r5c6-r5c7-r6c8 gap 4
whispers-3: whispers r7c2-r8c2-r9c3-r9c4-r9c5-r9c6-r9c7-r8c8-r7c8 gap 4
renban-1: renban r3c7-r4c6-r5c5-r6c4
renban-2: renban r6c6-r6c7-r6c8-r6c9
renban-3: renban r1c3-r2c3-r3c3
renban-4: renban r1c4-r1c5-r2c5-r2c4-r3c4-r3c5
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines. RENBAN LINES- Numbers on purple lines are each a set of no-repeating, consecutive numbers, in any order. RENBAN+ LINES- Numbers on yellow lines are consecutive with their neighbors on the line, and do not repeat. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Numbers in cages sum to the number in the top left corner of the cage.
