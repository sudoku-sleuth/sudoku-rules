---
format: open-rules
title: Tree in Summer (Sommer) 夏天
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/tree-in-summer-sommer
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7-r3c7-r4c7-r5c7 total 21 connected true
cage-2: cage r6c2-r6c3 total 15 connected true
cage-3: cage r2c4-r3c4 total 10 connected true
cage-4: cage r3c5-r3c6 total 7 connected true
kropki-1: kropki r9c8-r9c9 colour "white"
kropki-2: kropki r8c9-r9c9 colour "white"
kropki-3: kropki r7c8-r8c8 colour "white"
kropki-4: kropki r7c8-r7c9 colour "white"
kropki-5: kropki r5c9-r6c9 colour "white"
kropki-6: kropki r8c7-r9c7 colour "white"
kropki-7: kropki r7c7-r8c7 colour "white"
kropki-8: kropki r8c5-r8c6 colour "white"
kropki-9: kropki r8c1-r9c1 colour "black"
kropki-10: kropki r8c1-r8c2 colour "black"
kropki-11: kropki r8c3-r9c3 colour "black"
kropki-12: kropki r8c6-r9c6 colour "black"
kropki-13: kropki r7c5-r7c6 colour "black"
kropki-14: kropki r8c5-r9c5 colour "black"
whispers-1: whispers r6c4-r6c3-r5c2-r4c2-r3c3-r3c4 gap 5
whispers-2: whispers r3c4-r2c4-r2c3-r3c2-r4c2 gap 5
whispers-3: whispers r2c4-r1c5-r2c6-r2c7-r3c7-r4c8-r5c8-r6c7-r6c6 gap 5
whispers-4: whispers r4c4-r3c5-r3c6-r4c7 gap 5
whispers-5: whispers r1c7-r1c8-r2c9-r3c9 gap 5
renban r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r5c6-r5c7-r5c4
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the lines. Numbers may repeat on green lines. RENBAN- Numbers on the brown line are a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
