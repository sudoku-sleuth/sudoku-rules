---
format: open-rules
title: 10 Lords 'a Leaping
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/10-lords-a-leaping
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c6-r9c6 colour "white"
kropki-2: kropki r8c4-r9c4 colour "white"
kropki-3: kropki r2c5-r3c5 colour "white"
kropki-4: kropki r7c5-r7c6 colour "black"
kropki-5: kropki r7c6-r7c7 colour "black"
kropki-6: kropki r8c7-r9c7 colour "black"
kropki-7: kropki r7c9-r8c9 colour "black"
kropki-8: kropki r4c9-r5c9 colour "black"
kropki-9: kropki r8c3-r8c4 colour "black"
kropki-10: kropki r6c3-r6c4 colour "black"
kropki-11: kropki r6c3-r7c3 colour "black"
kropki-12: kropki r2c2-r3c2 colour "black"
kropki-13: kropki r1c2-r2c2 colour "black"
kropki-14: kropki r2c4-r3c4 colour "black"
kropki-15: kropki r2c7-r3c7 colour "black"
kropki-16: kropki r6c5-r6c6 colour "black"
kropki-17: kropki r5c4-r5c5 colour "black"
kropki-18: kropki r3c6-r3c7 colour "black"
kropki-19: kropki r2c8-r3c8 colour "black"
kropki-20: kropki r6c6-r7c6 colour "black"
kropki-21: kropki r6c5-r7c5 colour "black"
whispers-1: whispers r5c5-r6c6-r6c7-r5c8-r6c9-r7c9-r8c8 gap 4
whispers-2: whispers r5c6-r4c7-r4c8-r3c9-r2c9-r1c9 gap 4
whispers-3: whispers r3c8-r2c8-r1c8-r1c7-r2c7 gap 4
whispers-4: whispers r2c7-r2c8 gap 4
whispers-5: whispers r2c4-r3c5-r3c4 gap 4
whispers-6: whispers r8c3-r7c4-r6c5-r6c4-r6c3-r6c2-r6c1-r7c2-r8c2 gap 4
whispers-7: whispers r5c3-r4c3-r3c3-r2c3-r1c3-r1c2-r2c2 gap 4
whispers-8: whispers r2c2-r2c3 gap 4
whispers-9: whispers r1c1-r2c1-r3c2 gap 4
renban-1: renban r8c7-r9c7
renban-2: renban r8c8-r8c9-r9c9-r9c8
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
