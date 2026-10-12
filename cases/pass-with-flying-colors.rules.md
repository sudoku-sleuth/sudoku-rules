---
format: open-rules
title: Pass With Flying Colors
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/pass-with-flying-colors
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c8-r7c8 colour "white"
kropki-2: kropki r9c6-r9c7 colour "white"
kropki-3: kropki r7c4-r8c4 colour "white"
kropki-4: kropki r5c7-r6c7 colour "white"
kropki-5: kropki r5c7-r5c8 colour "white"
kropki-6: kropki r4c3-r4c4 colour "white"
kropki-7: kropki r5c3-r5c4 colour "white"
kropki-8: kropki r1c3-r1c4 colour "white"
kropki-9: kropki r2c1-r3c1 colour "white"
kropki-10: kropki r1c5-r1c6 colour "white"
kropki-11: kropki r2c2-r3c2 colour "black"
kropki-12: kropki r4c2-r4c3 colour "black"
kropki-13: kropki r5c3-r6c3 colour "black"
kropki-14: kropki r6c4-r7c4 colour "black"
kropki-15: kropki r8c4-r8c5 colour "black"
kropki-16: kropki r8c6-r9c6 colour "black"
kropki-17: kropki r9c7-r9c8 colour "black"
kropki-18: kropki r7c8-r8c8 colour "black"
kropki-19: kropki r6c8-r6c9 colour "black"
kropki-20: kropki r4c9-r5c9 colour "black"
kropki-21: kropki r3c8-r3c9 colour "black"
kropki-22: kropki r3c6-r3c7 colour "black"
kropki-23: kropki r2c5-r3c5 colour "black"
kropki-24: kropki r2c3-r2c4 colour "black"
kropki-25: kropki r6c3-r6c4 colour "black"
kropki-26: kropki r3c9-r4c9 colour "black"
```

Normal Sudoku rules apply.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
