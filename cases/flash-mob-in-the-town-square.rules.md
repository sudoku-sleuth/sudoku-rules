---
format: open-rules
title: Flash Mob in the Town Square
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/flash-mob-in-the-town-square
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r5c7 colour "white"
kropki-2: kropki r5c7-r6c7 colour "white"
kropki-3: kropki r2c7-r3c7 colour "white"
kropki-4: kropki r5c3-r5c4 colour "white"
kropki-5: kropki r4c4-r5c4 colour "white"
kropki-6: kropki r4c4-r4c5 colour "white"
kropki-7: kropki r5c3-r6c3 colour "white"
kropki-8: kropki r7c5-r7c6 colour "white"
kropki-9: kropki r7c4-r7c5 colour "white"
kropki-10: kropki r1c2-r1c3 colour "white"
kropki-11: kropki r1c2-r2c2 colour "white"
kropki-12: kropki r4c8-r4c9 colour "black"
kropki-13: kropki r6c8-r6c9 colour "black"
kropki-14: kropki r4c9-r5c9 colour "black"
kropki-15: kropki r8c4-r8c5 colour "black"
kropki-16: kropki r8c4-r9c4 colour "black"
kropki-17: kropki r8c7-r8c8 colour "black"
arrow-1: arrow r3c3-r3c4-r3c5-r3c6-r3c7 bulb ["r3c1","r3c2"]
arrow-2: arrow r3c7-r4c7-r5c7-r6c7-r7c7 bulb ["r1c7","r2c7"]
arrow-3: arrow r7c7-r7c6-r7c5-r7c4-r7c3 bulb ["r7c8","r7c9"]
arrow-4: arrow r7c3-r6c3-r5c3-r4c3-r3c3 bulb ["r8c3","r9c3"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the attached pill. Pills are read from left to right or top to bottom. All arrows are straight lines. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
