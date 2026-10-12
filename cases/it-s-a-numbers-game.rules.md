---
format: open-rules
title: It's a Numbers Game
setter: Will Power
source: https://sudokupad.app/5kdb0fat77
case: https://sudoku-sleuth.com/cases/it-s-a-numbers-game
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r4c2 colour "white"
kropki-2: kropki r2c2-r3c2 colour "white"
kropki-3: kropki r4c2-r4c3 colour "white"
kropki-4: kropki r4c3-r4c4 colour "white"
kropki-5: kropki r6c7-r6c8 colour "black"
kropki-6: kropki r8c7-r8c8 colour "black"
kropki-7: kropki r5c8-r6c8 colour "black"
arrow-1: arrow r3c2-r2c2-r2c3 bulb ["r3c3"]
arrow-2: arrow r3c4-r2c4-r2c3 bulb ["r3c3"]
arrow-3: arrow r3c4-r4c4-r4c3 bulb ["r3c3"]
arrow-4: arrow r3c2-r4c2-r4c3 bulb ["r3c3"]
arrow-5: arrow r7c6-r6c6-r6c7 bulb ["r7c7"]
arrow-6: arrow r7c8-r6c8-r6c7 bulb ["r7c7"]
arrow-7: arrow r7c8-r8c8-r8c7 bulb ["r7c7"]
arrow-8: arrow r7c6-r8c6-r8c7 bulb ["r7c7"]
arrow-9: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-10: arrow r6c4-r7c3 bulb ["r5c5"]
arrow-11: arrow r1c6-r1c5 bulb ["r1c7"]
arrow-12: arrow r2c6-r3c5 bulb ["r1c7"]
arrow-13: arrow r4c7-r3c7 bulb ["r5c7"]
arrow-14: arrow r8c2-r9c2 bulb ["r7c2"]
arrow-15: arrow r4c1-r5c1 bulb ["r3c1"]
arrow-16: arrow r7c5-r6c5 bulb ["r8c5"]
```

Normal Sudoku rules apply. 

ARROWS- Numbers on arrows sum to the  number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. There are three shapes formed by the arrows, representing the numbers 1, 7 and 8. Circles in the same shape as one another have the same number.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
