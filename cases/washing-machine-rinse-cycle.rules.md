---
format: open-rules
title: Washing Machine Rinse Cycle
setter: Will Power
source: https://sudokupad.app/740hmdidl8
case: https://sudoku-sleuth.com/cases/washing-machine-rinse-cycle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r4c6 colour "white"
kropki-2: kropki r4c5-r5c5 colour "white"
kropki-3: kropki r5c5-r6c5 colour "white"
kropki-4: kropki r6c5-r6c6 colour "white"
kropki-5: kropki r1c9-r2c9 colour "white"
kropki-6: kropki r8c1-r9c1 colour "white"
kropki-7: kropki r4c9-r5c9 colour "white"
kropki-8: kropki r5c9-r6c9 colour "white"
kropki-9: kropki r7c9-r8c9 colour "white"
kropki-10: kropki r9c6-r9c7 colour "white"
kropki-11: kropki r1c6-r1c7 colour "white"
kropki-12: kropki r3c6-r4c6 colour "black"
kropki-13: kropki r6c6-r6c7 colour "black"
kropki-14: kropki r5c8-r6c8 colour "black"
kropki-15: kropki r5c7-r6c7 colour "black"
arrow-1: arrow r2c3-r3c4-r4c5 bulb ["r1c1","r1c2"]
arrow-2: arrow r2c2-r3c3-r4c4 bulb ["r1c1","r1c2"]
arrow-3: arrow r2c8-r3c7-r4c6 bulb ["r1c9","r2c9"]
arrow-4: arrow r3c8-r4c7-r5c6 bulb ["r1c9","r2c9"]
arrow-5: arrow r8c7-r7c6-r6c5 bulb ["r9c8","r9c9"]
arrow-6: arrow r8c8-r7c7-r6c6 bulb ["r9c8","r9c9"]
arrow-7: arrow r7c2-r6c3-r5c4 bulb ["r8c1","r9c1"]
arrow-8: arrow r8c2-r7c3-r6c4 bulb ["r8c1","r9c1"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the attached pill. In each case, pills have two separate arrows that each sum to the pill. Pill numbers are read from left to right or top to bottom. KROPKI PAIRS- Numbers with white dots between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. Not all possible dots are shown.
