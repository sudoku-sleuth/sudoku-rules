---
format: open-rules
title: Workin' on My Knight Moves
setter: Will Power
source: https://f-puzzles.com/?id=y9kckez9
case: https://sudoku-sleuth.com/cases/workin-on-my-knight-moves
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r3c2-r4c2 colour "white"
kropki-3: kropki r5c1-r5c2 colour "white"
kropki-4: kropki r8c3-r9c3 colour "white"
kropki-5: kropki r8c4-r9c4 colour "white"
kropki-6: kropki r8c5-r9c5 colour "white"
kropki-7: kropki r9c3-r9c4 colour "white"
kropki-8: kropki r6c8-r7c8 colour "white"
kropki-9: kropki r6c8-r6c9 colour "white"
kropki-10: kropki r1c7-r2c7 colour "white"
kropki-11: kropki r1c6-r2c6 colour "white"
kropki-12: kropki r1c5-r2c5 colour "white"
kropki-13: kropki r6c9-r7c9 colour "white"
kropki-14: kropki r4c7-r4c8 colour "black"
kropki-15: kropki r4c8-r4c9 colour "black"
kropki-16: kropki r3c7-r3c8 colour "black"
kropki-17: kropki r2c7-r2c8 colour "black"
kropki-18: kropki r3c4-r3c5 colour "black"
kropki-19: kropki r1c3-r2c3 colour "black"
kropki-20: kropki r2c1-r2c2 colour "black"
kropki-21: kropki r6c1-r6c2 colour "black"
kropki-22: kropki r6c3-r6c4 colour "black"
kropki-23: kropki r7c2-r8c2 colour "black"
kropki-24: kropki r7c5-r7c6 colour "black"
kropki-25: kropki r8c7-r9c7 colour "black"
kropki-26: kropki r5c7-r5c8 colour "black"
kropki-27: kropki r5c2-r6c2 colour "black"
kropki-28: kropki r4c6-r5c6 colour "black"
kropki-29: kropki r5c3-r5c4 colour "black"
kropki-30: kropki r9c6-r9c7 colour "black"
kropki-31: kropki r2c3-r2c4 colour "black"
```

Normal Sudoku rules apply. Numbers with a black dot between them are in a ratio of 1:2. Numbers with a white dot between them are consecutive. Not all dots are shown. ALL locations of the numbers 6, 7, 8, and 9 must have at least 1 other location of the SAME NUMBER that IS a chess knight's move apart.
