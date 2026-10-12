---
format: open-rules
title: Ring Weekend
setter: Will Power
source: https://sudokupad.app/0g53j713up
case: https://sudoku-sleuth.com/cases/ring-weekend
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r7c6 colour "white"
kropki-2: kropki r7c6-r7c7 colour "white"
kropki-3: kropki r6c3-r7c3 colour "white"
kropki-4: kropki r5c3-r6c3 colour "white"
kropki-5: kropki r1c1-r2c1 colour "white"
kropki-6: kropki r1c1-r1c2 colour "white"
kropki-7: kropki r6c9-r7c9 colour "white"
kropki-8: kropki r5c9-r6c9 colour "white"
kropki-9: kropki r5c4-r6c4 colour "white"
kropki-10: kropki r4c4-r5c4 colour "white"
kropki-11: kropki r6c5-r6c6 colour "white"
kropki-12: kropki r4c6-r5c6 colour "white"
kropki-13: kropki r4c5-r4c6 colour "white"
kropki-14: kropki r4c5-r5c5 colour "white"
kropki-15: kropki r6c1-r6c2 colour "white"
kropki-16: kropki r1c6-r2c6 colour "white"
kropki-17: kropki r3c1-r4c1 colour "white"
kropki-18: kropki r4c1-r5c1 colour "white"
kropki-19: kropki r5c1-r6c1 colour "white"
kropki-20: kropki r6c1-r7c1 colour "white"
kropki-21: kropki r3c3-r3c4 colour "black"
kropki-22: kropki r3c4-r3c5 colour "black"
kropki-23: kropki r3c9-r4c9 colour "black"
kropki-24: kropki r3c5-r3c6 colour "black"
arrow-1: arrow r7c3-r6c3-r5c3 bulb ["r8c2"]
arrow-2: arrow r3c3-r3c4-r3c5 bulb ["r2c2"]
arrow-3: arrow r3c7-r4c7-r5c7 bulb ["r2c8"]
arrow-4: arrow r7c7-r7c6-r7c5 bulb ["r8c8"]
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's circle.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
