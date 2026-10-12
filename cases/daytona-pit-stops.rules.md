---
format: open-rules
title: Daytona Pit Stops
setter: Will Power
source: https://sudokupad.app/7apc0zc2uy
case: https://sudoku-sleuth.com/cases/daytona-pit-stops
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c1-r7c1 colour "white"
kropki-2: kropki r5c1-r6c1 colour "white"
kropki-3: kropki r8c9-r9c9 colour "white"
kropki-4: kropki r2c1-r3c1 colour "white"
kropki-5: kropki r1c5-r1c6 colour "white"
kropki-6: kropki r5c4-r6c4 colour "white"
kropki-7: kropki r4c4-r5c4 colour "white"
kropki-8: kropki r4c6-r5c6 colour "white"
kropki-9: kropki r5c5-r6c5 colour "white"
kropki-10: kropki r4c3-r5c3 colour "white"
kropki-11: kropki r6c3-r7c3 colour "white"
kropki-12: kropki r7c6-r7c7 colour "white"
kropki-13: kropki r7c9-r8c9 colour "white"
kropki-14: kropki r8c8-r9c8 colour "black"
kropki-15: kropki r5c9-r6c9 colour "black"
kropki-16: kropki r1c5-r2c5 colour "black"
kropki-17: kropki r2c4-r3c4 colour "black"
kropki-18: kropki r1c8-r1c9 colour "black"
arrow-1: arrow r4c8-r3c8 bulb ["r5c9","r6c9"]
arrow-2: arrow r7c8-r6c8-r5c8-r4c8-r3c8 bulb ["r8c8","r9c8"]
arrow-3: arrow r8c6-r8c7-r7c8-r6c8-r5c8-r4c8-r3c8 bulb ["r9c4","r9c5"]
arrow-4: arrow r8c4-r8c5-r8c6-r8c7-r7c8-r6c8-r5c8-r4c8-r3c8 bulb ["r6c3","r7c3"]
arrow-5: arrow r5c8-r4c8-r3c8 bulb ["r6c6","r6c7"]
arrow-6: arrow r6c8-r5c8-r4c8-r3c8 bulb ["r7c6","r7c7"]
arrow-7: arrow r8c3-r8c4-r8c5-r8c6-r8c7-r7c8-r6c8-r5c8-r4c8-r3c8 bulb ["r8c1","r8c2"]
arrow-8: arrow r4c2-r5c2-r6c2-r7c2-r8c3-r8c4-r8c5-r8c6-r8c7-r7c8-r6c8-r5c8-r4c8-r3c8 bulb ["r4c3","r5c3"]
arrow-9: arrow r3c2-r4c2-r5c2-r6c2-r7c2-r8c3-r8c4-r8c5-r8c6-r8c7-r7c8-r6c8-r5c8-r4c8-r3c8 bulb ["r1c2","r2c2"]
arrow-10: arrow r2c7-r1c6-r1c5-r1c4-r2c3-r3c2-r4c2-r5c2-r6c2-r7c2-r8c3-r8c4-r8c5-r8c6-r8c7-r7c8-r6c8-r5c8-r4c8-r3c8 bulb ["r3c6","r3c7"]
arrow-11: arrow r3c8 bulb ["r4c9"]
```

What would happen if NASCAR pit stops were spread throughout the track? I tried to get as many of the top team numbers in pills as possible.

ARROWS- Numbers on arrows sum to the number in the arrow's pill. All pills share the same route and end in the same arrow head. Pills are read from left to right or top to bottom.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
