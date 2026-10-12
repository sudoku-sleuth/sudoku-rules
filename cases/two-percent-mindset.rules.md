---
format: open-rules
title: Two Percent Mindset
setter: Will Power
source: https://sudokupad.app/bghqgrs2gn
case: https://sudoku-sleuth.com/cases/two-percent-mindset
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r4c3 total 15 connected true
cage-2: cage r5c1-r5c2-r5c3 total 15 connected true
cage-3: cage r6c1-r6c2-r6c3 total 15 connected true
cage-4: cage r4c7-r5c7 total 10 connected true
cage-5: cage r4c8-r5c8-r6c8 total 10 connected true
cage-6: cage r5c9-r6c9 total 10 connected true
cage-7: cage r1c4-r2c4 total 10 connected true
cage-8: cage r1c5-r1c6 total 10 connected true
cage-9: cage r3c4-r3c5 total 10 connected true
cage-10: cage r2c6-r3c6 total 10 connected true
cage-11: cage r7c4-r8c4 total 10 connected true
cage-12: cage r7c6-r8c6 total 10 connected true
cage-13: cage r9c5-r9c6 total 10 connected true
cage-14: cage r7c5-r8c5 total 10 connected true
cage-15: cage r1c3-r2c3-r3c3 total 12 connected true
cage-16: cage r1c1-r2c1-r3c1 total 13 connected true
kropki-1: kropki r6c8-r6c9 colour "white"
kropki-2: kropki r4c7-r4c8 colour "white"
kropki-3: kropki r8c2-r8c3 colour "white"
kropki-4: kropki r8c3-r9c3 colour "white"
kropki-5: kropki r4c1-r5c1 colour "black"
kropki-6: kropki r5c3-r6c3 colour "black"
kropki-7: kropki r4c9-r5c9 colour "black"
kropki-8: kropki r7c5-r7c6 colour "black"
kropki-9: kropki r8c6-r9c6 colour "black"
kropki-10: kropki r2c4-r3c4 colour "black"
kropki-11: kropki r1c4-r1c5 colour "black"
kropki-12: kropki r3c5-r3c6 colour "black"
whispers-1: whispers r2c9-r2c8-r2c7 gap 5
whispers-2: whispers r7c8-r8c8-r9c8 gap 5
whispers-3: whispers r9c1-r9c2-r9c3 gap 5
whispers-4: whispers r1c2-r2c2-r3c2 gap 5
```

Normal Sudoku rules apply.

GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
