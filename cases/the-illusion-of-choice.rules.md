---
format: open-rules
title: The Illusion of Choice
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/the-illusion-of-choice
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8d865d9c934f1a18158a2fca7ab4bf3c
---

```rules
sudoku 9x9
kropki r7c7-r8c7 black
arrow-1: arrow r1c5-r1c6 bulb ["r1c4"]
arrow-2: arrow r2c4-r3c4-r3c5 bulb ["r1c4"]
arrow-3: arrow r4c2-r4c3-r5c3 bulb ["r4c1"]
arrow-4: arrow r5c1-r6c1 bulb ["r4c1"]
arrow-5: arrow r8c4-r8c5 bulb ["r7c4"]
arrow-6: arrow r7c5-r7c6-r8c6 bulb ["r7c4"]
arrow-7: arrow r5c7-r5c8 bulb ["r4c7"]
arrow-8: arrow r4c8-r4c9-r5c9 bulb ["r4c7"]
arrow-9: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-10: arrow r2c1-r2c2-r2c3 bulb ["r1c1"]
arrow-11: arrow r7c8-r7c9 bulb ["r7c7"]
arrow-12: arrow r8c7-r9c7-r9c8 bulb ["r7c7"]
arrow-13: arrow r5c5-r6c5 bulb ["r4c5"]
arrow-14: arrow r4c4-r5c4 bulb ["r4c5"]
arrow-15: arrow r1c9-r2c9 bulb ["r1c8"]
arrow-16: arrow r2c7-r3c7 bulb ["r1c8"]
arrow-17: arrow r7c3-r8c3 bulb ["r7c2"]
arrow-18: arrow r7c1-r8c1 bulb ["r7c2"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. KROPKI PAIR- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
