---
format: open-rules
title: Follow the Bread Crumbs
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/follow-the-bread-crumbs
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r5c4 colour "white"
kropki-2: kropki r4c5-r5c5 colour "white"
kropki-3: kropki r4c6-r5c6 colour "white"
kropki-4: kropki r3c7-r4c7 colour "white"
kropki-5: kropki r3c8-r4c8 colour "white"
kropki-6: kropki r4c2-r4c3 colour "white"
kropki-7: kropki r4c1-r5c1 colour "white"
kropki-8: kropki r5c2-r6c2 colour "white"
kropki-9: kropki r5c3-r6c3 colour "white"
kropki-10: kropki r5c1-r6c1 colour "white"
kropki-11: kropki r4c6-r4c7 colour "white"
kropki-12: kropki r2c7-r3c7 colour "white"
kropki-13: kropki r2c7-r2c8 colour "white"
kropki-14: kropki r2c8-r2c9 colour "white"
kropki-15: kropki r1c9-r2c9 colour "white"
kropki-16: kropki r1c8-r1c9 colour "white"
kropki-17: kropki r1c4-r1c5 colour "white"
kropki-18: kropki r1c5-r2c5 colour "white"
kropki-19: kropki r1c4-r2c4 colour "white"
kropki-20: kropki r5c3-r5c4 colour "white"
kropki-21: kropki r3c4-r3c5 colour "white"
kropki-22: kropki r9c5-r9c6 colour "white"
kropki-23: kropki r3c3-r4c3 colour "black"
kropki-24: kropki r3c4-r4c4 colour "black"
kropki-25: kropki r3c5-r4c5 colour "black"
kropki-26: kropki r3c6-r4c6 colour "black"
kropki-27: kropki r6c5-r7c5 colour "black"
kropki-28: kropki r6c6-r7c6 colour "black"
kropki-29: kropki r6c7-r7c7 colour "black"
kropki-30: kropki r5c7-r6c7 colour "black"
kropki-31: kropki r5c8-r6c8 colour "black"
kropki-32: kropki r1c1-r1c2 colour "black"
kropki-33: kropki r1c3-r2c3 colour "black"
kropki-34: kropki r7c2-r8c2 colour "black"
kropki-35: kropki r8c1-r8c2 colour "black"
```

Normal Sudoku rules apply. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
