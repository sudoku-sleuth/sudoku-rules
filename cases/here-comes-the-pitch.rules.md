---
format: open-rules
title: Here Comes the Pitch!
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/here-comes-the-pitch
library: https://rules.sudoku-sleuth.com/
status: read
exported: e11b967d96c4896140147aa9ad42559c
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 14 connected true
cage-2: cage r2c5-r3c5 total 14 connected true
kropki-1: kropki r7c7-r7c8 white
kropki-2: kropki r2c9-r3c9 white
kropki-3: kropki r8c1-r8c2 white
kropki-4: kropki r9c1-r9c2 white
kropki-5: kropki r6c7-r6c8 white
kropki-6: kropki r6c1-r7c1 black
kropki-7: kropki r4c1-r4c2 black
kropki-8: kropki r7c5-r8c5 black
kropki-9: kropki r7c6-r7c7 black
kropki-10: kropki r5c7-r6c7 black
kropki-11: kropki r6c8-r6c9 black
kropki-12: kropki r4c9-r5c9 black
whispers-1: whispers r4c2-r5c1-r6c1-r7c2-r7c3-r6c4-r5c4 gap 5
whispers-2: whispers r6c1-r5c2-r4c2-r4c3-r5c4 gap 5
whispers-3: whispers r4c3-r5c3-r6c4 gap 5
whispers-4: whispers r9c4-r9c5-r9c6-r8c6-r7c5-r8c4 gap 5
whispers-5: whispers r8c4-r9c4 gap 5
whispers-6: whispers r1c9-r2c8-r3c7-r4c6 gap 5
whispers-7: whispers r3c7-r2c7-r2c6-r3c6 gap 5
whispers-8: whispers r3c6-r3c7 gap 5
renban r9c9-r8c8-r7c7-r6c8-r5c9-r4c8-r3c7-r4c7-r4c6
pair-1: pair r2c7-r3c7 sum 10
pair-2: pair r3c6-r3c7 sum 10
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on the purple line are a set of non-repeating consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Numbers with an X between them sum to 10. Not all dots and X are given.
