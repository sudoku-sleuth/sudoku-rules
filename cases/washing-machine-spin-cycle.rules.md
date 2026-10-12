---
format: open-rules
title: Washing Machine Spin Cycle
setter: Will Power
source: https://sudokupad.app/vkc24kzyhd
case: https://sudoku-sleuth.com/cases/washing-machine-spin-cycle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c9-r4c9 colour "white"
kropki-2: kropki r2c3-r3c3 colour "white"
kropki-3: kropki r7c7-r8c7 colour "white"
kropki-4: kropki r6c5-r6c6 colour "white"
kropki-5: kropki r4c4-r4c5 colour "white"
kropki-6: kropki r4c7-r5c7 colour "black"
kropki-7: kropki r4c8-r5c8 colour "black"
kropki-8: kropki r5c2-r6c2 colour "black"
kropki-9: kropki r8c8-r9c8 colour "black"
kropki-10: kropki r5c3-r6c3 colour "black"
arrow-1: arrow r4c7-r5c7 bulb ["r3c7"]
arrow-2: arrow r4c8-r5c8 bulb ["r3c8"]
arrow-3: arrow r4c9-r5c9 bulb ["r3c9"]
arrow-4: arrow r6c1-r5c1 bulb ["r7c1"]
arrow-5: arrow r6c2-r5c2 bulb ["r7c2"]
arrow-6: arrow r6c3-r5c3 bulb ["r7c3"]
arrow-7: arrow r1c4-r1c5 bulb ["r1c3"]
arrow-8: arrow r2c4-r2c5 bulb ["r2c3"]
arrow-9: arrow r3c4-r3c5 bulb ["r3c3"]
arrow-10: arrow r7c6-r7c5 bulb ["r7c7"]
arrow-11: arrow r8c6-r8c5 bulb ["r8c7"]
arrow-12: arrow r9c6-r9c5 bulb ["r9c7"]
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's circle.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
