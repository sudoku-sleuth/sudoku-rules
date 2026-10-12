---
format: open-rules
title: See Spot Run
setter: EPH
source: https://sudokupad.app/aiwp337nhk
case: https://sudoku-sleuth.com/cases/see-spot-run
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r4c2 colour "white"
kropki-2: kropki r4c2-r4c3 colour "white"
kropki-3: kropki r3c2-r3c3 colour "white"
kropki-4: kropki r3c4-r3c5 colour "white"
kropki-5: kropki r4c4-r4c5 colour "white"
kropki-6: kropki r3c5-r4c5 colour "white"
kropki-7: kropki r6c5-r6c6 colour "white"
kropki-8: kropki r6c6-r6c7 colour "white"
kropki-9: kropki r6c7-r6c8 colour "white"
kropki-10: kropki r7c5-r7c6 colour "white"
kropki-11: kropki r7c6-r7c7 colour "white"
kropki-12: kropki r7c7-r7c8 colour "white"
kropki-13: kropki r2c1-r2c2 colour "white"
kropki-14: kropki r1c6-r2c6 colour "white"
kropki-15: kropki r8c8-r8c9 colour "white"
kropki-16: kropki r8c6-r9c6 colour "white"
kropki-17: kropki r7c4-r8c4 colour "white"
kropki-18: kropki r7c2-r7c3 colour "white"
kropki-19: kropki r5c1-r6c1 colour "white"
kropki-20: kropki r3c3-r3c4 colour "black"
kropki-21: kropki r4c3-r4c4 colour "black"
kropki-22: kropki r6c5-r7c5 colour "black"
kropki-23: kropki r6c8-r7c8 colour "black"
kropki-24: kropki r1c4-r2c4 colour "black"
kropki-25: kropki r1c7-r1c8 colour "black"
kropki-26: kropki r4c9-r5c9 colour "black"
kropki-27: kropki r9c1-r9c2 colour "black"
```

Standard sudoku rules apply: each row, column and 3x3 box must contain all the digits from 1 to 9.

Kropki pairs: Cells separated by a white dot must contain digits which are consecutive.  Cells separated by a black dot must contain digits which are in a 2:1 ratio.
