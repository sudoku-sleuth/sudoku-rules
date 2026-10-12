---
format: open-rules
title: If It's All The Same To You...
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/if-it-s-all-the-same-to-you
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r2c3 colour "black"
kropki-2: kropki r2c3-r3c3 colour "black"
kropki-3: kropki r3c4-r3c5 colour "black"
kropki-4: kropki r5c8-r5c9 colour "black"
kropki-5: kropki r6c1-r6c2 colour "black"
kropki-6: kropki r8c5-r8c6 colour "black"
kropki-7: kropki r9c7-r9c8 colour "black"
kropki-8: kropki r7c1-r8c1 colour "black"
kropki-9: kropki r8c6-r9c6 colour "black"
kropki-10: kropki r4c4-r5c4 colour "black"
kropki-11: kropki r1c7-r2c7 colour "black"
kropki-12: kropki r5c9-r6c9 colour "black"
little-killer r6c9-r7c8-r8c7-r9c6 sum 7
```

Normal Sudoku rules apply. Within all nine 3x3 boxes, all rows and columns sum to 15. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown. The number outside the grid is the sum of the indicated diagonal.
