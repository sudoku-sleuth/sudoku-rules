---
format: open-rules
title: Othello
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/othello
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r2c5 colour "white"
kropki-2: kropki r2c5-r2c6 colour "white"
kropki-3: kropki r2c2-r2c3 colour "white"
kropki-4: kropki r2c7-r2c8 colour "white"
kropki-5: kropki r3c8-r4c8 colour "white"
kropki-6: kropki r4c8-r5c8 colour "white"
kropki-7: kropki r2c2-r3c2 colour "white"
kropki-8: kropki r5c2-r6c2 colour "white"
kropki-9: kropki r7c2-r8c2 colour "white"
kropki-10: kropki r8c2-r8c3 colour "white"
kropki-11: kropki r8c4-r8c5 colour "white"
kropki-12: kropki r8c3-r8c4 colour "white"
kropki-13: kropki r4c5-r5c5 colour "white"
kropki-14: kropki r6c5-r6c6 colour "white"
kropki-15: kropki r6c6-r6c7 colour "white"
kropki-16: kropki r6c7-r6c8 colour "white"
kropki-17: kropki r8c7-r8c8 colour "white"
kropki-18: kropki r4c6-r4c7 colour "white"
kropki-19: kropki r4c7-r5c7 colour "white"
kropki-20: kropki r1c1-r1c2 colour "white"
kropki-21: kropki r6c9-r7c9 colour "white"
kropki-22: kropki r5c4-r5c5 colour "white"
kropki-23: kropki r7c5-r7c6 colour "white"
kropki-24: kropki r2c6-r2c7 colour "black"
kropki-25: kropki r2c3-r2c4 colour "black"
kropki-26: kropki r2c8-r3c8 colour "black"
kropki-27: kropki r5c8-r6c8 colour "black"
kropki-28: kropki r3c2-r4c2 colour "black"
kropki-29: kropki r6c2-r7c2 colour "black"
kropki-30: kropki r8c5-r8c6 colour "black"
kropki-31: kropki r5c5-r6c5 colour "black"
kropki-32: kropki r4c5-r4c6 colour "black"
kropki-33: kropki r8c6-r8c7 colour "black"
kropki-34: kropki r7c9-r8c9 colour "black"
```

Normal Sudoku rules apply. 

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
