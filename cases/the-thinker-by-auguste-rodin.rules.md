---
format: open-rules
title: The Thinker by Auguste Rodin
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/the-thinker-by-auguste-rodin
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c8-r4c8 colour "black"
kropki-2: kropki r2c5-r2c6 colour "black"
kropki-3: kropki r3c5-r4c5 colour "black"
kropki-4: kropki r8c4-r8c5 colour "black"
kropki-5: kropki r7c1-r7c2 colour "black"
kropki-6: kropki r4c4-r4c5 colour "black"
kropki-7: kropki r6c5-r6c6 colour "black"
kropki-8: kropki r2c8-r2c9 colour "black"
whispers-1: whispers r4c1-r3c2-r2c3-r2c4 gap 5
whispers-2: whispers r2c4-r2c5-r1c6-r1c7-r1c8 gap 5
whispers-3: whispers r1c8-r2c9-r3c9-r4c8 gap 5
whispers-4: whispers r2c6-r2c7-r3c8-r3c9 gap 5
whispers-5: whispers r4c8-r5c8-r5c7 gap 5
whispers-6: whispers r5c7-r6c8 gap 5
whispers-7: whispers r6c8-r7c8-r8c7-r9c6 gap 5
whispers-8: whispers r9c6-r9c5-r8c4-r9c3 gap 5
whispers-9: whispers r5c3-r6c3-r7c4-r8c4 gap 5
whispers-10: whispers r5c7-r5c6-r4c5-r5c5-r6c5-r7c5-r8c6-r7c7-r6c7 gap 5
whispers-11: whispers r6c7-r5c6 gap 5
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers can repeat on the green line. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
