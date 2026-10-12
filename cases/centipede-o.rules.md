---
format: open-rules
title: Centipede O>>>>>>>>>>
setter: Will Power
source: https://sudokupad.app/xfi254ra10
case: https://sudoku-sleuth.com/cases/centipede-o
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r8c5-r8c6-r8c7-r8c8-r8c9 total 30 connected true
kropki-1: kropki r5c1-r6c1 colour "black"
kropki-2: kropki r1c1-r2c1 colour "black"
kropki-3: kropki r1c9-r2c9 colour "black"
kropki-4: kropki r2c9-r3c9 colour "black"
kropki-5: kropki r1c5-r1c6 colour "black"
kropki-6: kropki r5c3-r6c3 colour "black"
kropki-7: kropki r7c3-r8c3 colour "black"
kropki-8: kropki r3c5-r4c5 colour "black"
kropki-9: kropki r3c4-r4c4 colour "black"
kropki-10: kropki r6c7-r7c7 colour "black"
arrow-1: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-2: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-3: arrow r7c2-r6c2 bulb ["r8c2"]
arrow-4: arrow r8c3-r8c4 bulb ["r8c2"]
arrow-5: arrow r6c3-r5c3 bulb ["r7c3"]
arrow-6: arrow r7c4-r7c5 bulb ["r7c3"]
arrow-7: arrow r5c4-r4c4 bulb ["r6c4"]
arrow-8: arrow r6c5-r6c6 bulb ["r6c4"]
arrow-9: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-10: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-11: arrow r3c6-r2c6 bulb ["r4c6"]
arrow-12: arrow r4c7-r4c8 bulb ["r4c6"]
arrow-13: arrow r9c8-r9c7 bulb ["r9c9"]
arrow-14: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-15: arrow r2c3-r1c3 bulb ["r3c3"]
arrow-16: arrow r3c2-r3c1 bulb ["r3c3"]
renban r2c7-r2c8-r3c8-r3c7
```

Normal Sudoku rules apply.

RENBAN- Numbers on the purple line are a set of non-repeating, consecutive numbers, in any order.

ARROWS- Numbers on arrows sum to the number in the arrow's circle.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

KILLER CAGE- The numbers in the cage sum to 30.
