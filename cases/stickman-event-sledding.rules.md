---
format: open-rules
title: Stickman Event (Sledding)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickman-event-sledding
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r1c3-r2c3 colour "white"
kropki-3: kropki r6c3-r6c4 colour "white"
kropki-4: kropki r6c4-r6c5 colour "white"
kropki-5: kropki r6c5-r6c6 colour "white"
kropki-6: kropki r4c7-r5c7 colour "white"
kropki-7: kropki r1c8-r2c8 colour "white"
kropki-8: kropki r2c8-r3c8 colour "white"
kropki-9: kropki r2c1-r3c1 colour "white"
kropki-10: kropki r3c1-r3c2 colour "white"
kropki-11: kropki r3c2-r3c3 colour "white"
kropki-12: kropki r1c7-r2c7 colour "white"
kropki-13: kropki r5c4-r5c5 colour "white"
kropki-14: kropki r8c6-r9c6 colour "black"
kropki-15: kropki r8c6-r8c7 colour "black"
kropki-16: kropki r1c2-r1c3 colour "black"
kropki-17: kropki r1c5-r2c5 colour "black"
whispers-1: whispers r4c1-r5c2-r6c3-r7c4-r8c5-r9c6-r9c7-r8c7 gap 5
whispers-2: whispers r3c2-r4c3-r5c4-r6c5-r7c6-r7c7 gap 5
whispers-3: whispers r6c5-r7c4 gap 5
whispers-4: whispers r5c4-r6c3 gap 5
whispers-5: whispers r4c3-r5c2 gap 5
whispers-6: whispers r7c6-r8c5 gap 5
renban-1: renban r2c2-r1c2-r1c3-r2c3
renban-2: renban r5c9-r6c9-r6c8-r6c7-r6c6-r5c7-r4c8-r3c7
renban-3: renban r5c5-r4c4-r3c3-r3c5-r2c5-r3c4-r2c4
pair r5c6-r6c6 sum 5
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on purple lines are a set of consecutive numbers, in any order. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a V between them sum to 5. Not all possible dots and V are given.
