---
format: open-rules
title: O Tannenbaum(O Christmas Tree)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/o-tannenbaum-o-christmas-tree
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r6c4 colour "black"
kropki-2: kropki r4c5-r4c6 colour "black"
kropki-3: kropki r3c5-r3c6 colour "black"
kropki-4: kropki r2c5-r2c6 colour "black"
kropki-5: kropki r2c4-r3c4 colour "black"
kropki-6: kropki r7c5-r8c5 colour "black"
kropki-7: kropki r9c5-r9c6 colour "black"
kropki-8: kropki r9c2-r9c3 colour "black"
kropki-9: kropki r4c8-r4c9 colour "black"
kropki-10: kropki r9c7-r9c8 colour "black"
kropki-11: kropki r1c1-r2c1 colour "black"
whispers-1: whispers r5c7-r5c8-r4c7-r3c6-r3c7-r2c6-r1c5-r2c4-r3c3-r3c4-r4c3-r5c2-r5c3 gap 5
whispers-2: whispers r5c3-r6c3-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8 gap 5
whispers-3: whispers r5c7-r6c7 gap 5
pair r6c1-r6c2 sum 10
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers may repeat on the green line. Numbers with a black dot between them are in a ratio of 2:1. Numbers with an X between them sum to 10. Not all possible X and dots are given. The brown line has no effect on the puzzle.
