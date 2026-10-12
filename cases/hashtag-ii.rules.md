---
format: open-rules
title: HASHTAG II
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/hashtag-ii
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5 total 10 connected true
cage-2: cage r4c7-r5c7 total 12 connected true
cage-3: cage r7c5-r7c6 total 13 connected true
cage-4: cage r5c3-r6c3 total 11 connected true
cage-5: cage r1c6-r2c6 total 15 connected true
cage-6: cage r5c1-r6c1 total 15 connected true
cage-7: cage r4c4-r5c4 total 13 connected true
cage-8: cage r8c5-r9c5 total 9 connected true
cage-9: cage r6c8-r6c9 total 13 connected true
cage-10: cage r8c4-r9c4 total 14 connected true
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r1c4-r1c5 colour "white"
kropki-3: kropki r2c7-r3c7 colour "white"
kropki-4: kropki r7c7-r7c8 colour "white"
kropki-5: kropki r7c6-r7c7 colour "white"
kropki-6: kropki r7c3-r8c3 colour "white"
kropki-7: kropki r2c2-r2c3 colour "white"
kropki-8: kropki r2c1-r2c2 colour "white"
kropki-9: kropki r6c8-r7c8 colour "white"
kropki-10: kropki r2c8-r3c8 colour "white"
whispers-1: whispers r3c1-r3c2 gap 5
whispers-2: whispers r3c4-r3c5-r3c6 gap 5
whispers-3: whispers r3c8-r3c9 gap 5
whispers-4: whispers r1c7-r2c7 gap 5
whispers-5: whispers r4c7-r5c7-r6c7 gap 5
whispers-6: whispers r8c7-r9c7 gap 5
whispers-7: whispers r8c3-r9c3 gap 5
whispers-8: whispers r6c3-r5c3-r4c3 gap 5
whispers-9: whispers r2c3-r1c3 gap 5
whispers-10: whispers r7c1-r7c2 gap 5
whispers-11: whispers r7c4-r7c5-r7c6 gap 5
whispers-12: whispers r7c8-r7c9 gap 5
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with white dots between them are consecutive. Not all possible dots are shown.
